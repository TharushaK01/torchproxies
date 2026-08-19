import type { Metadata } from 'next';
import CountriesClient from './CountriesClient';    

export const metadata: Metadata = {
  title: 'Proxy Locations by Country | 40+ Countries Covered',
  description: 'Proxy Locations by Country | 40+ Countries Covered	Power your online activity with fast, secure, reliable proxies across regions worldwide. Browse every country Torch Proxies covers and get connected now.',
  openGraph: {
    title: 'Proxy Locations by Country | 40+ Countries Covered',
    description: 'Proxy Locations by Country | 40+ Countries Covered	Power your online activity with fast, secure, reliable proxies across regions worldwide. Browse every country Torch Proxies covers and get connected now.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <CountriesClient />;
}