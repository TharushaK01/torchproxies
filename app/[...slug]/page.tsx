import React from 'react';
import { google } from 'googleapis';
import CountryPageClient from '@/app/[...slug]/CountryPageClient'; // We will create this next
import { notFound } from 'next/navigation';

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
    const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY && !process.env.GOOGLE_PRIVATE_KEY.includes('\n')
  ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  : process.env.GOOGLE_PRIVATE_KEY;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: formattedPrivateKey,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

    const sheets = google.sheets({ version: 'v4', auth });

    // 2. Fetch data from your Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A2:D', // Adjust range/sheet name to match your layout
    });

    const rows = response.data.values;

    if (rows && rows.length > 0) {
      // Find the row matching the current active URL path slug
      const match = rows.find((row: string[]) => row[0] === slugPath);
      
      if (match) {
        countryData = {
          slug: match[0],
          countryName: match[1],
          countryCode: match[2],
          ispCount: match[3],
        };
      }
    }
  } catch (error) {
    console.error('Failed to fetch data from Google Sheets:', error);
  }

  // If no matching country row was found in your Google Sheet, trigger 404
  if (!countryData) {
    notFound();
  }

  // 3. Pass the fetched secure sheet data down to your Client UI
  return <CountryPageClient data={countryData} />;
}