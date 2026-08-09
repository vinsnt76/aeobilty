// Auto-generated from AEObility -IA & SLM.csv - DO NOT EDIT DIRECTLY
export interface NavItemL2 {
  title: string;
  href: string;
  description?: string;
  entityName: string;
  isServicePillar?: boolean;
  isKnowledgeCapsule?: boolean;
  corridors?: Array<'phone' | 'scan' | 'blueprint' | 'contact'>;
}

export interface NavItemL1 {
  title: string;
  href?: string;
  children?: NavItemL2[];
}

export interface SubNavPillItem {
  title: string;
  url: string;
}

export const NAVIGATION_DATA: NavItemL1[] = [
  {
    "title": "Services",
    "href": "/services",
    "children": [
      {
        "title": "AEO & SEO",
        "href": "/services/aeo",
        "description": "Restructure your digital footprint for AI-first search engines and modern discovery platforms. Explore our four core AEO optimisation pillars.",
        "entityName": "Canonical AEO Hub",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "AI Search Marketing",
        "href": "/services/ai-search-marketing",
        "description": "Deploy optimisation strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.",
        "entityName": "AI Search Marketing",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "Local Business GEO",
        "href": "/services/aeo/local-business",
        "description": "Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.",
        "entityName": "AEO for Local Businesses",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "phone",
          "scan",
          "contact"
        ]
      },
      {
        "title": "GEO Marketing",
        "href": "/services/geo-marketing",
        "description": "Target geographic engine optimisation (GEO) to dominate location-aware search spaces, map applications, and local discovery engines.",
        "entityName": "GEO Marketing",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "phone",
          "scan",
          "contact"
        ]
      },
      {
        "title": "Ecommerce AEO",
        "href": "/services/aeo/shopify",
        "description": "Optimise your Shopify store for AI search, ChatGPT recommendations, and Google Merchant Center. Structured liquid refactoring and server-side rules.",
        "entityName": "AEO for Shopify",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AI Strategy",
        "href": "/services/aeo/procedures",
        "description": "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
        "entityName": "Best AEO Strategies",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AEO Services",
        "href": "/services",
        "description": "AEObility is an Australian AEO consultancy that helps local service businesses and SMBs in Perth, Australia become discoverable, understandable and recommended across Search, Maps and AI.",
        "entityName": "AEO Services",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "What is AEO (Definition)",
        "href": "/services/aeo/definition",
        "description": "Discover the definition of Answer Engine Optimisation (AEO) and learn how machine learning models read, index, and cite business information.",
        "entityName": "What is AEO (Definition)",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AEO vs SEO (Comparison)",
        "href": "/services/aeo/comparison",
        "description": "Compare legacy keyword-driven search ranking against dense retrieval vector systems. Learn why AI search shifts require a semantic lattice layout.",
        "entityName": "AEO vs SEO (Comparison)",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AEO Constraints",
        "href": "/services/aeo/constraints",
        "description": "Understand the current constraints and limitations of Answer Engine Optimisation (AEO). Discover how to navigate AI search challenges effectively today.",
        "entityName": "AEO Constraints",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AEO Costs & Timing",
        "href": "/services/aeo/costs-timing",
        "description": "Get transparent information on AEO costs and timing. Discover AEObility's optimisation pricing packages, milestones, and timelines for search visibility.",
        "entityName": "AEO Costs & Timing",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      }
    ]
  },
  {
    "title": "Packages",
    "href": "/solutions",
    "children": [
      {
        "title": "AEO Packages",
        "href": "/solutions",
        "description": "Explore our clear pricing models. From the $995 standalone MVP Strategic Blueprint to target optimisation implementation sprints.",
        "entityName": "AEO Packages",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "The AEObility Blueprint",
        "href": "/solutions/aeo-blueprint",
        "description": "Get a deep technical audit and an actionable 90-day strategic roadmap for $995. Fully credited back if you choose us for implementation.",
        "entityName": "The AEObility Blueprint",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AEO Sprints",
        "href": "/solutions/aeo-sprint",
        "description": "Accelerate your machine discovery with intensive execution sprints: custom nesting graphs, code refactoring, and atomic block rewrites.",
        "entityName": "AEO Sprints",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "GEO Services Sprint",
        "href": "/solutions/geo-services",
        "description": "Deploy location-aware optimisation rules. Clean coordinates, nested maps schema, and hyper-local citation structures to dominate regional search.",
        "entityName": "GEO Services Sprint",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "phone",
          "scan",
          "contact"
        ]
      }
    ]
  },
  {
    "title": "Knowledge Hub",
    "href": "/knowledge-hub",
    "children": [
      {
        "title": "Articles",
        "href": "/knowledge-hub/articles",
        "description": "Technical articles on AEO, RAG, and AI search indexing.",
        "entityName": "Articles",
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Guides",
        "href": "/knowledge-hub/aeo",
        "description": "Technical guide on how search bots parse files for direct citation extraction. Learn to maximize positional bias within text fields.",
        "entityName": "AEO Knowledge Node",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Case Studies",
        "href": "/knowledge-hub/case-studies",
        "description": "Read our case studies to see how AEObility helps Australian businesses improve their AI search visibility, traffic, and leads through expert strategies.",
        "entityName": "Case Studies",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Tutorials",
        "href": "/knowledge-hub/semantic-seo",
        "description": "Transition from legacy keyword strings to relational topic graphs. Learn to map RDF triples and build contextual entity salience.",
        "entityName": "Semantic SEO Node",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Knowledge Hub",
        "href": "/knowledge-hub",
        "description": "Access the industry-standard repository for machine ingestion strategies, advanced schema blueprints, and technical content templates.",
        "entityName": "Knowledge Hub",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "GEO Knowledge Node",
        "href": "/knowledge-hub/geo",
        "description": "Advanced techniques balancing localized map rankings and systemic generative visibility rules without triggering focus dilution gaps.",
        "entityName": "GEO Knowledge Node",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "phone",
          "scan",
          "contact"
        ]
      },
      {
        "title": "Case Study: Baby Bento",
        "href": "/knowledge-hub/case-studies/baby-bento",
        "description": "Discover how AEObility transformed Baby Bento's digital presence. Read the complete case study on our successful SEO and AI search marketing campaigns.",
        "entityName": "Case Study: Baby Bento",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "AEO vs SEO Guide",
        "href": "/knowledge-hub/articles/aeo-vs-seo",
        "description": "Learn how AEO (AI Engine Optimisation) differs from traditional SEO, why entity authority matters, and how brands can future‑proof visibility in AI search.",
        "entityName": "AEO vs SEO Guide",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "AI Search Optimisation",
        "href": "/knowledge-hub/articles/retrieval-augmented-generation",
        "description": "Understand how Retrieval‑Augmented Generation improves AI search accuracy, reduces hallucinations, and strengthens brand visibility across AI engines.",
        "entityName": "AI Search Optimisation",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Entity Authority Guide",
        "href": "/knowledge-hub/articles/entity-authority-building",
        "description": "Learn how entity authority building strengthens semantic search visibility, improves Answer Engine Optimisation and helps AI systems recognise and recommend your business.",
        "entityName": "Entity Authority Guide",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Positional Bias in Retrieval Guide",
        "href": "/knowledge-hub/articles/positional-bias-in-retrieval",
        "description": "Learn what positional bias is in AI search and LLMs, how retrieval and synthesis bottlenecks affect search visibility, and how to engineer content using the Positional Bias Audit Checklist.",
        "entityName": "Positional Bias in Retrieval Guide",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "AI Visibility Telemetry",
        "href": "/knowledge-hub/structured-data-query-fan-out",
        "description": "The proprietary algorithmic logging suite used by AEObility to track real-time citation share, model hallucination rates, and engine retrieval confidence across ChatGPT, Claude, and Perplexity.",
        "entityName": "AI Visibility Telemetry",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Competitor Overlap & Semantic Dominance Framework",
        "href": "/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
        "description": "Learn how AEObility evaluates competitor overlap, semantic dominance, and AI search readiness. Discover how your business compares to competitors and what to fix first.",
        "entityName": "Competitor Overlap & Semantic Dominance Framework",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      }
    ]
  },
  {
    "title": "About",
    "href": "/about"
  },
  {
    "title": "Contact",
    "href": "/contact"
  }
];

