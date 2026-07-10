import { EntityTriple } from './types';

export async function extractEntityGraph(clientText: string): Promise<EntityTriple[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return [
      { subject: 'AEObility', predicate: 'offers', object: 'AEO Services' }
    ];
  }

  try {
    const prompt = `[SYSTEM PURPOSE]
You are a deterministic Knowledge Graph Extraction Engine for AEObility. Your sole task is to process the provided unstructured client text and decompose it into an explicit semantic web of Subject-Predicate-Object (SPO) entity triples.

[OUTPUT SPECIFICATION]
You must respond strictly with a valid JSON array of objects following the EntityTriple schema. Do not add markdown wrapping (like \`\`\`json), introduction, or conversational text. 

[EXTRACTION PRINCIPLES]
1. Subject & Object: Must be concrete concepts, brands, technologies, methodologies, or architectural layers (e.g., "AEObility", "Next.js", "Atomic Answer Block"). Keep them singular and concise.
2. Predicate: Must be an active, lowercase operational verb or structural relationship (e.g., "implements", "optimises", "resolves", "authenticates").
3. Focus: Prioritise capturing distinct brand authorities, core digital assets, and structural dependencies that answer engines use to map brand entity networks.

[SCHEMA]
[
  {
    "subject": "string",
    "predicate": "string",
    "object": "string"
  }
]

[CLIENT TEXT TO PROCESS]
"${clientText.slice(0, 2000)}"`;


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
