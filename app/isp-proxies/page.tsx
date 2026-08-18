import type { Metadata } from 'next';
import ISPProxiesClient from './ISPProxiesClient';    

export const metadata: Metadata = {
  title: 'ISP Proxies | Residential Trust, Datacenter Speed & Stealth',
  description: 'ISP proxies combine residential trust with datacenter speed — perfect for fast, reliable, and stealthy long sessions. Get started with Torch Proxies today.',
  openGraph: {
    title: 'ISP Proxies | Residential Trust, Datacenter Speed & Stealth',
    description: 'ISP proxies combine residential trust with datacenter speed — perfect for fast, reliable, and stealthy long sessions. Get started with Torch Proxies today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <ISPProxiesClient />;
}