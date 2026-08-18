import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Inject Global CORS Headers for all external AI Agents
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ],
      },
    ];
  },

  // 2. Keep existing redirects intact
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
        source: '/knowledge-hub/digital-services',
        destination: '/knowledge-hub/tutorials',
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
        destination: '/knowledge-hub/articles/structured-data-query-fan-out',
        permanent: true,
      },
      {
        source: '/knowledge-hub/structured-data-query-fan-out',
        destination: '/knowledge-hub/articles/structured-data-query-fan-out',
        permanent: true,
      },
      {
        source: '/knowledge-hub/telemetry-diagnostic-architecture',
        destination: '/knowledge-hub/articles/telemetry-diagnostic-architecture',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/assets/geo-banner',
        destination: '/fix-local-discovery-with-geo-seo_AEObility.webp',
        permanent: true,
      },
      {
        source: '/knowledge-hub/entity-authority-building',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/knowledge-hub/entity-authority',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/entity-authority',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/knowledge-hub/aeo/entity-authority-building',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/freelance-ai-consultant-perth',
        destination: '/about/freelance-ai-consultant-perth',
        permanent: true,
      },
      {
        source: '/freelance-seo-consultant-perth',
        destination: '/about/freelance-seo-consultant-perth',
        permanent: true,
      },
      {
        source: '/freelance-google-ads-consultant-perth',
        destination: '/about/freelance-google-ads-consultant-perth',
        permanent: true,
      },
      {
        source: '/freelance-digital-specialist-perth',
        destination: '/about/freelance-digital-specialist-perth',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/get-in-touch',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/free-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/visibility-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/ai-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/ai-visibility-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/diagnostics',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/tools/diagnostic',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/knowledge-hub/competitor-overlap-semantic-dominance-framework',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/competitor-overlap',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/semantic-dominance-framework',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/competitor-overlap',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/semantic-dominance',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/packages/the-aeobility-blueprint',
        destination: '/solutions/aeo-blueprint',
        permanent: true,
      },
      {
        source: '/packages/aeo-blueprint',
        destination: '/solutions/aeo-blueprint',
        permanent: true,
      },
      {
        source: '/packages/aeo-sprints',
        destination: '/solutions/aeo-sprint',
        permanent: true,
      },
      {
        source: '/packages/the-aeobility-sprint',
        destination: '/solutions/aeo-sprint',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
