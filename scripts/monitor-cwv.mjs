// scripts/monitor-cwv.mjs
import fs from 'node:fs';
import path from 'node:path';

const API_KEY = process.env.PAGESPEED_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.torchproxies.com';
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!API_KEY) {
  console.error('Error: PAGESPEED_API_KEY is missing.');
  process.exit(1);
}

async function runCoreWebVitalsAudit() {
  console.log(`Starting Core Web Vitals audit for: ${SITE_URL}...`);

  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    SITE_URL
  )}&strategy=mobile&category=PERFORMANCE&key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`API error: ${response.statusText}`);

    const data = await response.json();
    const lighthouse = data.lighthouseResult;
    const audits = lighthouse.audits;

    const score = Math.round(lighthouse.categories.performance.score * 100);
    const lcp = audits['largest-contentful-paint']?.displayValue || 'N/A';
    const cls = audits['cumulative-layout-shift']?.displayValue || 'N/A';
    const fcp = audits['first-contentful-paint']?.displayValue || 'N/A';
    const tbt = audits['total-blocking-time']?.displayValue || 'N/A';

    console.log(`Score: ${score}/100 | LCP: ${lcp} | CLS: ${cls}`);

    // Post to Slack if Webhook URL is present
    if (SLACK_WEBHOOK_URL) {
      const statusEmoji = score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴';

      const slackMessage = {
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: `${statusEmoji} Monthly Core Web Vitals Report`,
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
            fields: [
              { type: 'mrkdwn', text: `*LCP:* ${lcp}` },
              { type: 'mrkdwn', text: `*CLS:* ${cls}` },
              { type: 'mrkdwn', text: `*FCP:* ${fcp}` },
              { type: 'mrkdwn', text: `*TBT:* ${tbt}` },
            ],
          },
        ],
      };

      await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      });

      console.log('Successfully sent notification to Slack!');
    }
  } catch (error) {
    console.error('Audit failed:', error.message);
    process.exit(1);
  }
}

runCoreWebVitalsAudit();