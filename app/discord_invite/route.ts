import { type NextRequest, type NextResponse } from "next/server";

import { handleDiscordRedirect } from "@/lib/discord-redirect";

/** GET /discord_invite — the canonical vanity URL. */

// Never prerender or cache. Every request must run so every click is counted
// and so the query string is actually available to us.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handleDiscordRedirect(request, "discord_invite");
}
