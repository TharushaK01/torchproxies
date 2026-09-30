// import React from 'react';
// import { google } from 'googleapis';
// import CountryPageClient from '@/app/[...slug]/CountryPageClient';
// import { notFound } from 'next/navigation';
// import { unstable_cache } from 'next/cache';
// import ISPPageClient from './ISPPageClient';

// const SHEET_RANGE = 'Sheet1!A2:P1000';
// const SHEETS_TIMEOUT_MS = 10_000;
// const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

// interface PageProps {
//   params: Promise<{ slug: string[] }>;
// }

// const getCountryRows = unstable_cache(
//   async (): Promise<string[][]> => {
//     const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY
//       ? process.env.GOOGLE_PRIVATE_KEY
//           .replace(/\\n/g, '\n')
//           .replace(/"/g, '')
//           .replace(/ /g, '\n')
//           .replace(/-----BEGIN\nPRIVATE\nKEY-----/g, '-----BEGIN PRIVATE KEY-----')
//           .replace(/-----END\nPRIVATE\nKEY-----/g, '-----END PRIVATE KEY-----')
//           .trim()
//       : undefined;

//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         private_key: formattedPrivateKey,
//       },
//       scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//     });
//     const sheets = google.sheets({ version: 'v4', auth });
//     const response = await sheets.spreadsheets.values.get(
//       {
//         spreadsheetId: process.env.GOOGLE_SHEET_ID,
//         range: SHEET_RANGE,
//       },
//       { timeout: SHEETS_TIMEOUT_MS },
//     );

//     return (response.data.values as string[][] | undefined) ?? [];
//   },
//   ['country-sheet-rows'],
//   { revalidate: 300 },
// );

// export default async function CountryPage({ params }: PageProps) {

//   const { slug } = await params;

//   // Country pages use one bounded, URL-safe segment. Reject arbitrary catch-all
//   // paths before performing any authenticated upstream work.
//   if (slug.length !== 1 || slug[0].length > 80 || !VALID_SLUG.test(slug[0])) {
//     notFound();
//   }

//   const slugPath = slug[0];
//   const isISPPage = slugPath.endsWith('-isp');

//   let countryData = null;
//   let dynamicDescriptions = null;

//   try {
//     // The sheet read is shared across slugs and revalidated at most every five minutes.
//     const rows = await getCountryRows();

//     if (rows && rows.length > 0) {
//       // Clean up the incoming URL path slug string
//       let cleanSlugPath = slugPath.replace(/^\/+|\/+$/g, '').toLowerCase().trim();

//       // 🛠️ FIX: If this is an ISP path, strip "-isp" off the end so it successfully matches "united-states" in your Sheet
//       if (isISPPage && cleanSlugPath.endsWith('-isp')) {
//         cleanSlugPath = cleanSlugPath.replace(/-isp$/, '').trim();
//       }

//       const match = rows.find((row: string[]) => {
//         if (!row[0]) return false;
//         const cleanSheetValue = row[0].replace(/^\/+|\/+$/g, '').toLowerCase().trim();
//         return cleanSheetValue === cleanSlugPath;
//       });

//       if (match) {
//         countryData = {
//           slug: match[0],
//           countryName: match[1],
//           countryCode: match[2],
//           ispCount: match[3],
//         };

//         // Mapping index array parameters explicitly for columns K through P (Indices 10 to 15)
//         // Suffix versions (feat1_desc): K=10, L=11, M=12, N=13, O=14, P=15
//         dynamicDescriptions = {
//           feat1: match[10] || match[4] || "",
//           feat2: match[11] || match[5] || "",
//           feat3: match[12] || match[6] || "",
//           feat4: match[13] || match[7] || "",
//           feat5: match[14] || match[8] || "",
//           feat6: match[15] || match[9] || "",
//         };
//       }
//     }
//   } catch (error: unknown) {
//     console.error('Failed to fetch data from Google Sheets:', error);
//     const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
//     return (
//       <div style={{ padding: 40, background: '#111', color: 'red', fontFamily: 'monospace', zIndex: 99999, position: 'relative' }}>
//         <h3>🚨 Google Sheets Connection Error:</h3>
//         <p>{errorMessage}</p>
//       </div>
//     );
//   }

