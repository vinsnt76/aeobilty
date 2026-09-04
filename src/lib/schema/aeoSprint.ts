/**
 * AEObility AEO Technical Sprints Schema.org Modular Graph Specification
 * Path: src/lib/schema/aeoSprint.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAeoSprintSchemaGraph = (faqs: FaqItem[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#webpage",
        "url": "https://aeobility.com.au/solutions/aeo-sprint",
        "name": "AEO Technical Sprints & Schema Deployments | AEObility",
        "description": "Focused, fixed-scope implementation for websites, structured data and priority service pages. Micro-Sprints from $495 AUD ex. GST and Foundation Implementation from $3,195 AUD ex. GST.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#service"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#breadcrumb",
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
            "name": "AEO Technical Sprints",
            "item": "https://aeobility.com.au/solutions/aeo-sprint"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#service",
        "name": "AEO Technical Sprints",
        "description": "Fixed-scope implementation services for structured data, priority-page content and page structure. Available as individual Micro-Sprints or a broader Foundation Implementation engagement.",
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
        "hasOfferCatalog": {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#catalog"
        }
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#catalog",
        "name": "AEObility Technical Sprint Catalogue",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Micro-Sprints",
            "itemListElement": [
              {
                "@type": "Offer",
                "@id": "https://aeobility.com.au/solutions/aeo-sprint#offer-schema-sprint",
                "name": "Service or Location Schema Sprint",
                "url": "https://aeobility.com.au/solutions/aeo-sprint?service=schema-sprint",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "AEO Technical Micro-Sprint",
                "description": "Fixed-scope structured data implementation or improvement for one key service or location page. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://aeobility.com.au/solutions/aeo-sprint#schema-sprint"
                },
                "seller": {
                  "@id": "https://aeobility.com.au/#organisation"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://aeobility.com.au/solutions/aeo-sprint#offer-content-sprint",
                "name": "Single-Page Content Sprint",
                "url": "https://aeobility.com.au/solutions/aeo-sprint?service=content-sprint",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "AEO Technical Micro-Sprint",
                "description": "Fixed-scope rewrite of one priority client-facing page to improve clarity of services, answers and proof points. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://aeobility.com.au/solutions/aeo-sprint#content-sprint"
                },
                "seller": {
                  "@id": "https://aeobility.com.au/#organisation"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://aeobility.com.au/solutions/aeo-sprint#offer-page-structure-sprint",
                "name": "Page Structure & Search Intent Sprint",
                "url": "https://aeobility.com.au/solutions/aeo-sprint?service=page-structure-sprint",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "AEO Technical Micro-Sprint",
                "description": "Fixed-scope restructuring of headings and content sections for one critical landing page, based on customer search intent and information hierarchy. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://aeobility.com.au/solutions/aeo-sprint#page-structure-sprint"
                },
                "seller": {
                  "@id": "https://aeobility.com.au/#organisation"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Foundation Implementation",
            "itemListElement": [
              {
                "@type": "Offer",
                "@id": "https://aeobility.com.au/solutions/aeo-sprint#offer-foundation",
                "name": "Foundation Implementation",
                "url": "https://aeobility.com.au/solutions/aeo-sprint?service=foundation",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "3195.00",
                  "priceCurrency": "AUD",
                  "valueAddedTaxIncluded": false
                },
                "availability": "https://schema.org/InStock",
                "category": "AEO Foundation Implementation",
                "description": "Starting from $3,195 AUD excluding GST. A multi-page, multi-issue engagement covering agreed technical, content, internal linking and local business information improvements. Final pricing depends on confirmed scope.",
                "itemOffered": {
                  "@id": "https://aeobility.com.au/solutions/aeo-sprint#foundation-implementation"
                },
                "seller": {
                  "@id": "https://aeobility.com.au/#organisation"
                }
              }
            ]
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#schema-sprint",
        "name": "Service or Location Schema Sprint",
        "alternateName": "SS1",
        "description": "Structured data implementation or improvement for one key service or location page.",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses needing structured data for a service or location page"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#content-sprint",
        "name": "Single-Page Content Sprint",
        "alternateName": "SS2",
        "description": "A focused rewrite of one client-facing page to make services, answers and proof points easier for customers to understand.",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses with unclear or incomplete priority service-page content"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#page-structure-sprint",
        "name": "Page Structure & Search Intent Sprint",
        "alternateName": "SS3",
        "description": "A focused restructuring of headings, sections and information hierarchy for one critical landing page.",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses whose priority page has useful content but needs clearer structure"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#foundation-implementation",
        "name": "Foundation Implementation",
        "description": "A structured implementation engagement for businesses with multiple connected priorities across technical setup, priority pages, internal linking and local business information.",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses needing several connected website, content and local visibility improvements"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };
};
