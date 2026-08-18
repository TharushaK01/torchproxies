import type { Metadata } from 'next';
import B2BResellerClient from './B2BResellerClient';    

export const metadata: Metadata = {
  title: 'B2B Proxy Reseller Program | API, Bot & Dashboard Included',
  description: 'Supercharge your operations with an all-in-one toolkit: a powerful Proxy API, a free Discord bot, and a user-friendly dashboard. Start reselling today.',
  openGraph: {
    title: 'B2B Proxy Reseller Program | API, Bot & Dashboard Included ',
    description: 'Supercharge your operations with an all-in-one toolkit: a powerful Proxy API, a free Discord bot, and a user-friendly dashboard. Start reselling today.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <B2BResellerClient />;
}