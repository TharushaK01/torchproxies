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

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.torchproxies.com" }, // ← Your WordPress backend domain
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
};

export default nextConfig;