import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "torchproxies.com",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com", // for author avatars
      },
    ],
  },
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "torchproxies.com",
//       },
//       {
//         protocol: "https",
//         hostname: "secure.gravatar.com",
//       },
//     ],
//   },

//   // ── Additions to help with the CSS preload warning ──
//   experimental: {
//     optimizeCss: true,           // Helps with CSS optimization
//   },

//   // Optional: Reduce console noise in development
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },

//   // Optional: Better webpack handling for large CSS
//   webpack: (config) => {
//     config.optimization = {
//       ...config.optimization,
//       splitChunks: {
//         ...config.optimization?.splitChunks,
//         cacheGroups: {
//           ...config.optimization?.splitChunks?.cacheGroups,
//           styles: {
//             name: "styles",
//             test: /\.css$/,
//             chunks: "all",
//             enforce: true,
//           },
//         },
//       },
//     };
//     return config;
//   },
// };

// export default nextConfig;