import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */

// Content Security Policy directive
const ContentSecurityPolicy: string = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.doubleclick.net https://*.googleadservices.com https://*.googlesyndication.com https://*.google.com https://*.google.lk https://static.cloudflareinsights.com https://us-assets.i.posthog.com https://*.openai.com https://bzrcdn.openai.com https://connect.facebook.net https://www.redditstatic.com https://*.reddit.com https://static.ads-twitter.com https://*.betterstack.com https://*.amazonaws.com https://chatwoot.trytorchlabs.com;",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://torchproxies.com https://*.betterstack.com;",
  "img-src 'self' data: blob: https: https://*.doubleclick.net https://*.google.com https://*.google.lk https://www.facebook.com https://*.reddit.com;",
  "font-src 'self' https://fonts.gstatic.com;",
  "connect-src 'self' https://*.google.com https://*.google.lk https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.googleadservices.com https://*.googlesyndication.com https://*.doubleclick.net https://cloudflareinsights.com https://us.i.posthog.com https://us-assets.i.posthog.com https://connect.facebook.net https://cms.torchproxies.com https://*.openai.com https://bzrcdn.openai.com https://*.reddit.com https://*.betterstack.com https://chatwoot.trytorchlabs.com wss://chatwoot.trytorchlabs.com;",
  "worker-src 'self' blob:;",
  "frame-src 'self' https://*.doubleclick.net https://*.google.com https://*.googlesyndication.com https://chatwoot.trytorchlabs.com;",
  "object-src 'none';",
  "base-uri 'self';",
  "form-action 'self';",
  "frame-ancestors 'none';",
  "upgrade-insecure-requests;",
].join(" ");

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
];

const nextConfig = {
  // Prevent Next.js from forcing trailing slashes on static asset requests
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.torchproxies.com" }, // ← WordPress backend domain
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "*.gravatar.com" },
    ],
  },
  // 301 Permanent Redirects for SEO & URL Cleanup
  async redirects() {
    return [
      {
        source: "/proxy-dashboard",
        destination: "https://www.torchproxies.com/b2b-dashboard",
        permanent: true,
      },
      {
        source: "/find-phone-number-using-ip-address",
        destination:
          "https://www.torchproxies.com/blog/find-phone-number-using-ip-address/",
        permanent: true,
      },
      {
        source:
          "/roblox-alt-account-detection-in-2026-what-the-ban-api-actually-checks",
        destination:
          "https://www.torchproxies.com/blog/roblox-alt-account-detection-in-2026-what-the-ban-api-actually-checks/",
        permanent: true,
      },
      {
        source: "/unblock-proxy-guide-youtube-2025",
        destination:
          "https://www.torchproxies.com/blog/youtube-unblock-proxy-what-works-in-2026/",
        permanent: true,
      },
      {
        source: "/what-are-virgin-proxies-explained-2026",
        destination:
          "https://www.torchproxies.com/blog/what-are-virgin-proxies-explained-2026/",
        permanent: true,
      },
      {
        source: "/manage-multiple-discord-accounts-without-getting-banned-2026",
        destination:
          "https://www.torchproxies.com/blog/manage-multiple-discord-accounts-without-getting-banned-2026/",
        permanent: true,
      },
      {
        source: "/x-residential-proxies",
        destination: "https://www.torchproxies.com/plan-x-residential",
        permanent: true,
      },
      {
        source: "/best-proxies-for-pokemon-go",
        destination:
          "https://www.torchproxies.com/blog/best-proxies-for-pokemon-go/",
        permanent: true,
      },
      {
        source:
          "/best-proxies-for-instagram-accounts-in-2026-which-type-actually-works",
        destination:
          "https://www.torchproxies.com/blog/best-proxies-for-instagram-accounts-in-2026-which-type-actually-works",
        permanent: true,
      },
    ];
  },
  // Automatically proxy WordPress media files to FASTPANEL backend
  async rewrites() {
    return [
      {
        source: "/wp-content/:path*",
        destination: "https://cms.torchproxies.com/wp-content/:path*",
      },
      {
        source: "/wp-includes/:path*",
        destination: "https://cms.torchproxies.com/wp-includes/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes in the application
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: "torch-labs",
  project: "torchproxies-web",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors.
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
