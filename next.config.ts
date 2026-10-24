import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-me",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-me",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
