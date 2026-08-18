// app/robots.ts
import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://torchproxies.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // Disallow API endpoint routes
        '/_next/',     // Disallow Next.js system files
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}