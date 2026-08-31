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
      "@id": "https://aeobility.com.au/services/aeo/shopify#webpage",
      "url": "https://aeobility.com.au/services/aeo/shopify",
      "name": "Shopify AEO & AI Search Optimisation | AEObility",
      "description": "Shopify AEO services for product data, structured data, collection-page content and store architecture. E-Commerce Blueprint from $995 AUD ex. GST, Micro-Sprints from $495 AUD ex. GST and Foundation Implementation from $3,195 AUD ex. GST.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/aeo/shopify#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo/shopify#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/aeo/shopify#breadcrumb",
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
          "name": "AEO & SEO",
          "item": "https://aeobility.com.au/services/aeo"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Shopify AEO",
          "item": "https://aeobility.com.au/services/aeo/shopify"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/shopify#service",
      "name": "Shopify AEO & AI Search Optimisation",
      "alternateName": "Shopify E-Commerce AEO",
      "description": "Fixed-scope Shopify services for product data, structured data, collection-page content and internal store architecture.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian Shopify merchants, e-commerce teams and Shopify developers"
      },
      "hasOfferCatalog": {
        "@id": "https://aeobility.com.au/services/aeo/shopify#catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/services/aeo/shopify#catalog",
      "name": "AEObility Shopify AEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo/shopify#offer-ecommerce-blueprint",
          "name": "E-Commerce Blueprint",
          "url": "https://aeobility.com.au/services/aeo/shopify?service=ecommerce-blueprint",
          "sku": "BPSTRAT",
          "price": "995.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "description": "A full Shopify store diagnostic and practical 90-day execution roadmap. Price excludes GST.",
          "itemOffered": {
            "@id": "https://aeobility.com.au/services/aeo/shopify#ecommerce-blueprint"
          },
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo/shopify#offer-product-data-micro-sprint",
          "name": "Product Data Micro-Sprint",
          "url": "https://aeobility.com.au/services/aeo/shopify?service=product-data-micro-sprint",
          "sku": "SS1-SS2-MICRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "495.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "A fixed-scope Shopify engagement for one agreed product-data, structured-data or collection-page priority. Final scope is confirmed before work begins.",
          "itemOffered": {
            "@id": "https://aeobility.com.au/services/aeo/shopify#product-data-micro-sprint"
          },
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/services/aeo/shopify#offer-store-foundation",
          "name": "Comprehensive Store Foundation",
          "url": "https://aeobility.com.au/services/aeo/shopify?service=shopify-foundation",
          "sku": "SHOPIFY-MACRO",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "3195.00",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "description": "A focused four-week Shopify implementation engagement for agreed improvements across product data, structured data, collection pages and internal linking. Final scope and price are confirmed before work begins.",
          "itemOffered": {
            "@id": "https://aeobility.com.au/services/aeo/shopify#store-foundation"
          },
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/shopify#ecommerce-blueprint",
      "name": "E-Commerce Blueprint",
      "alternateName": "BPSTRAT",
      "description": "A Shopify store diagnostic reviewing product data, structured data, site hierarchy and collection-page intent, with a 90-day execution roadmap.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/shopify#product-data-micro-sprint",
      "name": "Product Data Micro-Sprint",
      "alternateName": "SS1 / SS2",
      "description": "A fixed-scope Shopify sprint for one agreed product-data, structured-data or collection-page priority.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo/shopify#store-foundation",
      "name": "Comprehensive Store Foundation",
      "alternateName": "Shopify Foundation Implementation",
      "description": "A four-week implementation engagement for agreed improvements across priority Shopify product data, structured data, collection pages and internal linking.",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/aeo/shopify#faq",
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
