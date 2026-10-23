import { NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';

export const runtime = 'edge';

const API_CATALOG_LINKSET = {
  linkset: [
    {
      anchor: 'https://aeobility.com.au/api',
      'service-desc': [
        {
          href: 'https://aeobility.com.au/openapi.json',
          type: 'application/json'
        }
      ],
      'service-doc': [
        {
          href: 'https://aeobility.com.au/docs/api',
          type: 'text/html'
        }
      ],
      status: [
        {
          href: 'https://aeobility.com.au/api/health',
          type: 'application/json'
        }
      ]
    },
    {
      anchor: 'https://aeobility.com.au/api/diagnostic',
      'service-desc': [
        {
          href: 'https://aeobility.com.au/openapi.json',
          type: 'application/json'
        }
      ],
      'service-doc': [
        {
          href: 'https://aeobility.com.au/docs/api#diagnostic',
          type: 'text/html'
        }
      ],
      status: [
        {
          href: 'https://aeobility.com.au/api/health',
          type: 'application/json'
        }
      ]
    },
    {
      anchor: 'https://aeobility.com.au/api/brand-facts',
      'service-desc': [
        {
          href: 'https://aeobility.com.au/openapi.json',
          type: 'application/json'
        }
      ],
      'service-doc': [
        {
          href: 'https://aeobility.com.au/docs/api#brand-facts',
          type: 'text/html'
        }
      ],
      status: [
        {
          href: 'https://aeobility.com.au/api/health',
          type: 'application/json'
        }
      ]
    },
    {
      anchor: 'https://aeobility.com.au/api/mcp',
      'service-desc': [
        {
          href: 'https://aeobility.com.au/openapi.json',
          type: 'application/json'
        }
      ],
      'service-doc': [
        {
          href: 'https://aeobility.com.au/docs/api#mcp',
          type: 'text/html'
        }
      ],
      status: [
        {
          href: 'https://aeobility.com.au/api/health',
          type: 'application/json'
        }
      ]
    },
    {
      anchor: 'https://aeobility.com.au/api/search',
      'service-desc': [
        {
          href: 'https://aeobility.com.au/openapi.json',
          type: 'application/json'
        }
      ],
      'service-doc': [
        {
          href: 'https://aeobility.com.au/docs/api#search',
          type: 'text/html'
        }
      ],
      status: [
        {
          href: 'https://aeobility.com.au/api/health',
          type: 'application/json'
        }
      ]
    }
  ]
};

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  return new NextResponse(JSON.stringify(API_CATALOG_LINKSET, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}
