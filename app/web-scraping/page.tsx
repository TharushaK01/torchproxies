import type { Metadata } from 'next';
import WebScraingClient from './WebScrapingClient';    

export const metadata: Metadata = {
  title: 'Web Scraping Proxies | Fix IP Reputation & Detection',
  description: 'Most scraping failures aren’t caused by code — they’re caused by IP reputation, detection patterns, and unstable sessions. Fix it with Torch Proxies. Read more.',
  openGraph: {
    title: 'Web Scraping Proxies | Fix IP Reputation & Detection',
    description: 'Most scraping failures aren’t caused by code — they’re caused by IP reputation, detection patterns, and unstable sessions. Fix it with Torch Proxies. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <WebScraingClient/>;
}