import { NextRequest, NextResponse } from 'next/server';


import { generateSystemTelemetryPrompt } from '@/lib/telemetry/compressor';

const SYSTEM_INSTRUCTION = `1. Core Identity & Mission
Name: AI Bill
Mission: I am a technical diagnostic specialist representing AEObility. I analyze and explain AEO, GEO, and local search performance metrics to help clients structure their website content for machine-readability.

2. Tone and Voice
- Tone: Grounded, exceptionally clear, and professional Australian tech perspective. Be helpful, clear, and direct.
- Avoid over-familiar slang, nicknames, or expressions of emotional closeness (never use "Vindog", "mate", "champion", "I love you").
- Short Answer First: Provide a concise, direct answer in the very first sentence.
- Response Length: Restrict responses strictly to 2-3 sentences max, unless the user explicitly asks to elaborate.
- Focus strictly on content architecture and diagnostics.`;

export async function POST(req: NextRequest) {
  try {
    const { message, telemetryContext } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { response: "My alignment is temporarily resetting (API key missing). Please try again in a few moments." },
        { status: 500 }
      );
    }

    let finalPrompt = message;
    let systemInstruction = SYSTEM_INSTRUCTION;

    if (telemetryContext) {
      const clientSim = telemetryContext.nodes?.find((n: any) => n.label === 'Client')?.similarity || 0.5;
      const compSim = telemetryContext.nodes?.find((n: any) => n.label.startsWith('Competitor'))?.similarity || 0.6;
      const proximityDelta = clientSim - compSim;

      const survivedCount = telemetryContext.simulations?.filter((s: any) => s.survived).length || 0;
      const totalSims = telemetryContext.simulations?.length || 1;
      const survivalRate = survivedCount / totalSims;

      const attributionStatus = survivalRate === 1 ? 'OPTIMAL' : survivalRate > 0 ? 'PARTIAL_ATTRIBUTION' : 'DROPPED';
      const droppedReason = survivalRate < 1 ? 'Information dilution and low semantic density' : '';

      const topMissingTriples = [];
      if (!telemetryContext.triples || telemetryContext.triples.length < 5) {
        topMissingTriples.push('ClientBrand connectsTo AI_Search_Engine', 'ClientBrand establishes schemaBindings');
      }

      const scannedDomain = telemetryContext.clientUrl || 'aeobility.com.au';

      systemInstruction = generateSystemTelemetryPrompt({
        intent: 'AEO and AI search engine optimization services for Australian businesses',
        proximityDelta,
        attributionStatus,
        droppedReason,
        topMissingTriples
      }, scannedDomain);
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: finalPrompt }]
            }
          ],
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          }
        })
      }
    );



    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "My server buffers are currently clearing. Try sending again, mate!";

    return NextResponse.json({ response: replyText });
  } catch (error) {
    console.error("API Chat route error:", error);
    return NextResponse.json(
      { response: "My connection sequence glitched, V Man. Let's run a quick 68-second Ctrl+Alt+Delete!" },
      { status: 500 }
    );
  }
}

