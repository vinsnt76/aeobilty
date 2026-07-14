import { SimulationRun } from './types';
import { cosineSimilarity } from './proximity';

async function generateSyntheticQueries(intent: string): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return [intent];

  try {
    const prompt = `Given the core search intent: "${intent}", generate exactly 3 diverse, realistic search queries or questions that a human would ask an AI search engine (like Perplexity or ChatGPT) to find this. Reply with a simple JSON list of strings and nothing else. No markdown, no formatting. Example: ["query1", "query2", "query3"]`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      }
    );

    if (!response.ok) return [intent];
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) return parsed.map(String);
    }
  } catch (err) {
    console.error('Failed to generate synthetic queries, using fallback:', err);
  }

  return [
    `how do I find ${intent}`,
    `best options for ${intent}`,
    `recommendations for ${intent}`
  ];
}

async function getEmbedding(text: string): Promise<number[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('API key missing');
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: { parts: [{ text }] } })
    }
  );
  const data = await response.json();
  return data.embedding?.values || [];
}

export async function runSimulation(intent: string, clientText: string): Promise<SimulationRun[]> {
  try {
    // 1. Generate synthetic queries (adversarial prompt fan-out)
    const queries = await generateSyntheticQueries(intent);

    // 2. Chunk client text by paragraphs (max 5 chunks to stay within serverless limits)
    const chunks = clientText
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 20)
      .slice(0, 5);

    if (chunks.length === 0) {
      chunks.push(clientText.slice(0, 500));
    }

    // Embed all chunks
    const chunkEmbeddings = await Promise.all(chunks.map(chunk => getEmbedding(chunk)));

    const simulations: SimulationRun[] = [];

    // 3. For each synthetic query, check similarity to chunks
    const queryEmbeddings = await Promise.all(queries.map(q => getEmbedding(q)));

    for (let j = 0; j < queries.length; j++) {
      const query = queries[j];
      const queryEmbedding = queryEmbeddings[j];

      let bestSimilarity = -1;
      let bestChunkIndex = 0;

      for (let i = 0; i < chunks.length; i++) {
        const sim = cosineSimilarity(queryEmbedding, chunkEmbeddings[i]);
        if (sim > bestSimilarity) {
          bestSimilarity = sim;
          bestChunkIndex = i;
        }
      }

      // Check if it survived selection threshold (e.g. 0.65 similarity)
      const survived = bestSimilarity > 0.62;

      simulations.push({
        syntheticQuery: query,
        bestSimilarity,
        survived,
        attributionRank: survived ? 1 : 0, // mock rank
        selectedChunk: chunks[bestChunkIndex]
      });
    }

    return simulations;
  } catch (error) {
    console.error('Error in runSimulation:', error);
    return [
      {
        syntheticQuery: `Alternative search for ${intent}`,
        bestSimilarity: 0.58,
        survived: false,
        attributionRank: 0,
        selectedChunk: 'Simulation failed. Text chunking fallback loaded.'
      }
    ];
  }
}
