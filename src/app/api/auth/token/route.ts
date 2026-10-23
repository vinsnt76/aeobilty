import { NextRequest, NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: NextRequest) {
  try {
    let grantType = 'client_credentials';
    let scope = 'read diagnostic search';

    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData();
      grantType = (formData.get('grant_type') as string) || grantType;
      scope = (formData.get('scope') as string) || scope;
    } else if (contentType.includes('application/json')) {
      const body = await req.json();
      grantType = body.grant_type || grantType;
      scope = body.scope || scope;
    }

    return new NextResponse(
      JSON.stringify(
        {
          access_token: `aeo_token_${Math.random().toString(36).substring(2)}_${Date.now()}`,
          token_type: 'Bearer',
          expires_in: 86400,
          scope,
          grant_type_used: grantType,
        },
        null,
        2
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          Pragma: 'no-cache',
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
