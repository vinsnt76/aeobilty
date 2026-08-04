import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../route';
import { NextRequest } from 'next/server';

// Mock Vercel AI SDK to prevent firing live HTTP requests to OpenAI
vi.mock('ai', () => {
  const mockStreamText = vi.fn().mockImplementation(() => ({
    toTextStreamResponse: () => new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'text/plain' },
      status: 200
    }),
    toDataStreamResponse: () => new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'text/plain' },
      status: 200
    }),
    toUIMessageStreamResponse: () => new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'text/plain' },
      status: 200
    })
  }));
  return {
    streamText: mockStreamText
  };
});

// Mock the core OpenAI provider initialization
vi.mock('@ai-sdk/openai', () => ({
  openai: vi.fn()
}));

interface StreamTextMockCall {
  system: string;
}

interface StreamTextMock {
  mock: {
    calls: StreamTextMockCall[][];
  };
  mockImplementationOnce: (fn: () => void) => void;
}

describe('Bill Unified Agent Endpoint - Intent Routing Matrix', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockRequest = (payload: object) => {
    return new NextRequest('https://aeobility.com.au', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  };

  it('🟢 Skill 1 Check: Should activate Telemetry Guide when audit payload or intent flag is passed', async () => {
    const mockReq = createMockRequest({
      messages: [{ role: 'user', content: 'What does this mean?' }],
      intent: 'telemetry',
      audit: { clarityScore: 42 }
    });

    const response = await POST(mockReq);
    expect(response.status).toBe(200);
    
    // The imported streamText mock is called by the endpoint execution pipeline
    const { streamText } = await import('ai');
    expect(streamText).toHaveBeenCalled();
    
    const callArgs = (streamText as unknown as StreamTextMock).mock.calls[0][0];
    expect(callArgs.system).toContain('[ACTIVE SKILL: Telemetry Guide]');
  });

  it('🟢 Skill 3 Check: Should slide into Blueprint Funnel when user prompt expresses commercial fix intent', async () => {
    const mockReq = createMockRequest({
      messages: [{ role: 'user', content: 'How do I fix my visibility gaps?' }]
    });

    const response = await POST(mockReq);
    expect(response.status).toBe(200);

    const { streamText } = await import('ai');
    const callArgs = (streamText as unknown as StreamTextMock).mock.calls[0][0];
    expect(callArgs.system).toContain('[ACTIVE SKILL: Blueprint Funnel]');
    expect(callArgs.system).toContain('995.00'); // Validates commercial mapping output target criteria
  });

  it('🟢 Skill 4 Check: Should invoke Dynamic Knowledge Base node loader for technical concept queries', async () => {
    const mockReq = createMockRequest({
      messages: [{ role: 'user', content: 'Explain what a semantic lattice or schema structure does' }]
    });

    const response = await POST(mockReq);
    expect(response.status).toBe(200);

    const { streamText } = await import('ai');
    const callArgs = (streamText as unknown as StreamTextMock).mock.calls[0][0];
    expect(callArgs.system).toContain('[ACTIVE SKILL: Technical Concept Explainer]');
  });

  it('🔴 Exception Handling: Should fail gracefully with a 500 status when stream execution throws', async () => {
    const { streamText } = await import('ai');
    (streamText as unknown as StreamTextMock).mockImplementationOnce(() => {
      throw new Error('Critical Pipeline Failure');
    });

    const mockReq = createMockRequest({
      messages: [{ role: 'user', content: 'Test trigger error' }]
    });

    const response = await POST(mockReq);
    expect(response.status).toBe(500);

    const data = await response.json();
    expect(data.error).toBe('Bill pipeline dynamic data retrieval error.');
  });
});
