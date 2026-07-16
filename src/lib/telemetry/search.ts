export interface SearchProvider {
  search(intent: string): Promise<string[]>;
}

export class BraveSearchProvider implements SearchProvider {
  async search(intent: string): Promise<string[]> {
    const braveApiKey = process.env.BRAVE_API_KEY;
    if (!braveApiKey) return [];
    
    try {
      const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(intent)}&count=5`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'X-Subscription-Token': braveApiKey
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        const results = data.web?.results || [];
        return results
          .map((r: { url: string }) => r.url)
          .filter((url: string) => !url.includes('yelp.') && !url.includes('wikipedia.') && !url.includes('facebook.'))
          .slice(0, 2);
      }
    } catch (error) {
      console.error('Brave Search API failed:', error);
    }
    return [];
  }
}

export class GeminiSearchProvider implements SearchProvider {
  async search(intent: string): Promise<string[]> {
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      console.error('GEMINI_API_KEY is not defined in the environment.');
      return [];
    }

    try {
      const prompt = `Search Google for the query: "${intent}".
Identify the top 2 organic business competitor website homepages ranking for this query. 
Exclude directory sites (e.g. Yelp, YellowPages, TrueLocal, TripAdvisor), news articles, Wikipedia, and social media platforms.
Return strictly a JSON array containing exactly 2 homepage URLs of these businesses. Do not add any markdown, notes, or explanations.
Example:
["https://competitor1.com.au", "https://competitor2.com.au"]`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            tools: [{ googleSearch: {} }]
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const cleanedJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanedJson);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.map(String);
          }
        }
      }
    } catch (error) {
      console.error('Error in GeminiSearchProvider:', error);
    }
    return [];
  }
}

// Factory or orchestrator for Search
export async function fetchCompetitorsViaSearch(intent: string): Promise<string[]> {
  const braveProvider = new BraveSearchProvider();
  const geminiProvider = new GeminiSearchProvider();
  
  let competitors = await braveProvider.search(intent);
  
  if (competitors.length === 0) {
    console.log('Brave Search yielded no results, falling back to Gemini Search');
    competitors = await geminiProvider.search(intent);
  }
  
  if (competitors.length === 0) {
    console.log('All search providers failed, returning empty competitor array.');
    return [];
  }
  
  return competitors;
}
