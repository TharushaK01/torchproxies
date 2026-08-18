import type { Metadata } from 'next';
import StandardResidentialProxiesClient from './StandardResidentialProxiesClient';    

export const metadata: Metadata = {
  title: 'Standard Residential Proxies | Reliable & Affordable',
  description: 'Reliable, steady residential proxies perfect for everyday tasks — a balanced choice to get the job done without breaking the bank. Get started today. Read more.',
  openGraph: {
    title: 'Standard Residential Proxies | Reliable & Affordable',
    description: 'Reliable, steady residential proxies perfect for everyday tasks — a balanced choice to get the job done without breaking the bank. Get started today. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <StandardResidentialProxiesClient/>;
}