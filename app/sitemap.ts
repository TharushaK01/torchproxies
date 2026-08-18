// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/wordpress';
import { WPPost } from '@/types/wordpress';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://torchproxies.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Fetch all WordPress post slugs
  let posts: WPPost[] = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Failed to fetch posts for sitemap generation:', error);
  }

// app/sitemap.ts
const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
  url: `${SITE_URL}/blog/${post.slug}/`,
  // Safely check for modified or fall back to date
  lastModified: new Date((post as Record<string, any>).modified || post.date),
  changeFrequency: 'weekly',
  priority: 0.7,
}));

  // 3. Define static application routes
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...postUrls];
}