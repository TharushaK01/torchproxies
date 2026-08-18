import type { Metadata } from 'next';
import UnitedKingdomISPClient from './UnitedKingdomISPClient';    

export const metadata: Metadata = {
  title: 'United Kingdom Residential Proxies | Torch Proxies',
  description: 'Torch Proxies gives you fast, private United Kingdom residential proxies with real household IPs, unlimited locations, and 99.9% uptime for scraping and.',
  openGraph: {
    title: 'United Kingdom Residential Proxies | Torch Proxies',
    description: 'Torch Proxies gives you fast, private United Kingdom residential proxies with real household IPs, unlimited locations, and 99.9% uptime for scraping and.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <UnitedKingdomISPClient/>;
}