// import "server-only";

// const WP_URL = (
//   process.env.WORDPRESS_URL ||
//   process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace(
//     /\/wp-json\/wp\/v2\/?$/,
//     "",
//   ) ||
//   "https://cms.torchproxies.com"
// ).replace(/\/$/, "");

// const getApiUrl = (endpoint: string) => `${WP_URL}/wp-json/wp/v2/${endpoint}`;

// // ─────────────────────────────
// // POSTS
// // ─────────────────────────────
// export async function getAllPosts() {
//   if (!WP_URL) return [];

//   try {
//     const res = await fetch(`${getApiUrl("posts")}?_embed&per_page=100`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) {
//       console.error(`Failed to fetch posts: HTTP ${res.status}`);
//       return [];
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error in getAllPosts:", error);
//     return [];
//   }
// }

// // ─────────────────────────────
// // SINGLE POST
// // ─────────────────────────────
// export async function getPostBySlug(slug: string) {
//   if (!WP_URL || !slug) return null;

//   try {
//     const res = await fetch(`${getApiUrl("posts")}?slug=${slug}&_embed`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) return null;

//     const posts = await res.json();
//     return Array.isArray(posts) && posts.length > 0 ? posts[0] : null;
//   } catch (error) {
//     console.error(`Error in getPostBySlug (${slug}):`, error);
//     return null;
//   }
// }

// // ─────────────────────────────
// // CATEGORIES
// // ─────────────────────────────
// export async function getCategories() {
//   if (!WP_URL) return [];

//   try {
//     const res = await fetch(getApiUrl("categories"), {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) {
//       console.error(`Failed to fetch categories: HTTP ${res.status}`);
//       return [];
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error in getCategories:", error);
//     return [];
//   }
// }

// // ─────────────────────────────
// // PAGE BY SLUG
// // ─────────────────────────────
// export async function getPageBySlug(slug: string) {
//   if (!WP_URL || !slug) return null;

//   try {
//     const res = await fetch(`${getApiUrl("pages")}?slug=${slug}&_embed`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) return null;

//     const pages = await res.json();
//     return Array.isArray(pages) && pages.length > 0 ? pages[0] : null;
//   } catch (error) {
//     console.error(`Error in getPageBySlug (${slug}):`, error);
//     return null;
//   }
// }

// // ─────────────────────────────
// // PAGE STYLES
// // ─────────────────────────────
// export async function getPageStyles(pageId: number) {
//   if (!WP_URL) return [];

//   return [
//     "https://fonts.googleapis.com/css?family=Urbanist:100,200,300,400,500,600,700,800,900&display=swap",
//     "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",

//     `${WP_URL}/wp-content/uploads/elementor/css/global.css`,

//     `${WP_URL}/wp-content/uploads/elementor/css/post-${pageId}.css`,

//     `${WP_URL}/wp-content/themes/hub/style.css`,
//   ];
// }

// export async function fetchWordPressAPI(endpoint: string, options: RequestInit = {}) {
//   const url = `https://cms.torchproxies.com/wp-json/${endpoint}`;

//   try {
//     const res = await fetch(url, {
//       ...options,
//       // Abort server request after 3.5s so Next.js never hangs
//       signal: AbortSignal.timeout(3500),
//       next: { revalidate: 60, ...options.next }, // Cache for 60 seconds
//     });

//     if (!res.ok) {
//       console.error(`WordPress API Error [${res.status}]: ${url}`);
//       return null;
//     }

//     return await res.json();
//   } catch (error) {
//     // Gracefully catch timeout without throwing an unhandled server error
//     console.error(`WordPress API Fetch Timeout/Failure for ${url}:`, error);
//     return null; // Return null so UI renders fallback state instantly
//   }
// }

import "server-only";

const WP_URL = (
  process.env.WORDPRESS_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace(
    /\/wp-json\/wp\/v2\/?$/,
    "",
  ) ||
  "https://cms.torchproxies.com"
).replace(/\/$/, "");

const getApiUrl = (endpoint: string) => `${WP_URL}/wp-json/wp/v2/${endpoint}`;

// ─────────────────────────────
// BASE FETCH HELPER (WITH TIMEOUT)
// ─────────────────────────────
async function fetchWithTimeout(url: string, init?: RequestInit) {
  try {
    const res = await fetch(url, {
      ...init,
      signal: AbortSignal.timeout(3500), // Force-abort after 3.5s to prevent GTmetrix timeouts
      next: { revalidate: 3600, ...init?.next },
    });

    if (!res.ok) {
      console.error(`WordPress API Error [${res.status}]: ${url}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`WordPress API Timeout/Failure for ${url}:`, error);
    return null;
  }
}

// ─────────────────────────────
// POSTS
// ─────────────────────────────
export async function getAllPosts() {
  if (!WP_URL) return [];
  const data = await fetchWithTimeout(
    `${getApiUrl("posts")}?_embed&per_page=100`,
  );
  return Array.isArray(data) ? data : [];
}

// ─────────────────────────────
// SINGLE POST
// ─────────────────────────────
export async function getPostBySlug(slug: string) {
  if (!WP_URL || !slug) return null;
  const data = await fetchWithTimeout(
    `${getApiUrl("posts")}?slug=${slug}&_embed`,
  );
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

// ─────────────────────────────
// CATEGORIES
// ─────────────────────────────
export async function getCategories() {
  if (!WP_URL) return [];
  const data = await fetchWithTimeout(getApiUrl("categories"));
  return Array.isArray(data) ? data : [];
}

// ─────────────────────────────
// PAGE BY SLUG
// ─────────────────────────────
export async function getPageBySlug(slug: string) {
  if (!WP_URL || !slug) return null;
  const data = await fetchWithTimeout(
    `${getApiUrl("pages")}?slug=${slug}&_embed`,
  );
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

// ─────────────────────────────
// PAGE STYLES
// ─────────────────────────────
export async function getPageStyles(pageId: number) {
  if (!WP_URL) return [];

  return [
    "https://fonts.googleapis.com/css?family=Urbanist:100,200,300,400,500,600,700,800,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    `${WP_URL}/wp-content/uploads/elementor/css/global.css`,
    `${WP_URL}/wp-content/uploads/elementor/css/post-${pageId}.css`,
    `${WP_URL}/wp-content/themes/hub/style.css`,
  ];
}

// ─────────────────────────────
// GENERIC API FETCH
// ─────────────────────────────
export async function fetchWordPressAPI(
  endpoint: string,
  options: RequestInit = {},
) {
  const url = `${WP_URL}/wp-json/${endpoint.replace(/^\//, "")}`;
  return await fetchWithTimeout(url, options);
}
