import type { Metadata } from 'next';
import PriceMonitoringClient from './PriceMonitoringClient';    

export const metadata: Metadata = {
  title: 'Price Monitoring Proxies | Beat Retail Anti-Bot Systems',
  description: 'Amazon and Walmart run enterprise-grade anti-bot systems that block datacenter proxies almost instantly. Monitor prices reliably with Torch Proxies. Read more.',
  openGraph: {
    title: 'Price Monitoring Proxies | Beat Retail Anti-Bot Systems',
    description: 'Amazon and Walmart run enterprise-grade anti-bot systems that block datacenter proxies almost instantly. Monitor prices reliably with Torch Proxies. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <PriceMonitoringClient/>;
}