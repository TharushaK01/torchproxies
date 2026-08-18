import type { Metadata } from 'next';
import AustraliaISPClient from './AustraliaISPClient';    

export const metadata: Metadata = {
  title: 'Australia ISP Proxies | Static, Carrier-Grade & Reliable',
  description: 'Static Australia ISP proxies with carrier-grade IPs, unlimited bandwidth, and 99.9% uptime. Ideal for account management, automation, and scraping at scale.',
  openGraph: {
    title: 'Australia ISP Proxies | Static, Carrier-Grade & Reliable ',
    description: 'Static Australia ISP proxies with carrier-grade IPs, unlimited bandwidth, and 99.9% uptime. Ideal for account management, automation, and scraping at scale.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <AustraliaISPClient />;
}