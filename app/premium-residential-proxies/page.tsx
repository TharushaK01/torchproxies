import type { Metadata } from 'next';
import PremiumResidentialProxiesClient from './PremiumResidentialProxiesClient';    

export const metadata: Metadata = {
  title: 'Premium Residential Proxies | Faster Speeds | Torch Proxies',
  description: 'Premium Residential Proxies deliver faster speeds and enhanced performance for demanding workloads. Get extra power to stay productive at any scale. Read more.',
  openGraph: {
    title: 'Premium Residential Proxies | Faster Speeds | Torch Proxies',
    description: 'Premium Residential Proxies deliver faster speeds and enhanced performance for demanding workloads. Get extra power to stay productive at any scale. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <PremiumResidentialProxiesClient/>;
}