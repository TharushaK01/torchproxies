// const WP_URL = process.env.WORDPRESS_URL;


// // ── Fetch all posts ──────────────────────────────────────────
// export async function getAllPosts() {
//   const res = await fetch(
//     `${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=100`,
//     { next: { revalidate: 3600 } } // cache & rebuild every 1 hour
//   );

//   if (!res.ok) throw new Error("Failed to fetch posts");
//   return res.json();
// }

// // ── Fetch single post by slug ────────────────────────────────
// export async function getPostBySlug(slug: string) {
//   const res = await fetch(
//     `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 3600 } }
//   );

//   if (!res.ok) throw new Error("Failed to fetch post");
//   const posts = await res.json();
//   return posts[0] ?? null;
// }

// // ── Fetch all categories ─────────────────────────────────────
// export async function getCategories() {
//   const res = await fetch(
//     `${WP_URL}/wp-json/wp/v2/categories`,
//     { next: { revalidate: 3600 } }
//   );

//   if (!res.ok) throw new Error("Failed to fetch categories");
//   return res.json();
// }


// lib/wordpress.ts
const WP_URL = process.env.WORDPRESS_URL?.replace(/\/$/, "");

// Helper to ensure we don't have double slashes
const getApiUrl = (endpoint: string) => `${WP_URL}/wp-json/wp/v2/${endpoint}`;

export async function getAllPosts() {
  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");

  const res = await fetch(
    `${getApiUrl('posts')}?_embed&per_page=100`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostBySlug(slug: string) {


  const WP_URL = process.env.WORDPRESS_URL?.replace(/\/$/, "");


  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");

const res = await fetch(
    `${WP_URL}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;

  // const cleanUrl = `${WP_URL.replace(/\/$/, "")}/wp-json/wp/v2/posts?slug=${slug}&_embed`;

  // const res = await fetch(cleanUrl, { next: { revalidate: 3600 } });

  // if (!res.ok) return null;

  const posts = await res.json();
  // WordPress returns an array, we need the first item
  return posts.length > 0 ? posts[0] : null;
}

export async function getCategories() {
  if (!WP_URL) throw new Error("WORDPRESS_URL is missing in .env");

  const res = await fetch(
    getApiUrl('categories'),
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}