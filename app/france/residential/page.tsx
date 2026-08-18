import type { Metadata } from 'next';
import FranceResidentialClient from './FranceResidentialClient';    

export const metadata: Metadata = {
  title: 'France Residential Proxies | 99.9% Uptime Guarantee',
  description: 'Get fast, private France residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from France today.',
  openGraph: {
    title: 'France Residential Proxies | 99.9% Uptime Guarantee',
    description: 'Get fast, private France residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from France today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <FranceResidentialClient />;
}