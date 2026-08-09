export interface NavItemL2 {
  title: string;
  href: string;
  description?: string;
  entityName: string;
}

export interface NavItemL1 {
  title: string;
  href?: string;
  children?: NavItemL2[];
}

export const NAVIGATION_DATA: NavItemL1[] = [
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Services Overview",
        href: "/services",
        description: "Complete Answer Engine & AI search optimization services overview.",
        entityName: "AEObility Services Overview"
      },
      {
        title: "AEO Services",
        href: "/services/aeo",
        description: "Answer Engine Optimisation architecture and SLM entity grounding.",
        entityName: "Answer Engine Optimisation Services"
      },
      {
        title: "Shopify AEO Services",
        href: "/services/aeo/shopify",
        description: "SSR Liquid refactoring, RAG chunking, and catalog feed engineering.",
        entityName: "Shopify AEO Services"
      },
      {
        title: "AI Search Marketing",
        href: "/services/ai-search-marketing",
        description: "ChatGPT, Perplexity, and Google AI Overviews recommendation strategy.",
        entityName: "AI Search Marketing & Recommendation Strategy"
      },
      {
        title: "Local & GEO Map Marketing",
        href: "/services/geo-marketing",
        description: "Google Maps, Apple Maps, and local vector search dominance.",
        entityName: "GEO Marketing & Geolocation Feeds"
      }
    ]
  },
  {
    title: "Packages",
    href: "/solutions",
    children: [
      {
        title: "Solutions Overview",
        href: "/solutions",
        description: "Turnkey AEO blueprints and technical execution sprints.",
        entityName: "AEObility Solutions Overview"
      },
      {
        title: "The AEObility Blueprint",
        href: "/solutions/aeo-blueprint",
        description: "90-day comprehensive AI search & ingestion roadmap ($995).",
        entityName: "AEObility 90-Day Blueprint"
      },
      {
        title: "AEO Technical Sprints",
        href: "/solutions/aeo-sprint",
        description: "Rapid Liquid schema refactoring and entity grounding sprints.",
        entityName: "AEO Execution Sprints"
      },
      {
        title: "GEO Services Sprint",
        href: "/solutions/geo-services",
        description: "Local entity corroboration and Google Business Profile vector optimization.",
        entityName: "GEO Local Entity Sprints"
      }
    ]
  },
  {
    title: "Knowledge Hub",
    href: "/knowledge-hub",
    children: [
      {
        title: "Hub Overview",
        href: "/knowledge-hub",
        description: "Educational insights on AI search, RAG, and entity authority.",
        entityName: "AEO Knowledge Hub Overview"
      },
      {
        title: "AEO Core Principles",
        href: "/knowledge-hub/aeo",
        description: "Fundamental mechanics of Answer Engine Optimisation.",
        entityName: "AEO Core Principles"
      },
      {
        title: "AI Semantic SEO",
        href: "/knowledge-hub/semantic-seo",
        description: "Semantic density, schema graphs, and vector indexing.",
        entityName: "AI Semantic SEO Guide"
      },
      {
        title: "GEO & Local Matrix",
        href: "/knowledge-hub/geo",
        description: "Geographic entity mapping and multi-node corroboration.",
        entityName: "GEO Local Matrix"
      },
      {
        title: "Articles & Guides",
        href: "/knowledge-hub/articles",
        description: "Field-journal guides on LLM retrieval and search engineering.",
        entityName: "AEO Articles & Technical Guides"
      }
    ]
  },
  {
    title: "About",
    href: "/about",
    children: [
      {
        title: "About Us",
        href: "/about",
        description: "Vinnie Baker & AEObility practitioner background.",
        entityName: "About AEObility"
      },
      {
        title: "Support & Contact",
        href: "/contact",
        description: "Get in touch or request a manual AI visibility audit.",
        entityName: "AEObility Support & Contact"
      }
    ]
  }
];