//   // 3. Render the client modules based on layout paths
//   if (isISPPage) {
//     // If matching row was not found even after stripping the suffix, fail safe to 404
//     if (!countryData || !dynamicDescriptions) {
//       notFound();
//     }

//     return (
//       <ISPPageClient
//         data={countryData}
//         dynamicDescriptions={dynamicDescriptions}
//       />
//     );
//   }

//   // Regular country layout fallback guard
//   if (!countryData || !dynamicDescriptions) {
//     notFound();
//   }

//   return (
//     <CountryPageClient
//       data={countryData}
//       dynamicDescriptions={dynamicDescriptions}
//     />
//   );
// }
import React from "react";
import CountryPageClient from "@/app/[...slug]/CountryPageClient";
import { notFound } from "next/navigation";
import { getCountryRows } from "@/lib/sheets";
import ISPPageClient from "./ISPPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proxy Locations & Supported Countries | Torch Proxies",
  description:
    "Browse 80M+ residential and ISP proxies across 195+ countries worldwide.",
  alternates: {
    canonical: "/countries", // Generates https://www.torchproxies.com/countries
  },
  openGraph: {
    title: "Proxy Locations & Supported Countries | Torch Proxies",
    description:
      "Browse 80M+ residential and ISP proxies across 195+ countries worldwide.",
    type: "website",
  },
};
const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;

  // Validate single-segment catch-all paths
  if (slug.length !== 1 || slug[0].length > 80 || !VALID_SLUG.test(slug[0])) {
    notFound();
  }

  const slugPath = slug[0];
  const isISPPage = slugPath.endsWith("-isp");

  let countryData = null;
  let dynamicDescriptions = null;

  try {
    const rows = await getCountryRows();

    if (rows && rows.length > 0) {
      let cleanSlugPath = slugPath
        .replace(/^\/+|\/+$/g, "")
        .toLowerCase()
        .trim();

      // If it's an ISP URL (e.g. /united-states-isp) in Google Sheet
      if (isISPPage && cleanSlugPath.endsWith("-isp")) {
        cleanSlugPath = cleanSlugPath.slice(0, -4).trim();
      }
      const match = rows.find((row: string[]) => {
        if (!row[0]) return false;
        const cleanSheetValue = row[0]
          .replace(/^\/+|\/+$/g, "")
          .toLowerCase()
          .trim();
        return cleanSheetValue === cleanSlugPath;
      });

      if (match) {
        countryData = {
          slug: match[0],
          countryName: match[1],
          countryCode: match[2],
          ispCount: match[3],
        };

        // Columns K through P (Indices 10 to 15) with fallback to default columns
        dynamicDescriptions = {
          feat1: match[10] || match[4] || "",
          feat2: match[11] || match[5] || "",
          feat3: match[12] || match[6] || "",
          feat4: match[13] || match[7] || "",
          feat5: match[14] || match[8] || "",
          feat6: match[15] || match[9] || "",
        };
      }
    }
  } catch (error: unknown) {
    console.error("Failed to fetch data from Google Sheets:", error);
  }

  // If no matching data was found in Google Sheets, return 404
  if (!countryData || !dynamicDescriptions) {
    notFound();
  }

  // Render ISP layout
  if (isISPPage) {
    return (
      <ISPPageClient
        data={countryData}
        dynamicDescriptions={dynamicDescriptions}
      />
    );
  }

  // Render Country layout
  return (
    <CountryPageClient
      data={countryData}
      dynamicDescriptions={dynamicDescriptions}
    />
  );
}
