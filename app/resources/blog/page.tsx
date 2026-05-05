import { getAllPosts, getCategories } from "@/lib/wordpress";
import BlogCard from "@/components/BlogCard";
import { WPPost, WPCategory } from "@/types/wordpress";

export default async function BlogPage() {
  const [posts, categories]: [WPPost[], WPCategory[]] = await Promise.all([
    getAllPosts(),
    getCategories(),
  ]);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-stone-100">

      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="text-center py-24 px-6 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(160,40,5,0.5),transparent)]">
        <h1 className="font-serif text-5xl font-normal tracking-tight mb-4">
          TorchProxies Blogs
        </h1>
        <p className="text-stone-400 text-base max-w-md mx-auto leading-relaxed">
          Valuable information about proxies, data scraping and other use cases
        </p>
      </header>

      {/* ── Category Filter ───────────────────────────────── */}
      <div className="flex gap-3 px-12 mb-10 flex-wrap">
        <button className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="px-5 py-2 rounded-full border border-white/10 text-stone-400 
                       text-sm font-medium hover:border-orange-500 hover:text-white 
                       transition-all duration-300"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ── Blog Grid ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 max-w-7xl mx-auto">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>

    </main>
  );
}