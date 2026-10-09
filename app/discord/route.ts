import { type NextRequest, type NextResponse } from "next/server";

import { handleDiscordRedirect } from "@/lib/discord-redirect";

/**
 * GET /discord — legacy alias.
 *
 * Keep this. Outreach messages already sent to BlackHatWorld contain this path,
 * and they cannot be edited. Deleting this folder breaks every one of them.
 */

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handleDiscordRedirect(request, "discord");
}
