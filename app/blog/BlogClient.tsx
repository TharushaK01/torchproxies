"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { WPPost, WPCategory } from "@/types/wordpress";
import Image from "next/image";

interface BlogClientProps {
  posts: WPPost[];
  categories: WPCategory[];
}

const PAGE_SIZE = 6;

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleCategoryChange = (id: number | null) => {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  };

  const filtered =
    activeCategory === null
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
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <header className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-32 pb-20 md:pb-24 overflow-hidden font-['Urbanist']">
        
        {/* Background Image */}
 <div className="absolute bottom-0 left-0 w-full h-[65vh] z-0 mb-10">
 <Image
            src="/images/hero_back.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom"
        />

</div>

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/images/TrustPiolet.png"
              alt="Excellent 5-star rating on Trustpilot"
              className="h-5 sm:h-6 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-regular tracking-tight leading-[1.15] mb-5 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent font-['Urbanist'] px-2">
            Documentation & Support
          </h1>

          <p className="max-w-xl md:max-w-2xl mx-auto text-stone-400 text-[15px] sm:text-[16px] md:text-[18px] px-4 leading-relaxed">
            Get started fast with step-by-step docs, API guides, and 24/7
            support via email or Discord. Everything you need to make Torch
            Proxies work for you.
          </p>
        </div>
      </header>

      {/* ── Category Filter ───────────────────────────────── */}
      <div className="relative z-20 flex gap-2 sm:gap-3 px-4 sm:px-8 md:px-12 mb-12 flex-wrap justify-center max-w-5xl mx-auto">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap
          ${
            activeCategory === null
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
              : "border border-white/10 text-stone-400 hover:border-orange-500 hover:text-white"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap
            ${
              activeCategory === cat.id
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                : "border border-white/10 text-stone-400 hover:border-orange-500 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ── Blog Grid ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {visible.length > 0 ? (
          visible.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-stone-500 col-span-1 sm:col-span-2 lg:col-span-3 text-center py-16 sm:py-24 text-sm sm:text-base">
            No posts found in this category.
          </p>
        )}
      </section>

      {/* ── Load More ─────────────────────────────────────── */}
      {hasMore && (
        <div className="flex justify-center py-12 sm:py-16 px-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="w-full sm:w-auto px-10 py-3 rounded-lg border border-white/15 text-stone-300 
                     text-xs sm:text-sm font-medium tracking-widest hover:border-orange-500 
                     hover:text-orange-500 hover:bg-orange-500/5
                     transition-all duration-300 text-center uppercase"
          >
            Load More
          </button>
        </div>
      )}

      {/* ── All loaded message ────────────────────────────── */}
      {!hasMore && filtered.length > PAGE_SIZE && (
        <div className="flex justify-center py-12 sm:py-16 px-4">
          <p className="text-stone-600 text-xs sm:text-sm tracking-widest text-center">
            — ALL POSTS LOADED —
          </p>
        </div>
      )}
    </main>
  );
}