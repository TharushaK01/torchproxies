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








// import type { Metadata } from "next";
// import Script from "next/script";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import ChatWidget from "@/components/analytics/ChatWidget";
// import SessionRecorder from "@/components/analytics/SessionRecorder";
// import { PostHogProvider } from "@/components/providers/PostHogProvider";
// import { LazyMotion, domAnimation } from "framer-motion";
// import { GoogleTagManager } from "@next/third-parties/google";
// import {
//   Urbanist,
//   Chivo,
//   Space_Grotesk,
//   Inter,
//   Source_Code_Pro,
// } from "next/font/google";
// import "./globals.css";

// const urbanist = Urbanist({
//   subsets: ["latin"],
//   variable: "--font-urbanist",
//   display: "swap",
// });
// const chivo = Chivo({
//   subsets: ["latin"],
//   variable: "--font-chivo",
//   display: "swap",
// });
// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space-grotesk",
//   display: "swap",
// });
// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-inter",
//   display: "swap",
// });
// const sourceCodePro = Source_Code_Pro({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-source-code-pro",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: {
//     default: "TorchProxies — Premium Proxy Solutions",
//     template: "%s | TorchProxies",
//   },
//   description:
//     "Premium residential, datacenter, ISP and hybrid proxies for web scraping, ad verification, and account management.",
//   metadataBase: new URL('https://www.torchproxies.com'),
//   alternates: {
//     canonical: './', 
//   },
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
//   const gtmIdSecondary =
//     process.env.NEXT_PUBLIC_GTM_SECONDARY_ID || "GTM-T43L54DD";

//   const fontVars = [
//     urbanist.variable,
//     chivo.variable,
//     spaceGrotesk.variable,
//     inter.variable,
//     sourceCodePro.variable,
//   ].join(" ");

//   return (
//     <html lang="en" suppressHydrationWarning className={fontVars}>
//       <body
//         className="bg-[#0A0A0A] text-stone-100 flex flex-col min-h-screen antialiased"
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

//           {/* Third-party lazy widgets */}
//           <ChatWidget />
//           <SessionRecorder />
//         </PostHogProvider>

//         {gaId ? (
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
//         ) : null}

//         {gtmIdPrimary ? <GoogleTagManager gtmId={gtmIdPrimary} /> : null}
//         {gtmIdSecondary ? <GoogleTagManager gtmId={gtmIdSecondary} /> : null}
//       </body>
//     </html>
//   );
// }




import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/analytics/ChatWidget";
import SessionRecorder from "@/components/analytics/SessionRecorder";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { LazyMotion, domAnimation } from "framer-motion";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  Urbanist,
  Chivo,
  Space_Grotesk,
  Inter,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});
const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TorchProxies — Premium Proxy Solutions",
    template: "%s | TorchProxies",
  },
  description:
    "Premium residential, datacenter, ISP and hybrid proxies for web scraping, ad verification, and account management.",
  metadataBase: new URL('https://www.torchproxies.com'),
  alternates: {
    canonical: './', 
  },
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

  const fontVars = [
    urbanist.variable,
    chivo.variable,
    spaceGrotesk.variable,
    inter.variable,
    sourceCodePro.variable,
  ].join(" ");

  return (
    <html lang="en" suppressHydrationWarning className={fontVars}>
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

          {/* Third-party lazy widgets */}
          <ChatWidget />
          <SessionRecorder />
        </PostHogProvider>

        {/* PostHog Analytics Script */}
        <Script id="posthog-analytics" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="Tl Ml El Il Al init Xl tu Jl Kl nu ho Yl au Gl capture getExtension eu xl vu calculateEventProperties du register register_once register_for_session unregister unregister_for_session gu Ql cu getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync mu identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset yu shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty fu uu createPersonProfile setInternalOrTestUser pu Fl Ol opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing ou debug do ts getPageViewId captureTraceFeedback captureTraceMetric zl".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_uXMyYpAt2kHNscqgXIRjc3o3MyShzMWbqJPDhjxDdCq', {
                api_host: 'https://us.i.posthog.com',
                defaults: '2026-05-30',
                person_profiles: 'identified_only',
            });
          `}
        </Script>

        {gaId ? (
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
        ) : null}

        {gtmIdPrimary ? <GoogleTagManager gtmId={gtmIdPrimary} /> : null}
        {gtmIdSecondary ? <GoogleTagManager gtmId={gtmIdSecondary} /> : null}
      </body>
    </html>
  );
}