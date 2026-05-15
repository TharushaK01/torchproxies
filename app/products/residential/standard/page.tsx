// // import { getPageBySlug, getPageStyles } from '@/lib/wordpress';
// // import { notFound } from 'next/navigation';

// // export default async function ProductPage() {
// //   const post = await getPageBySlug('standard-residential-proxies');
// //   if (!post) notFound();

// //   const styles = await getPageStyles(post.id);

// //   const cleanContent = post.content.rendered
// //     .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
// //     .replace(
// //       /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
// //       ""
// //     );

// //   return (
// //     <>
// //       {/* ── Elementor CSS for this page ───────────────── */}
// //       {styles.map((href) => (
// //         <link key={href} rel="stylesheet" href={href} />
// //       ))}

// //       {/* ── Extra WordPress CSS ───────────────────────── */}
// //       <link rel="stylesheet"
// //         href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-frontend.min.css" />
// //       <link rel="stylesheet"
// //         href="https://torchproxies.com/wp-includes/css/dist/block-library/style.min.css" />
// //       <link rel="stylesheet"
// //         href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css" />

// //       <main className="bg-[#0a0a0a] min-h-screen text-stone-100"
// //       suppressHydrationWarning>
// //         <div style={{ marginTop: "60px", overflowX: "hidden" }} suppressHydrationWarning>
// //           <div
// //             className="wp-post-content"
// //             dangerouslySetInnerHTML={{ __html: cleanContent }}
// //             suppressHydrationWarning
// //           />
// //         </div>
// //       </main>
// //     </>
// //   );
// // }

// // export async function generateMetadata() {
// //   const post = await getPageBySlug('standard-residential-proxies');
// //   if (!post) return { title: 'Page Not Found' };
// //   return {
// //     title: post.title.rendered.replace(/<[^>]+>/g, ''),
// //     description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
// //   };
// // }


// import { getPageBySlug } from '@/lib/wordpress';
// import { notFound } from 'next/navigation';

// // ── All CSS URLs needed for this page ────────────────────────
// const WP_BASE = "https://torchproxies.com";

// const ELEMENTOR_CSS = [
//   // ── Elementor core ───────────────────────────────────────
//   `${WP_BASE}/wp-content/plugins/elementor/assets/css/frontend.min.css`,
//   `${WP_BASE}/wp-content/plugins/elementor-pro/assets/css/frontend.min.css`,

//   // ── Elementor global & custom ────────────────────────────
//   `${WP_BASE}/wp-content/uploads/elementor/css/global.css`,
//   `${WP_BASE}/wp-content/uploads/elementor/css/custom-frontend.min.css`,
//   `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css`,
//   `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-heading.min.css`,
//   `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-text-editor.min.css`,
//   `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-button.min.css`,
//   `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-image.min.css`,

//   // ── WordPress core ───────────────────────────────────────
//   `${WP_BASE}/wp-includes/css/dist/block-library/style.min.css`,

//   // ── WPR Addons plugin (used on this page) ────────────────
//   `${WP_BASE}/wp-content/plugins/wpr-addons/assets/css/wpr-animations.min.css`,
// ];

// export default async function ProductPage() {
//   const post = await getPageBySlug('standard-residential-proxies');
//   if (!post) notFound();

//   // Page specific CSS file using post ID
//   const pageCSS = `${WP_BASE}/wp-content/uploads/elementor/css/post-${post.id}.css`;

//   const cleanContent = post.content.rendered
//     // Remove external script tags
//     .replace(/<script\b[^>]*src=[^>]*><\/script>/gi, "")
//     // Remove JSON-LD schema scripts
//     .replace(
//       /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
//       ""
//     )
//     // Remove WordPress nav injected by Elementor
//     .replace(/<nav[\s\S]*?<\/nav>/gi, "");

//   return (
//     <>
//       {/* ── Load all Elementor CSS ────────────────────── */}
//       {ELEMENTOR_CSS.map((href) => (
//         <link key={href} rel="stylesheet" href={href} />
//       ))}

//       {/* ── Page specific CSS ─────────────────────────── */}
//       <link rel="stylesheet" href={pageCSS} />

//       {/* ── Inline fixes for Next.js rendering ───────── */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         /* ── Elementor layout fixes ───────────────────── */
//         .elementor-section-boxed > .elementor-container,
//         .e-con-boxed > .e-con-inner {
//           max-width: 1200px !important;
//           margin-left: auto !important;
//           margin-right: auto !important;
//           padding: 0 20px !important;
//         }

//         .elementor-section {
//           width: 100% !important;
//         }

//         /* ── Fix full width sections ──────────────────── */
//         .elementor-section.elementor-section-full_width {
//           width: 100% !important;
//           max-width: 100% !important;
//         }

//         .elementor-section.elementor-section-full_width 
//         > .elementor-container {
//           max-width: 100% !important;
//         }

