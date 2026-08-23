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
      "name": "Local Business Visibility across Maps & AI Search | AEObility",
      "description": "Improve how clearly your Australian business is represented across Search, Google Business Profile, Maps, local directories, and AI search engines. Micro-Sprints from $495 AUD ex. GST.",
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
      "name": "Local Business Visibility across Maps & AI Search",
      "alternateName": "Local Business GEO & AEO Marketing",
      "description": "Fixed-scope local visibility sprints for business details, citations, internal linking and Brand Facts pages across Perth and Australian markets.",
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
        "audienceType": "Australian trades, clinics, professional service providers, and local business owners"
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
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-citation-clean-up",
          "name": "Business Details & Citation Clean-Up Micro-Sprint",
          "sku": "SS4MICRO1",
          "price": "495.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "Review and correct core NAP details across priority local directories, website footers, and Google Business Profile. Price excludes GST.",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-local-internal-linking",
          "name": "Local Proximity & Internal-Linking Sprint",
          "sku": "SS3MICRO1",
          "price": "695.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "Connect priority location hubs, service pages, and supporting regional content with structured internal linking. Price excludes GST.",
          "seller": {
            "@id": "https://www.aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-blueprint",
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
          "@id": "https://www.aeobility.com.au/services/aeo/local-business#offer-local-foundation",
          "name": "Foundation Implementation",
          "sku": "SS1-SS4-MACRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "3195.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "A focused four-week implementation engagement starting from $3,195 AUD ex. GST for multi-page connected improvements across local entity profiles, internal linking, and service pages.",
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
