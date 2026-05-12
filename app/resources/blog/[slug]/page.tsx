import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
  const author        = post._embedded?.author?.[0];
  const categories    = post._embedded?.["wp:term"]?.[0];

  const cleanContent = post.content.rendered
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    // .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

//   return (
//     <main className="bg-[#0a0a0a] min-h-screen text-stone-100">

//       {/* ── Header ──────────────────────────────────────── */}
//       <header className="relative px-4 sm:px-6 pt-16 pb-10 overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2
//                           w-[600px] h-[300px]
//                           bg-[radial-gradient(ellipse_at_top,rgba(180,50,5,0.35)_0%,transparent_70%)]" />
//         </div>

//         <div className="relative z-10 max-w-3xl mx-auto text-center">
//           <Link href="/resources/blog"
//             className="inline-flex items-center gap-1.5 text-xs text-stone-500
//                        hover:text-orange-400 transition-colors mb-6">
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//                  stroke="currentColor" strokeWidth="2">
//               <path d="M19 12H5M12 5l-7 7 7-7"
//                     strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Back to Blog
//           </Link>

//           {categories?.[0] && (
//             <div className="mb-4">
//               <span className="text-[11px] font-bold text-white uppercase
//                                tracking-widest bg-orange-500 px-3 py-1 rounded-sm">
//                 {categories[0].name}
//               </span>
//             </div>
//           )}

//           <h1
//             className="text-2xl sm:text-3xl md:text-4xl font-black text-white
//                        leading-tight tracking-tight mb-5"
//             dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//           />

//           <div className="flex items-center justify-center gap-3
//                           text-xs text-stone-500 flex-wrap">
//             {author?.avatar_urls?.["96"] && (
//               <Image
//                 src={author.avatar_urls["96"]}
//                 alt={author.name}
//                 width={24} height={24}
//                 className="rounded-full"
//               />
//             )}
//             {author?.name && (
//               <span className="text-stone-400">{author.name}</span>
//             )}
//             <span>·</span>
//             <span>
//               {new Date(post.date).toLocaleDateString("en-US", {
//                 year: "numeric", month: "short", day: "numeric",
//               })}
//             </span>
//             <span>·</span>
//             <span>
//               {Math.ceil(
//                 post.content.rendered
//                   .replace(/<[^>]+>/g, "")
//                   .split(" ").length / 200
//               )} min read
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* ── Featured image ────────────────────────────── */}
//       {featuredImage?.source_url && (
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
//           <div className="relative w-full aspect-video rounded-xl
//                           overflow-hidden border border-white/8">
//             <Image
//               src={featuredImage.source_url}
//               alt={featuredImage.alt_text || ""}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       )}

//       {/* ── Content ───────────────────────────────────── */}
//       <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
//         {/* <div
//           className="
//             prose prose-invert prose-orange max-w-none
//             prose-headings:text-white prose-headings:font-bold
//             prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-3
//             prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
//             prose-p:text-stone-400 prose-p:leading-relaxed prose-p:mb-4
//             prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
//             prose-strong:text-white prose-strong:font-semibold
//             prose-code:text-orange-300 prose-code:bg-white/5
//             prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
//             prose-code:before:content-none prose-code:after:content-none
//             prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/8
//             prose-pre:rounded-xl prose-pre:overflow-x-auto
//             prose-blockquote:border-l-orange-500 prose-blockquote:text-stone-400
//             prose-blockquote:not-italic
//             prose-img:rounded-xl prose-img:border prose-img:border-white/8
//             prose-li:text-stone-400 prose-li:leading-relaxed
//             prose-ul:marker:text-orange-500
//             prose-ol:marker:text-orange-500 prose-ol:marker:font-bold
//             prose-table:border-collapse
//             prose-th:bg-white/5 prose-th:text-white prose-th:font-semibold
//             prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-2
//             prose-td:text-stone-400 prose-td:border prose-td:border-white/10
//             prose-td:px-4 prose-td:py-2
//             prose-hr:border-white/10
//           "
//           dangerouslySetInnerHTML={{ __html: cleanContent }}
//         /> */}

// <div 
//   className="wp-post-content"
//   dangerouslySetInnerHTML={{ __html: cleanContent }} 
// />



//         {/* ── Bottom nav ──────────────────────────────── */}
//         <div className="mt-14 pt-8 border-t border-white/8
//                         flex items-center justify-between">
//           <Link href="/resources/blog"
//             className="inline-flex items-center gap-2 text-sm text-stone-400
//                        hover:text-white transition-colors">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//                  stroke="currentColor" strokeWidth="2">
//               <path d="M19 12H5M12 5l-7 7 7-7"
//                     strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Back to Blog
//           </Link>
//           <Link href="https://dashboard.torchproxies.com" target="_blank"
//             className="px-5 py-2 bg-orange-500 hover:bg-orange-600
//                        text-white text-sm font-semibold rounded-lg
//                        transition-colors shadow-[0_0_20px_rgba(234,88,12,0.35)]">
//             Get Started →
//           </Link>
//         </div>
//       </article>

//     </main>
//   );
// }
return (
  <main className="bg-[#0a0a0a] min-h-screen text-stone-100">

    {/* ── Back button only ──────────────────────────── */}
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
      <Link href="/resources/blog"
        className="inline-flex items-center gap-1.5 text-xs text-stone-500
                   hover:text-orange-400 transition-colors">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 5l-7 7 7-7"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Blog
      </Link>
    </div>

    {/* ── WordPress content centered ────────────────── */}
    <article className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-6">
      <div
        className="wp-post-content"
        dangerouslySetInnerHTML={{
          __html: post.content.rendered.replace(
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ""
          ),
        }}
      />

      {/* ── Bottom nav ────────────────────────────── */}
      <div className="mt-14 pt-8 border-t border-white/8
                      flex items-center justify-between">
        <Link href="/resources/blog"
          className="inline-flex items-center gap-2 text-sm text-stone-400
                     hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7-7"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Blog
        </Link>
        <Link href="https://dashboard.torchproxies.com" target="_blank"
          className="px-5 py-2 bg-orange-500 hover:bg-orange-600
                     text-white text-sm font-semibold rounded-lg
                     transition-colors shadow-[0_0_20px_rgba(234,88,12,0.35)]">
          Get Started →
        </Link>
      </div>
    </article>

  </main>
);
}