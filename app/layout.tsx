import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "TorchProxies — Premium Proxy Solutions",
    template: "%s | TorchProxies",      // e.g. "Blog | TorchProxies"
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
    <html lang="en">
      <body className="bg-[#0a0a0a] text-stone-100 flex flex-col min-h-screen antialiased">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}