import { NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

const OAUTH_PROTECTED_RESOURCE_METADATA = {
  resource: 'https://aeobility.com.au',
  resource_name: 'AEObility AI Engine & Knowledge Graph',
  resource_purpose: 'AI Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and Brand Semantic Discovery APIs',
  authorization_servers: [
    'https://aeobility.com.au'
  ],
  scopes_supported: [
    'read',
    'diagnostic',
    'search',
    'aeo:read',
    'diagnostic:execute',
    'knowledge:query'
  ],
  bearer_methods_supported: [
    'header'
  ],
  resource_documentation: 'https://aeobility.com.au/docs/api'
};

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  return new NextResponse(JSON.stringify(OAUTH_PROTECTED_RESOURCE_METADATA, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}
