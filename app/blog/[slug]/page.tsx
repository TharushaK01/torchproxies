// import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
// import { WPPost } from "@/types/wordpress";
// import { notFound } from "next/navigation";
// import { Urbanist } from "next/font/google";
// import WordPressRenderer from "@/components/WordPressRenderer";
// import { splitStyleAndBody, scopeCss } from "@/lib/scopeWpContent";

// export const revalidate = 3600;
// export const dynamicParams = true;

// // 2. Configure the font (you can specify weights or subsets)
// const urbanist = Urbanist({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   display: "swap",
// });

// export async function generateStaticParams() {
//   try {
//     const posts: WPPost[] = await getAllPosts();
//     return posts.map((post) => ({ slug: post.slug }));
//   } catch {
//     return [];
//   }
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   try {
//     const { slug } = await params;
//     const post = await getPostBySlug(slug);
//     if (!post) return { title: "Post Not Found" };
//     return {
//       title: post.title.rendered.replace(/<[^>]+>/g, ""),
//       description: post.excerpt.rendered
//         .replace(/<[^>]+>/g, "")
//         .slice(0, 160),
//     };
//   } catch {
//     return { title: "Post Not Found" };
//   }
// }

// export default async function BlogPostPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {

//   const { slug } = await params;

//   let post: WPPost | null = null;
//   try {
//     post = await getPostBySlug(slug);
//   } catch (error) {
//     console.error("Failed to fetch post:", error);
//   }

//   if (!post) notFound();

//   // Remove scripts only, preserve <style> tags
// const cleanHtml = post.content.rendered
//     .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
//     .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "");

//   const { style, body } = splitStyleAndBody(cleanHtml);
//   const scopedStyle = scopeCss(style, ".wp-post-wrapper");

//   return (
//     /* 3. Add workSans.className to the main element */
//     <main
//       className={`${urbanist.className} bg-[#111111] min-h-screen text-stone-100 relative font-['Urbanist']`}
//       style={{ paddingTop: "80px" }}
//       suppressHydrationWarning
//     >

// <style dangerouslySetInnerHTML={{ __html: scopedStyle }} />
// <div
//   className="wp-post-wrapper"
//   dangerouslySetInnerHTML={{ __html: body }}
// />

//     </main>
//   );
// }

import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";
import { notFound } from "next/navigation";
import { Urbanist } from "next/font/google";
import { splitStyleAndBody, scopeCss } from "@/lib/scopeWpContent";
import sanitizeHtml from "sanitize-html";
import WordPressContent from "@/components/WordPressContent";
import ServerBreadcrumbs from "@/components/ServerBreadcrumbs";

export const revalidate = 3600;
export const dynamicParams = true;

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
      description: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
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
  // breadcrums
  const currentPath = `/blog/${slug}`;

  let post: WPPost | null = null;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Failed to fetch post:", error);
  }

  if (!post) notFound();

  // Format date nicely
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  // 1. Sanitize the raw HTML from WordPress to remove dangerous scripts/attributes
  const sanitizedContent = sanitizeHtml(post.content.rendered, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "style",
      "svg",
      "path",
      "iframe",
    ]),
    nonTextTags: ["script", "textarea", "option", "annotation-xml", "title"],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "id", "style"],
      img: ["src", "alt", "class", "width", "height", "loading"],
      a: ["href", "name", "target", "rel"],
      iframe: ["src", "width", "height", "allow", "allowfullscreen"],
    },
    // Retain internal style tags so scopeCss can extract them
    allowVulnerableTags: true,
  });

  // 2. Separate scoped styles from the main body markup
  const { style, body } = splitStyleAndBody(sanitizedContent);
  const scopedStyle = scopeCss(style, ".wp-post-wrapper");

  return (
    <>
      <ServerBreadcrumbs pathname={currentPath} />
      <main
        className={`${urbanist.className} bg-[#111111] min-h-screen text-stone-100 relative font-['Urbanist']`}
        style={{ paddingTop: "80px" }}
        suppressHydrationWarning
      >
        {/*Header Section for Title & Metadata */}
        {/* <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" 
              dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          {formattedDate && (
            <p className="text-stone-400 text-sm mb-6">Published on {formattedDate}</p>
          )}
        </div> */}

        <style dangerouslySetInnerHTML={{ __html: scopedStyle }} />
        <div className="wp-post-wrapper">
          <WordPressContent rawHtml={body} />
        </div>
      </main>
    </>
  );
}
