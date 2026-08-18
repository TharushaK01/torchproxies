import type { Metadata } from 'next';
import PlanXResidentialClient from './PlanXResidentialClient';    

export const metadata: Metadata = {
  title: 'Plan X Residential Proxies | Built for Scale | Torch Proxies',
  description: 'Built for speed and scale, Plan X Residential Proxies deliver top-tier performance, unmatched reliability, and limitless potential. Get started today.',
  openGraph: {
    title: 'Plan X Residential Proxies | Built for Scale | Torch Proxies',
    description: 'Built for speed and scale, Plan X Residential Proxies deliver top-tier performance, unmatched reliability, and limitless potential. Get started today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <PlanXResidentialClient/>;
}