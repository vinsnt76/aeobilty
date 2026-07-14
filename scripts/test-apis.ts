import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

async function testGeminiEmbedding() {
  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) throw new Error('GEMINI_API_KEY missing');
  console.log('Testing Gemini gemini-embedding-2...');
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent?key=${geminiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: "models/gemini-embedding-2",
      content: { parts: [{ text: "Hello world" }] }
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Embedding API failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  console.log('✅ Gemini Embedding Success! (Vector length:', data.embedding?.values?.length, ')');
}

async function testGeminiFlash() {
  const geminiKey = process.env.GEMINI_API_KEY;
  console.log('Testing Gemini gemini-2.5-flash...');
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: "Say hello" }] }]
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Flash API failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  console.log('✅ Gemini Flash Success! (Response:', data.candidates?.[0]?.content?.parts?.[0]?.text?.trim(), ')');
}

async function testBraveSearch() {
  const braveKey = process.env.BRAVE_API_KEY;
  if (!braveKey) {
    console.log('⚠️ BRAVE_API_KEY missing, skipping Brave Search.');
    return;
  }
  console.log('Testing Brave Search...');
  const res = await fetch('https://api.search.brave.com/res/v1/web/search?q=test', {
    headers: { 'Accept': 'application/json', 'X-Subscription-Token': braveKey }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brave Search failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  console.log('✅ Brave Search Success! (Results found:', data.web?.results?.length, ')');
}

async function testGooglePSI() {
  const psiKey = process.env.GOOGLE_PSI_API_KEY;
  if (!psiKey) {
    console.log('⚠️ GOOGLE_PSI_API_KEY missing, skipping PageSpeed Insights.');
    return;
  }
  console.log('Testing Google PageSpeed Insights...');
  const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&category=performance&key=${psiKey}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google PSI failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  console.log('✅ Google PSI Success! (Score:', data.lighthouseResult?.categories?.performance?.score, ')');
}

async function runAll() {
  try { await testGeminiEmbedding(); } catch (e: any) { console.error('❌', e.message); }
  console.log('---');
  try { await testGeminiFlash(); } catch (e: any) { console.error('❌', e.message); }
  console.log('---');
  try { await testBraveSearch(); } catch (e: any) { console.error('❌', e.message); }
  console.log('---');
  try { await testGooglePSI(); } catch (e: any) { console.error('❌', e.message); }
}

runAll();
