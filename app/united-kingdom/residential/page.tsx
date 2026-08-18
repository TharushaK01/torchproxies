import type { Metadata } from 'next';
import UnitedKingdomResidentialClient from './UnitedKingdomResidentialClient';    

export const metadata: Metadata = {
  title: 'United Kingdom Static ISP Proxies | Fast & Reliable',
  description: 'Get static United Kingdom ISP proxies with real carrier-grade IPs, unlimited bandwidth, and 99.9% uptime — built for automation and long, stable sessions.',
  openGraph: {
    title: 'United Kingdom Static ISP Proxies | Fast & Reliable',
    description: 'Get static United Kingdom ISP proxies with real carrier-grade IPs, unlimited bandwidth, and 99.9% uptime — built for automation and long, stable sessions.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <UnitedKingdomResidentialClient />;
}