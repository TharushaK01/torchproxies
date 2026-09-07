// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "torchproxies.com" },
//       { protocol: "https", hostname: "secure.gravatar.com" }, // ← author avatars
//       { protocol: "https", hostname: "*.gravatar.com" },
//     ],
//   },
// };
// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   trailingSlash: true,
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "torchproxies.com" },
//       { protocol: "https", hostname: "secure.gravatar.com" }, // ← author avatars
//       { protocol: "https", hostname: "*.gravatar.com" },
//     ],
//   },
// };

/** @type {import('next').NextConfig} */

// img-src 'self' data: blob: https://cms.torchproxies.com;
// The Content Security Policy directive
const ContentSecurityPolicy: string = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.doubleclick.net https://www.googleadservices.com https://*.google.com https://*.google.lk;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://torchproxies.com;
  img-src 'self' data: blob: https: https://*.doubleclick.net https://*.google.com https://*.google.lk;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://*.google.com https://*.google.lk https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://www.googleadservices.com https://*.doubleclick.net https://cms.torchproxies.com;
  frame-src 'self' https://*.doubleclick.net https://*.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;
// .replace(/\s{2,}/g, " ")
// .trim();

const securityHeaders = [
  {
    // Prevent browsers from sniffing MIME types (forces browser to adhere to declared Content-Type)
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Prevent Clickjacking by restricting framing to DENY or SAMEORIGIN
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Control referrer leakage when navigating across origins
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Enforce HTTPS and prevent downgrade attacks for 2 years
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Restrict access to sensitive browser capabilities (camera, mic, geolocation)
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // Restrict resource origins to mitigate XSS and injection vectors
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
];

/** @type {import('next').NextConfig} */

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

export default nextConfig;
