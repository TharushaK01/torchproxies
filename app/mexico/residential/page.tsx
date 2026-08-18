import type { Metadata } from 'next';
import MexicoResidentialClient from './MexicoResidentialClient';    

export const metadata: Metadata = {
  title: 'Mexico Residential Proxies | 99.9% Uptime Guarantee',
  description: 'Get fast, private Mexico residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from Mexico today.',
  openGraph: {
    title: 'Mexico Residential Proxies | 99.9% Uptime Guarantee',
    description: 'Get fast, private Mexico residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from Mexico today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <MexicoResidentialClient />;
}