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
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://torchproxies.com;
  img-src 'self' data: blob: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://www.google.com https://www.google-analytics.com https://*.google-analytics.com https://cms.torchproxies.com;
  frame-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    // Prevent browsers from sniffing MIME types (forces browser to adhere to declared Content-Type)
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Prevent Clickjacking by restricting framing to DENY or SAMEORIGIN
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // Control referrer leakage when navigating across origins
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Enforce HTTPS and prevent downgrade attacks for 2 years
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    // Restrict access to sensitive browser capabilities (camera, mic, geolocation)
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    // Restrict resource origins to mitigate XSS and injection vectors
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
];



const nextConfig = {
  trailingSlash: true,
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
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;