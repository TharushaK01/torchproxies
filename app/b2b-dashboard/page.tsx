import type { Metadata } from 'next';
import B2BDashboardClient from './B2BDashboardClient';    

export const metadata: Metadata = {
  title: 'B2B Reseller Dashboard | Global Proxy Access | Torch Proxies',
  description: 'Get a fully branded reseller dashboard with global proxy access and automation tools — no infrastructure, server costs, or large deposits required. Read more.',
  openGraph: {
    title: 'B2B Reseller Dashboard | Global Proxy Access | Torch Proxies ',
    description: 'Get a fully branded reseller dashboard with global proxy access and automation tools — no infrastructure, server costs, or large deposits required. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <B2BDashboardClient />;
}