/**
 * AEObility GEO Marketing Services & Local Visibility Sprints Schema.org Graph Builder
 * Path: src/lib/schema/geoMarketing.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getGeoMarketingSchemaGraph = (_faqs?: FaqItem[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#webpage",
        "url": "https://www.aeobility.com.au/services/geo-marketing",
        "name": "GEO Marketing Services & Local Visibility Sprints | AEObility",
        "description": "Fixed-scope local visibility sprints for business details, citations, internal linking and Brand Facts pages. Micro-Sprints from $495 AUD ex. GST and Foundation Implementation from $3,195 AUD ex. GST.",
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
            "name": "GEO Marketing",
            "item": "https://www.aeobility.com.au/services/geo-marketing"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#service",
        "name": "Local Visibility & GEO Sprints",
        "alternateName": "GEO Marketing Services",
        "description": "Fixed-scope services that help Australian businesses improve the consistency and clarity of their business, service and location information across search, maps and AI-assisted search.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian small businesses, internal marketing teams and agency partners"
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
            "@id": "https://www.aeobility.com.au/services/geo-marketing#micro-sprints",
            "name": "Local Visibility Micro-Sprints",
            "itemListElement": [
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-citation-cleanup",
                "name": "Business Details & Citation Clean-Up",
                "url": "https://www.aeobility.com.au/services/geo-marketing?service=citation-clean-up",
                "sku": "SS4MICRO1",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "Local Visibility Micro-Sprint",
                "description": "Fixed-scope review and correction of core business details across priority directories, maps and local platforms. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#citation-cleanup"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-local-internal-linking",
                "name": "Local Internal-Linking Sprint",
                "url": "https://www.aeobility.com.au/services/geo-marketing?service=local-internal-linking",
                "sku": "SS3MICRO1",
                "price": "695.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "Local Visibility Micro-Sprint",
                "description": "Fixed-scope internal-linking improvements connecting priority location, service and supporting pages. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#local-internal-linking"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
                }
              },
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-brand-facts-page",
                "name": "Brand Facts Page Creation",
                "url": "https://www.aeobility.com.au/services/geo-marketing?service=brand-facts-page",
                "sku": "SS4MICRO3",
                "price": "495.00",
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock",
                "category": "Local Visibility Micro-Sprint",
                "description": "Creation of one central website reference page covering business identity, services, locations, contact details and key trust information. Price excludes GST.",
                "itemOffered": {
                  "@id": "https://www.aeobility.com.au/services/geo-marketing#brand-facts-page"
                },
                "seller": {
                  "@id": "https://www.aeobility.com.au/#organization"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "@id": "https://www.aeobility.com.au/services/geo-marketing#foundation-catalog",
            "name": "Foundation Implementation",
            "itemListElement": [
              {
                "@type": "Offer",
                "@id": "https://www.aeobility.com.au/services/geo-marketing#offer-foundation",
                "name": "Foundation Implementation",
                "url": "https://www.aeobility.com.au/services/geo-marketing?service=foundation",
                "sku": "SS1-SS4-MACRO",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "3195.00",
                  "priceCurrency": "AUD",
                  "valueAddedTaxIncluded": false
                },
                "availability": "https://schema.org/InStock",
                "category": "Local Visibility Foundation Implementation",
                "description": "Starting from $3,195 AUD excluding GST. A broader implementation engagement for agreed improvements across local business information, internal linking, structured data and priority pages. Final price depends on confirmed scope.",
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
        "@id": "https://www.aeobility.com.au/services/geo-marketing#citation-cleanup",
        "name": "Business Details & Citation Clean-Up",
        "alternateName": "SS4MICRO1",
        "description": "Review and correction of business name, address and phone details across agreed priority directories, maps and local platforms.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses with inconsistent or duplicate business information across local listings"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#local-internal-linking",
        "name": "Local Internal-Linking Sprint",
        "alternateName": "SS3MICRO1",
        "description": "Internal-linking improvements connecting priority location pages, service hubs and supporting regional content.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses whose service and location pages need clearer internal connections"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#brand-facts-page",
        "name": "Brand Facts Page Creation",
        "alternateName": "SS4MICRO3",
        "description": "Creation of a central reference page covering business identity, services, locations, contact details and key trust information.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses with scattered or inconsistent business information"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/services/geo-marketing#foundation-implementation",
        "name": "Foundation Implementation",
        "alternateName": "SS1-SS4-MACRO",
        "description": "A multi-page implementation engagement for businesses needing several connected improvements across local business information, structured data, priority pages and internal linking.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Businesses with multiple connected local visibility priorities"
        }
      }
    ]
  };
};
