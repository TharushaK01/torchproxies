import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";
import { notFound } from "next/navigation";
import { Urbanist } from "next/font/google";
import WordPressRenderer from "@/components/WordPressRenderer";
import { splitStyleAndBody, scopeCss } from "@/lib/scopeWpContent";

export const revalidate = 3600;
export const dynamicParams = true;

// 2. Configure the font (you can specify weights or subsets)
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  display: "swap",
});

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


  // Remove scripts only, preserve <style> tags
const cleanHtml = post.content.rendered
    .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "");

  const { style, body } = splitStyleAndBody(cleanHtml);
  const scopedStyle = scopeCss(style, ".wp-post-wrapper");

  // Note: cleanContent variable was declared but not used in your original snippet.
  // Kept it or you can use it below in dangerouslySetInnerHTML.

  return (
    /* 3. Add workSans.className to the main element */
    <main
      className={`${urbanist.className} bg-[#111111] min-h-screen text-stone-100 relative font-['Urbanist']`}
      style={{ paddingTop: "80px" }}
      suppressHydrationWarning
    >
      {/* <div
        className="wp-post-content"
        dangerouslySetInnerHTML={{
          __html: post.content.rendered */}
            {/* .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "") 
            .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, ""), */}


            {/* .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
            .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "")
            .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
        }} */}
      {/* /> */}


      {/* <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Isolated Shadow DOM Renderer */}
        {/* <WordPressRenderer html={cleanHtml} />
      </div> */} 

{/* <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
  <div
    className="wp-post-content prose prose-invert max-w-none text-stone-200 
               prose-headings:text-white prose-headings:font-bold 
               prose-a:text-[#FE4A01] prose-img:rounded-xl prose-img:mx-auto"
    dangerouslySetInnerHTML={{ __html: cleanHtml }}
  />
</div> */}


{/* <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          className="wp-post-wrapper"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      </div> */}


<style dangerouslySetInnerHTML={{ __html: scopedStyle }} />
<div
  className="wp-post-wrapper"
  dangerouslySetInnerHTML={{ __html: body }}
/>

    </main>
  );
}