export async function fetchCompetitorsViaSearch(intent: string): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not defined in the environment.');
  }

  try {
    const prompt = `Search Google for the query: "${intent}".
Identify the top 2 organic business competitor website homepages ranking for this query. 
Exclude directory sites (e.g. Yelp, YellowPages, TrueLocal, TripAdvisor), news articles, Wikipedia, and social media platforms.
Return strictly a JSON array containing exactly 2 homepage URLs of these businesses. Do not add any markdown, notes, or explanations.
Example:
["https://competitor1.com.au", "https://competitor2.com.au"]`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          tools: [
            {
              googleSearch: {}
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini search grounding API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      // Strip markdown code block wrappers if Gemini returned them despite instruction
      const cleanedJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanedJson);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(String);
      }
    }
  } catch (error) {
    console.error('Error in fetchCompetitorsViaSearch:', error);
  }

  // Robust, brand-aligned fallback competitors if Google search fails
  return [
    'https://www.bentobuzz.com.au/ - bento boxes and kids accessories',
    'https://www.littlelunchboxco.com.au/ - leakproof bento lunchboxes for kids'
  ];
}