//         /* ── Fix column widths ────────────────────────── */
//         .elementor-col-50 { width: 50% !important; }
//         .elementor-col-33 { width: 33.333% !important; }
//         .elementor-col-25 { width: 25% !important; }
//         .elementor-col-100 { width: 100% !important; }

//         /* ── Fix image sizing ─────────────────────────── */
//         .elementor-widget-image img {
//           max-width: 100% !important;
//           height: auto !important;
//         }

//         /* ── Fix e-con (flexbox containers) ──────────── */
//         .e-con {
//           width: 100% !important;
//         }

//         .e-con.e-flex {
//           display: flex !important;
//         }

//         /* ── Mobile responsive fixes ──────────────────── */
//         @media (max-width: 768px) {
//           .elementor-col-50,
//           .elementor-col-33,
//           .elementor-col-25 {
//             width: 100% !important;
//           }

//           .elementor-section-boxed > .elementor-container,
//           .e-con-boxed > .e-con-inner {
//             padding: 0 16px !important;
//           }
//         }
//       `}} />

//       <main
//         className="bg-[#0a0a0a] min-h-screen text-stone-100"
//         suppressHydrationWarning
//       >
//         <div
//           style={{ marginTop: "60px", overflowX: "hidden" }}
//           suppressHydrationWarning
//         >
//           <div
//             className="wp-post-content"
//             dangerouslySetInnerHTML={{ __html: cleanContent }}
//             suppressHydrationWarning
//           />
//         </div>
//       </main>
//     </>
//   );
// }

// export async function generateMetadata() {
//   const post = await getPageBySlug('standard-residential-proxies');
//   if (!post) return { title: 'Page Not Found' };
//   return {
//     title: post.title.rendered.replace(/<[^>]+>/g, ''),
//     description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
//   };
// }

import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import Script from 'next/script';

const WP_BASE = "https://torchproxies.com";

// Comprehensive style orchestration including asset frameworks used by Elementor & Hub Theme
const BASE_WORDPRESS_STYLES = [
  // ── Core Icons Frameworks used by Elementor ───────────────────
  `${WP_BASE}/wp-includes/css/dist/block-library/style.min.css`,
  `${WP_BASE}/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css`,
  `${WP_BASE}/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css`,

  // ── Elementor Layout Engines ──────────────────────────────────
  `${WP_BASE}/wp-content/plugins/elementor/assets/css/frontend.min.css`,
  `${WP_BASE}/wp-content/plugins/elementor-pro/assets/css/frontend.min.css`,
  
  // ── Hub Theme Global Structure Frameworks ─────────────────────
  `${WP_BASE}/wp-content/themes/hub/style.css`, 
  `${WP_BASE}/wp-content/themes/hub/assets/css/theme.min.css`,

  // ── Compiled Elementor Upload Styles ─────────────────────────
  `${WP_BASE}/wp-content/uploads/elementor/css/global.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-frontend.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-heading.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-text-editor.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-button.min.css`,
  `${WP_BASE}/wp-content/uploads/elementor/css/custom-widget-image.min.css`,

  // ── WPR Addons plugin (used for custom pricing tables/animations) ──
  `${WP_BASE}/wp-content/plugins/wpr-addons/assets/css/wpr-animations.min.css`,
  `${WP_BASE}/wp-content/plugins/wpr-addons/assets/css/frontend.min.css`,
];

export default async function ProductPage() {
  const post = await getPageBySlug('standard-residential-proxies');
  if (!post) notFound();

  // Dynamic asset targeting based on current page database assignment
  const pageCSS = `${WP_BASE}/wp-content/uploads/elementor/css/post-${post.id}.css`;

  const cleanContent = post.content.rendered
    // Scrub inline JSON-LD arrays to protect Next SEO layout
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "")
    // Drop raw WordPress theme native header/footers layouts if injected
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "");

  return (
    <>
      {/* ── Global WordPress Component Style Registers ── */}
      {BASE_WORDPRESS_STYLES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <link rel="stylesheet" href={pageCSS} />

      {/* ── Micro Layout Standardizations ── */}
      <style dangerouslySetInnerHTML={{ __html: `
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
      `}} />

      <main className="bg-[#0a0a0a] min-h-screen text-stone-100 overflow-x-hidden">
        {/* Important: Using Elementor root classes 'elementor elementor-${id}' on parent wrapper unlocks CSS scope variables */}
        <div 
          className={`wp-post-content elementor elementor-${post.id}`}
          style={{ marginTop: "80px" }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: cleanContent }}
            suppressHydrationWarning
          />
        </div>
      </main>
      <script 
        src="https://code.jquery.com/jquery-3.7.1.min.js" 
        defer
      />
      <script 
        src={`${WP_BASE}/wp-content/plugins/elementor/assets/js/frontend.min.js`} 
        defer
      />
    </>
  );
}

export async function generateMetadata() {
  const post = await getPageBySlug('standard-residential-proxies');
  if (!post) return { title: 'Page Not Found' };
  return {
    title: post.title.rendered.replace(/<[^>]+>/g, ''),
    description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
  };
}