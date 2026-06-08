"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { WPPost, WPCategory } from "@/types/wordpress";
import Image from "next/image";

interface BlogClientProps {
  posts: WPPost[];
  categories: WPCategory[];
}

const PAGE_SIZE = 6; // how many posts to show initially

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // reset visible count when category changes
  const handleCategoryChange = (id: number | null) => {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  };

  const filtered = activeCategory === null
    ? posts
    : posts.filter((post) =>
        post._embedded?.["wp:term"]?.[0]?.some(
          (cat) => cat.id === activeCategory
        )
      );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <main className="font-worksans bg-[#0a0a0a] min-h-screen text-stone-100">

      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="text-center py-20 sm:py-28 px-6 relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden -mt-[250px]">
                         <div className="absolute inset-x-0  h-[400px] z-0 pointer-events-none select-none">
                             <Image
                                 src="/images/hero_back.png"
                                 alt=""
                                 fill
                                 priority
                                 className="object-cover object-bottom opacity-100"
                             />
                         </div>
                        <div className="max-w-6xl mx-auto text-center z-10 mt-[20px]">
                            <div className="flex items-center justify-center mb-6">
                                <img
                                    src="/images/TrustPiolet.png"
                                    alt="Excellent 5-star rating on Trustpilot"
                                    className="h-6 w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                            </div>
        <h1 className="text-5xl font-normal tracking-tight">
          TorchProxies Blogs
        </h1>
        <p className="text-stone-400 text-base max-w-md mx-auto leading-relaxed">
          Here you can find valuable Information about topics surrounding proxies, data scraping and other use cases
        </p>
      </header>

      {/* ── Category Filter ───────────────────────────────── */}
      <div className="flex gap-3 px-12 mb-10 flex-wrap justify-center -mt-30">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${activeCategory === null
              ? "bg-orange-500 text-white"
              : "border border-white/10 text-stone-400 hover:border-orange-500 hover:text-white"
            }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === cat.id
                ? "bg-orange-500 text-white"
                : "border border-white/10 text-stone-400 hover:border-orange-500 hover:text-white"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ── Blog Grid ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 max-w-7xl mx-auto">
        {visible.length > 0 ? (
          visible.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <p className="text-stone-500 col-span-3 text-center py-20">
            No posts found in this category.
          </p>
        )}
      </section>

      {/* ── Load More ─────────────────────────────────────── */}
      {hasMore && (
        <div className="flex justify-center py-16">
          <button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="px-10 py-3 rounded-lg border border-white/15 text-stone-300 
                       text-sm font-medium tracking-widest hover:border-orange-500 
                       hover:text-orange-500 hover:bg-orange-500/5
                       transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* ── All loaded message ────────────────────────────── */}
      {!hasMore && filtered.length > PAGE_SIZE && (
        <div className="flex justify-center py-16">
          <p className="text-stone-600 text-sm tracking-widest">
            — All posts loaded —
          </p>
        </div>
      )}

    </main>
  );
}