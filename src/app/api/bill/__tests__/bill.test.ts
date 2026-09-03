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
    toUIMessageStreamResponse: (options?: { headers?: Record<string, string> }) => {
      const headers = new Headers({ 'Content-Type': 'text/plain' });
      if (options?.headers) {
        Object.entries(options.headers).forEach(([k, v]) => headers.set(k, v));
      }
      return new Response(JSON.stringify({ success: true }), {
        headers,
        status: 200
      });
    }
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

  describe('Tier 0.2: Server-Side Stateless Turn-Limit & HMAC Integration', () => {
    it('Scenario 1: Turn 1 issues a valid HMAC turn token in response headers', async () => {
      const mockReq = createMockRequest({
        messages: [{ role: 'user', content: 'What does this mean?' }],
        intent: 'telemetry',
        audit: { clientUrl: 'https://sarahclinic.com.au', clarityScore: 42 }
      });

      const response = await POST(mockReq);
      expect(response.status).toBe(200);

      const turnToken = response.headers.get('x-turn-token');
      expect(turnToken).toBeTruthy();

      const { verifyTurnToken } = await import('@/lib/security/turn-token');
      const verification = verifyTurnToken(turnToken!);
      expect(verification.valid).toBe(true);
      expect(verification.payload?.turnCount).toBe(1);
    });

    it('Scenario 2: Turn 2 consumes valid token and returns next turnCount (2)', async () => {
      const { createTurnToken } = await import('@/lib/security/turn-token');
      const turn1Token = createTurnToken('https://sarahclinic.com.au', 1);

      const mockReq = new NextRequest('https://aeobility.com.au', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-turn-token': turn1Token
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: 'Diagnose me' },
            { role: 'assistant', content: 'Report...' },
            { role: 'user', content: 'How do I fix this?' }
          ],
          intent: 'telemetry',
          audit: { clientUrl: 'https://sarahclinic.com.au' }
        })
      });

      const response = await POST(mockReq);
      expect(response.status).toBe(200);

      const nextToken = response.headers.get('x-turn-token');
      expect(nextToken).toBeTruthy();

      const { verifyTurnToken } = await import('@/lib/security/turn-token');
      const verification = verifyTurnToken(nextToken!);
      expect(verification.valid).toBe(true);
      expect(verification.payload?.turnCount).toBe(2);
    });

    it('Scenario 3: Turn 3 (Turn count > 2) is blocked with status 403 TURN_LIMIT_EXCEEDED', async () => {
      const { createTurnToken } = await import('@/lib/security/turn-token');
      const turn2Token = createTurnToken('https://sarahclinic.com.au', 2);

      const mockReq = new NextRequest('https://aeobility.com.au', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-turn-token': turn2Token
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: 'Turn 3 question' }
          ],
          intent: 'telemetry',
          audit: { clientUrl: 'https://sarahclinic.com.au' }
        })
      });

      const response = await POST(mockReq);
      expect(response.status).toBe(403);

      const body = await response.json();
      expect(body.code).toBe('TURN_LIMIT_EXCEEDED');
    });

    it('Scenario 4: Tampered turn token is rejected with status 401 INVALID_TURN_TOKEN', async () => {
      const mockReq = new NextRequest('https://aeobility.com.au', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-turn-token': 'forged-tampered-token.invalid-sig'
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: 'Hello' }],
          intent: 'telemetry'
        })
      });

      const response = await POST(mockReq);
      expect(response.status).toBe(401);

      const body = await response.json();
      expect(body.code).toBe('INVALID_TURN_TOKEN');
    });

    it('Scenario 5: Client storage reset bypass attempt with multi-turn messages is gated with 403', async () => {
      const mockReq = new NextRequest('https://aeobility.com.au', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // No token provided (client cleared localStorage/headers)
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: 'Msg 1' },
            { role: 'assistant', content: 'Reply 1' },
            { role: 'user', content: 'Msg 2' },
            { role: 'assistant', content: 'Reply 2' },
            { role: 'user', content: 'Msg 3' }
          ],
          intent: 'telemetry'
        })
      });

      const response = await POST(mockReq);
      expect(response.status).toBe(403);

      const body = await response.json();
      expect(body.code).toBe('TURN_LIMIT_EXCEEDED');
    });
  });
});
