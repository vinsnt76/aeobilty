/**
 * AEObility Master Solutions & Pricing Overview Schema.org Graph Builder
 * Path: src/lib/schema/solutions.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getSolutionsSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/solutions#webpage",
      "url": "https://aeobility.com.au/solutions",
      "name": "Transparent AEO Solutions, Sprints & Pricing | AEObility",
      "description": "Explore transparent pricing models for Australian businesses. Standalone $995 AEObility Blueprint audit, fixed-scope micro-sprints from $495 AUD ex. GST, and Foundation Implementation.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/solutions#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/solutions#catalog"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/solutions#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/solutions#catalog",
      "name": "AEObility Master Service Solutions & Pricing Framework",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-blueprint",
          "name": "The AEObility Blueprint",
          "url": "https://aeobility.com.au/solutions/aeo-blueprint",
          "sku": "BPSTRAT",
          "price": "995.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "A standalone digital presence audit and prioritised 90-day execution roadmap. Price excludes GST.",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-micro-sprints",
          "name": "AEO Technical Micro-Sprints",
          "url": "https://aeobility.com.au/solutions/aeo-sprint",
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
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-foundation",
          "name": "Foundation Implementation",
          "url": "https://aeobility.com.au/solutions#solutions-foundation",
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
            "@id": "https://aeobility.com.au/#organization"
          }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/solutions#faq-solutions",
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
