import { NextRequest, NextResponse } from 'next/server';
import { KnowledgeNode, SearchQueryResponse } from '@/lib/search/types';
import { buildVector, computeCosineSimilarity, generateGroundedAnswer } from '@/lib/search/vectorEngine';
import knowledgeBaseData from '@/lib/search/knowledgeBase.json';

const knowledgeBase = knowledgeBaseData as KnowledgeNode[];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const query = typeof body.query === 'string' ? body.query.trim() : '';

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required.' },
        { status: 400 }
      );
    }

    // 1. Vector calculation for query
    const queryVector = buildVector(query);

    // 2. Cosine similarity against pre-computed nodes (~1ms execution)
    let bestMatch: KnowledgeNode | null = null;
    let maxSimilarity = -1;

    for (const node of knowledgeBase) {
      const sim = computeCosineSimilarity(queryVector, node.embedding);
      if (sim > maxSimilarity) {
        maxSimilarity = sim;
        bestMatch = node;
      }
    }

    const similarityScore = Math.max(0, Math.min(1, maxSimilarity));

    // 3. Two-Tier Threshold Logic
    // Hard Fallback (< 0.50): Off-topic or absent from site architecture
    // Caution Band (0.50 <= sim < 0.65): Low confidence warning badge
    // High Confidence (sim >= 0.65): High certainty match
    const isFallback = similarityScore < 0.50;
    const isCaution = similarityScore >= 0.50 && similarityScore < 0.65;

    if (isFallback || !bestMatch) {
      const response: SearchQueryResponse = {
        answer: "This query sits outside our core on-site architecture. Connect with AI Bill in the workspace for deeper diagnostic evaluation of your website.",
        topMatch: bestMatch ? {
          pageName: bestMatch.pageName,
          url: bestMatch.url,
          h1: bestMatch.h1,
          focusKeyphrase: bestMatch.focusKeyphrase,
          schemaType: bestMatch.schemaType,
          description: bestMatch.description
        } : null,
        similarityScore,
        isFallback: true,
        isCaution: false
      };
      return NextResponse.json(response);
    }

    // 4. Grounded Synthesis
    let synthesizedAnswer = generateGroundedAnswer(bestMatch);

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const prompt = `You are the AEObility Answer Engine Search assistant.
Provide a concise, strictly 2-sentence context-grounded response to the user query based ONLY on the provided entity context.

User Query: "${query}"
Matched Entity Page: ${bestMatch.pageName} (${bestMatch.url})
Heading (H1): ${bestMatch.h1}
Focus Keyphrase: ${bestMatch.focusKeyphrase}
Schema Type: ${bestMatch.schemaType}
Description: ${bestMatch.description}
Latent Keywords: ${bestMatch.latentKeywords}

Rules:
1. MUST be exactly 2 sentences long.
2. Grounded strictly in the entity context above.
3. Professional, clear, and direct Australian tech tone.`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: prompt }] }]
            })
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            synthesizedAnswer = text.trim();
          }
        }
      } catch (err) {
        console.warn('Gemini live synthesis fallback to deterministic grounded answer:', err);
      }
    }

    const response: SearchQueryResponse = {
      answer: synthesizedAnswer,
      topMatch: {
        pageName: bestMatch.pageName,
        url: bestMatch.url,
        h1: bestMatch.h1,
        focusKeyphrase: bestMatch.focusKeyphrase,
        schemaType: bestMatch.schemaType,
        description: bestMatch.description
      },
      similarityScore,
      isFallback: false,
      isCaution
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Answer Engine Search API error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing the search query.' },
      { status: 500 }
    );
  }
}
