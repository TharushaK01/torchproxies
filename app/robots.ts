// app/robots.ts
import { MetadataRoute } from "next";

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://torchproxies.com';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.torchproxies.com"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/_next/static/", // Allow Next.js static scripts & CSS
        "/_next/image/", // Allow Next.js optimized images
      ],
      disallow: [
        "/api/", // Disallow API endpoint routes
        // "/_next/", // Disallow Next.js system files
      ],
    },
    sitemap: "https://www.torchproxies.com/sitemap.xml",
  };
}
