import { NextRequest, NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown> = {};
    try {
      body = await req.json();
    } catch {
      // Empty or non-JSON body fallback
    }

    const agentName = (body.agent_name as string) || 'AutonomousAgent';
    const identityType = (body.identity_type as string) || 'anonymous';
    const scopes = (body.requested_scopes as string[]) || ['read', 'diagnostic', 'search'];

    return new NextResponse(
      JSON.stringify(
        {
          status: 'registered',
          agent_name: agentName,
          identity_type: identityType,
          agent_id: `agent_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          token_endpoint: 'https://aeobility.com.au/api/auth/token',
          claim_uri: 'https://aeobility.com.au/contact/agent-claim',
          token: {
            access_token: `aeo_live_${Math.random().toString(36).substring(2)}_${Math.random().toString(36).substring(2)}`,
            token_type: 'Bearer',
            expires_in: 86400,
            scope: scopes.join(' '),
          },
          service_documentation: 'https://aeobility.com.au/docs/api',
        },
        null,
        2
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'invalid_request', error_description: String(error) }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}
