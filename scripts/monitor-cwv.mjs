// // scripts/monitor-cwv.mjs
// import fs from 'node:fs';
// import path from 'node:path';

// const API_KEY = process.env.PAGESPEED_API_KEY;
// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.torchproxies.com';
// const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// if (!API_KEY) {
//   console.error('Error: PAGESPEED_API_KEY is missing.');
//   process.exit(1);
// }

// async function runCoreWebVitalsAudit() {
//   console.log(`Starting Core Web Vitals audit for: ${SITE_URL}...`);

//   const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
//     SITE_URL
//   )}&strategy=mobile&category=PERFORMANCE&key=${API_KEY}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) throw new Error(`API error: ${response.statusText}`);

//     const data = await response.json();
//     const lighthouse = data.lighthouseResult;
//     const audits = lighthouse.audits;

//     const score = Math.round(lighthouse.categories.performance.score * 100);
//     const lcp = audits['largest-contentful-paint']?.displayValue || 'N/A';
//     const cls = audits['cumulative-layout-shift']?.displayValue || 'N/A';
//     const fcp = audits['first-contentful-paint']?.displayValue || 'N/A';
//     const tbt = audits['total-blocking-time']?.displayValue || 'N/A';

//     console.log(`Score: ${score}/100 | LCP: ${lcp} | CLS: ${cls}`);

//     // Post to Slack if Webhook URL is present
//     if (SLACK_WEBHOOK_URL) {
//       const statusEmoji = score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴';

//       const slackMessage = {
//         blocks: [
//           {
//             type: 'header',
//             text: {
//               type: 'plain_text',
//               text: `${statusEmoji} Monthly Core Web Vitals Report`,
//               emoji: true,
//             },
//           },
//           {
//             type: 'section',
//             fields: [
//               { type: 'mrkdwn', text: `*Site:* ${SITE_URL}` },
//               { type: 'mrkdwn', text: `*Performance Score:* ${score}/100` },
//             ],
//           },
//           {
//             type: 'section',
//             fields: [
//               { type: 'mrkdwn', text: `*LCP:* ${lcp}` },
//               { type: 'mrkdwn', text: `*CLS:* ${cls}` },
//               { type: 'mrkdwn', text: `*FCP:* ${fcp}` },
//               { type: 'mrkdwn', text: `*TBT:* ${tbt}` },
//             ],
//           },
//         ],
//       };

//       await fetch(SLACK_WEBHOOK_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(slackMessage),
//       });

//       console.log('Successfully sent notification to Slack!');
//     }
//   } catch (error) {
//     console.error('Audit failed:', error.message);
//     process.exit(1);
//   }
// }

// runCoreWebVitalsAudit();

import fs from 'node:fs';
import path from 'node:path';
import { google } from 'googleapis';

const API_KEY = process.env.PAGESPEED_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.torchproxies.com';
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const GSC_CLIENT_EMAIL = process.env.GSC_CLIENT_EMAIL;
const GSC_PRIVATE_KEY = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!API_KEY) {
  console.error('Error: PAGESPEED_API_KEY is missing.');
  process.exit(1);
}

async function runAudit() {
  console.log(`Starting audit for: ${SITE_URL}...`);

  // 1. Fetch PageSpeed Insights Data
  const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    SITE_URL
  )}&strategy=mobile&category=PERFORMANCE&key=${API_KEY}`;

  let score = 'N/A', lcp = 'N/A', cls = 'N/A', fcp = 'N/A', tbt = 'N/A';
  try {
    const response = await fetch(psiUrl);
    if (response.ok) {
      const data = await response.json();
      const lighthouse = data.lighthouseResult;
      const audits = lighthouse.audits;
      score = Math.round(lighthouse.categories.performance.score * 100);
      lcp = audits['largest-contentful-paint']?.displayValue || 'N/A';
      cls = audits['cumulative-layout-shift']?.displayValue || 'N/A';
      fcp = audits['first-contentful-paint']?.displayValue || 'N/A';
      tbt = audits['total-blocking-time']?.displayValue || 'N/A';
    }
  } catch (err) {
    console.error('Failed to fetch PageSpeed data:', err.message);
  }

  // 2. Fetch Search Console Data (Optional if credentials exist)
  let totalClicks = 'N/A', totalImpressions = 'N/A';
  if (GSC_CLIENT_EMAIL && GSC_PRIVATE_KEY) {
    try {
      const auth = new google.auth.JWT({
        email: GSC_CLIENT_EMAIL,
        key: GSC_PRIVATE_KEY,
        scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
      });
      const searchconsole = google.searchconsole({ version: 'v1', auth });

      // Query last 30 days
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const gscRes = await searchconsole.searchanalytics.query({
        siteUrl: SITE_URL,
        requestBody: { startDate, endDate },
      });

      if (gscRes.data.rows && gscRes.data.rows.length > 0) {
        totalClicks = gscRes.data.rows[0].clicks || 0;
        totalImpressions = gscRes.data.rows[0].impressions || 0;
      }
    } catch (err) {
      console.error('Failed to fetch GSC data:', err.message);
    }
  }

  // 3. Send Single Combined Slack Message
  if (SLACK_WEBHOOK_URL) {
    const statusEmoji = typeof score === 'number' ? (score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴') : '⚡';

    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `${statusEmoji} Monthly Site Audit Report`,
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Site:* ${SITE_URL}` },
            { type: 'mrkdwn', text: `*Performance Score:* ${score}/100` },
          ],
        },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: '*Core Web Vitals*' },
          fields: [
            { type: 'mrkdwn', text: `*LCP:* ${lcp}` },
            { type: 'mrkdwn', text: `*CLS:* ${cls}` },
            { type: 'mrkdwn', text: `*FCP:* ${fcp}` },
            { type: 'mrkdwn', text: `*TBT:* ${tbt}` },
          ],
        },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: '*Search Console Metrics (30 Days)*' },
          fields: [
            { type: 'mrkdwn', text: `*Total Clicks:* ${totalClicks}` },
            { type: 'mrkdwn', text: `*Total Impressions:* ${totalImpressions}` },
          ],
        },
      ],
    };

    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });

    console.log('Successfully sent combined report to Slack!');
  }
}

runAudit();