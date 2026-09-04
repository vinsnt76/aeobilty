/**
 * AEObility Canonical GEO Marketing Schema.org Graph Builder
 * Path: src/lib/schema/geoMarketing.ts
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const getGeoMarketingSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/geo-marketing#webpage",
      "url": "https://aeobility.com.au/services/geo-marketing",
      "name": "GEO Marketing Specialist & Services | AEObility",
      "description": "Target geographic engine optimisation (GEO) to dominate location-aware search spaces, map applications, and local discovery engines.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organisation"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/geo-marketing#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/geo-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/geo-marketing#breadcrumb",
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
          "name": "GEO Marketing Services",
          "item": "https://aeobility.com.au/services/geo-marketing"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aeobility.com.au/services/geo-marketing#perth-entity",
      "name": "AEObility GEO Marketing Perth Hub",
      "url": "https://aeobility.com.au/services/geo-marketing",
      "telephone": "+61480286282",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perth",
        "addressRegion": "Western Australia",
        "postalCode": "6000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9505,
        "longitude": 115.8605
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q408",
            "https://www.geonames.org/2077456/australia.html"
          ]
        },
        {
          "@type": "AdministrativeArea",
          "name": "Western Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3205",
            "https://www.geonames.org/2058645/western-australia.html"
          ]
        },
        {
          "@type": "City",
          "name": "Perth",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3183",
            "https://www.geonames.org/2063523/perth.html"
          ]
        }
      ],
      "parentOrganization": {
        "@id": "https://aeobility.com.au/#organisation"
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/geo-marketing#service",
      "name": "GEO Marketing Services",
      "alternateName": "Geographic Engine Optimisation (GEO) Services",
      "description": "Location-aware semantic web solutions anchoring physical business coordinates and verified local entity facts across map systems and conversational AI directories.",
      "provider": {
        "@id": "https://aeobility.com.au/services/geo-marketing#perth-entity"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q408",
            "https://www.geonames.org/2077456/australia.html"
          ]
        },
        {
          "@type": "AdministrativeArea",
          "name": "Western Australia",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3205",
            "https://www.geonames.org/2058645/western-australia.html"
          ]
        },
        {
          "@type": "City",
          "name": "Perth",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q3183",
            "https://www.geonames.org/2063523/perth.html"
          ]
        }
      ],
      "spatialCoverage": {
        "@type": "Place",
        "name": "AEObility HQ Footprint",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        }
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian trade operators, medical clinics, multi-location companies, and local service providers"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Local Search (Internet)",
          "sameAs": "https://www.wikidata.org/wiki/Q6664287"
        },
        {
          "@type": "Thing",
          "name": "Perth, Western Australia",
          "sameAs": "https://www.wikidata.org/wiki/Q3183"
        },
        {
          "@type": "Thing",
          "name": "Search Engine Optimisation",
          "sameAs": "https://www.wikidata.org/wiki/Q180711"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Knowledge Graph",
          "sameAs": "https://www.wikidata.org/wiki/Q33002955"
        }
      ],
      "subjectOf": [
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/geo",
          "name": "GEO vs Local SEO: Key Differences for AI & Map Discovery",
          "url": "https://aeobility.com.au/knowledge-hub/geo"
        },
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/services/aeo/local-business",
          "name": "Local Business Visibility across Maps & AI Search",
          "url": "https://aeobility.com.au/services/aeo/local-business"
        },
        {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/brand-facts#webpage",
          "name": "Verified Brand Facts & Canonical Entity Directory",
          "url": "https://aeobility.com.au/brand-facts"
        },
        {
          "@type": "WebApplication",
          "@id": "https://aeobility.com.au/diagnostic#webapp",
          "name": "AI Visibility Diagnostic Engine",
          "url": "https://aeobility.com.au/diagnostic"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/geo-marketing#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/geo-marketing#catalog",
      "name": "AEObility GEO Marketing Service Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "position": 1,
          "name": "Local Citation Clean-Up Sprint",
          "sku": "GEO-CITATION-SPRINT",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Fixed-scope micro-sprint resolving directory alignment issues, inconsistent phone entries, and unstructured address variations. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organisation" }
        },
        {
          "@type": "Offer",
          "position": 2,
          "name": "Local Internal-Linking Lattice Sprint",
          "sku": "GEO-LATTICE-SPRINT",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "695.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "Structured deployment connecting high-ranking technical articles with local commercial conversion pages using precise geographic intent mapping. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organisation" }
        },
        {
          "@type": "Offer",
          "position": 3,
          "name": "Local GEO Foundation Tier",
          "sku": "GEO-FOUNDATION-MACRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3195.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "A comprehensive four-week implementation building nested local business schema, verified map pins, and token-optimised coordinate boundaries. Price excludes GST.",
          "seller": { "@id": "https://aeobility.com.au/#organisation" }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/geo-marketing#faq-geo",
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
