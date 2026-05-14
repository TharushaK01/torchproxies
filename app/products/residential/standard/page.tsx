import { getPageBySlug, getPageStyles } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export default async function ProductPage() {
  const post = await getPageBySlug('standard-residential-proxies');
  if (!post) notFound();

  const styles = await getPageStyles(post.id);

  const cleanContent = post.content.rendered
    .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
    .replace(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
      ""
    );

  return (
    <>
      {/* ── Elementor CSS for this page ───────────────── */}
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}

      {/* ── Extra WordPress CSS ───────────────────────── */}
      <link rel="stylesheet"
        href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-frontend.min.css" />
      <link rel="stylesheet"
        href="https://torchproxies.com/wp-includes/css/dist/block-library/style.min.css" />
      <link rel="stylesheet"
        href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css" />

      <main className="bg-[#0a0a0a] min-h-screen text-stone-100"
      suppressHydrationWarning>
        <div style={{ marginTop: "60px" }} suppressHydrationWarning>
          <div
            className="wp-post-content"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
            suppressHydrationWarning
          />
        </div>
      </main>
    </>
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