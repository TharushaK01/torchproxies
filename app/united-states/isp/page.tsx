import type { Metadata } from 'next';
import UnitedStatesISPClient from './UnitedStatesISPClient';    

export const metadata: Metadata = {
  title: 'UUnited States Static ISP Proxies | Fast & Reliable',
  description: 'Get static United States ISP proxies with real carrier-grade IPs, unlimited bandwidth, and 99.9% uptime — built for automation and long, stable sessions.',
  openGraph: {
    title: 'United States Static ISP Proxies | Fast & Reliable',
    description: 'Get static United States ISP proxies with real carrier-grade IPs, unlimited bandwidth, and 99.9% uptime — built for automation and long, stable sessions.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <UnitedStatesISPClient/>;
}