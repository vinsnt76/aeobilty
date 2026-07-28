import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
// Dynamically import the compiled knowledge base containing all 38 site vector nodes
import knowledgeBase from '@/lib/search/knowledgeBase.json';

export const runtime = 'edge';

interface KnowledgeNode {
  pageName: string;
  url: string;
  h1: string;
  focusKeyphrase: string;
  latentKeywords?: string;
  schemaType?: string;
  description: string;
  primaryKeywords?: string;
  secondaryKeywords?: string;
  embedding?: number[];
}

// --- BASE ENTITY IDENTIFIER CONFIGURATION ---
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
    const { messages, prompt, audit, intent } = body;
    
    const userQuery = prompt || (messages && messages[messages.length - 1]?.content) || '';
    const normalizedQuery = userQuery.toLowerCase();

    let systemPrompt = BILL_BASE_PERSONA;
    let injectionContext = '';

    // 🧠 DETERMINISTIC STATE MACHINE CONTROLLER (Dynamic Skill Slicing)
    if (audit || intent === 'telemetry') {
      // SKILL 1: Telemetry Guide
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
      // SKILL 3: Blueprint Funnel
      systemPrompt += `\n\n[ACTIVE SKILL: Blueprint Funnel]
The user wants to resolve visibility gaps or explore action steps. Smoothly funnel them into our core offering: The 90-Day AI Success Blueprint.
Explicitly quote its pricing ($995.00 AUD). Emphasise its mechanical delivery: converting loose text into deterministic semantic schemas.`;
      injectionContext = `\nCOMMERCIAL SERVICE NODE:\n${JSON.stringify(blueprintService)}`;

    } else {
      // SKILL 2 & 4: General Agent & Concept Explainer Integration
      systemPrompt += `\n\n[ACTIVE SKILL: Dynamic Knowledge Graph Node Explainer]
The user is querying conceptual, technical, or mechanical elements of AEO, schemas, or site services. 
Synthesise your response using the verified dynamic knowledge base node captures provided below.`;

      // Dynamic Node Matcher: Scans knowledgeBase.json for keyword overlaps across all 38 nodes
      const rawNodes = (knowledgeBase as KnowledgeNode[]) || [];
      const matchedNodes = rawNodes
        .filter((node) => {
          const pageNameMatch = Boolean(node.pageName?.toLowerCase() && normalizedQuery.includes(node.pageName.toLowerCase()));
          const h1Match = Boolean(node.h1?.toLowerCase() && normalizedQuery.includes(node.h1.toLowerCase()));
          const keyphraseMatch = Boolean(node.focusKeyphrase?.toLowerCase() && normalizedQuery.includes(node.focusKeyphrase.toLowerCase()));
          const descWords = node.description?.toLowerCase()?.split(' ') || [];
          const descMatch = descWords.some((word) => word.length > 4 && normalizedQuery.includes(word));
          return pageNameMatch || h1Match || keyphraseMatch || descMatch;
        })
        .slice(0, 3)
        // Strip heavy vector embedding array to minimize context tokens
        .map(({ embedding: _embedding, ...lightweightNode }) => lightweightNode);

      injectionContext = `\nCANONICAL IDENTITY LAYER:\n${JSON.stringify(orgGraph)}`;
      
      if (matchedNodes.length > 0) {
        injectionContext += `\n\nDYNAMIC KNOWLEDGE MATCHES:\n${JSON.stringify(matchedNodes)}`;
      }
    }

    // Execute low-latency token streaming
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: `${systemPrompt}\n\nAUTHORITATIVE KNOWLEDGE TRUTH LAYER:\n${injectionContext}`,
      messages: messages || [{ role: 'user', content: userQuery }],
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Bill route error:', error);
    return new Response(JSON.stringify({ error: 'Bill pipeline dynamic data retrieval error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
