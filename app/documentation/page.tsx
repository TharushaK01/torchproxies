import type { Metadata } from 'next';
import DocumentationClient from './DocumentationClient';    

export const metadata: Metadata = {
  title: 'Documentation & API Guides | Torch Proxies Support',
  description: 'Get started fast with step-by-step docs, API guides, and 24/7 support via email or Discord. Everything you need to make Torch Proxies work for you. Read more.',
  openGraph: {
    title: 'Documentation & API Guides | Torch Proxies Support ',
    description: 'Get started fast with step-by-step docs, API guides, and 24/7 support via email or Discord. Everything you need to make Torch Proxies work for you. Read more.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
};

export default function Page() {
  return <DocumentationClient />;
}