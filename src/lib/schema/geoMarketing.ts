/**
 * AEObility GEO Marketing Services & Local Visibility Sprints Schema.org Graph Builder
 * Path: src/lib/schema/geoMarketing.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getGeoMarketingSchemaGraph = (faqs: FaqItem[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#webpage",
        "url": "https://www.aeobility.com.au/services/geo-marketing",
        "name": "GEO Marketing Services & Local Visibility Sprints | AEObility",
        "description": "Improve your local signal consistency across Search, Maps, and AI. Clean citations, fix internal linking, and deploy a Brand Facts page from $495 ex. GST.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://www.aeobility.com.au/#website"
        },
        "about": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.aeobility.com.au/services/geo-marketing#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://www.aeobility.com.au/services/geo-marketing#service"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#breadcrumb",
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
            "name": "GEO Marketing & Local Visibility",
            "item": "https://www.aeobility.com.au/services/geo-marketing"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#service",
        "name": "GEO Marketing & Local Visibility Sprints",
        "description": "Fixed-scope implementation services for local business citations, regional internal linking, and Brand Facts page creation.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian small businesses, local service providers, and multi-location organisations"
        },
        "hasOfferCatalog": {
          "@id": "https://www.aeobility.com.au/services/geo-marketing#catalog"
        }
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#catalog",
        "name": "AEObility Local Visibility Sprint Catalogue",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Local Micro-Sprints",
            "itemListElement": [
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-ss4micro1",
                "name": "Business Details & Citation Clean-Up",
                "url": "https://www.aeobility.com.au/services/geo-marketing#ss4micro1",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "GEO Local Micro-Sprint",
                "description": "Review and correct your core business details across priority directories, maps and local platforms. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#ss4micro1"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-ss3micro1",
                "name": "Local Internal-Linking Sprint",
                "url": "https://www.aeobility.com.au/services/geo-marketing#ss3micro1",
                "price": "695.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "GEO Local Micro-Sprint",
                "description": "Connect important location, service and supporting pages so visitors and search engines can navigate your local offering more easily. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#ss3micro1"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-ss4micro3",
                "name": "Brand Facts Page Creation",
                "url": "https://www.aeobility.com.au/services/geo-marketing#ss4micro3",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "GEO Local Micro-Sprint",
                "description": "Create one clear reference page covering your business, services, locations, contact details and key trust information. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#ss4micro3"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
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
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-foundation",
                "name": "Foundation Implementation",
                "url": "https://www.aeobility.com.au/services/geo-marketing#foundation-implementation",
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
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#foundation-implementation"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
                }
              }
            ]
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#ss4micro1",
        "name": "Business Details & Citation Clean-Up",
        "alternateName": "SS4MICRO1",
        "description": "Review and correct your core business details across priority directories, maps and local platforms.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#ss3micro1",
        "name": "Local Internal-Linking Sprint",
        "alternateName": "SS3MICRO1",
        "description": "Connect important location, service and supporting pages so visitors and search engines can navigate your local offering more easily.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#ss4micro3",
        "name": "Brand Facts Page Creation",
        "alternateName": "SS4MICRO3",
        "description": "Create one clear reference page covering your business, services, locations, contact details and key trust information.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#foundation-implementation",
        "name": "Foundation Implementation",
        "description": "A multi-page, multi-issue engagement covering agreed technical, content, internal linking and local business information improvements.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#faq",
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
