"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { WPPost, WPCategory } from "@/types/wordpress";

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
    <main className="bg-[#0a0a0a] min-h-screen text-stone-100">

      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="text-center py-40 px-6 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(160,40,5,0.5),transparent)]">
        <h1 className="font-serif text-5xl font-normal tracking-tight mb-4">
          TorchProxies Blogs
        </h1>
        <p className="text-stone-400 text-base max-w-md mx-auto leading-relaxed">
          Valuable information about proxies, data scraping and other use cases
        </p>
      </header>

      {/* ── Category Filter ───────────────────────────────── */}
      <div className="flex gap-3 px-12 mb-10 flex-wrap justify-center">
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