export const FOOTER_NAVIGATION: NavItemL2[] = [
  {
    "title": "Privacy Policy",
    "href": "/privacy",
    "description": "Read the AEObility privacy policy to understand how we securely collect, use, and protect your personal information across our digital platforms.",
    "entityName": "Privacy Policy",
    "isServicePillar": false,
    "isKnowledgeCapsule": false,
    "corridors": [
      "scan",
      "contact"
    ]
  },
  {
    "title": "Terms of Service",
    "href": "/terms",
    "description": "Review the terms of service for AEObility. Learn about our service agreements, AI search marketing terms, and standard client policies.",
    "entityName": "Terms of Service",
    "isServicePillar": false,
    "isKnowledgeCapsule": false,
    "corridors": [
      "scan",
      "contact"
    ]
  }
];

export const HUB_SUBNAV_MAPS: Record<string, SubNavPillItem[]> = {
  "aeo": [
    {
      "title": "AEO Hub",
      "url": "/services/aeo"
    },
    {
      "title": "What is AEO?",
      "url": "/services/aeo/definition"
    },
    {
      "title": "AEO vs SEO",
      "url": "/services/aeo/comparison"
    },
    {
      "title": "Best Strategies",
      "url": "/services/aeo/procedures"
    },
    {
      "title": "Constraints",
      "url": "/services/aeo/constraints"
    },
    {
      "title": "Costs & Timing",
      "url": "/services/aeo/costs-timing"
    },
    {
      "title": "Shopify AEO",
      "url": "/services/aeo/shopify"
    },
    {
      "title": "Local Business",
      "url": "/services/aeo/local-business"
    }
  ],
  "services": [
    {
      "title": "Services Hub",
      "url": "/services"
    },
    {
      "title": "AEO & SEO",
      "url": "/services/aeo"
    },
    {
      "title": "AI Search Marketing",
      "url": "/services/ai-search-marketing"
    },
    {
      "title": "Local Business GEO",
      "url": "/services/aeo/local-business"
    },
    {
      "title": "GEO Marketing",
      "url": "/services/geo-marketing"
    },
    {
      "title": "Ecommerce AEO",
      "url": "/services/aeo/shopify"
    },
    {
      "title": "AI Strategy",
      "url": "/services/aeo/procedures"
    }
  ],
  "knowledgeHub": [
    {
      "title": "Knowledge Hub",
      "url": "/knowledge-hub"
    },
    {
      "title": "Articles",
      "url": "/knowledge-hub/articles"
    },
    {
      "title": "Guides",
      "url": "/knowledge-hub/aeo"
    },
    {
      "title": "Case Studies",
      "url": "/knowledge-hub/case-studies"
    },
    {
      "title": "Tutorials",
      "url": "/knowledge-hub/semantic-seo"
    }
  ],
  "solutions": [
    {
      "title": "Packages Overview",
      "url": "/solutions"
    },
    {
      "title": "AEO Blueprint",
      "url": "/solutions/aeo-blueprint"
    },
    {
      "title": "AEO Sprints",
      "url": "/solutions/aeo-sprint"
    },
    {
      "title": "GEO Services",
      "url": "/solutions/geo-services"
    },
    {
      "title": "Visibility Scan",
      "url": "/diagnostic"
    }
  ]
};
