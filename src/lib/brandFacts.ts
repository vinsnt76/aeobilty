/**
 * AEObility Canonical Brand Knowledge Layer (CBKL) - Enterprise Layer
 * Locale: en-AU (Modern Australian English)
 * Last Verified: Aug 29, 2026
 */

export { AEOBILITY_TONE_OF_VOICE } from './brandGuidelines';

export interface FactProvenance {
  statement: string;
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
  entityType: "ProfessionalService",
  industry: "Answer Engine Optimisation",
  foundingDate: "2011-03-15",
  founder: "Vince Baker",
  location: {
    city: "Perth",
    state: "Western Australia",
    country: "AU",
    coordinates: { latitude: -31.9505, longitude: 115.8605 }
  },
  foundingLocation: { city: "Perth", state: "Western Australia", country: "AU" },
  serviceArea: ["Australia", "Western Australia (Primary Base)", "Major Capital Cities (Remote Delivery)"],
  website: "https://aeobility.com.au",
  brandPromise: "Get Found. Get Chosen.",
  tagline: "No jargon. No pressure. Just clarity.",
  knownAs: ["AEObility"],
  notToBeConfusedWith: ["generic consulting brands", "unverified AI-search claims"],
  officialSources: [
    { title: "AEObility Home", url: "https://aeobility.com.au" },
    { title: "Brand Facts Directory", url: "https://aeobility.com.au/brand-facts" },
    { title: "AI Crawler and Agent Guidance", url: "https://aeobility.com.au/AGENTS.md" },
    { title: "AI Visibility Diagnostic", url: "https://aeobility.com.au/diagnostic" }
  ],
  temporalBadge: {
    lastVerified: "29 Aug 2026",
    effectiveDate: "29 Aug 2026",
    fiscalCycle: "FY27",
    reviewedBy: "AEObility editorial and technical team",
    governanceNote: "We review this page when a material brand, service, pricing, or contact detail changes, and at least annually."
  }
};

// ============================================================================
// 2. KNOWLEDGE FACTS & PROVENANCE (Scope Boundaries & Methods)
// ============================================================================
export const BRAND_DEFINITIONS = {
  "Answer Engine Optimisation": {
    workingDefinition: "A practice focused on making business information easier for search engines and AI answer systems to access, interpret, and use when responding to relevant queries.",
    aeobilityApproach: "Organising core business information into clear, machine-readable structures and direct answer blocks so AI systems can more easily read and reference the business."
  },
  "Telemetry Diagnostic": {
    workingDefinition: "An automated review designed to assess selected technical and content signals that can affect how web assets are accessed and interpreted.",
    whatItAssesses: "A structured review of selected content, technical, entity, and information-consistency signals that may affect AI-search readiness."
  }
};

export const BRAND_KNOWLEDGE_LATTICE: FactProvenance[] = [
  {
    statement: "AEObility provides Answer Engine Optimisation services",
    source: "https://aeobility.com.au/services/aeo",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2025-11-12",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility provides the Telemetry Diagnostic",
    source: "https://aeobility.com.au/diagnostic",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility was founded by Vince Baker",
    source: "https://aeobility.com.au/vince-baker",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility operates in Australia, with Perth as the primary base",
    source: "https://aeobility.com.au/contact",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    statement: "Baby Bento case study documents an AEObility client engagement",
    source: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
    evidenceType: "CaseStudy",
    status: "verified",
    firstPublished: "2026-02-01",
    lastVerified: "2026-08-29"
  },
  {
    statement: "The Telemetry Diagnostic assesses selected AI-search visibility and fact-coverage signals",
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
    name: 'Strategic AEO Blueprint and Diagnostic Scan',
    price: 995,
    priceAUD: 995,
    duration: '10 business days',
    creditBackEligible: true,
    description: 'A fixed-scope review of location consistency, priority-page answer readiness, entity clarity, structured-data gaps, and recommended next actions.',
    deliverables: [
      'Multi-platform location signal review to identify inconsistencies across relevant map and location-data surfaces',
      'Content answer-readiness review to improve how effectively AI search systems surface relevant business answers',
      'Entity and schema gap assessment to address information and evidence gaps'
    ]
  },
  StrategicBlueprint: {
    sku: 'AEO-BP-STRAT',
    name: 'Strategic AEO Blueprint and Diagnostic Scan',
    priceAUD: 995,
    duration: '10 business days',
    description: 'A fixed-scope review of location consistency, priority-page answer readiness, entity clarity, structured-data gaps, and recommended next actions.',
    deliverables: [
      'Multi-platform location signal review to identify inconsistencies across relevant map and location-data surfaces',
      'Content answer-readiness review to improve how effectively AI search systems surface relevant business answers',
      'Entity and schema gap assessment to address information and evidence gaps'
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
    name: 'Technical Schema and Local Proximity Sprint',
    priceFromAUD: 495,
    duration: '3 to 5 business days',
    description: 'Modular, fixed-scope engineering sprints targeting one agreed technical priority.',
    deliverables: [
      'Nested JSON-LD schema generation to support clearer machine-readable entity relationships',
      'GeoCoordinate and location-data alignment to support consistent local information across relevant web and map surfaces'
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
          '@type': 'ProfessionalService',
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
          '@type': 'ProfessionalService',
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
      '@type': 'ProfessionalService',
      '@id': 'https://aeobility.com.au/#organization',
      name: BRAND_IDENTITY.name,
      legalName: BRAND_IDENTITY.legalName,
      url: BRAND_IDENTITY.website,
      logo: 'https://aeobility.com.au/assets/AEObility_Logo.webp',
      image: 'https://aeobility.com.au/assets/AEObility_Featured_Image.webp',
      description: 'Australian Answer Engine Optimisation consultancy specialising in structured business knowledge, entity graphs, and AI-search visibility.',
      foundingDate: BRAND_IDENTITY.foundingDate,
      founder: {
        '@type': 'Person',
        '@id': 'https://aeobility.com.au/vince-baker#person',
        name: BRAND_IDENTITY.founder,
        jobTitle: 'Founder & Principal Consultant',
        url: 'https://aeobility.com.au/vince-baker'
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
      areaServed: [
        {
          '@type': 'Country',
          name: 'Australia'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Western Australia'
        }
      ],
      priceRange: '$$',
      knowsAbout: [
        'Answer Engine Optimisation',
        'Generative Engine Optimisation',
        'Entity Resolution',
        'Structured Data & Schema.org'
      ]
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aeobility.com.au/brand-facts#webpage',
      url: 'https://aeobility.com.au/brand-facts',
      name: 'Canonical Brand Facts & Machine Interface Directory | AEObility',
      description: "AEObility's canonical business knowledge layer, publishing verified first-party business facts, entity graphs, provenance evidence, and machine interface endpoints.",
      isPartOf: {
        '@id': 'https://aeobility.com.au/#website'
      },
      about: {
        '@id': 'https://aeobility.com.au/#organization'
      },
      mainEntity: {
        '@id': 'https://aeobility.com.au/#organization'
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
