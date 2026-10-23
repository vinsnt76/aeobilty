import { NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST() {
  return new NextResponse(
    JSON.stringify(
      {
        status: 'revoked',
        message: 'Token has been successfully revoked.'
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
}
