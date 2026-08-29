/**
 * AEObility Canonical AEO Hub Schema.org Graph Builder
 * Path: src/lib/schema/canonicalAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getCanonicalAeoSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: any[] = [
    {
      "@type": "WebPage",
      "@id": "https://www.aeobility.com.au/services/aeo#webpage",
      "url": "https://www.aeobility.com.au/services/aeo",
      "name": "AEO Services & Answer Engine Optimisation | AEObility",
      "description": "Restructure your digital footprint for AI-first search engines and modern discovery platforms. Explore our core AEO pillars, micro-sprints from $495 AUD ex. GST, and Foundation Implementation.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://www.aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://www.aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.aeobility.com.au/services/aeo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.aeobility.com.au/services/aeo#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aeobility.com.au/services/aeo#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aeobility.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.aeobility.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AEO Services",
          "item": "https://www.aeobility.com.au/services/aeo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.aeobility.com.au/services/aeo#service",
      "name": "AEO Services",
      "alternateName": "Answer Engine Optimisation (AEO) Services",
      "description": "Canonical AEO services restructuring digital presence for machine discovery, RAG retrieval accuracy, entity salience, and conversion rate optimisation.",
      "provider": {
        "@id": "https://www.aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian small businesses, e-commerce brands, trades, clinics, and professional service teams"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Search Engine Optimization",
          "sameAs": "https://www.wikidata.org/wiki/Q180711"
        },
        {
          "@type": "Thing",
          "name": "Large Language Model",
          "sameAs": "https://www.wikidata.org/wiki/Q115305900"
        },
        {
          "@type": "Thing",
          "name": "Retrieval-Augmented Generation",
          "sameAs": "https://www.wikidata.org/wiki/Q124316499"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Knowledge Graph",
          "sameAs": "https://www.wikidata.org/wiki/Q33002955"
        },
        {
          "@type": "Thing",
          "name": "Schema.org",
          "sameAs": "https://www.wikidata.org/wiki/Q3475335"
        },
        {
          "@type": "Thing",
          "name": "JSON-LD",
          "sameAs": "https://www.wikidata.org/wiki/Q15858694"
        },
        {
          "@type": "Thing",
          "name": "Vector Space Model",
          "sameAs": "https://www.wikidata.org/wiki/Q792224"
        }
      ],
      "subjectOf": [
        {
          "@type": "WebPage",
          "@id": "https://www.aeobility.com.au/services/aeo/definition",
          "name": "What is AEO (Definition)",
          "url": "https://www.aeobility.com.au/services/aeo/definition"
        },
        {
          "@type": "WebApplication",
          "@id": "https://www.aeobility.com.au/diagnostic#webapp",
          "name": "AI Visibility Diagnostic Engine",
          "url": "https://www.aeobility.com.au/diagnostic"
        },
        {
          "@type": "TechArticle",
          "@id": "https://www.aeobility.com.au/knowledge-hub/case-studies/baby-bento",
          "name": "Case Study: Baby Bento AI Search Visibility Success",
          "url": "https://www.aeobility.com.au/knowledge-hub/case-studies/baby-bento"
        },
        {
          "@type": "TechArticle",
          "@id": "https://www.aeobility.com.au/knowledge-hub/aeo#article",
          "name": "Answer Engine Optimisation Principles & Mechanics",
          "url": "https://www.aeobility.com.au/knowledge-hub/aeo"
        },
        {
          "@type": "TechArticle",
          "@id": "https://www.aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#article",
          "name": "What Is Positional Bias in Retrieval and Answer Engines?",
          "url": "https://www.aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval"
        },
        {
          "@type": "TechArticle",
          "@id": "https://www.aeobility.com.au/knowledge-hub/articles/entity-authority-building#article",
          "name": "Entity Authority: Why AI Search Ranks Entities Not Pages",
          "url": "https://www.aeobility.com.au/knowledge-hub/articles/entity-authority-building"
        },
        {
          "@type": "TechArticle",
          "@id": "https://www.aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#article",
          "name": "How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content",
          "url": "https://www.aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines"
        },
        {
          "@type": "TechArticle",
          "@id": "https://www.aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article",
          "name": "AI Search Optimisation with Retrieval-Augmented Generation (RAG)",
          "url": "https://www.aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://www.aeobility.com.au/services/aeo#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.aeobility.com.au/services/aeo#catalog",
      "name": "AEObility AEO Service Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo#offer-micro-sprint",
          "name": "AEO Technical Micro-Sprints",
          "sku": "SS1-SS4-MICRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Fixed-scope micro-sprints starting from $495 AUD ex. GST targeting one agreed priority: structured schema markup, page rewrites, internal linking or citation clean-up.",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo#offer-blueprint",
          "name": "The AEObility Blueprint",
          "sku": "BPSTRAT",
          "price": "995.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "A standalone digital presence audit and prioritised 90-day execution roadmap. Price excludes GST.",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo#offer-foundation",
          "name": "Foundation Implementation",
          "sku": "SS1-SS4-MACRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "3195.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "A focused four-week implementation engagement starting from $3,195 AUD ex. GST for multi-page connected improvements across structured data, content clarity, and internal linking.",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://www.aeobility.com.au/services/aeo#faq-aeo",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };
};
