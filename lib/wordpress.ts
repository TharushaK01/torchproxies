const WP_URL = process.env.WORDPRESS_URL?.replace(/\/$/, "");
const getApiUrl = (endpoint: string) => `${WP_URL}/wp-json/wp/v2/${endpoint}`;

export async function getAllPosts() {
  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");
  const res = await fetch(
    `${getApiUrl("posts")}?_embed&per_page=100`,
    { next: { revalidate: 3600 },
  cache: "no-store"  }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostBySlug(slug: string) {
  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");

  const res = await fetch(
    `${getApiUrl("posts")}?slug=${slug}&_embed`,  // ← posts not pages
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}


export async function getCategories() {
  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");
  const res = await fetch(
    getApiUrl("categories"),
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

// ── Tries pages first, falls back to posts ───────────────────
export async function getPageBySlug(slug: string) {
  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");

  const res = await fetch(
    `${getApiUrl("pages")}?slug=${slug}&_embed`,  // ← uses cleaned WP_URL
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;  // ← return null instead of throwing

  const pages = await res.json();
  return pages.length > 0 ? pages[0] : null;
}


// ── NEW: Get Elementor CSS files for a specific page ─────────
export async function getPageStyles(pageId: number) {
  return [
    `${WP_URL}/wp-content/plugins/elementor/assets/css/frontend.min.css`,
    `${WP_URL}/wp-content/plugins/elementor-pro/assets/css/frontend.min.css`,
    `${WP_URL}/wp-content/uploads/elementor/css/post-${pageId}.css`,
  ];
}