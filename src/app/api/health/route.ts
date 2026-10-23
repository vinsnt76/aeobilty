import { NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'AEObility API Platform',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      catalog: 'https://aeobility.com.au/.well-known/api-catalog',
      spec: 'https://aeobility.com.au/openapi.json',
      docs: 'https://aeobility.com.au/docs/api',
      system: 'operational'
    },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
        ...corsHeaders,
      },
    }
  );
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}
