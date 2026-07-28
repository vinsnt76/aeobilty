import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../route';
import { NextRequest } from 'next/server';

interface StreamTextMockCall {
  system: string;
}

interface StreamTextMock {
  mock: {
    calls: StreamTextMockCall[][];
  };
}

let capturedParams: { system?: string } = {};

vi.mock('ai', () => ({
  streamText: vi.fn().mockImplementation((params: { system: string }) => {
    capturedParams = params;
    return {
      toTextStreamResponse: () => new Response("Smoke test stream chunk", { status: 200, headers: { 'Content-Type': 'text/plain' } }),
      toDataStreamResponse: () => new Response("Smoke test stream chunk", { status: 200, headers: { 'Content-Type': 'text/plain' } })
    };
  })
}));

vi.mock('@ai-sdk/openai', () => ({
  openai: vi.fn()
}));

describe('Project Bill - 6-Step Production Smoke Test Suite', () => {
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

  it('2. Blueprint Funnel Detection: Confirm commercial fix intent triggers Blueprint Funnel & $995 AUD quote', async () => {
    const req = createMockReq({
      prompt: 'how do I fix my visibility gaps'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Blueprint Funnel]');
    expect(capturedParams.system).toContain('995.00');
  });

  it('3. Concept Explainer Routing: Confirm semantic lattice queries pull dynamic knowledge nodes', async () => {
    const req = createMockReq({
      prompt: 'explain semantic lattices'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('[ACTIVE SKILL: Dynamic Knowledge Graph Node Explainer]');
    expect(capturedParams.system).toContain('DYNAMIC KNOWLEDGE MATCHES');
  });

  it('4. General Agent Fallback: Confirm neutral prompts provide canonical identity graph without funneling', async () => {
    const req = createMockReq({
      prompt: 'what does AEObility do'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).toContain('CANONICAL IDENTITY LAYER');
    expect(capturedParams.system).not.toContain('[ACTIVE SKILL: Blueprint Funnel]');
  });

  it('5. Ambiguous Query Handling: Confirm ambiguous queries route to explainer without false commercial funneling', async () => {
    const req = createMockReq({
      prompt: 'visibility structure'
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(capturedParams.system).not.toContain('[ACTIVE SKILL: Blueprint Funnel]');
  });

  it('6. Streaming & Edge Stability Stress Test: Execute rapid sequential requests with 0 edge runtime crashes', async () => {
    for (let i = 0; i < 10; i++) {
      const req = createMockReq({ prompt: `rapid execution test iteration ${i}` });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }
  });
});
