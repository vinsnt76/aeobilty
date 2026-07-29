import { NextRequest } from 'next/server';
import { streamText, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';
// Dynamically import the compiled knowledge base containing all 41 site vector nodes
import knowledgeBase from '../../../lib/search/knowledgeBase.json';

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

    // 🧠 DETERMINISTIC STATE MACHINE CONTROLLER (Two-Tier Skill & Lattice Architecture)
    if (
      audit || 
      intent === 'telemetry' || 
      normalizedQuery.includes('measure visibility') || 
      normalizedQuery.includes('telemetry') ||
      normalizedQuery.includes('citation share') ||
      normalizedQuery.includes('hallucination')
    ) {
      // TIER 1 - SKILL 1: Telemetry Guide
      systemPrompt += `\n\n[ACTIVE SKILL: Telemetry Guide]
You are evaluating a live AI Visibility Telemetry Audit or framework query. Review the raw telemetry JSON payload below.
Diagnose Entity Clarity, Citation Share, Retrieval Confidence, and Hallucination Risks.
Identify the visibility gaps transparently and anchor your structural fixes back to AEObility frameworks.`;
      injectionContext = `\nRAW AUDIT DATA PAYLOAD:\n${JSON.stringify(audit || { error: "No audit payload parsed." })}`;

    } else if (
      normalizedQuery.includes('fix') || normalizedQuery.includes('next steps') || 
      normalizedQuery.includes('improve visibility') || normalizedQuery.includes('buy') || 
      normalizedQuery.includes('blueprint') || normalizedQuery.includes('pricing') ||
      normalizedQuery.includes('cost') || normalizedQuery.includes('hire')
    ) {
      // TIER 1 - SKILL 3: Blueprint Funnel
      systemPrompt += `\n\n[ACTIVE SKILL: Blueprint Funnel]
The user wants to resolve visibility gaps or explore action steps. Smoothly funnel them into our core offering: The 90-Day AI Success Blueprint.
Explicitly quote its pricing ($995.00 AUD). Emphasise its mechanical delivery: converting loose text into deterministic semantic schemas.`;
      injectionContext = `\nCOMMERCIAL SERVICE NODE:\n${JSON.stringify(blueprintService)}`;

    } else {
      // TIER 2 - SKILL 5: Technical Concept Explainer & Dynamic Knowledge Graph Fallback
      const rawNodes = (knowledgeBase as KnowledgeNode[]) || [];
      const queryTokens = normalizedQuery.split(/\s+/).filter((w: string) => w.length > 2);

      const matchedNodes = rawNodes
        .map((node) => {
          const pageNameLower = node.pageName?.toLowerCase() || '';
          const h1Lower = node.h1?.toLowerCase() || '';
          const keyphraseLower = node.focusKeyphrase?.toLowerCase() || '';
          const primaryLower = node.primaryKeywords?.toLowerCase() || '';
          const secondaryLower = node.secondaryKeywords?.toLowerCase() || '';
          const latentLower = node.latentKeywords?.toLowerCase() || '';
          const descLower = node.description?.toLowerCase() || '';

          let score = 0;

          // Direct phrase or keyphrase overlap
          if (keyphraseLower && normalizedQuery.includes(keyphraseLower)) score += 50;
          if (h1Lower && normalizedQuery.includes(h1Lower)) score += 40;
          if (pageNameLower && normalizedQuery.includes(pageNameLower)) score += 30;

          // Token overlap matching (ignoring generic stop words)
          const fullNodeText = `${pageNameLower} ${h1Lower} ${keyphraseLower} ${primaryLower} ${secondaryLower} ${latentLower} ${descLower}`;
          for (const token of queryTokens) {
            if (['what', 'how', 'does', 'with', 'from', 'this', 'that', 'your', 'about', 'explain'].includes(token)) continue;
            if (fullNodeText.includes(token)) {
              score += 10;
            }
          }

          return { node, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        // Strip heavy vector embedding array to minimize context tokens
        .map(({ node }) => {
          const { embedding: _embedding, ...lightweightNode } = node;
          return lightweightNode;
        });

      if (matchedNodes.length > 0) {
        systemPrompt += `\n\n[ACTIVE SKILL: Technical Concept Explainer]
The user is querying conceptual, technical, or mechanical elements of AEO, schemas, or site services. 
Synthesise your response using the verified dynamic knowledge base node captures provided below. Explain the concept with technical precision, authority, and Australian English parameters.`;
      } else {
        systemPrompt += `\n\n[ACTIVE SKILL: General NLWeb Schema Agent]
The user is asking a general inquiry about AEObility. Answer strictly using our canonical organization and founder identity graph.`;
      }

      injectionContext = `\nCANONICAL IDENTITY LAYER:\n${JSON.stringify(orgGraph)}`;
      
      if (matchedNodes.length > 0) {
        injectionContext += `\n\nDYNAMIC KNOWLEDGE MATCHES:\n${JSON.stringify(matchedNodes)}`;
      }
    }

    // Safely parse and convert messages to ModelMessage format for streamText
    let coreMessages = [];
    if (Array.isArray(messages) && messages.length > 0) {
      try {
        coreMessages = await convertToModelMessages(messages);
      } catch {
        coreMessages = messages.map((m: { role?: string; content?: string; parts?: Array<{ type: string; text: string }> }) => {
          let textContent = m.content;
          if (!textContent && Array.isArray(m.parts)) {
            textContent = m.parts
              .filter((p) => p.type === 'text')
              .map((p) => p.text)
              .join('');
          }
          return { role: (m.role as 'user' | 'assistant' | 'system') || 'user', content: textContent || '' };
        });
      }
    } else {
      coreMessages = [{ role: 'user' as const, content: userQuery }];
    }

    // Execute low-latency token streaming
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: `${systemPrompt}\n\nAUTHORITATIVE KNOWLEDGE TRUTH LAYER:\n${injectionContext}`,
      messages: coreMessages,
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
