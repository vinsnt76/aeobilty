/**
 * AEObility Canonical Brand Knowledge Layer (CBKL) - Enterprise Layer
 * Locale: en-AU (Modern Australian English)
 * Last Verified: Aug 29, 2026
 */

export interface FactProvenance {
  subject: string;
  predicate: string;
  object: string;
  source: string;
  evidenceType: 'FirstPartyPage' | 'CorporateRegistry' | 'TechnicalDocumentation' | 'CaseStudy';
  status: 'verified' | 'provisional';
  firstPublished: string;
  lastVerified: string;
}

// ============================================================================
// 1. IDENTITY FACTS (Who/What the Entity Is)
// ============================================================================
export const BRAND_IDENTITY = {
  name: "AEObility",
  legalName: "Trekaboutoz trading as AEObility",
  abn: "61 029 803 255",
  entityType: "LocalBusiness",
  industry: "Answer Engine Optimisation",
  foundingDate: "2011-03-15",
  founder: "Vinnie Baker",
  location: {
    city: "Perth",
    state: "Western Australia",
    country: "AU",
    coordinates: { latitude: -31.9505, longitude: 115.8605 }
  },
  foundingLocation: { city: "Perth", state: "Western Australia", country: "AU" },
  serviceArea: ["Australia", "Western Australia", "Perth", "Sydney", "Melbourne", "Brisbane", "Adelaide"],
  website: "https://aeobility.com.au",
  brandPromise: "Get Found. Get Chosen.",
  tagline: "No jargon. No pressure. Just clarity.",
  knownAs: ["AEObility Australia", "AEObility Optimisation Agency", "AEObility Digital"],
  notToBeConfusedWith: ["generic third-party consulting agencies", "ungrounded generative search statistics"],
  officialSources: [
    "https://aeobility.com.au",
    "https://aeobility.com.au/brand-facts",
    "https://aeobility.com.au/AGENTS.md",
    "https://aeobility.com.au/diagnostic"
  ],
  temporalBadge: {
    lastVerified: "Aug 29, 2026",
    effectiveDate: "Aug 29, 2026",
    fiscalCycle: "FY27"
  }
};

// ============================================================================
// 2. KNOWLEDGE FACTS & PROVENANCE (Scope Boundaries & Methods)
// ============================================================================
export const BRAND_DEFINITIONS = {
  "Answer Engine Optimisation": {
    establishedFact: "The process of structuring digital content to improve its discoverability by AI search assistants and conversational retrieval engines.",
    aeobilityMethodology: "Organising your core business information into clear, machine-readable structures and direct answer blocks so AI assistants and search engines can clearly read, verify, and quote your business as the direct answer."
  },
  "Telemetry Diagnostic": {
    establishedFact: "An automated technical scan designed to audit how web assets are parsed by modern information retrieval systems.",
    aeobilityClaim: "Simulates multi-engine AI search workflows to spot broken data signals, inconsistent business details across platforms, and missed opportunities where AI engines fail to understand what you offer."
  }
};

export const BRAND_KNOWLEDGE_LATTICE: FactProvenance[] = [
  {
    subject: "AEObility",
    predicate: "specialisesIn",
    object: "Answer Engine Optimisation",
    source: "https://aeobility.com.au/services/aeo",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2025-11-12",
    lastVerified: "2026-08-29"
  },
  {
    subject: "AEObility",
    predicate: "provides",
    object: "Telemetry Diagnostic Scanner",
    source: "https://aeobility.com.au/diagnostic",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    subject: "AEObility",
    predicate: "foundedBy",
    object: "Vinnie Baker",
    source: "https://aeobility.com.au/vince-baker",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    subject: "AEObility",
    predicate: "operatesIn",
    object: "Australia, Western Australia, Perth",
    source: "https://aeobility.com.au/contact",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    subject: "AEObility",
    predicate: "evidences",
    object: "Baby Bento E-Commerce Growth",
    source: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
    evidenceType: "CaseStudy",
    status: "verified",
    firstPublished: "2026-02-01",
    lastVerified: "2026-08-29"
  },
  {
    subject: "Telemetry Diagnostic Scanner",
    predicate: "analyses",
    object: "Answer Engine Visibility & Fact Coverage",
    source: "https://aeobility.com.au/diagnostic",
    evidenceType: "TechnicalDocumentation",
    status: "verified",
    firstPublished: "2026-03-22",
    lastVerified: "2026-08-29"
  }
];

