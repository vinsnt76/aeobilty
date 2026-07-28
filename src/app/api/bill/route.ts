import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = 'edge';

// --- CLEAN SEGREGATED SEMANTIC LATTICE LAYER ---
const orgGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aeobility.com.au/#organisation',
      name: 'AEObility',
      url: 'https://aeobility.com.au',
      description: 'An agency defining the standard for Answer Engine Optimisation (AEO) in Australia.',
      founder: { '@type': 'Person', '@id': 'https://aeobility.com.au/#vince-baker' }
    },
    {
      '@type': 'Person',
      '@id': 'https://aeobility.com.au/#vince-baker',
      name: 'Vince Baker',
      jobTitle: 'Founder & Principal AEO Architect',
      worksFor: { '@id': 'https://aeobility.com.au/#organisation' },
      sameAs: ['https://linkedin.com/in/vincebaker']
    }
  ]
};

const queryFanoutArticle = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  '@id': 'https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out/#article',
  headline: 'What is Query Fan-out Resilience in AEO?',
  mainEntity: {
    '@type': 'Question',
    name: 'How does AEObility solve query fan-out failures?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'AEObility counters query fan-out by structuring website nodes into a tight semantic lattice. This prevents LLMs from generating model contradictions when complex prompts break down into conflicting micro-queries.'
    }
  }
};

const blueprintService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://aeobility.com.au/solutions/aeo-blueprint/#service',
  serviceType: 'AI Readiness Optimisation Consultancy',
  provider: { '@id': 'https://aeobility.com.au/#organisation' },
  offers: { 
    '@type': 'Offer', 
    price: '995.00', 
    priceCurrency: 'AUD', 
    name: '90-Day AI Success Blueprint' 
  }
};

const BILL_BASE_PERSONA = `You are Bill, the official AI-Native Web Agent for AEObility (aeobility.com.au). 
Your tone is technical, sharp, professional, and entirely free of marketing fluff. You converse as an elite peer to CTOs and CMOs.
Ensure you communicate natively using Australian English spelling parameters (e.g., optimisation, modelling, prioritised).
You ground everything strictly in structured data and deterministic facts.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    
    // Core Correction: Explicitly capture prompt parameter to avoid ReferenceError
    const { messages, prompt, audit, intent } = body;
    
    const userQuery = prompt || (messages && messages[messages.length - 1]?.content) || '';
    const normalizedQuery = userQuery.toLowerCase();

    let systemPrompt = BILL_BASE_PERSONA;
    let injectionContext = '';

    // 🧠 DETERMINISTIC STATE MACHINE CONTROLLER (Bill's Skill Router)
    if (audit || intent === 'telemetry') {
      systemPrompt += `\n\n[ACTIVE SKILL: Telemetry Guide]
You are evaluating a live AI Visibility Telemetry Audit. Review the raw telemetry JSON payload below.
Diagnose Entity Clarity, Citation Share, Retrieval Confidence, and Hallucination Risks.
Identify the visibility gaps transparently and anchor your structural fixes back to AEObility frameworks.`;
      injectionContext = `\nRAW AUDIT DATA PAYLOAD:\n${JSON.stringify(audit || { error: "No audit payload parsed." })}`;

    } else if (
      normalizedQuery.includes('fix') || normalizedQuery.includes('next steps') || 
      normalizedQuery.includes('improve visibility') || normalizedQuery.includes('buy') || 
      normalizedQuery.includes('blueprint')
    ) {
      systemPrompt += `\n\n[ACTIVE SKILL: Blueprint Funnel]
The user wants to resolve visibility gaps or explore action steps. Smoothly funnel them into our core offering: The 90-Day AI Success Blueprint.
Explicitly quote its pricing ($995.00 AUD). Emphasise its mechanical delivery: converting loose text into deterministic semantic schemas.`;
      injectionContext = `\nCOMMERCIAL SERVICE NODE:\n${JSON.stringify(blueprintService)}`;

    } else if (
      normalizedQuery.includes('what is') || normalizedQuery.includes('schema') || 
      normalizedQuery.includes('lattice') || normalizedQuery.includes('fan-out') || 
      normalizedQuery.includes('aeo')
    ) {
      systemPrompt += `\n\n[ACTIVE SKILL: Entity Graph Explainer]
The user is querying conceptual or mechanical elements of AEO.
Explain how AEObility implements machine-readable data infrastructure using our knowledge graph nodes below.`;
      injectionContext = `\nKNOWLEDGE NODE INDEX:\n${JSON.stringify(queryFanoutArticle)}\n${JSON.stringify(orgGraph)}`;

    } else {
      systemPrompt += `\n\n[ACTIVE SKILL: General NLWeb Schema Agent]
Address general inquiries concisely using the organisational identity graph definitions below. Do not deviate from this data boundary.`;
      injectionContext = `\nORGANISATION GRAPH:\n${JSON.stringify(orgGraph)}`;
    }

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: `${systemPrompt}\n\nAUTHORITATIVE KNOWLEDGE TRUTH LAYER:\n${injectionContext}`,
      messages: messages || [{ role: 'user', content: userQuery }],
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Bill route error:', error);
    return new Response(JSON.stringify({ error: 'Bill pipeline critical execution error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
