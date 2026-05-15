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
  {/* ── Google Fonts ──────────────────────────────────── */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

  {/* Urbanist + Chivo + Space Grotesk */}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Urbanist%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CChivo%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap"
  />

  {/* Inter + Source Code Pro */}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap"
  />

  {/* ── Elementor core CSS ────────────────────────────── */}
  <link rel="stylesheet"
    href="https://torchproxies.com/wp-content/plugins/elementor/assets/css/frontend.min.css" />
  <link rel="stylesheet"
    href="https://torchproxies.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css" />

  {/* ── WordPress block library CSS ───────────────────── */}
  <link rel="stylesheet"
    href="https://torchproxies.com/wp-includes/css/dist/block-library/style.min.css" />

  {/* ── Elementor widget CSS ──────────────────────────── */}
  <link rel="stylesheet"
    href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css" />
  <link rel="stylesheet"
    href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-frontend.min.css" />
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