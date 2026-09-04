/**
 * AEObility AI Search Marketing & Strategy Schema.org Graph Builder
 * Path: src/lib/schema/aiSearchMarketing.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAiSearchMarketingSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#webpage",
      "url": "https://aeobility.com.au/services/ai-search-marketing",
      "name": "AI Search Marketing & Strategy | AEObility",
      "description": "Make your business easier for search engines, digital assistants and AI search systems to identify, understand, and reference. Strategy, audits and AEO sprints from $495 AUD ex. GST.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organisation"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/ai-search-marketing#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/ai-search-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aeobility.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://aeobility.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI Search Marketing",
          "item": "https://aeobility.com.au/services/ai-search-marketing"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#service",
      "name": "AI Search Marketing & Strategy",
      "alternateName": "Generative Search Strategy",
      "description": "Fixed-scope strategy and optimisation services that help Australian businesses improve machine discovery, vector retrieval accuracy, and citation share across AI platforms.",
      "provider": {
        "@id": "https://aeobility.com.au/#organisation"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian small businesses, internal marketing teams, and enterprise brand managers"
      },
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/ai-search-marketing#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#catalog",
      "name": "AEObility AI Search Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-micro-sprints",
          "name": "AEO Technical Micro-Sprints",
          "url": "https://aeobility.com.au/services/ai-search-marketing#ai-micro-sprints",
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
            "@id": "https://aeobility.com.au/#organisation"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-blueprint",
          "name": "The AEObility Blueprint",
          "url": "https://aeobility.com.au/solutions/aeo-blueprint",
          "sku": "BPSTRAT",
          "price": "995.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "A standalone digital presence audit and prioritised 90-day execution roadmap. Price excludes GST.",
          "seller": {
            "@id": "https://aeobility.com.au/#organisation"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/ai-search-marketing#offer-foundation",
          "name": "Foundation Implementation",
          "url": "https://aeobility.com.au/services/ai-search-marketing#ai-foundation",
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
            "@id": "https://aeobility.com.au/#organisation"
          }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/ai-search-marketing#faq-ai",
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
