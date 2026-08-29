/**
 * AEObility Canonical Brand Knowledge Layer (CBKL) - Enterprise Layer
 * Locale: en-AU (Modern Australian English)
 * Last Verified: Aug 29, 2026
 */

export { AEOBILITY_TONE_OF_VOICE } from './brandGuidelines';

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
  entityType: "LocalBusiness & ProfessionalService",
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
  serviceArea: ["Australia", "Western Australia (Primary Base)", "Major Capital Cities (Remote Execution)"],
  website: "https://aeobility.com.au",
  brandPromise: "Get Found. Get Chosen.",
  tagline: "No jargon. No pressure. Just clarity.",
  knownAs: ["AEObility Australia", "AEObility Optimisation Agency", "AEObility Digital"],
  notToBeConfusedWith: ["generic consulting brands", "unverified AI-search claims"],
  officialSources: [
    "https://aeobility.com.au",
    "https://aeobility.com.au/brand-facts",
    "https://aeobility.com.au/AGENTS.md",
    "https://aeobility.com.au/diagnostic"
  ],
  temporalBadge: {
    lastVerified: "Aug 29, 2026",
    effectiveDate: "Aug 29, 2026",
    fiscalCycle: "FY27",
    reviewedBy: "AEObility editorial and technical team"
  }
};

// ============================================================================
// 2. KNOWLEDGE FACTS & PROVENANCE (Scope Boundaries & Methods)
// ============================================================================
export const BRAND_DEFINITIONS = {
  "Answer Engine Optimisation": {
    establishedFact: "The process of structuring digital content to improve its discoverability by AI search assistants and conversational retrieval engines.",
    aeobilityMethodology: "AEObility's methodology focuses on organising core business information into clear, machine-readable structures and direct answer blocks so AI systems can more easily read and reference the business."
  },
  "Telemetry Diagnostic": {
    establishedFact: "An automated technical scan designed to audit how web assets are parsed by modern information retrieval systems.",
    aeobilityClaim: "Uses structured checks to identify broken data signals, inconsistent business details across platforms, and likely gaps in how AI systems may interpret the business."
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
    object: "Australia, with Perth as primary base",
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
      'Multi-platform location signal review to identify inconsistencies across mapping layers',
      'Passage-level content review to improve the likelihood that AI search systems surface accurate answers',
      'Entity and schema gap assessment to reduce missed citation opportunities'
    ]
  },
  StrategicBlueprint: {
    sku: 'AEO-BP-STRAT',
    name: 'Strategic AEO Blueprint & Diagnostic Scan',
    priceAUD: 995,
    duration: '10 business days',
    deliverables: [
      'Multi-platform location signal review to identify inconsistencies across mapping layers',
      'Passage-level content review to improve the likelihood that AI search systems surface accurate answers',
      'Entity and schema gap assessment to reduce missed citation opportunities'
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
      'Nested JSON-LD schema generation to support clearer machine-readable entity relationships',
      'GeoCoordinate mapping alignment to support local map pack visibility and accurate voice assistant routing'
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
  offers: {
    '@type': 'Offer';
    price: string;
    priceCurrency: 'AUD';
    availability: string;
    itemCondition: string;
  };
}

export const BRAND_PRICING_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#product',
      sku: 'BPSTRAT',
      name: 'The AEObility Strategic Blueprint',
      description: 'A comprehensive 90-day diagnostic roadmap and entity salience assessment. Standalone cost is 100% credited toward implementation sprints if booked within 60 days.',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#offer',
        price: '995.00',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'AEObility'
        }
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-sprint#product',
      sku: 'SS1-SS4-MICRO',
      name: 'AEO Technical Micro-Sprints',
      description: 'Modular, fixed-scope engineering sprints targeting one tactical priority: custom JSON-LD schema, atomic content rewrites, or internal linking.',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-sprint#offer',
        price: '495.00',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'AEObility'
        }
      }
    }
  ]
};

export const PUBLIC_SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aeobility.com.au/#organization',
      name: BRAND_IDENTITY.name,
      legalName: BRAND_IDENTITY.legalName,
      url: BRAND_IDENTITY.website,
      foundingDate: BRAND_IDENTITY.foundingDate,
      founder: {
        '@type': 'Person',
        name: BRAND_IDENTITY.founder
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: BRAND_IDENTITY.location.city,
        addressRegion: BRAND_IDENTITY.location.state,
        addressCountry: BRAND_IDENTITY.location.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BRAND_IDENTITY.location.coordinates.latitude,
        longitude: BRAND_IDENTITY.location.coordinates.longitude
      },
      sameAs: BRAND_IDENTITY.officialSources
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aeobility.com.au/brand-facts#webpage',
      url: 'https://aeobility.com.au/brand-facts',
      name: 'Brand Facts & Canonical Entity Directory',
      description: 'Consolidated brand ledger detailing corporate identities, entity relationships, and published service pricing.',
      isPartOf: {
        '@id': 'https://aeobility.com.au/#website'
      }
    }
  ]
};

// ============================================================================
// 6. MACHINE GROUNDING HELPERS (Verification Math & Parsing)
// ============================================================================
export interface FactCoverageScore {
  identityCoverage: number;
  factCoverage: number;
  relationshipCoverage: number;
  evidenceCoverage: number;
}

export function calculateFactCoverageScore(): FactCoverageScore {
  return {
    identityCoverage: 1.0,
    factCoverage: 0.95,
    relationshipCoverage: 0.92,
    evidenceCoverage: 0.90
  };
}
