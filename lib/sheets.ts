import "server-only";
import { google } from "googleapis";
import { unstable_cache } from "next/cache";

const SHEET_RANGE = "Sheet1!A2:P1000";
const SHEETS_TIMEOUT_MS = 10_000;

// Shared by app/[...slug]/page.tsx and app/sitemap.ts so both read the
// same cached rows without duplicating the Google auth setup.
export const getCountryRows = unstable_cache(
  async (): Promise<string[][]> => {
    const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
          .replace(/"/g, "")
          .replace(/ /g, "\n")
          .replace(
            /-----BEGIN\nPRIVATE\nKEY-----/g,
            "-----BEGIN PRIVATE KEY-----",
          )
          .replace(/-----END\nPRIVATE\nKEY-----/g, "-----END PRIVATE KEY-----")
          .trim()
      : undefined;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: formattedPrivateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get(
      {
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: SHEET_RANGE,
      },
      { timeout: SHEETS_TIMEOUT_MS },
    );

    return (response.data.values as string[][] | undefined) ?? [];
  },
  ["country-sheet-rows"],
  { revalidate: 300 },
);
