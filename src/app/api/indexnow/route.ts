import { NextResponse } from 'next/server';

const HOST = "aeobility.com.au";
const KEY = "99f72a3935774040b8814ad6a76e6e59";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow"
];

const DEFAULT_CANONICAL_PATHS = [
  "https://aeobility.com.au",
  "https://aeobility.com.au/diagnostic",
  "https://aeobility.com.au/brand-facts",
  "https://aeobility.com.au/services",
  "https://aeobility.com.au/services/aeo",
  "https://aeobility.com.au/services/aeo/local-business",
  "https://aeobility.com.au/services/geo-marketing",
  "https://aeobility.com.au/solutions",
  "https://aeobility.com.au/solutions/aeo-blueprint",
  "https://aeobility.com.au/solutions/aeo-sprint",
  "https://aeobility.com.au/knowledge-hub",
  "https://aeobility.com.au/knowledge-hub/geo",
  "https://aeobility.com.au/contact"
];

export async function POST(request: Request) {
  try {
    let targetUrls: string[] = DEFAULT_CANONICAL_PATHS;

    try {
      const body = await request.json();
      if (body && Array.isArray(body.urls) && body.urls.length > 0) {
        targetUrls = body.urls;
      }
    } catch {
      // Use default canonical paths if no body provided
    }

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: targetUrls,
    };

    const results: { endpoint: string; status: number; statusText: string; success: boolean }[] = [];

    for (const endpoint of INDEXNOW_ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "AEObility-IndexNow-Server/1.0",
          },
          body: JSON.stringify(payload),
        });

        results.push({
          endpoint,
          status: response.status,
          statusText: response.statusText,
          success: response.status === 200 || response.status === 202,
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        results.push({
          endpoint,
          status: 500,
          statusText: message,
          success: false,
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `IndexNow submission dispatched for ${targetUrls.length} entity paths.`,
      keyLocation: KEY_LOCATION,
      urlsSubmitted: targetUrls,
      endpointResults: results,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "IndexNow server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  const dummyRequest = new Request("https://aeobility.com.au/api/indexnow", { method: "POST" });
  return POST(dummyRequest);
}
