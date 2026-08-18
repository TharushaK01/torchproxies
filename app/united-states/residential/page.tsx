import type { Metadata } from 'next';
import UnitedStatesResidentialClient from './UnitedStatesResidentialClient';    

export const metadata: Metadata = {
  title: 'United States Residential Proxies – Fast & Private',
  description: 'Torch Proxies gives you fast, private United States residential proxies with real household IPs, unlimited locations, and 99.9% uptime for scraping and.',
  openGraph: {
    title: 'United States Residential Proxies – Fast & Private',
    description: 'Torch Proxies gives you fast, private United States residential proxies with real household IPs, unlimited locations, and 99.9% uptime for scraping and.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <UnitedStatesResidentialClient/>;
}