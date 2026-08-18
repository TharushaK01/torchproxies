import type { Metadata } from 'next';
import ProxyAPIClient from './ProxyAPIClient';    

export const metadata: Metadata = {
  title: 'Proxy API | Build Your Own Reseller Tool | Torch Proxies',
  description: 'Use the Torch Proxies API to create sub-users, assign data, and generate proxies. Build your own reseller dashboard or storefront with full pricing control.',
  openGraph: {
    title: 'Proxy API | Build Your Own Reseller Tool | Torch Proxies',
    description: 'Use the Torch Proxies API to create sub-users, assign data, and generate proxies. Build your own reseller dashboard or storefront with full pricing control.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <ProxyAPIClient/>;
}