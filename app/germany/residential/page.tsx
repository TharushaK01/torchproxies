import type { Metadata } from 'next';
import GermanyResidentialClient from './GermanyResidentialClient';    

export const metadata: Metadata = {
  title: 'Germany Residential Proxies | 99.9% Uptime Guarantee',
  description: 'Get fast, private Germany residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from Germany today.',
  openGraph: {
    title: 'Germany Residential Proxies | 99.9% Uptime Guarantee',
    description: 'Get fast, private Germany residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from Germany today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <GermanyResidentialClient />;
}