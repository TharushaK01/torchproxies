const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "torchproxies.com" },
      { protocol: "https", hostname: "secure.gravatar.com" }, // ← author avatars
      { protocol: "https", hostname: "*.gravatar.com" },
    ],
  },
};
export default nextConfig;
