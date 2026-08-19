'use client';

import Script from 'next/script';

export default function ChatWidget() {
  return (
    <>
      {/* ── Better Stack Uptime Announcement Widget ── */}
      <Script
        id="betterstack-announcement"
        src="https://uptime.betterstack.com/widgets/announcement.js"
        data-id="222399"
        strategy="lazyOnload"
      />
    </>
  );
}