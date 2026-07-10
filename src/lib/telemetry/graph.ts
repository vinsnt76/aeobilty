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
1. Subject & Object: Must be concrete concepts, product categories, inventory items, brands, or service offerings (e.g., "Insulated Lunchbox", "Baby Bento", "Food Jar", "Kids Lunchbox"). Keep them singular and concise.
2. Predicate: Must be an active, lowercase operational verb or structural relationship (e.g., "sells", "offers", "provides", "features").
3. Focus: Prioritise capturing concrete product-level and category-level relationships that answer engines use to map brand offerings. Avoid generic placeholder connections (e.g., do not extract generic verbs like "has website", "provides services", or "undergoes audit").

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
    { subject: 'Brand Product', predicate: 'offers', object: 'Targeted Category Solutions' },
    { subject: 'On-Page Content', predicate: 'lacks', object: 'Explicit Product Schema' },
    { subject: 'Answer Engines', predicate: 'index', object: 'Connected Entity Classes' }
  ];
}
