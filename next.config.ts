import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@keystatic/core"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
