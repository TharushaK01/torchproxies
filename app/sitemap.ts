// import { MetadataRoute } from "next";
// import { getAllPosts } from "@/lib/wordpress";
// import { WPPost } from "@/types/wordpress";

// const SITE_URL =
//   process.env.NEXT_PUBLIC_SITE_URL || "https://www.torchproxies.com";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // 1. Fetch all WordPress post slugs safely
//   const posts: WPPost[] = await getAllPosts();

//   // 2. Map posts to sitemap URLs
//   const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
//     url: `${SITE_URL}/blog/${post.slug}/`,
//     lastModified: new Date((post as Record<string, any>).modified || post.date),
//     changeFrequency: "weekly",
//     priority: 0.7,
//   }));

// 3. Define static application routes
//   const staticUrls: MetadataRoute.Sitemap = [
//     {
//       url: `${SITE_URL}/`,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 1.0,
//     },
//     {
//       url: `${SITE_URL}/blog/`,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//   ];

//   return [...staticUrls, ...postUrls];
// }
// 4. Commercial & Core Static Routes
//   const staticRoutes = [
//     "/",
//     "/blog",
//     "/pricing",
//     "/residential-proxies",
//     "/datacenter-proxies",
//     "/isp-proxies",
//     "/mobile-proxies",
//     "/contact",
//     "/about",
//   ];

//   const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
//     url: `${SITE_URL}${route}`,
//     lastModified: new Date(),
//     changeFrequency: route === "/" || route === "/blog" ? "daily" : "weekly",
//     priority: route === "/" ? 1.0 : 0.8,
//   }));

//   return [...staticUrls, ...postUrls];
// }

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/wordpress";
import { getCountryRows } from "@/lib/sheets";
import { WPPost } from "@/types/wordpress";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.torchproxies.com"
).replace(/\/$/, "");

/**
 * Normalizes URL paths by stripping trailing slashes for consistency.
 */
function normalizePath(pathStr: string): string {
  if (pathStr === "/" || !pathStr) return "";
  return pathStr.startsWith("/")
    ? pathStr.replace(/\/$/, "")
    : `/${pathStr.replace(/\/$/, "")}`;
}

/**
 * Helper to safely extract modification date from WP objects or file systems.
 */
function parseDate(dateInput: any): Date {
  const d = new Date(dateInput);
  return isNaN(d.getTime()) ? new Date() : d;
}

/**
 * Auto-discover static file routes inside /app directory
 */
function getStaticAppRoutes(): { route: string; filePath: string }[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: { route: string; filePath: string }[] = [];

  if (!fs.existsSync(appDir)) {
    console.error(`[Sitemap Error]: app directory not found at ${appDir}`);
    return routes;
  }

  function walk(dir: string, routePath: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      // Ignore private components (_components) or API folders automatically
      if (entry.name.startsWith("_") || entry.name === "api") continue;

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const isRouteGroup = /^\(.*\)$/.test(entry.name);
        const isDynamic = entry.name.startsWith("[");

        // Skip dynamic route folders like [...slug] (handled by Google Sheets & WP)
        if (isDynamic) continue;

        const nextRoutePath = isRouteGroup
          ? routePath
          : `${routePath}/${entry.name}`;

        walk(fullPath, nextRoutePath);
      } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
        const route = routePath === "" ? "/" : routePath;
        routes.push({ route, filePath: fullPath });
      }
    }
  }

  walk(appDir, "");
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Fetch data sources concurrently (WordPress posts & Google Sheets)
  const [posts, sheetRows] = await Promise.all([
    getAllPosts().catch(() => []) as Promise<WPPost[]>,
    getCountryRows().catch(() => []),
  ]);

  // 2. Static App Routes Discovery with actual filesystem modification dates
  const staticAppRoutes = getStaticAppRoutes();
  const staticRouteSet = new Set(staticAppRoutes.map((r) => r.route));

  const staticUrls: MetadataRoute.Sitemap = staticAppRoutes.map(
    ({ route, filePath }) => {
      let fileLastMod = new Date();
      try {
        const stats = fs.statSync(filePath);
        fileLastMod = stats.mtime;
      } catch {
        // Fallback to current date if file read fails
      }

      return {
        url: `${SITE_URL}${route === "/" ? "" : route}`,
        lastModified: fileLastMod,
        changeFrequency:
          route === "/" || route === "/blog" ? "daily" : "weekly",
        priority: route === "/" ? 1.0 : 0.8,
      };
    },
  );

  // 3. WordPress Posts
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => {
    const slug = normalizePath(post.slug);
    const lastModDate = parseDate((post as any).modified || post.date);

    return {
      url: `${SITE_URL}/blog${slug}`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  // 4. Google Sheets Country & ISP Pages
  const sheetUrls: MetadataRoute.Sitemap = [];

  for (const row of sheetRows) {
    const rawSlug = row[0]?.toString().trim();
    if (!rawSlug) continue;

    const slug = normalizePath(rawSlug);
    if (!slug) continue;

    // Add main country route if not hardcoded as a static route file
    if (!staticRouteSet.has(slug)) {
      sheetUrls.push({
        url: `${SITE_URL}${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    } else {
      // Optional: Log duplicate warning in terminal during build
      console.warn(
        `[Sitemap Warning]: "${slug}" exists as a static app folder AND in Google Sheets. Sheet entry skipped.`,
      );
    }

    // Check ISP count (Column D / index 3)
    const ispCount = parseInt((row[3] || "0").toString().trim(), 10);
    const hasIspContent = !Number.isNaN(ispCount) && ispCount > 0;

    // --- ADD YOUR SNIPPET HERE ---
    const ispRoute = `${slug}-isp`;

    // Only add from Google Sheets if it's NOT already created as a static app folder
    if (
      hasIspContent &&
      !staticRouteSet.has(ispRoute) &&
      !staticRouteSet.has(slug)
    ) {
      sheetUrls.push({
        url: `${SITE_URL}${ispRoute}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
    // --- END OF SNIPPET ---
  }

  // Deduplicate and combine all URL objects by their canonical URL property
  const allEntries = [...staticUrls, ...postUrls, ...sheetUrls];
  const uniqueUrlsMap = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const entry of allEntries) {
    uniqueUrlsMap.set(entry.url, entry);
  }

  return Array.from(uniqueUrlsMap.values());
}
