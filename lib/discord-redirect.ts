import { NextResponse, type NextRequest } from "next/server";

import {
  isLikelyBot,
  resolveGa4ClientId,
  resolvePosthogDistinctId,
  trackDiscordClick,
} from "@/lib/analytics";

/**
 * Shared handler behind every Discord vanity URL.
 *
 * Both `/discord` and `/discord_invite` call this, so the two paths can never
 * drift apart. Add another alias by creating another route file that calls it.
 */

const DISCORD_INVITE =
  process.env.DISCORD_INVITE_URL ?? "https://discord.gg/pkuUT56GZj";

export async function handleDiscordRedirect(
  request: NextRequest,
  /** Which vanity URL was used. Lets you compare them in reporting. */
  slug: string,
): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const userAgent = request.headers.get("user-agent");

  // Link previews from Discord, Slack, WhatsApp and forum unfurlers hit this
  // URL constantly. Counting them would badly inflate the click numbers.
  if (!isLikelyBot(userAgent)) {
    await trackDiscordClick({
      eventName: "discord_invite_click",
      slug,
      utmSource: searchParams.get("utm_source"),
      utmMedium: searchParams.get("utm_medium"),
      utmCampaign: searchParams.get("utm_campaign"),
      utmContent: searchParams.get("utm_content"),
      utmTerm: searchParams.get("utm_term"),
      referer: request.headers.get("referer"),
      userAgent,
      ga4ClientId: resolveGa4ClientId(request.cookies.get("_ga")?.value),
      posthogDistinctId: resolvePosthogDistinctId(
        request.cookies.get(
          `ph_${process.env.NEXT_PUBLIC_POSTHOG_KEY ?? ""}_posthog`,
        )?.value,
      ),
      destination: DISCORD_INVITE,
    });
  }

  // 302, not 301. A permanent redirect is cached hard by browsers, which would
  // both stop future clicks being counted and strand anyone holding the old
  // destination if the invite code is ever rotated.
  const response = NextResponse.redirect(DISCORD_INVITE, 302);
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}
