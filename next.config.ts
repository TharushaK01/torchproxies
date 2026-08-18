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
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "torchproxies.com" },
      { protocol: "https", hostname: "secure.gravatar.com" }, // ← author avatars
      { protocol: "https", hostname: "*.gravatar.com" },
    ],
  },
};

export default nextConfig;