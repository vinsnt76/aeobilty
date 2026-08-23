/**
 * AEObility Local Business Visibility Schema.org Graph Builder
 * Path: src/lib/schema/localBusinessAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getLocalBusinessAeoSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: any[] = [
    {
      "@type": "WebPage",
      "@id": "https://www.aeobility.com.au/services/aeo/local-business#webpage",
      "url": "https://www.aeobility.com.au/services/aeo/local-business",
      "name": "Local Search & AEO for Trades & Clinics | AEObility",
      "description": "Connect your trade service or clinic locations with local customers. Fixed-scope citation clean-up and local schema sprints from $495 ex. GST.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://www.aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://www.aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.aeobility.com.au/services/aeo/local-business#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.aeobility.com.au/services/aeo/local-business#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aeobility.com.au/services/aeo/local-business#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Local Business Visibility",
          "item": "https://www.aeobility.com.au/services/aeo/local-business"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.aeobility.com.au/services/aeo/local-business#service",
      "name": "Local Search & AEO for Trades & Clinics",
      "alternateName": "Local Business GEO & AEO Marketing",
      "description": "Fixed-scope local visibility sprints for trade services, medical clinics, and local providers across Perth and Australian markets.",
      "provider": {
        "@id": "https://www.aeobility.com.au/#organization"
      },
      "areaServed": [
        { "@type": "Country", "name": "Australia" },
        { "@type": "AdministrativeArea", "name": "Western Australia" },
        { "@type": "City", "name": "Perth" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian trades, medical clinics, professional service providers, and regional business owners"
      },
      "hasOfferCatalog": {
        "@id": "https://www.aeobility.com.au/services/aeo/local-business#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.aeobility.com.au/services/aeo/local-business#catalog",
      "name": "AEObility Local Business Visibility Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-proximity-sprint",
          "name": "Proximity Micro-Sprint",
          "sku": "SS1-SS4-MICRO",
          "price": "495.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "Target a defined local signal issue: Location Schema Injection ($495), Service Schema Injection ($495), or Citation Clean-Up & NAP Standardisation ($495 ex. GST).",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-blueprint",
          "name": "Local Visibility Blueprint",
          "sku": "BPSTRAT",
          "price": "995.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "Audit local profile structures, map coordinate logic, and existing structured data. Receive a practical 90-day regional execution roadmap. Price excludes GST.",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-foundation",
          "name": "Unified Local Foundation",
          "sku": "SS1-SS4-MACRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "3195.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "For multi-location clinics or growing trade services, combine your structured data, cross-directory consistency, and internal location page connections in a focused four-week engagement starting from $3,195 AUD ex. GST.",
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
      "@id": "https://www.aeobility.com.au/services/aeo/local-business#faq-local",
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
