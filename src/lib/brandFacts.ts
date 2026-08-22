export const PRICING_CONFIG = {
  currency: 'AUD',
  taxExclusive: true,
  guarantee: null, // Removed 60-day risk reversal policy
  blueprint: {
    code: 'BPSTRAT',
    title: 'The AEObility Blueprint',
    price: 995,
    creditBackEligible: true,
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
    ],
  },
  foundation: {
    codeSeries: 'SS1-SS4-MACRO',
    basePriceFrom: 3195,
    deliveryWindow: '4–5 working days across a 4-week period',
    contractTerm: 'None (Fixed-scope execution)',
  },
} as const;

/**
 * AEObility Brand Facts & Service Offerings JSON-LD Source of Truth
 * Provides unambiguous, machine-readable reference for products, SKUs, and pricing.
 */

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
    },
    {
      '@type': 'Product',
      sku: 'SS1MICRO2',
      name: 'Service Schema Injection',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Add structured Service schema to one service page.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Service schema',
          'ServiceType',
          'AreaServed',
          'Provider',
          'Related service mapping'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS1MICRO3',
      name: 'Canonical Business Facts Consolidation',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Standardise business facts for AI engines and local directory profiles.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Business facts dictionary',
          'Name, Address, Phone (NAP) standardisation',
          'legalName mapping'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS1MICRO4',
      name: 'JSON-LD Validation and Repair',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Validate and repair broken or conflicting schema blocks.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'JSON-LD validation',
          'Syntax error correction',
          'Nesting fixes',
          'Deprecated field removal'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS2MACROS2',
      name: 'Atomic Answer Blocks',
      priceCurrency: 'AUD',
      price: '3195.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Convert pages into retrieval-ready atomic content blocks.',
      offers: {
        '@type': 'Offer',
        price: '3195.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Foundation Tier (~15 Hours)',
        itemOffered: [
          '10 core pages rewritten into atomic blocks',
          'Conversational query alignment',
          'Passage structuring'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS2MICRO1',
      name: 'Single Page Atomic Rewrite',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Rewrite one critical page into atomic blocks.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Answer-first rewrite',
          'Problem-solution-outcome segmentation',
          '90–120 token retrieval-ready formatting'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS2MICRO2',
      name: 'FAQ Extraction and Expansion',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Build AI-ready FAQs for one service page.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Five to eight atomic FAQs',
          'Query-aligned phrasing',
          'Conversational answer-first responses'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS2MICRO3',
      name: 'Passage-Level Structuring and Chunking',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Restructure one page into machine-friendly content chunks.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Intent-aligned segmentation',
          'Semantic density optimisation',
          'Strict heading structure validation'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS2MICRO4',
      name: 'Query Alignment and Intent Mapping',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Align one page with active conversational AI search queries.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Query intent family mapping',
          'Integration of high-frequency queries',
          'Answer-first alignment'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS3MACROS3',
      name: 'Semantic Lattice Linking',
      priceCurrency: 'AUD',
      price: '6359.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Build internal concept relationships and cross-page structural meaning.',
      offers: {
        '@type': 'Offer',
        price: '6359.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Comprehensive Tier (~30 Hours)',
        itemOffered: [
          'Full site semantic lattice',
          'Descriptive anchor strategy',
          'Relationship mapping',
          'Pathway optimisation'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS3MICRO1',
      name: 'Three-Node Semantic Lattice Patch',
      priceCurrency: 'AUD',
      price: '695.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Build a small concept lattice for one high-value service cluster.',
      offers: {
        '@type': 'Offer',
        price: '695.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Specialised Half-Day (3 Hours)',
        itemOffered: [
          'Three-node micro-lattice',
          'Descriptive anchor text optimisation',
          'Core concept reinforcement'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS3MICRO2',
      name: 'Anchor Optimisation for One Page',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Improve internal linking logic and anchor signalling for one page.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Descriptive anchor rewrite',
          'Contextual relationship mapping',
          'Semantic reinforcement pathway setup'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS3MICRO3',
      name: 'Concept Cluster Reinforcement',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Strengthen semantic meaning across a small cluster of related pages.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Cluster mapping',
          'Cross-page anchor alignment',
          'Semantic reinforcement'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS4MACROS4',
      name: 'Brand Facts and Consensus',
      priceCurrency: 'AUD',
      price: '3195.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Standardise cross-directory citations and strengthen external trust signals.',
      offers: {
        '@type': 'Offer',
        price: '3195.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Foundation Tier (~15 Hours)',
        itemOffered: [
          'Brand Facts page creation',
          'Directory cleanup',
          'NAP profile consistency',
          'Bing Places alignment'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS4MICRO1',
      name: 'NAP Standardisation',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Correct Name, Address, and Phone inconsistencies across core directories.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Hyper-local NAP audit',
          'Cross-directory standardisation',
          'Manual update deployment plan'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS4MICRO2',
      name: 'Directory Citation Cleanup',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Clean up legacy citations in one major directory set.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Directory account corrections',
          'Citation alignment',
          'Removal of conflicting or duplicate entries'
        ]
      }
    },
    {
      '@type': 'Product',
      sku: 'SS4MICRO3',
      name: 'Brand Facts Page Creation',
      priceCurrency: 'AUD',
      price: '495.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: false,
        description: 'Excluding GST'
      },
      description: 'Build a canonical Brand Facts page on the client\'s site.',
      offers: {
        '@type': 'Offer',
        price: '495.00',
        priceCurrency: 'AUD',
        eligibleDuration: 'Half-Day (3 Hours)',
        itemOffered: [
          'Single source of truth page deployment',
          'Factual consistency checks',
          'Entity graph reinforcement'
        ]
      }
    }
  ]
};
