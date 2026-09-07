import type { Metadata } from 'next';
import TicketMasterProxiesClient from './TicketMasterProxiesClient';    

export const metadata: Metadata = {
  title: 'Ticketmaster Proxies | Torch Proxies',
  description: 'Most ticket failures aren’t caused by your bot — they’re caused by IP reputation, fingerprint detection, and unstable queue sessions. Fix it here. Read more.',
  openGraph: {
    title: 'Ticketmaster Proxies | Torch Proxies',
    description: 'Most ticket failures aren’t caused by your bot — they’re caused by IP reputation, fingerprint detection, and unstable queue sessions. Fix it here. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <TicketMasterProxiesClient/>;
}