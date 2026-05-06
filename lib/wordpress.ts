const WP_URL = process.env.WORDPRESS_URL;

// ── Fetch all posts ──────────────────────────────────────────
export async function getAllPosts() {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=100`,
    { next: { revalidate: 3600 } } // cache & rebuild every 1 hour
  );

  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

// ── Fetch single post by slug ────────────────────────────────
export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch post");
  const posts = await res.json();
  return posts[0] ?? null;
}

// ── Fetch all categories ─────────────────────────────────────
export async function getCategories() {
  const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/categories`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}