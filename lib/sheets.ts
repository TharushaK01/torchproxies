import "server-only";
import { unstable_cache } from "next/cache";

const SHEET_RANGE = "Sheet1!A2:P1000";
const SHEETS_TIMEOUT_MS = 10_000;

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

/**
 * Creates a signed JWT and exchanges it for a Google OAuth2 access token.
 * Uses the Web Crypto API so it works in Cloudflare Workers (no Node.js crypto).
 */
async function getAccessToken(): Promise<string> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "";
  const rawKey = process.env.GOOGLE_PRIVATE_KEY ?? "";

  // Normalise the key (handle escaped newlines from env vars)
  const privateKeyPem = rawKey
    .replace(/\\n/g, "\n")
    .replace(/"/g, "")
    .replace(/ /g, "\n")
    .replace(/-----BEGIN\nPRIVATE\nKEY-----/g, "-----BEGIN PRIVATE KEY-----")
    .replace(/-----END\nPRIVATE\nKEY-----/g, "-----END PRIVATE KEY-----")
    .trim();

  // Strip PEM header/footer and decode base64 to get the DER bytes
  const pemBody = privateKeyPem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");

  const binaryDer = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const encode = (obj: object) =>
    btoa(JSON.stringify(obj)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const headerEncoded = encode(header);
  const payloadEncoded = encode(payload);
  const signingInput = `${headerEncoded}.${payloadEncoded}`;

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput),
  );

  const signatureEncoded = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const jwt = `${signingInput}.${signatureEncoded}`;

  // Exchange JWT for access token
  const tokenRes = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
    signal: AbortSignal.timeout(SHEETS_TIMEOUT_MS),
  });

  if (!tokenRes.ok) {
    const text = await tokenRes.text();
    throw new Error(`Google token exchange failed: ${tokenRes.status} ${text}`);
  }

  const { access_token } = (await tokenRes.json()) as { access_token: string };
  return access_token;
}

// Shared by app/[...slug]/page.tsx and app/sitemap.ts so both read the
// same cached rows without duplicating the Google auth setup.
export const getCountryRows = unstable_cache(
  async (): Promise<string[][]> => {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID ?? "";
    const encodedRange = encodeURIComponent(SHEET_RANGE);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}`;

    const accessToken = await getAccessToken();

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      signal: AbortSignal.timeout(SHEETS_TIMEOUT_MS),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Google Sheets API error: ${res.status} ${text}`);
    }

    const data = (await res.json()) as { values?: string[][] };
    return data.values ?? [];
  },
  ["country-sheet-rows"],
  { revalidate: 300 },
);
