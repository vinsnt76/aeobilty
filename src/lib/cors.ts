import { NextResponse } from 'next/server';

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
  'Access-Control-Allow-Credentials': 'true',
};

export function handleCorsOptions() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}
