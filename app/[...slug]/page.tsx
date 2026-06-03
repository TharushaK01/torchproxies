import React from 'react';
import { google } from 'googleapis';
import CountryPageClient from '@/app/[...slug]/CountryPageClient'; // We will create this next
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Reconstruct the URL path slug string
  const slugPath = slug ? slug.join('/') : '';

  let countryData = null;

  try {
    // 1. Authenticate with Google
//     const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY && !process.env.GOOGLE_PRIVATE_KEY.includes('\n')
//   ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
//   : process.env.GOOGLE_PRIVATE_KEY;

// const auth = new google.auth.GoogleAuth({
//   credentials: {
//     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     private_key: formattedPrivateKey,
//   },
//   scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
// });

//     const sheets = google.sheets({ version: 'v4', auth });

//     // 2. Fetch data from your Sheet
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: 'Sheet1!A2:D', // Adjust range/sheet name to match your layout
//     });



const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY
  ? process.env.GOOGLE_PRIVATE_KEY
      .replace(/\\n/g, '\n')       // Fixes your local single-line literal "\n" strings
      .replace(/"/g, '')          // Removes the surrounding double quotes you have on your key
      .replace(/ /g, '\n')        // If Vercel collapses line breaks into spaces, restore them
      .replace(/-----BEGIN\nPRIVATE\nKEY-----/g, '-----BEGIN PRIVATE KEY-----') // Repair headers
      .replace(/-----END\nPRIVATE\nKEY-----/g, '-----END PRIVATE KEY-----')     // Repair footers
      .trim()
  : undefined;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, // Automatically reads torchproxies@torchproxies-automation...
    private_key: formattedPrivateKey,                        // Automatically reads your parsed private key string
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

// 2. Fetch data from your Sheet
const response = await sheets.spreadsheets.values.get({
  spreadsheetId: process.env.GOOGLE_SHEET_ID,               // Automatically reads 12B1-Z9FGS7Q_CyZviq8zrEa4...
  range: 'Sheet1!A2:D', 
});





    const rows = response.data.values;

    if (rows && rows.length > 0) {
  // Clean up the URL slug path: trim leading/trailing slashes and lowercase it
  const cleanSlugPath = slugPath.replace(/^\/+|\/+$/g, '').toLowerCase().trim();

  const match = rows.find((row: string[]) => {
    if (!row[0]) return false;
    // Clean up the Google Sheet cell value exactly the same way
    const cleanSheetValue = row[0].replace(/^\/+|\/+$/g, '').toLowerCase().trim();
    return cleanSheetValue === cleanSlugPath;
  });
      
      if (match) {
        countryData = {
          slug: match[0],
          countryName: match[1],
          countryCode: match[2],
          ispCount: match[3],
        };
      }
    }
  } catch (error: any) {
    console.error('Failed to fetch data from Google Sheets:', error);
    // TEMPORARY: Render the error on screen to read what Vercel sees
    return (
      <div style={{ padding: 40, background: '#111', color: 'red', fontFamily: 'monospace', zIndex: 99999, position: 'relative' }}>
        <h3>🚨 Google Sheets Connection Error:</h3>
        <p>{error.message || JSON.stringify(error)}</p>
      </div>
    );
  }
  // If no matching country row was found in your Google Sheet, trigger 404
  if (!countryData) {
    notFound();
  }

  // 3. Pass the fetched secure sheet data down to your Client UI
  return <CountryPageClient data={countryData} />;
}