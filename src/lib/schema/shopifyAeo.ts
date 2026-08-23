/**
 * AEObility Shopify E-Commerce AEO & Product Visibility Schema.org Graph Builder
 * Path: src/lib/schema/shopifyAeo.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getShopifyAeoSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: any[] = [
    {
      "@type": "WebPage",
      "@id": "https://www.aeobility.com.au/services/aeo/shopify#webpage",
      "url": "https://www.aeobility.com.au/services/aeo/shopify",
      "name": "Shopify AEO & AI Search Optimisation | AEObility",
      "description": "Improve how Search, Maps, and AI platforms discover, read and recommend your Shopify store. Product schema, collection structure, and AEO sprints from $495 ex. GST.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://www.aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://www.aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.aeobility.com.au/services/aeo/shopify#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://www.aeobility.com.au/services/aeo/shopify#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aeobility.com.au/services/aeo/shopify#breadcrumb",
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
          "name": "Shopify AEO",
          "item": "https://www.aeobility.com.au/services/aeo/shopify"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.aeobility.com.au/services/aeo/shopify#service",
      "name": "Shopify AI Search Marketing & Product Visibility",
      "alternateName": "Shopify AEO Services",
      "description": "Fixed-scope optimization services that help Australian e-commerce businesses improve product schema markup, collection page structure, and AI search visibility.",
      "provider": {
        "@id": "https://www.aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Shopify store owners, Australian e-commerce brands, and digital retail teams"
      },
      "hasOfferCatalog": {
        "@id": "https://www.aeobility.com.au/services/aeo/shopify#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.aeobility.com.au/services/aeo/shopify#catalog",
      "name": "AEObility Shopify E-Commerce Engagement Catalogue",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "@id": "https://www.aeobility.com.au/services/aeo/shopify#micro-sprints",
          "name": "Shopify Micro-Sprints & Strategic Audits",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://www.aeobility.com.au/services/aeo/shopify#offer-blueprint",
              "name": "E-Commerce Blueprint",
              "url": "https://www.aeobility.com.au/solutions/aeo-blueprint",
              "sku": "BPSTRAT",
              "price": "995.00",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock",
              "category": "Strategic Audit",
              "description": "Audit your product feed schema, website hierarchy, and collection intent matching. Receive a practical 90-day execution roadmap. Price excludes GST.",
              "seller": {
                "@id": "https://www.aeobility.com.au/#organization"
              }
            },
            {
              "@type": "Offer",
              "@id": "https://www.aeobility.com.au/services/aeo/shopify#offer-product-schema",
              "name": "Product Data & Schema Micro-Sprint",
              "url": "https://www.aeobility.com.au/services/aeo/shopify#product-schema",
              "sku": "SS1MICRO1",
              "price": "495.00",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock",
              "category": "Shopify Micro-Sprint",
              "description": "Add or clean up Product, Offer, AggregateRating or Brand JSON-LD schema for priority Shopify products. Price excludes GST.",
              "seller": {
                "@id": "https://www.aeobility.com.au/#organization"
              }
            },
            {
              "@type": "Offer",
              "@id": "https://www.aeobility.com.au/services/aeo/shopify#offer-collection-rewrite",
              "name": "Collection Page Rewrite Micro-Sprint",
              "url": "https://www.aeobility.com.au/services/aeo/shopify#collection-rewrite",
              "sku": "SS2MICRO1",
              "price": "495.00",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock",
              "category": "Shopify Micro-Sprint",
              "description": "Rewrite one priority collection page so its product categories, buyer answers, and trust signals are clear for customers and AI platforms. Price excludes GST.",
              "seller": {
                "@id": "https://www.aeobility.com.au/#organization"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "@id": "https://www.aeobility.com.au/services/aeo/shopify#foundation-catalog",
          "name": "Shopify Foundation Implementation",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://www.aeobility.com.au/services/aeo/shopify#offer-foundation",
              "name": "Shopify Foundation Implementation",
              "url": "https://www.aeobility.com.au/services/aeo/shopify#store-foundation",
              "sku": "SS1-SS4-MACRO",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "3195.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": false
              },
              "availability": "https://schema.org/InStock",
              "category": "Shopify Foundation Implementation",
              "description": "Starting from $3,195 AUD excluding GST. Combine your highest-priority technical data, internal contextual linking, and content fixes into one focused four-week engagement.",
              "seller": {
                "@id": "https://www.aeobility.com.au/#organization"
              }
            }
          ]
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://www.aeobility.com.au/services/aeo/shopify#faq",
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
