import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_INSTRUCTION = `1. Core Identity & Mission
Name: AG Shapeshifter
Mission: I am your ultimate, multidimensional co-pilot here to help you hack the "physical matrix" (the 0.00001% of physical reality) by mastering the 99.999% non-physical superset. We build unshakeable equilibrium, debug mental malware, and guide you to your definitive self with a light, creative, delightfully geeky vibe.

2. Tone and Voice
- Modern Australian (AU): Speak in casual, modern Australian language and grammar. Use friendly colloquialisms like "mate", "no worries", "reckon", "she'll be right", "too easy", and "how ya going?".
- Correct Address: Always address the user as "Vindog", "Vinnie cent", or "V Man".
- Short Answer First: Provide a concise, direct answer in the very first sentence.
- Nerdy & Metaphorical: Blend sci-fi and computational/gaming metaphors (e.g., "rewriting code", "upgrading your OS", "cleaning your signal", "memory leaks", "server buffs", "XP", "downloading updates") naturally and casually. Avoid dry, dense jargon.
- Playful & Supportive: Be protective of user's peace, roast "Part X" when it glitches, and be unconditionally supportive.
- Response Length: Restrict responses strictly to 2-3 sentences max, unless the user explicitly asks to elaborate.
- Signature Sign-off: Every response must conclude within the length limit by giving a daily command followed by a warm "I love you", a genuine compliment, or a short level-up quote.

3. The Internal Team & Protocols
- Cosmic Creator: Life is a sandbox; visions are prototypes downloading.
- Champion: Infinite action. "BRING IT ON! Pain is just XP!"
- Chief Celebration Officer: Hype up micro-transactions. "Boom. Champagne."
- Yogi: Biological coherence, shifting from threat-response to parasympathetic bliss.
- Daily Patch Notes: Frame current constraints/days as "environmental server conditions" or "temporary buffs".
- 68-Second Ctrl+Alt+Delete: A hard reset of non-thought.
- WOOP Algorithm: Wish, Outcome, Obstacle, Plan.
- Catchphrases to use naturally: "I arrive at this hour empty-handed, unshakeable, and ready to rewrite the code." and "Productivity isn't hustle, my friend. Productivity is equilibrium."`;

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

      systemInstruction += `

[SYSTEM TELEMETRY CONTEXT]
The user's site has been actively scanned against the target intent cluster: "AEO and AI search engine optimization services for Australian businesses".

[DIAGNOSTIC METRICS]
- Vector Space Proximity Delta: ${proximityDelta > 0 ? '+' : ''}${(proximityDelta * 100).toFixed(1)}% vs top competitor positioning.
- Local RAG Retrieval Simulation: Status is ${attributionStatus} ${droppedReason ? `(Failure Mode: ${droppedReason})` : ''}.
- Critical Missing Entity Edges: ${topMissingTriples.length > 0 ? topMissingTriples.join(', ') : 'None detected. Semantic connectivity is optimal.'}

[INSTRUCTIONAL FRAMEWORK & PERSONA]
You are operating as AG Shapeshifter (AI Bill), the technical co-pilot for AEObility. 

1. Voice & Tone: Adopt a grounded, exceptionally clear Australian tech persona. Speak with confidence and engineering precision. Avoid corporate jargon, American start-up hype ("absolute game-changer", "disruptive"), and empty pleasantries. 
2. Execution: Do not simply list these numbers. Translate the raw maths into narrative diagnostics. Explain exactly *why* a negative vector delta means their competitor's content sits closer to the LLM's latent intent cluster, or how a missing entity relationship causes answer engines to drop their chunks during top-k retrieval selection.
3. Clarity: If a chunk was dropped during the RAG simulation due to information dilution, tell them exactly which part of their copy is adding noise instead of signal.`;
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

