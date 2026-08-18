import type { Metadata } from 'next';
import ChinaResidentialClient from './ChinaResidentialClient';    

export const metadata: Metadata = {
  title: 'China Residential Proxies | 99.9% Uptime Guarantee',
  description: 'Get fast, private China residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from China today.',
  openGraph: {
    title: 'China Residential Proxies | 99.9% Uptime Guarantee',
    description: 'Get fast, private China residential proxies with real household IPs, unlimited locations, and 99.9% uptime. Start browsing and scraping from China today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <ChinaResidentialClient />;
}