// import { getAllPosts, getCategories } from "@/lib/wordpress";
// import BlogCard from "@/components/BlogCard";
// import { WPPost, WPCategory } from "@/types/wordpress";
// import BlogClient from "./BlogClient";

// export default async function BlogPage() {
//   const [posts, categories]: [WPPost[], WPCategory[]] = await Promise.all([
//     getAllPosts(),
//     getCategories(),
//   ]);

//   return <BlogClient posts={posts} categories={categories} />;
// }
// (
//     <main className="bg-[#0a0a0a] min-h-screen text-stone-100">

//       {/* ── Hero ──────────────────────────────────────────── */}
//       <header className="text-center py-24 px-6 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(160,40,5,0.5),transparent)]">
//         <h1 className="font-serif text-5xl font-normal tracking-tight mb-4">
//           TorchProxies Blogs
//         </h1>
//         <p className="text-stone-400 text-base max-w-md mx-auto leading-relaxed">
//           Here you can find valuable Information about topics surrounding proxies, data
// scraping and other use cases
//         </p>
//       </header>

//       {/* ── Category Filter ───────────────────────────────── */}
//       <div className="flex gap-3 px-12 mb-10 flex-wrap justify-center">
//         <button className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
//           All
//         </button>
//         {categories.map((cat) => (
//           <button
//             key={cat.id}
//             className="px-5 py-2 rounded-full border border-white/10 text-stone-400 
//                        text-sm font-medium hover:border-orange-500 hover:text-white 
//                        transition-all duration-300"
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* ── Blog Grid ─────────────────────────────────────── */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 max-w-7xl mx-auto">
//         {posts.map((post) => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </section>

//     </main>
//   );
// }


// import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
// import { WPPost } from "@/types/wordpress";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

// // ── Pre-build all post URLs at build time ────────────────────
// export async function generateStaticParams() {
//   const posts: WPPost[] = await getAllPosts();
//   return posts.map((post) => ({ slug: post.slug }));
// }

// // ── SEO metadata ─────────────────────────────────────────────
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getPostBySlug(params.slug);
//   if (!post) return { title: "Post Not Found" };
//   return {
//     title: post.title.rendered.replace(/<[^>]+>/g, ""),
//     description: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
//   };
// }

// // ── Page ─────────────────────────────────────────────────────
// export default async function BlogPostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = await getPostBySlug(params.slug);
//   if (!post) notFound();

//   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
//   const author        = post._embedded?.author?.[0];
//   const categories    = post._embedded?.["wp:term"]?.[0];

//   return (
//     <main className="bg-[#0a0a0a] min-h-screen text-stone-100">

//       {/* ── Hero ──────────────────────────────────────────── */}
//       <header className="relative px-4 sm:px-6 pt-16 pb-12 text-center overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2
//                           w-[600px] h-[300px]
//                           bg-[radial-gradient(ellipse_at_top,rgba(180,50,5,0.4)_0%,transparent_70%)]" />
//         </div>

//         {/* Category */}
//         {categories?.[0] && (
//           <div className="relative z-10 mb-4">
//             <span className="text-xs font-semibold text-orange-500
//                              uppercase tracking-widest bg-orange-500/10
//                              border border-orange-500/20 px-3 py-1 rounded-full">
//               {categories[0].name}
//             </span>
//           </div>
//         )}

//         {/* Title */}
//         <h1
//           className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold
//                      text-white leading-tight max-w-3xl mx-auto mb-5"
//           dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//         />

//         {/* Author + date */}
//         <div className="relative z-10 flex items-center justify-center gap-3
//                         text-sm text-stone-500">
//           {author?.avatar_urls?.["96"] && (
//             <Image
//               src={author.avatar_urls["96"]}
//               alt={author.name}
//               width={28}
//               height={28}
//               className="rounded-full"
//             />
//           )}
//           <span>{author?.name}</span>
//           <span>·</span>
//           <span>
//             {new Date(post.date).toLocaleDateString("en-US", {
//               year: "numeric", month: "short", day: "numeric",
//             })}
//           </span>
//           <span>·</span>
//           <span>{Math.ceil(post.content.rendered.split(" ").length / 200)} min read</span>
//         </div>
//       </header>

//       {/* ── Featured image ────────────────────────────────── */}
//       {featuredImage && (
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
//           <div className="relative w-full aspect-video rounded-2xl overflow-hidden
//                           border border-white/8">
//             <Image
//               src={featuredImage.source_url}
//               alt={featuredImage.alt_text || post.title.rendered}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       )}

//       {/* ── Content ───────────────────────────────────────── */}
//       <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
//         <div
//           className="
//             prose prose-invert prose-orange max-w-none

//             prose-headings:text-white
//             prose-headings:font-bold
//             prose-headings:tracking-tight
//             prose-headings:mt-8
//             prose-headings:mb-4

//             prose-h2:text-2xl
//             prose-h3:text-xl

//             prose-p:text-stone-400
//             prose-p:leading-relaxed
//             prose-p:mb-4

//             prose-a:text-orange-400
//             prose-a:no-underline
//             hover:prose-a:underline

//             prose-strong:text-white
//             prose-strong:font-semibold

//             prose-code:text-orange-300
//             prose-code:bg-white/5
//             prose-code:px-1.5
//             prose-code:py-0.5
//             prose-code:rounded
//             prose-code:text-sm
//             prose-code:before:content-none
//             prose-code:after:content-none

//             prose-pre:bg-[#111]
//             prose-pre:border
//             prose-pre:border-white/8
//             prose-pre:rounded-xl

//             prose-blockquote:border-l-orange-500
//             prose-blockquote:text-stone-400
//             prose-blockquote:bg-white/3
//             prose-blockquote:py-1
//             prose-blockquote:rounded-r-lg

//             prose-img:rounded-xl
//             prose-img:border
//             prose-img:border-white/8

//             prose-li:text-stone-400

//             prose-ul:marker:text-orange-500
//             prose-ol:marker:text-orange-500

//             prose-hr:border-white/10
//           "
//           dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//         />

//         {/* ── Back to blog ──────────────────────────────── */}
//         <div className="mt-14 pt-8 border-t border-white/8">
//           <Link
//             href="/resources/blog"
//             className="inline-flex items-center gap-2 text-sm text-stone-400
//                        hover:text-white transition-colors"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//                  stroke="currentColor" strokeWidth="2">
//               <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//             Back to Blog
//           </Link>
//         </div>
//       </article>

//     </main>
//   );
// }

import { getAllPosts, getCategories } from "@/lib/wordpress";
import { WPPost, WPCategory } from "@/types/wordpress";
import BlogClient from "./BlogClient";

export default async function BlogPage() {
  try {
    const [posts, categories]: [WPPost[], WPCategory[]] = await Promise.all([
      getAllPosts(),
      getCategories(),
    ]);

    return <BlogClient posts={posts} categories={categories} />;

  } catch (error) {
    // ← shows error on screen instead of 404
    console.error("Blog fetch error:", error);
    return (
      <main className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-sm mb-2">Failed to load blog</p>
          <p className="text-stone-600 text-xs">{String(error)}</p>
        </div>
      </main>
    );
  }
}