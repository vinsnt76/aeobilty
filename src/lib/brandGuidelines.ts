/**
 * AEObility Tone of Voice & Brand Guidelines Specification
 * Schema: https://schema.aeobility.com/tov
 * Locale: en-AU (Modern Australian English)
 */

export interface ToneOfVoiceTrait {
  definition: string;
  rules: string[];
}

export interface VoicePillar {
  rule: string;
  anchorCopy: string;
}

export interface AudienceSegment {
  segment: string;
  mindset: string;
  toneAdjustments: string;
}

export interface AEObilityToneOfVoiceSpec {
  schemaContext: string;
  schemaType: string;
  brandPromise: string;
  coreTagline: string;
  toneAndVoice: {
    locale: string;
    grammarStandard: string;
    rules: {
      spelling: string;
      avoid: string[];
      delivery: string;
    };
  };
  traits: {
    structured: ToneOfVoiceTrait;
    humanBuilt: ToneOfVoiceTrait;
    confident: ToneOfVoiceTrait;
    transparent: ToneOfVoiceTrait;
    modernTech: ToneOfVoiceTrait;
  };
  voicePillars: {
    clarity: VoicePillar;
    trust: VoicePillar;
    momentum: VoicePillar;
  };
  audienceSegments: AudienceSegment[];
  brandDos: string[];
  brandDonts: string[];
}

export const AEOBILITY_TONE_OF_VOICE: AEObilityToneOfVoiceSpec = {
  schemaContext: "https://schema.aeobility.com/tov",
  schemaType: "AEObilityToneOfVoice",
  brandPromise: "Get Found. Get Chosen.",
  coreTagline: "No jargon. No pressure. Just clarity.",
  toneAndVoice: {
    locale: "en-AU",
    grammarStandard: "Australian Grammar & Spelling",
    rules: {
      spelling: "Use Australian English (optimisation, behaviour, colour)",
      avoid: ["Americanisms", "overly formal British phrasing"],
      delivery: "Warm, direct, plain-spoken, modern Australian voice"
    }
  },
  traits: {
    structured: {
      definition: "Engineered clarity and semantic order",
      rules: [
        "Use short, declarative sentences",
        "Make logic and causal links explicit",
        "Eliminate vague metaphors"
      ]
    },
    humanBuilt: {
      definition: "Approachable, empathetic specialist",
      rules: [
        "Address reader directly",
        "Demystify technical concepts",
        "Balance authority with practicality"
      ]
    },
    confident: {
      definition: "Authority grounded in structural integrity",
      rules: [
        "Avoid hedging language",
        "Anchor confidence in transparent diagnostics",
        "State deliverables directly"
      ]
    },
    transparent: {
      definition: "Open, predictable, and de-risked",
      rules: [
        "Explain what, why, and how",
        "Highlight fixed-scope sprints",
        "State next steps clearly"
      ]
    },
    modernTech: {
      definition: "Semantic, graph-ready intelligence",
      rules: [
        "Use precise modern terminology",
        "Contrast AEO with legacy SEO",
        "Link technical assets to local visibility"
      ]
    }
  },
  voicePillars: {
    clarity: {
      rule: "Short, declarative sentences; zero filler",
      anchorCopy: "We define exactly what your business offers so AI stops guessing."
    },
    trust: {
      rule: "Explain, do not sell; maintain radical transparency",
      anchorCopy: "A transparent, fixed-scope setup with zero ongoing contract lock-in."
    },
    momentum: {
      rule: "Propel the reader forward using active, outcome-driven verbs",
      anchorCopy: "Lock in a 15-minute diagnostic review to address map gaps."
    }
  },
  audienceSegments: [
    {
      segment: "local_service_operators",
      mindset: "Time-poor, commercially practical, skeptical of agency fluff",
      toneAdjustments: "High empathy, straightforward outcomes, zero jargon"
    },
    {
      segment: "marketing_managers",
      mindset: "Seeking scalable execution and technical validation",
      toneAdjustments: "In-depth technical grounding and clear contrast with legacy SEO"
    },
    {
      segment: "ai_search_learners",
      mindset: "Curious about RAG pipelines and modern discoverability",
      toneAdjustments: "Instructive, concept-first explanations with structured knowledge emphasis"
    }
  ],
  brandDos: [
    "Use declarative sentences",
    "Frame solutions around fixed-scope sprints",
    "Differentiate semantic AEO/GEO graphs from legacy SEO",
    "Use Australian English spelling",
    "Maintain visual consistency with Inter/Söhne and AEO Cyan (#00E5FF)"
  ],
  brandDonts: [
    "Avoid legacy SEO buzzwords",
    "Avoid agency jargon or upsell traps",
    "Avoid hedging or uncertain phrasing",
    "Avoid American spelling",
    "Do not flatten dynamic brand gradients"
  ]
};
