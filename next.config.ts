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
