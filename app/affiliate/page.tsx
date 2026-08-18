import type { Metadata } from 'next';
import AffiliateClient from './AffiliateClient';    

export const metadata: Metadata = {
  title: 'Affiliate Program | Industry-Leading Commissions Paid Fast',
  description: 'Industry-leading commissions, fast payouts, and lifetime earnings. It’s time to monetise your traffic like never before with Torch Proxies. Join free.',
  openGraph: {
    title: 'Affiliate Program | Industry-Leading Commissions Paid Fast ',
    description: 'Industry-leading commissions, fast payouts, and lifetime earnings. It’s time to monetise your traffic like never before with Torch Proxies. Join free.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <AffiliateClient />;
}