import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const posts: WPPost[] = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title.rendered.replace(/<[^>]+>/g, ""),
      description: post.excerpt.rendered
        .replace(/<[^>]+>/g, "")
        .slice(0, 160),
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: WPPost | null = null;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Failed to fetch post:", error);
  }

  if (!post) notFound();

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const categories = post._embedded?.["wp:term"]?.[0];

  const cleanContent = post.content.rendered
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-stone-100 pt-28">
      <div
        className="wp-post-content"
        dangerouslySetInnerHTML={{
          __html: post.content.rendered
            .replace(
              /<script\b[^>]*src=[^>]*><\/script>/gi,  // ← external scripts only
              ""
            )
            .replace(
              /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, // ← JSON-LD schema
              ""
            ),
        }}
      />
    </main>
  );
}