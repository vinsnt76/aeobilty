import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aeobility.com.au',
          },
        ],
        destination: 'https://aeobility.com.au/:path*',
        permanent: true,
      },
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
      {
        source: '/knowledge-hub/articles/semantic-seo-vs-aeo',
        destination: '/knowledge-hub/semantic-seo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/positional-bias-mitigation',
        destination: '/knowledge-hub/articles/positional-bias-in-retrieval',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/ai-visibility-telemetry',
        destination: '/knowledge-hub/structured-data-query-fan-out',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
