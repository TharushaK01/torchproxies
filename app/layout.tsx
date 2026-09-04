// import type { Metadata } from "next";
// import Script from "next/script";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import ChatWidget from "@/components/analytics/ChatWidget";
// import SessionRecorder from "@/components/analytics/SessionRecorder";
// import { PostHogProvider } from "@/components/providers/PostHogProvider";
// import { LazyMotion, domAnimation } from "framer-motion";
// import { GoogleTagManager } from "@next/third-parties/google";

// export const metadata: Metadata = {
//   title: {
//     default: "TorchProxies — Premium Proxy Solutions",
//     template: "%s | TorchProxies",
//   },
//   description:
//     "Premium residential, datacenter, ISP and hybrid proxies for web scraping, ad verification, and account management.",
//   metadataBase: new URL("https://torchproxies.com"),
//   openGraph: {
//     siteName: "TorchProxies",
//     type: "website",
//     images: [
//       {
//         url: "/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "TorchProxies Preview",
//       },
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-1498Q5L7EG";
//   const gtmIdPrimary = process.env.NEXT_PUBLIC_GTM_PRIMARY_ID || "GTM-KMRQ2MK3";
//   const gtmIdSecondary = process.env.NEXT_PUBLIC_GTM_SECONDARY_ID || "GTM-T43L54DD";

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         {/* Google Fonts Preconnects */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />

//         {/* Fonts */}
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css?family=Urbanist%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CChivo%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap"
//         />
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap"
//         />

//         {/* Elementor & WordPress CSS */}
//         <link
//           rel="stylesheet"
//           href="https://torchproxies.com/wp-content/plugins/elementor/assets/css/frontend.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://torchproxies.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://torchproxies.com/wp-includes/css/dist/block-library/style.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-frontend.min.css"
//         />
//       </head>

//       <body
//         className="bg-[#0a0a0a] text-stone-100 flex flex-col min-h-screen antialiased"
//         suppressHydrationWarning
//       >
//         <PostHogProvider>
//           <Navbar />
//           <div className="flex-1">
//             <LazyMotion features={domAnimation}>{children}</LazyMotion>
//           </div>
//           <div className="relative z-0 isolate">
//             <Footer />
//           </div>

//           {/* Third-Party Lazy Widgets */}
//           <ChatWidget />
//           <SessionRecorder />
//         </PostHogProvider>

//         {/* Analytics Scripts placed inside body */}
//         {gaId && (
//           <>
//             <Script
//               src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
//               strategy="afterInteractive"
//             />
//             <Script id="google-analytics" strategy="afterInteractive">
//               {`
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${gaId}');
//               `}
//             </Script>
//           </>
//         )}

//         {gtmIdPrimary && <GoogleTagManager gtmId={gtmIdPrimary} />}
//         {gtmIdSecondary && <GoogleTagManager gtmId={gtmIdSecondary} />}
//       </body>
//     </html>
//   );
// }






import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/analytics/ChatWidget";
import SessionRecorder from "@/components/analytics/SessionRecorder";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { LazyMotion, domAnimation } from "framer-motion";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "TorchProxies — Premium Proxy Solutions",
    template: "%s | TorchProxies",
  },
  description:
    "Premium residential, datacenter, ISP and hybrid proxies for web scraping, ad verification, and account management.",
  metadataBase: new URL("https://www.torchproxies.com"), // was https://torchproxies.com (redirects to www)
  openGraph: {
    siteName: "TorchProxies",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TorchProxies Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-1498Q5L7EG";
  const gtmIdPrimary = process.env.NEXT_PUBLIC_GTM_PRIMARY_ID || "GTM-KMRQ2MK3";
  const gtmIdSecondary =
    process.env.NEXT_PUBLIC_GTM_SECONDARY_ID || "GTM-T43L54DD";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Urbanist%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CChivo%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSpace%20Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap"
        />

        {/* Elementor & WordPress CSS */}
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-content/plugins/elementor/assets/css/frontend.min.css"
        />
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css"
        />
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-includes/css/dist/block-library/style.min.css"
        />
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css"
        />
        <link
          rel="stylesheet"
          href="https://torchproxies.com/wp-content/uploads/elementor/css/custom-frontend.min.css"
        />
      </head>

      <body
        className="bg-[#0A0A0A] text-stone-100 flex flex-col min-h-screen antialiased"
        suppressHydrationWarning
      >
        <PostHogProvider>
          <Navbar />
          <div className="flex-1">
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
          </div>
          <div className="relative z-0 isolate">
            <Footer />
          </div>

          {/* Third-Party Lazy Widgets */}
          <ChatWidget />
          <SessionRecorder />
        </PostHogProvider>

        {/* GA4 — loaded directly via gtag.
            Make sure NEITHER GTM container also has a GA4 Config tag for this ID,
            or pageviews/events will be counted twice. */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        {gtmIdPrimary && <GoogleTagManager gtmId={gtmIdPrimary} />}
        {gtmIdSecondary && <GoogleTagManager gtmId={gtmIdSecondary} />}
      </body>
    </html>
  );
}