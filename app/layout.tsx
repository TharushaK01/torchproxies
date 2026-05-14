// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import { LazyMotion, domAnimation } from "framer-motion";

// export const metadata: Metadata = {
//   title: {
//     default: "TorchProxies — Premium Proxy Solutions",
//     template: "%s | TorchProxies",      // e.g. "Blog | TorchProxies"
//   },
//   description:
//     "Premium residential, datacenter, ISP and hybrid proxies for web scraping, ad verification, and account management.",
//   metadataBase: new URL("https://torchproxies.com"),
//   openGraph: {
//     siteName: "TorchProxies",
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>

//         {/* add this for residential standard page to fix the hydration error */}
//         <link
//           rel="stylesheet"
//           href="/_next/static/chunks/torchproxies_app_globals_03-haz8.css"
//           as="style"
//         />
//       </head>
//       <body className="bg-[#0a0a0a] text-stone-100 flex flex-col min-h-screen antialiased"
//         suppressHydrationWarning
//       >
//         <Navbar />
//         <div className="flex-1">
//           <LazyMotion features={domAnimation}>
//             {children}
//           </LazyMotion>

//         </div>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LazyMotion, domAnimation } from "framer-motion";

export const metadata: Metadata = {
  title: {
    default: "TorchProxies — Premium Proxy Solutions",
    template: "%s | TorchProxies",
  },
  description:
    "Premium residential, datacenter, ISP and hybrid proxies for web scraping, ad verification, and account management.",
  metadataBase: new URL("https://torchproxies.com"),
  openGraph: {
    siteName: "TorchProxies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Remove the broken _next/static link ──────── */}
        {/* ── Elementor core CSS ────────────────────────── */}
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-frontend.min.css"
        />
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css"
        />
        {/* ── WordPress block library CSS ───────────────── */}
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-includes/css/dist/block-library/style.min.css"
        />
          {/* ── Elementor widget CSS ──────────────────────── */}
  <link
    rel="stylesheet"
    href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css"
  />

      </head>
      <body
        className="bg-[#0a0a0a] text-stone-100 flex flex-col min-h-screen antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-1">
          <LazyMotion features={domAnimation}>
            {children}
          </LazyMotion>
        </div>
        <Footer />
      </body>
    </html>
  );
}