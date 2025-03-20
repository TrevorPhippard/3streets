import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL ?? "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        port: "",
        pathname: "**/*",
        search: ""
      }
    ]
  },
};

export default nextConfig;
