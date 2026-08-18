import type { Metadata } from 'next';
import AdVerificationClient from './AdVerificationClient';

export const metadata: Metadata = {
  title: 'Ad Verification Proxies | Bypass SERP Protection Systems | Torch Proxies',
  description: 'Bypass SERP protection systems built to detect and throttle automated rank tracking. Verify ad placements accurately with Torch Proxies at any volume.',
  openGraph: {
    title: 'Ad Verification Proxies | Bypass SERP Protection Systems | Torch Proxies ',
    description: 'Bypass SERP protection systems built to detect and throttle automated rank tracking. Verify ad placements accurately with Torch Proxies at any volume.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <AdVerificationClient />;
}