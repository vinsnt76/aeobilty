import { NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

const WBA_DIRECTORY = {
  keys: [
    {
      kty: 'OKP',
      crv: 'Ed25519',
      kid: 'Hwf_NuD2s9odjsqQoq6xZULDLdJ5DB2FpA45XmH95xk',
      x: 'Do6rvlJ3_gER5_Dmr3zDsJyBexeiIckhOCOxnhpWFRo',
      use: 'sig',
      nbf: 1704067200,
    },
  ],
  purpose: 'rag',
  agent: 'https://aeobility.com.au',
};

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  return new NextResponse(JSON.stringify(WBA_DIRECTORY, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/http-message-signatures-directory+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/http-message-signatures-directory+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}
