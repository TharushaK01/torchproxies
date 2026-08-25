import postcss from "postcss"; // npm install postcss

export function splitStyleAndBody(html: string) {
  const styleBlocks = html.match(/<style\b[^>]*>[\s\S]*?<\/style>/gi) || [];
  const style = styleBlocks.map(s => s.replace(/<\/?style[^>]*>/gi, "")).join("\n");
  const body = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  return { style, body };
}

export function scopeCss(css: string, scopeClass: string): string {
  if (!css.trim()) return "";
  const root = postcss.parse(css);

  root.walkRules((rule) => {
    const insideKeyframes =
      rule.parent?.type === "atrule" && /keyframes/i.test((rule.parent as any).name);
    if (insideKeyframes) return; // don't touch `from`/`to`/`50%` selectors

    rule.selectors = rule.selectors.map((selector) => {
      const trimmed = selector.trim();
      if (trimmed === "*") return `${scopeClass} *`;
      if (trimmed === "html" || trimmed === "body" || trimmed === ":root") return scopeClass;
      return `${scopeClass} ${trimmed}`;
    });
  });

  return root.toString();
}