// ============================================================================
// 3. COMMERCIAL FACTS (Products, SKUs, and Pricing Frameworks)
// ============================================================================
export const PRICING_CONFIG = {
  meta: { currency: "AUD", taxStatus: "Excluding GST" },
  currency: 'AUD',
  taxExclusive: true,
  guarantee: null,
  blueprint: {
    code: 'BPSTRAT',
    sku: 'AEO-BP-STRAT',
    title: 'The AEObility Blueprint',
    name: 'Strategic AEO Blueprint & Diagnostic Scan',
    price: 995,
    priceAUD: 995,
    duration: '10 business days',
    creditBackEligible: true,
    deliverables: [
      'Multi-platform map coordinate check (Google, Apple Maps, Siri indices) ensuring your exact location signals match',
      'Passage-level extraction diagnostics ensuring AI search engines quote your exact answers without hallucinating',
      'Entity salience and schema graph gap assessment identifying missed citation opportunities'
    ]
  },
  StrategicBlueprint: {
    sku: 'AEO-BP-STRAT',
    name: 'Strategic AEO Blueprint & Diagnostic Scan',
    priceAUD: 995,
    duration: '10 business days',
    deliverables: [
      'Multi-platform map coordinate check (Google, Apple Maps, Siri indices) ensuring your exact location signals match',
      'Passage-level extraction diagnostics ensuring AI search engines quote your exact answers without hallucinating',
      'Entity salience and schema graph gap assessment identifying missed citation opportunities'
    ]
  },
  microSprints: {
    codeSeries: 'SS1-SS4-MICRO',
    basePriceFrom: 495,
    catalog: [
      { id: 'schema', name: 'Schema Sprint', price: 495 },
      { id: 'content', name: 'Content Sprint', price: 495 },
      { id: 'citations', name: 'Citation Clean-Up', price: 495 },
      { id: 'linking', name: 'Local Linking Sprint', price: 695 },
      { id: 'brand-facts', name: 'Brand Facts Page', price: 495 },
    ]
  },
  MicroSprints: {
    sku: 'AEO-SS-MICRO',
    name: 'Technical Schema & Local Proximity Sprint',
    priceFromAUD: 495,
    duration: '3 to 5 business days',
    deliverables: [
      'Nested JSON-LD schema generation connecting your brand directly to search knowledge graphs',
      'GeoCoordinate mapping alignment ensuring local map pack dominance and accurate voice assistant routing'
    ]
  },
  foundation: {
    codeSeries: 'SS1-SS4-MACRO',
    basePriceFrom: 3195,
    deliveryWindow: '4–5 working days across a 4-week period',
    contractTerm: 'None (Fixed-scope execution)'
  }
} as const;

// ============================================================================
// 4. TEMPORAL FACTS (Dynamic States & Active Sprints)
// ============================================================================
export const BRAND_TEMPORAL_STATE = {
  fiscalCycle: "FY27",
  activeSprintsAvailable: true,
  lastRegistrySync: "2026-08-29T21:18:00+08:00",
  currentCaseStudies: ["case-studies/baby-bento", "case-studies/allied-health"]
};

// ============================================================================
// 5. PUBLIC INTEROPERABLE VOCABULARY (Standard Schema.org Graph)
// ============================================================================
export interface ProductOffer {
  '@type': 'Product';
  sku: string;
  name: string;
  priceCurrency: 'AUD';
  price: string;
  priceSpecification: {
    '@type': 'PriceSpecification';
    valueAddedTaxIncluded: boolean;
    description: string;
  };
  description: string;
  offers: {
    '@type': 'Offer';
    price: string;
    priceCurrency: 'AUD';
    eligibleDuration: string;
    itemOffered: string[];
  };
}

export interface BrandFactsGraph {
  '@context': 'https://schema.org';
  '@graph': ProductOffer[];
}

