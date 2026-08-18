import type { Metadata } from 'next';
import SEOMonitoringClient from './SEOMonitoringClient';    

export const metadata: Metadata = {
  title: 'SEO Rank Monitoring Proxies | Torch Proxies Toolkit',
  description: 'Google’s latest SERP protection systems throttle automated rank tracking even at low volumes. Track rankings reliably with Torch Proxies monitoring IPs.',
  openGraph: {
    title: 'SEO Rank Monitoring Proxies | Torch Proxies Toolkit',
    description: 'Google’s latest SERP protection systems throttle automated rank tracking even at low volumes. Track rankings reliably with Torch Proxies monitoring IPs.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <SEOMonitoringClient/>;
}