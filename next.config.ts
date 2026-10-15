import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets phones on the local network load the dev server (HMR) from this machine's IP.
  allowedDevOrigins: ["192.168.29.189"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

