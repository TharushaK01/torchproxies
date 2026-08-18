import type { Metadata } from 'next';
import SneakerProxiesClient from './SneakerProxiesClient';    

export const metadata: Metadata = {
  title: 'Sneaker Proxies | Reliable Infrastructure for Cops',
  description: 'Most resellers don’t lose because of bad bots — they lose because of bad proxy infrastructure. Cop reliably with Torch Proxies sneaker proxies. Read more.',
  openGraph: {
    title: 'Sneaker Proxies | Reliable Infrastructure for Cops',
    description: 'Most resellers don’t lose because of bad bots — they lose because of bad proxy infrastructure. Cop reliably with Torch Proxies sneaker proxies. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <SneakerProxiesClient/>;
}