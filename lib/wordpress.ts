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
    // ── Google Fonts ─────────────────────────────────────
    "https://fonts.googleapis.com/css?family=Urbanist%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CChivo%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap",
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",

    // ── Elementor core ───────────────────────────────────
    `${WP_URL}/wp-content/plugins/elementor/assets/css/frontend.min.css`,
    `${WP_URL}/wp-content/plugins/elementor-pro/assets/css/frontend.min.css`,

    // ── Elementor global styles ──────────────────────────
    `${WP_URL}/wp-content/uploads/elementor/css/global.css`,
    `${WP_URL}/wp-content/uploads/elementor/css/custom-frontend.min.css`,

    // ── Page specific CSS ────────────────────────────────
    `${WP_URL}/wp-content/uploads/elementor/css/post-${pageId}.css`,

    // ── Widget CSS ───────────────────────────────────────
    `${WP_URL}/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css`,

    // ── WordPress core ───────────────────────────────────
    `${WP_URL}/wp-includes/css/dist/block-library/style.min.css`,
    // ── Theme CSS ────────────────────────────────────────────
   `${WP_URL}/wp-content/themes/hub/style.css`,
  ];
}