export const BRAND_PRICING_SCHEMA: BrandFactsGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      sku: 'BPSTRAT',
      name: 'Strategic Blueprint',
      priceCurrency: 'AUD',
      price: '995.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Diagnose entity gaps, schema drift, and positional bias vulnerabilities.',
      offers: {
        '@type': 'Offer',
        price: '995.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Diagnostic Audit',
        itemOffered: [
          'Full diagnostic report',
          'Entity map',
          'Visibility scorecard',
          '90-day sprint recommendations'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS1MACROS1',
      name: 'Schema and Semantic Mapping',
      priceCurrency: 'AUD',
      price: '3195.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Establish machine-readable identity and resolve entity confusion.',
      offers: {
        '@type': 'Offer',
        price: '3195.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Foundation Tier (~15 Hours)',
        itemOffered: [
          'Full entity map',
          'Canonical facts',
          'JSON-LD graph for 10 pages',
          'Location modelling',
          'Deployment validation'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS1MICRO1',
      name: 'Location Schema Injection',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Add complete location-level schema to one page.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'LocalBusiness schema',
          'GeoCoordinates',
          'OpeningHours',
          'ServiceArea',
          'ContactPoint validation'
        ]
      }
    }
  ]
};

export const PUBLIC_SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": BRAND_IDENTITY.entityType,
      "@id": "https://aeobility.com.au/#organization",
      "name": BRAND_IDENTITY.name,
      "legalName": BRAND_IDENTITY.legalName,
      "taxID": BRAND_IDENTITY.abn,
      "url": BRAND_IDENTITY.website,
      "foundingDate": BRAND_IDENTITY.foundingDate,
      "sameAs": BRAND_IDENTITY.officialSources,
      "areaServed": BRAND_IDENTITY.serviceArea.map(area => ({ "@type": "AdministrativeArea", "name": area })),
      "founder": {
        "@type": "Person",
        "@id": "https://aeobility.com.au/vince-baker#person",
        "name": BRAND_IDENTITY.founder,
        "url": "https://aeobility.com.au/vince-baker"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": BRAND_IDENTITY.location.city,
        "addressRegion": BRAND_IDENTITY.location.state,
        "addressCountry": BRAND_IDENTITY.location.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BRAND_IDENTITY.location.coordinates.latitude,
        "longitude": BRAND_IDENTITY.location.coordinates.longitude
      },
      "knowsAbout": Object.keys(BRAND_DEFINITIONS),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AEObility Commercial Sprint Matrix",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": PRICING_CONFIG.StrategicBlueprint.name,
              "sku": PRICING_CONFIG.StrategicBlueprint.sku
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": PRICING_CONFIG.StrategicBlueprint.priceAUD,
              "priceCurrency": "AUD",
              "valueAddedTaxIncluded": "false"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": PRICING_CONFIG.MicroSprints.name,
              "sku": PRICING_CONFIG.MicroSprints.sku
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": PRICING_CONFIG.MicroSprints.priceFromAUD,
              "priceCurrency": "AUD",
              "valueAddedTaxIncluded": "false"
            }
          }
        ]
      }
    }
  ]
};

// ============================================================================
// 6. PROPRIETARY TELEMETRY CORE (Internal Value Weights)
// ============================================================================
export interface TelemetryMetrics {
  relationshipStrength: number;
  expectedFactCoverage: boolean;
  retrievalPriorityScore: number;
}

export const INTERNAL_TELEMETRY_REGISTRY: Record<string, TelemetryMetrics> = {
  "AEObility->specialisesIn->Answer Engine Optimisation": {
    relationshipStrength: 0.94,
    expectedFactCoverage: true,
    retrievalPriorityScore: 0.98
  },
  "AEObility->provides->Telemetry Diagnostic Scanner": {
    relationshipStrength: 0.91,
    expectedFactCoverage: true,
    retrievalPriorityScore: 0.95
  }
};

export function calculateFactCoverageScore() {
  const verifiedFacts = BRAND_KNOWLEDGE_LATTICE.filter(f => f.status === 'verified').length;
  const evidencedFacts = BRAND_KNOWLEDGE_LATTICE.filter(f => f.source !== "").length;
  
  return {
    identityCoverage: BRAND_IDENTITY.name ? 1.00 : 0.00,
    factCoverage: BRAND_KNOWLEDGE_LATTICE.length > 0 ? verifiedFacts / BRAND_KNOWLEDGE_LATTICE.length : 1.00,
    relationshipCoverage: BRAND_KNOWLEDGE_LATTICE.length > 3 ? 1.00 : 0.91,
    evidenceCoverage: BRAND_KNOWLEDGE_LATTICE.length > 0 ? evidencedFacts / BRAND_KNOWLEDGE_LATTICE.length : 1.00
  };
}
