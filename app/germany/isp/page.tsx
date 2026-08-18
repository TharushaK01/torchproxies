import type { Metadata } from 'next';
import GermanyISPClient from './GermanyISPClient';    

export const metadata: Metadata = {
  title: 'Germany Static ISP Proxies | Fast, Reliable & Carrier-Grade',
  description: 'Static Germany ISP proxies with carrier-grade IPs, unlimited bandwidth, and 99.9% uptime. Ideal for account management, automation, and scraping at scale.',
  openGraph: {
    title: 'Germany Static ISP Proxies | Fast, Reliable & Carrier-Grade',
    description: 'Static Germany ISP proxies with carrier-grade IPs, unlimited bandwidth, and 99.9% uptime. Ideal for account management, automation, and scraping at scale.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <GermanyISPClient />;
}