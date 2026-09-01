/**
 * AEObility IndexNow Bulk Submission Script
 * Protocol: https://www.indexnow.org/documentation
 * Path: scripts/submit-indexnow.ts
 */

const HOST = "aeobility.com.au";
const KEY = "99f72a3935774040b8814ad6a76e6e59";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// IndexNow API endpoints supporting global distribution
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow"
];

// Complete 49-Node Canonical Directory Matrix (1:1 with AEObility -IA & SLM.csv)
export const CANONICAL_URL_LIST: string[] = [
  // 1. Root & Diagnostic Core
  `https://${HOST}`,
  `https://${HOST}/diagnostic`,
  `https://${HOST}/brand-facts`,

  // 2. Services Hub & Corridors
  `https://${HOST}/services`,
  `https://${HOST}/services/aeo`,
  `https://${HOST}/services/aeo/definition`,
  `https://${HOST}/services/aeo/comparison`,
  `https://${HOST}/services/aeo/procedures`,
  `https://${HOST}/services/aeo/constraints`,
  `https://${HOST}/services/aeo/costs-timing`,
  `https://${HOST}/services/aeo/shopify`,
  `https://${HOST}/services/aeo/local-business`,
  `https://${HOST}/services/ai-search-marketing`,
  `https://${HOST}/services/geo-marketing`,

  // 3. Solutions & Fixed-Scope Sprints
  `https://${HOST}/solutions`,
  `https://${HOST}/solutions/aeo-blueprint`,
  `https://${HOST}/solutions/aeo-sprint`,
  `https://${HOST}/solutions/geo-services`,

  // 4. Knowledge Hub Indexes & Core Theory
  `https://${HOST}/knowledge-hub`,
  `https://${HOST}/knowledge-hub/aeo`,
  `https://${HOST}/knowledge-hub/guides`,
  `https://${HOST}/knowledge-hub/guides/aeo`,
  `https://${HOST}/knowledge-hub/tutorials`,
  `https://${HOST}/knowledge-hub/semantic-seo`,
  `https://${HOST}/knowledge-hub/geo`,
  `https://${HOST}/knowledge-hub/what-is-seo-optimisation`,
  `https://${HOST}/knowledge-hub/case-studies`,
  `https://${HOST}/knowledge-hub/case-studies/baby-bento`,

  // 5. Canonical Technical Research Articles
  `https://${HOST}/knowledge-hub/articles`,
  `https://${HOST}/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps`,
  `https://${HOST}/knowledge-hub/articles/optimising-for-different-ai-search-engines`,
  `https://${HOST}/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework`,
  `https://${HOST}/knowledge-hub/articles/positional-bias-in-retrieval`,
  `https://${HOST}/knowledge-hub/articles/entity-authority-building`,
  `https://${HOST}/knowledge-hub/articles/aeo-vs-seo`,
  `https://${HOST}/knowledge-hub/articles/retrieval-augmented-generation`,
  `https://${HOST}/knowledge-hub/articles/structured-data-query-fan-out`,
  `https://${HOST}/knowledge-hub/articles/telemetry-diagnostic-architecture`,

  // 6. About & Consulting Profiles
  `https://${HOST}/about`,
  `https://${HOST}/about/freelance-digital-specialist-perth`,
  `https://${HOST}/about/freelance-seo-consultant-perth`,
  `https://${HOST}/about/freelance-google-ads-consultant-perth`,
  `https://${HOST}/about/freelance-ai-consultant-perth`,
  `https://${HOST}/vince-baker`,

  // 7. Conversational, Booking & Utility Endpoints
  `https://${HOST}/contact`,
  `https://${HOST}/book`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`
];

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export async function submitToIndexNow() {
  const payload: IndexNowPayload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: CANONICAL_URL_LIST,
  };

  console.log(`\n======================================================`);
  console.log(`⚡ Dispatching IndexNow Bulk Push for ${HOST}`);
  console.log(`📦 Payload: ${CANONICAL_URL_LIST.length} Canonical URLs`);
  console.log(`🔑 Key Verification: ${KEY_LOCATION}`);
  console.log(`======================================================\n`);

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      console.log(`📡 Pinging ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "AEObility-IndexNow-Dispatcher/1.0",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`  ✅ [${response.status} ${response.statusText}] Submission accepted by ${new URL(endpoint).hostname}`);
      } else {
        const errorText = await response.text();
        console.error(`  ⚠️ [${response.status} ${response.statusText}] Issue at ${endpoint}: ${errorText}`);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ❌ Failed to reach ${endpoint}:`, message);
    }
  }

  console.log(`\n✨ IndexNow submission cycle complete.\n`);
}

// Execute directly if run via CLI
if (process.argv[1] && process.argv[1].includes("submit-indexnow")) {
  submitToIndexNow();
}
