import { EntityTriple } from './types';

export async function extractEntityGraph(clientText: string): Promise<EntityTriple[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return [
      { subject: 'AEObility', predicate: 'offers', object: 'AEO Services' }
    ];
  }

  try {
    const prompt = `Analyze the following website content and extract key semantic Subject-Predicate-Object (SPO) entity triples representing the business, its offerings, target audience, and key brand pillars.
Format the output strictly as a JSON array of objects, each containing "subject", "predicate", and "object" keys. Max 8 triples.
Example:
[
  {"subject": "AEObility", "predicate": "specializes in", "object": "Answer Engine Optimization"},
  {"subject": "AEO Services", "predicate": "helps", "object": "Australian businesses"}
]

Content to analyze:
"""
${clientText.slice(0, 2000)}
"""`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        return parsed as EntityTriple[];
      }
    }
  } catch (err) {
    console.error('Failed to extract entity graph, using fallback:', err);
  }

  return [
    { subject: 'Client Brand', predicate: 'provides', object: 'Services' },
    { subject: 'Website Content', predicate: 'lacks', object: 'Structured Schema' },
    { subject: 'AI Search Engines', predicate: 'require', object: 'Entity Clarity' }
  ];
}
