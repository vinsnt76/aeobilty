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
      "name": "Answer Engine Optimisation (AEO) Services",
      "alternateName": "AEO & Structured Content Consultancy",
      "description": "Comprehensive AEO services restructing digital presence for machine discovery, RAG retrieval accuracy, entity salience, and conversion rate optimisation.",
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
