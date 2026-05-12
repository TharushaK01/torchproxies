import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export default async function ProductPage() {
  const post = await getPageBySlug('standard-residential-proxies');

  // ← shows Next.js 404 page instead of 500 crash
  if (!post) notFound();

  return (
    <article className="prose prose-invert max-w-none px-6 py-12">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}

export async function generateMetadata() {
  const post = await getPageBySlug('standard-residential-proxies');
  if (!post) return { title: 'Page Not Found' };
  return {
    title: post.title.rendered.replace(/<[^>]+>/g, ''),
    description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
  };
}