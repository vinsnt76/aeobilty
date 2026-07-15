import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/my-portfolio',
        destination: '/about/freelance-digital-specialist-perth',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
