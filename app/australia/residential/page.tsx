import type { Metadata } from 'next';
import AustraliaResidentialClient from './AustraliaResidentialClient';    

export const metadata: Metadata = {
  title: 'Fast Australia Residential Proxies | Torch Proxies',
  description: 'Torch Proxies gives you fast, private Australia residential proxies with real household IPs, unlimited locations, and 99.9% uptime for scraping and automation.',
  openGraph: {
    title: 'Fast Australia Residential Proxies | Torch Proxies ',
    description: 'Torch Proxies gives you fast, private Australia residential proxies with real household IPs, unlimited locations, and 99.9% uptime for scraping and automation.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <AustraliaResidentialClient />;
}