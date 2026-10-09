/**
 * Server-side click tracking for the /discord vanity redirect.
 *
 * Sends one event to GA4 (Measurement Protocol) and/or PostHog (capture API).
 * Both are optional: whichever env vars are set will fire, the other is skipped.
 *
 * Everything here runs on the server, before the redirect response is sent,
 * so there is no race with the browser navigating away and no artificial delay.
 */

const GA4_ENDPOINT = "https://www.google-analytics.com/mp/collect";

/** Hard cap on how long tracking may hold up the redirect. */
const TRACK_TIMEOUT_MS = 600;

export type ClickPayload = {
  /** Event name as it will appear in GA4 / PostHog. */
  eventName: string;
  /** Which vanity URL was used, e.g. "discord" or "discord_invite". */
  slug: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  referer: string | null;
  userAgent: string | null;
  /** Value used to stitch this event to the visitor's existing GA4 session. */
  ga4ClientId: string;
  /** Value used to stitch this event to the visitor's existing PostHog person. */
  posthogDistinctId: string;
  /** Where they were sent. */
  destination: string;
};

/* -------------------------------------------------------------------------- */
/* Identity helpers                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Pull the GA4 client_id out of the `_ga` cookie so this event joins the
 * visitor's existing session instead of creating a phantom new user.
 *
 * Cookie format: GA1.1.<client_id_part_1>.<client_id_part_2>
 * We need the last two segments, joined with a dot.
 *
 * Falls back to a synthetic id when the cookie is absent (first-touch visitor,
 * or consent not yet granted).
 */
export function resolveGa4ClientId(gaCookieValue: string | undefined): string {
  if (gaCookieValue) {
    const parts = gaCookieValue.split(".");
    if (parts.length >= 4 && parts[2] && parts[3]) {
      return `${parts[2]}.${parts[3]}`;
    }
  }
  const random = Math.floor(Math.random() * 1_000_000_000);
  const seconds = Math.floor(Date.now() / 1000);
  return `${random}.${seconds}`;
}

/**
 * Pull the PostHog distinct_id out of its cookie, which is URL-encoded JSON
 * stored under `ph_<project_api_key>_posthog`.
 *
 * Falls back to a synthetic id when the cookie is absent.
 */
export function resolvePosthogDistinctId(
  posthogCookieValue: string | undefined,
): string {
  if (posthogCookieValue) {
    try {
      const parsed: unknown = JSON.parse(
        decodeURIComponent(posthogCookieValue),
      );
      if (
        typeof parsed === "object" &&
        parsed !== null &&
        "distinct_id" in parsed &&
        typeof (parsed as { distinct_id: unknown }).distinct_id === "string"
      ) {
        return (parsed as { distinct_id: string }).distinct_id;
      }
    } catch {
      // Malformed cookie. Fall through to the synthetic id below.
    }
  }
  return `anon_${crypto.randomUUID()}`;
}

/* -------------------------------------------------------------------------- */
/* Bot filtering                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Link unfurlers hit this URL every time someone pastes it into a DM, a forum
 * post, or a chat app. Without this filter your "clicks" are inflated by every
 * preview card that was ever generated, which for outreach links is a lot.
 */
const BOT_PATTERN =
  /bot|crawler|spider|crawl|preview|headless|monitor|scrap|fetch|curl|wget|python-requests|axios|okhttp|go-http-client|java\/|libwww|httpclient|facebookexternalhit|whatsapp|telegram|slack|discord|twitter|linkedin|pinterest|redditbot|embedly|quora|applebot|bingbot|googlebot|yandex|duckduck|ahrefs|semrush|petal|bytespider/i;

export function isLikelyBot(userAgent: string | null): boolean {
  if (!userAgent) return true; // No UA at all is almost never a real browser.
  return BOT_PATTERN.test(userAgent);
}

/* -------------------------------------------------------------------------- */
/* Senders                                                                     */
/* -------------------------------------------------------------------------- */

function sharedProperties(payload: ClickPayload): Record<string, string> {
  const props: Record<string, string> = {
    destination: payload.destination,
    link_slug: payload.slug,
  };
  if (payload.utmSource) props.utm_source = payload.utmSource;
  if (payload.utmMedium) props.utm_medium = payload.utmMedium;
  if (payload.utmCampaign) props.utm_campaign = payload.utmCampaign;
  if (payload.utmContent) props.utm_content = payload.utmContent;
  if (payload.utmTerm) props.utm_term = payload.utmTerm;
  if (payload.referer) props.referrer = payload.referer;
  return props;
}

async function sendToGa4(
  payload: ClickPayload,
  signal: AbortSignal,
): Promise<void> {
  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) return;

  const url = `${GA4_ENDPOINT}?measurement_id=${encodeURIComponent(
    measurementId,
  )}&api_secret=${encodeURIComponent(apiSecret)}`;

  await fetch(url, {
    method: "POST",
    signal,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: payload.ga4ClientId,
      non_personalized_ads: true,
      events: [
        {
          name: payload.eventName,
          params: {
            ...sharedProperties(payload),
            // Required for the event to be attributed to a session in reports.
            session_id: payload.ga4ClientId,
            engagement_time_msec: 1,
          },
        },
      ],
    }),
  });
}

async function sendToPosthog(
  payload: ClickPayload,
  signal: AbortSignal,
): Promise<void> {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!apiKey) return;

  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  await fetch(`${host.replace(/\/$/, "")}/capture/`, {
    method: "POST",
    signal,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      event: payload.eventName,
      distinct_id: payload.posthogDistinctId,
      timestamp: new Date().toISOString(),
      properties: {
        ...sharedProperties(payload),
        $lib: "torchproxies-discord-redirect",
        // Tells PostHog to keep session attribution consistent.
        $current_url: payload.referer ?? undefined,
      },
    }),
  });
}

/* -------------------------------------------------------------------------- */
/* Public entry point                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Fire the click event at every configured destination.
 *
 * Never throws and never hangs: failures are swallowed and the whole thing is
 * capped at TRACK_TIMEOUT_MS. Losing an analytics event is acceptable.
 * Blocking a visitor from reaching Discord is not.
 */
export async function trackDiscordClick(payload: ClickPayload): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TRACK_TIMEOUT_MS);

  try {
    const results = await Promise.allSettled([
      sendToGa4(payload, controller.signal),
      sendToPosthog(payload, controller.signal),
    ]);

    for (const result of results) {
      if (result.status === "rejected") {
        console.error("[discord-redirect] tracking failed:", result.reason);
      }
    }
  } finally {
    clearTimeout(timer);
  }
}
