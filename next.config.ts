import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/my-portfolio',
        destination: '/about/freelance-digital-specialist-perth',
        permanent: true,
      },
      {
        source: '/knowledge-hub/aeo/rag-misconceptions',
        destination: '/knowledge-hub/articles/retrieval-augmented-generation#rag-misconceptions',
        permanent: true,
      },
      {
        source: '/knowledge-hub/aeo/rag-faq',
        destination: '/knowledge-hub/articles/retrieval-augmented-generation#rag-faq',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
