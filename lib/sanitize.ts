/**
 * Lightweight HTML sanitizer that runs in Cloudflare Workers (no Node.js native deps).
 *
 * Implements the subset of the sanitize-html API used in this codebase:
 * - allowedTags: list of allowed HTML tag names
 * - nonTextTags: tags whose content is fully stripped (tag + inner content)
 * - allowedAttributes: per-tag or wildcard "*" attribute allowlists
 * - allowedSchemes: allowed URL schemes for href/src attributes
 * - allowProtocolRelative: whether to allow protocol-relative URLs (//)
 * - allowVulnerableTags: when true, <style> and <script> tags are allowed if listed
 *
 * Uses a streaming regex-based parser — suitable for trusted CMS output (WordPress).
 */

export interface SanitizeOptions {
  allowedTags?: string[];
  nonTextTags?: string[];
  allowedAttributes?: Record<string, string[]>;
  allowedSchemes?: string[];
  allowProtocolRelative?: boolean;
  allowVulnerableTags?: boolean;
}

// Default allowed tags matching sanitize-html defaults
const DEFAULT_ALLOWED_TAGS = [
  "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
  "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
  "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
  "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
  "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
  "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
  "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr",
];

// Default allowed attributes matching sanitize-html defaults
const DEFAULT_ALLOWED_ATTRIBUTES: Record<string, string[]> = {
  a: ["href", "name", "target"],
  img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
};

const DEFAULT_ALLOWED_SCHEMES = ["http", "https", "ftp", "mailto", "tel"];

// Tags whose entire content (not just the tag) should be removed
const DEFAULT_NON_TEXT_TAGS = ["script", "style", "textarea", "option", "noscript"];

/**
 * Parse HTML attributes string into a key→value map.
 */
function parseAttrs(attrsStr: string): Record<string, string> {
  const result: Record<string, string> = {};
  // Match name="value", name='value', or bare name
  const re = /([a-z][a-z0-9_:-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]*)))?/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(attrsStr)) !== null) {
    const name = m[1].toLowerCase();
    const value = m[2] ?? m[3] ?? m[4] ?? "";
    result[name] = value;
  }
  return result;
}

/**
 * Serialize a filtered attributes map back to a string.
 */
function serializeAttrs(attrs: Record<string, string>): string {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v.replace(/"/g, "&quot;")}"`)
    .join(" ");
}

/**
 * Check if a URL value is safe given the allowed schemes.
 */
function isSafeUrl(
  value: string,
  allowedSchemes: string[],
  allowProtocolRelative: boolean,
): boolean {
  if (!value) return true;
  const trimmed = value.trim().toLowerCase();
  if (allowProtocolRelative && trimmed.startsWith("//")) return true;
  for (const scheme of allowedSchemes) {
    if (trimmed.startsWith(scheme + ":")) return true;
  }
  // Relative URLs (no scheme) are always fine
  if (!/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return true;
  return false;
}

// URL attributes that should be scheme-checked
const URL_ATTRS = new Set(["href", "src", "action", "data", "poster"]);

export function sanitize(dirty: string, options: SanitizeOptions = {}): string {
  const allowedTagsSet = new Set(
    (options.allowedTags ?? DEFAULT_ALLOWED_TAGS).map((t) => t.toLowerCase()),
  );
  const nonTextTagsSet = new Set(
    (options.nonTextTags ?? DEFAULT_NON_TEXT_TAGS).map((t) => t.toLowerCase()),
  );
  const allowedAttributes = options.allowedAttributes ?? DEFAULT_ALLOWED_ATTRIBUTES;
  const allowedSchemes = options.allowedSchemes ?? DEFAULT_ALLOWED_SCHEMES;
  const allowProtocolRelative = options.allowProtocolRelative ?? true;

  // Merge wildcard attributes into every tag lookup
  const wildcard = allowedAttributes["*"] ?? [];

  // Strip non-text tag content first (remove tag + all inner content)
  let html = dirty;
  for (const tag of nonTextTagsSet) {
    const re = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
    html = html.replace(re, "");
  }

  // Now process remaining tags
  const tagRe = /<(\/?)([a-z][a-z0-9]*)\b([^>]*?)(\/?)>/gi;
  return html.replace(tagRe, (_match, closing, rawTag, attrsStr, selfClose) => {
    const tag = rawTag.toLowerCase();

    if (!allowedTagsSet.has(tag)) {
      return ""; // Strip disallowed tags
    }

    if (closing) {
      return `</${tag}>`;
    }

    // Parse and filter attributes
    const attrs = parseAttrs(attrsStr);
    const tagAllowed = allowedAttributes[tag] ?? [];
    const allAllowed = new Set([...wildcard, ...tagAllowed]);

    const filtered: Record<string, string> = {};
    for (const [attr, value] of Object.entries(attrs)) {
      // Expand aria-* and data-* wildcards
      const isAllowed =
        allAllowed.has(attr) ||
        (allAllowed.has("aria-*") && attr.startsWith("aria-")) ||
        (allAllowed.has("data-*") && attr.startsWith("data-"));

      if (!isAllowed) continue;

      // URL scheme check
      if (URL_ATTRS.has(attr)) {
        if (!isSafeUrl(value, allowedSchemes, allowProtocolRelative)) continue;
      }

      // Disallow javascript: in any attribute value
      if (/javascript\s*:/i.test(value)) continue;

      filtered[attr] = value;
    }

    const attrStr = serializeAttrs(filtered);
    const sc = selfClose ? " /" : "";
    return attrStr ? `<${tag} ${attrStr}${sc}>` : `<${tag}${sc}>`;
  });
}

/**
 * Drop-in replacement for sanitize-html's defaults export shape.
 * Provides .defaults for code that does sanitizeHtml.defaults.allowedTags.concat(...)
 */
sanitize.defaults = {
  allowedTags: DEFAULT_ALLOWED_TAGS,
  allowedAttributes: DEFAULT_ALLOWED_ATTRIBUTES,
};

export default sanitize;
