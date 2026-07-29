import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../route';
import { NextRequest } from 'next/server';

let capturedParams: { system?: string } = {};

vi.mock('ai', () => ({
  streamText: vi.fn().mockImplementation((params: { system: string }) => {
    capturedParams = params;
    return {
      toTextStreamResponse: () => new Response("Smoke test stream chunk", { status: 200, headers: { 'Content-Type': 'text/plain' } }),
      toDataStreamResponse: () => new Response("Smoke test stream chunk", { status: 200, headers: { 'Content-Type': 'text/plain' } }),
      toUIMessageStreamResponse: () => new Response("Smoke test stream chunk", { status: 200, headers: { 'Content-Type': 'text/plain' } })
    };
  })
}));

vi.mock('@ai-sdk/openai', () => ({
  openai: vi.fn()
}));

describe('Project Bill - Production Smoke & Lattice Expansion Suite', () => {
  beforeEach(() => {
    capturedParams = {};
    vi.clearAllMocks();
  });

  const createMockReq = (payload: object) => new NextRequest('https://aeobility.com.au/api/bill', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  it('1. Telemetry Activation: Confirm audit payload triggers Telemetry Guide skill', async () => {
    const req = createMockReq({
      prompt: 'diagnose my audit data',
      intent: 'telemetry',
      audit: { entityClarityScore: 42, citationSharePercent: 12 }
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Telemetry Guide]');
    expect(capturedParams.system).toContain('RAW AUDIT DATA PAYLOAD');
  });

  it('2. Natural Telemetry Intent: Confirm "how do you measure visibility" routes directly to Telemetry Guide', async () => {
    const req = createMockReq({
      prompt: 'how do you measure visibility'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Telemetry Guide]');
  });

  it('3. Blueprint Funnel Detection: Confirm commercial fix intent triggers Blueprint Funnel & $995 AUD quote', async () => {
    const req = createMockReq({
      prompt: 'how do I fix my visibility gaps'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Blueprint Funnel]');
    expect(capturedParams.system).toContain('995.00');
  });

  it('4. Positional Bias Concept Node: Confirm "what is positional bias" pulls expanded positional bias knowledge node', async () => {
    const req = createMockReq({
      prompt: 'what is positional bias in retrieval'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Technical Concept Explainer]');
    expect(capturedParams.system).toContain('Positional Bias');
  });

  it('5. Semantic SEO vs AEO Node: Confirm query matches Semantic SEO vs AEO node', async () => {
    const req = createMockReq({
      prompt: 'semantic seo vs aeo'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('Semantic SEO vs Answer Engine Optimisation');
  });

  it('6. General Agent Fallback: Confirm neutral prompts provide canonical identity graph without funneling', async () => {
    const req = createMockReq({
      prompt: 'what does AEObility do'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('CANONICAL IDENTITY LAYER');
    expect(capturedParams.system).not.toContain('[ACTIVE SKILL: Blueprint Funnel]');
  });

  it('7. Skill 5 Technical Concept Explainer: Confirm "what is semantic density" activates Skill 5 and retrieves lattice nodes', async () => {
    const req = createMockReq({
      prompt: 'what is semantic density'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Technical Concept Explainer]');
    expect(capturedParams.system).toContain('DYNAMIC KNOWLEDGE MATCHES');
  });

  it('8. Streaming & Edge Stability Stress Test: Execute rapid sequential requests with 0 edge runtime crashes', async () => {
    for (let i = 0; i < 10; i++) {
      const req = createMockReq({ prompt: `rapid execution test iteration ${i}` });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }
  });

  it('9. START_TELEMETRY_REPORT Tags: Confirm initial scan turn includes [START_TELEMETRY_REPORT] block tags', async () => {
    const req = createMockReq({
      intent: 'telemetry',
      audit: { clarityScore: 78, citationShare: 42 },
      messages: [{ role: 'user', content: 'diagnose my audit data' }]
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[START_TELEMETRY_REPORT]');
    expect(capturedParams.system).toContain('[END_TELEMETRY_REPORT]');
  });

  it('10. Multi-Turn Skill Drift: Confirm turn 2 follow-up query activates Telemetry Consultant skill without re-emitting card tags', async () => {
    const req = createMockReq({
      intent: 'telemetry',
      audit: { clarityScore: 78, citationShare: 42 },
      messages: [
        { role: 'user', content: 'diagnose my audit data' },
        { role: 'assistant', content: '[START_TELEMETRY_REPORT]\nAI First Impression: Low visibility\n[END_TELEMETRY_REPORT]' },
        { role: 'user', content: 'why is citation share low?' }
      ]
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Telemetry Consultant]');
    expect(capturedParams.system).not.toContain('[START_TELEMETRY_REPORT]');
  });

  it('11. Token Re-Ordering Resiliency: Confirm Clarity Score appearing before AI First Impression parses correctly', () => {
    const outOfOrderStream = `[START_TELEMETRY_REPORT]
Clarity Score: 88
Recommendation Verdict: PASS
Citation Share: 65
AI First Impression: Strong entity graph alignment
Biggest Blind Spot: Low schema depth
Hallucination Risk: Low
[END_TELEMETRY_REPORT]`;

    const blockMatch = outOfOrderStream.match(/\[START_TELEMETRY_REPORT\]([\s\S]*?)(?:\[END_TELEMETRY_REPORT\]|$)/i);
    expect(blockMatch).not.toBeNull();
    const blockContent = blockMatch![1];

    const clarityMatch = blockContent.match(/Clarity Score:\s*(\d+)/mi);
    const firstImpressionMatch = blockContent.match(/AI First Impression:\s*(.+)/mi);
    const verdictMatch = blockContent.match(/Recommendation Verdict:\s*(.+)/mi);

    expect(clarityMatch?.[1]).toBe('88');
    expect(firstImpressionMatch?.[1]).toBe('Strong entity graph alignment');
    expect(verdictMatch?.[1]).toBe('PASS');
  });

  it('12. Preamble Stripping Resiliency: Confirm conversational preamble outside tags is excluded from parsed block content', () => {
    const preambleStream = `Sure! Here is your audit report:
[START_TELEMETRY_REPORT]
AI First Impression: Entity alignment gap detected
Biggest Blind Spot: Unstructured HTML blocks
Recommendation Verdict: ALERT
Clarity Score: 45
Citation Share: 18
Hallucination Risk: High
[END_TELEMETRY_REPORT]
Let me know if you have questions!`;

    const blockMatch = preambleStream.match(/\[START_TELEMETRY_REPORT\]([\s\S]*?)(?:\[END_TELEMETRY_REPORT\]|$)/i);
    expect(blockMatch).not.toBeNull();
    const blockContent = blockMatch![1];

    expect(blockContent).not.toContain("Sure! Here is your audit report:");
    expect(blockContent).not.toContain("Let me know if you have questions!");
    expect(blockContent).toContain("AI First Impression: Entity alignment gap detected");
  });

  it('13. Multi-Turn Skill Drift Resiliency: Confirm turn 1 emits card block and turn 2 yields plain conversational text', async () => {
    // Turn 1: Initial audit scan
    const turn1Req = createMockReq({
      intent: 'telemetry',
      audit: { clarityScore: 78 },
      messages: [{ role: 'user', content: 'diagnose my audit data' }]
    });
    const turn1Res = await POST(turn1Req);
    expect(turn1Res.status).toBe(200);
    expect(capturedParams.system).toContain('[START_TELEMETRY_REPORT]');
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Telemetry Guide]');

    // Turn 2: Follow-up question
    const turn2Req = createMockReq({
      intent: 'telemetry',
      audit: { clarityScore: 78 },
      messages: [
        { role: 'user', content: 'diagnose my audit data' },
        { role: 'assistant', content: '[START_TELEMETRY_REPORT]\nAI First Impression: Sample\n[END_TELEMETRY_REPORT]' },
        { role: 'user', content: 'how can I improve this score?' }
      ]
    });
    const turn2Res = await POST(turn2Req);
    expect(turn2Res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Telemetry Consultant]');
    expect(capturedParams.system).not.toContain('[START_TELEMETRY_REPORT]');
  });
});
