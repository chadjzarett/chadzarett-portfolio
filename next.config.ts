import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The standalone AI page was folded into the home page.
      { source: "/ai", destination: "/#ai", permanent: true },
    ];
  },
};

export default nextConfig;
