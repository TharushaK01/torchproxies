import { getPageBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

const WP_BASE = "https://torchproxies.com";

// Comprehensive style orchestration including asset frameworks used by Elementor & Hub Theme
const BASE_WORDPRESS_STYLES = [
  // ── Core Icons Frameworks used by Elementor ───────────────────
  `${WP_BASE}/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css`,
  `${WP_BASE}/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css`,

  // ── Hub Theme Global Structure Frameworks ─────────────────────
  `${WP_BASE}/wp-content/themes/hub/style.css`,
  `${WP_BASE}/wp-content/themes/hub/assets/css/theme.min.css`,

  // ── Compiled Elementor Upload Styles ─────────────────────────
  `${WP_BASE}/wp-content/uploads/elementor/css/global.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-heading.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-text-editor.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-button.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-image.min.css`,

  // ── WPR Addons plugin (used for custom pricing tables/animations) ──
  `${WP_BASE}/wp-content/plugins/wpr-addons/assets/css/wpr-animations.min.css`,
];

export default async function ProductPage() {
  const post = await getPageBySlug("standard-residential-proxies");
  if (!post) notFound();

  // Dynamic asset targeting based on current page database assignment
  const pageCSS = `${WP_BASE}/wp-content/uploads/elementor/css/post-${post.id}.css`;

  const cleanContent = post.content.rendered
    // Scrub inline JSON-LD arrays to protect Next SEO layout
    .replace(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
      "",
    )
    // Drop raw WordPress theme native header/footers layouts if injected
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "");

  // return (
  //   <>
  //     {/* ── Global WordPress Component Style Registers ── */}
  //     {BASE_WORDPRESS_STYLES.map((href) => (
  //       <link key={href} rel="stylesheet" href={href} />
  //     ))}
  //     <link rel="stylesheet" href={pageCSS} />

  //     {/* ── Micro Layout Standardizations ── */}
  //     <style dangerouslySetInnerHTML={{ __html: `
  //       .wp-post-content {
  //         width: 100%;
  //         font-family: 'Urbanist', 'Inter', sans-serif;
  //       }
  //       /* Ensure Elementor containers stretch fully inside your Next.js main flex wrapper */
  //       .wp-post-content .elementor {
  //         width: 100% !important;
  //         display: block !important;
  //       }
  //       /* Clean default unstyled browser margins from incoming HTML blocks */
  //       .wp-post-content p:empty { display: none; }

  //       /* Correct image block aspect rations inherited via headless pipeline */
  //       .wp-post-content img {
  //         max-width: 100%;
  //         height: auto;
  //       }
  //     `}} />

  //     <main className="bg-[#0a0a0a] min-h-screen text-stone-100 overflow-x-hidden">
  //       {/* Important: Using Elementor root classes 'elementor elementor-${id}' on parent wrapper unlocks CSS scope variables */}
  //       <div
  //         className={`wp-post-content elementor elementor-${post.id}`}
  //         style={{ marginTop: "80px" }}
  //       >
  //         <div
  //           dangerouslySetInnerHTML={{ __html: cleanContent }}
  //           suppressHydrationWarning
  //         />
  //       </div>
  //     </main>
  //     <script
  //       src="https://code.jquery.com/jquery-3.7.1.min.js"
  //       defer
  //     />
  //     <script
  //       src={`${WP_BASE}/wp-content/plugins/elementor/assets/js/frontend.min.js`}
  //       defer
  //     />
  //   </>
  // );

  return (
    <>
      {/* ── Global WordPress Component Style Registers ── */}
      {BASE_WORDPRESS_STYLES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <link rel="stylesheet" href={pageCSS} />

      {/* ── Micro Layout Standardizations ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* FORCE OVERRIDE NATIVE WORDPRESS/HUB THEME BACKGROUND RESETS */
      body, html, .elementor, .wp-post-content {
        background-color: transparent !important;
      }

      .wp-post-content {
        width: 100%;
        font-family: 'Urbanist', 'Inter', sans-serif;
      }
      /* Ensure Elementor containers stretch fully inside your Next.js main flex wrapper */
      .wp-post-content .elementor {
        width: 100% !important;
        display: block !important;
      }
      /* Clean default unstyled browser margins from incoming HTML blocks */
      .wp-post-content p:empty { display: none; }
      
      /* Correct image block aspect rations inherited via headless pipeline */
      .wp-post-content img {
        max-width: 100%;
        height: auto;
      }
    `,
        }}
      />

      <main className="bg-[#0a0a0a] min-h-screen text-stone-100 overflow-x-hidden relative pt-20">
        <div className={`wp-post-content elementor elementor-${post.id}`}>
          <div
            dangerouslySetInnerHTML={{ __html: cleanContent }}
            suppressHydrationWarning
          />
        </div>
      </main>
      <script src="https://code.jquery.com/jquery-3.7.1.min.js" defer />
      <script
        src={`${WP_BASE}/wp-content/plugins/elementor/assets/js/frontend.min.js`}
        defer
      />
    </>
  );
}

export async function generateMetadata() {
  const post = await getPageBySlug("standard-residential-proxies");
  if (!post) return { title: "Page Not Found" };
  return {
    title: post.title.rendered.replace(/<[^>]+>/g, ""),
    description: post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
  };
}
