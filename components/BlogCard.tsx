import Image from "next/image";
import Link from "next/link";
import { WPPost } from "@/types/wordpress";

interface BlogCardProps {
  post: WPPost;
}

// ── Helper: strip HTML tags from excerpt ────────────────────
function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

// ── Helper: format date ──────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const category = post._embedded?.["wp:term"]?.[0]?.[0];
  const author = post._embedded?.author?.[0];

  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className="group bg-[#111] border border-white/5 rounded-xl overflow-hidden 
                 flex flex-col hover:border-orange-500/30 hover:-translate-y-1 
                 transition-all duration-300"
    >
      {/* ── Featured Image ───────────────────────────────── */}
      <div className="relative w-full aspect-video bg-[#1a0f0a] overflow-hidden">
        {featuredImage ? (
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // fallback if no featured image
          <div className="w-full h-full bg-gradient-to-br from-orange-950/30 to-black" />
        )}

        {/* Category pill */}
        {category && (
          <span className="absolute top-3 left-3 bg-black/70 border border-orange-500/40 
                           text-orange-500 text-[10px] font-semibold uppercase tracking-widest 
                           px-2.5 py-1 rounded backdrop-blur-sm">
            {category.name}
          </span>
        )}
      </div>

      {/* ── Card Body ────────────────────────────────────── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Title */}
        <h2
          className="font-serif text-base font-semibold text-stone-100 
                     leading-snug tracking-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Excerpt */}
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
          {stripHtml(post.excerpt.rendered)}
        </p>

        {/* ── Meta: author + date ──────────────────────── */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
          {author?.avatar_urls?.["96"] && (
            <Image
              src={author.avatar_urls["96"]}
              alt={author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          <span className="text-xs text-stone-600">{author?.name}</span>
          <span className="text-xs text-stone-700 ml-auto">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Read more */}
        <span className="text-sm font-semibold text-orange-500 flex items-center 
                         gap-1.5 group-hover:gap-3 transition-all duration-300">
          read more <span>→</span>
        </span>
      </div>
    </Link>
  );
}