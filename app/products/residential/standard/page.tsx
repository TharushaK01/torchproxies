import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export default async function ProductPage() {
  const post = await getPageBySlug('standard-residential-proxies');

  if (!post) notFound();

    const cleanContent = post.content.rendered
    .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
    .replace(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
      ""
    );

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-stone-100">
      <div style={{ marginTop: "60px" }}>
        <div
          className="wp-post-content"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
      </div>
    </main>
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