/**
 * AEObility Blueprint Strategic Audit Schema.org Graph Builder
 * Path: src/lib/schema/aeoBlueprint.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAeoBlueprintSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#webpage",
      "url": "https://aeobility.com.au/solutions/aeo-blueprint",
      "name": "The AEObility Blueprint: Deep Audit + 90-Day Roadmap",
      "description": "Get a deep technical audit and an actionable 90-day strategic roadmap for $995 AUD ex. GST. 100% of your $995 Blueprint fee is credited toward eligible implementation sprints.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organisation"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#breadcrumb",
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
          "name": "Solutions",
          "item": "https://aeobility.com.au/solutions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The AEObility Blueprint",
          "item": "https://aeobility.com.au/solutions/aeo-blueprint"
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product",
      "name": "The AEObility Blueprint",
      "image": "https://aeobility.com.au/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp",
      "description": "A comprehensive digital presence audit, technical gap analysis, and prioritised 90-day execution roadmap.",
      "sku": "BPSTRAT",
      "brand": {
        "@type": "Organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au"
      },
      "offers": {
        "@type": "Offer",
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#offer",
        "url": "https://aeobility.com.au/solutions/aeo-blueprint",
        "name": "AEObility Blueprint Strategic Audit",
        "sku": "BPSTRAT",
        "price": "995.00",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "valueAddedTaxIncluded": false,
          "description": "Excluding GST"
        },
        "seller": {
          "@id": "https://aeobility.com.au/#organisation"
        }
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#service",
      "name": "The AEObility Blueprint Strategic Audit",
      "alternateName": "BPSTRAT",
      "description": "A strategic digital presence audit and prioritised 90-day action plan covering website structure, structured data, business information, local tracking, and key service pages.",
      "provider": {
        "@id": "https://aeobility.com.au/#organisation"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian small businesses, agency teams and internal marketing teams"
      },
      "isRelatedTo": [
        {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#service"
        },
        {
          "@id": "https://aeobility.com.au/services/geo-marketing#service"
        },
        {
          "@id": "https://aeobility.com.au/services/aeo#service"
        }
      ],
      "offers": {
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#offer"
      }
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#faq",
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
