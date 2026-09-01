/**
 * AEObility Google Search Console Telemetry & URL Inspection Tool
 * Path: scripts/gsc-audit.ts
 * 
 * Usage:
 *   npx tsx scripts/gsc-audit.ts           (Inspects key target routes)
 *   npx tsx scripts/gsc-audit.ts --all     (Inspects all canonical sitemap URLs)
 *   npx tsx scripts/gsc-audit.ts <url>     (Inspects single specified URL)
 */

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { CANONICAL_URL_LIST } from './submit-indexnow';

// Load .env.local variables if running locally
const envLocalPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const keyFilePath = path.resolve(
  process.cwd(),
  process.env.GSC_KEY_FILE_PATH || './antigravity-cli-and-adk-500010-6c74add7d8e4.json'
);

if (!fs.existsSync(keyFilePath)) {
  console.error(`❌ GSC Service Account key file not found at: ${keyFilePath}`);
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

const searchconsole = google.searchconsole({ version: 'v1', auth });

const SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:aeobility.com.au';

const DEFAULT_TARGET_ROUTES = [
  'https://aeobility.com.au/',
  'https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out',
  'https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture',
  'https://aeobility.com.au/services/aeo',
  'https://aeobility.com.au/services/aeo/comparison',
  'https://aeobility.com.au/services/geo-marketing',
  'https://aeobility.com.au/diagnostic',
];

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAudit() {
  const args = process.argv.slice(2);
  let routesToInspect = DEFAULT_TARGET_ROUTES;

  if (args.includes('--all')) {
    routesToInspect = CANONICAL_URL_LIST;
  } else if (args.length > 0 && args[0].startsWith('http')) {
    routesToInspect = [args[0]];
  }

  console.log(`\n======================================================`);
  console.log(`🔍 AEObility Google Search Console Telemetry Audit`);
  console.log(`🔑 Key File:  ${path.basename(keyFilePath)}`);
  console.log(`======================================================`);

  // 1. Verify accessible properties
  let activeProperty = SITE_URL;
  try {
    const sitesRes = await searchconsole.sites.list();
    const siteEntries = sitesRes.data.siteEntry || [];
    if (siteEntries.length === 0) {
      console.log(`\n⚠️  Service Account has not been granted access in GSC yet.`);
      console.log(`\n👉 Please complete this one-time step:`);
      console.log(`   1. Open Google Search Console (https://search.google.com/search-console)`);
      console.log(`   2. Select your property (aeobility.com.au)`);
      console.log(`   3. Go to: Settings -> Users and permissions -> Add User`);
      console.log(`   4. Enter email: aeobility-gsc-telemetry@antigravity-cli-and-adk-500010.iam.gserviceaccount.com`);
      console.log(`   5. Set Permission: Full (or Owner) and click Add.`);
      console.log(`\nOnce added, re-run 'npm run gsc:audit' to stream live telemetry.\n`);
      return;
    }

    const matched = siteEntries.find(s => s.siteUrl === SITE_URL) || siteEntries[0];
    if (matched && matched.siteUrl) {
      activeProperty = matched.siteUrl;
    }
    console.log(`📍 Connected Property: ${activeProperty} (Permission: ${matched?.permissionLevel || 'Unknown'})`);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`⚠️ Could not list sites: ${message}. Using fallback: ${activeProperty}`);
  }

  console.log(`📦 Inspecting: ${routesToInspect.length} target route(s)\n`);

  let passCount = 0;
  let failCount = 0;
  let errorCount = 0;

  for (let i = 0; i < routesToInspect.length; i++) {
    const url = routesToInspect[i];
    try {
      const res = await searchconsole.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: activeProperty,
        },
      });

      const result = res.data.inspectionResult?.indexStatusResult;
      const userCanonical = result?.userCanonical || 'Not detected';
      const googleCanonical = result?.googleCanonical || 'Not detected';
      const canonicalMatch = Boolean(
        result?.userCanonical &&
        result?.googleCanonical &&
        result.userCanonical.replace(/\/$/, '') === result.googleCanonical.replace(/\/$/, '')
      );

      if (canonicalMatch) passCount++;
      else failCount++;

      console.log(`[${i + 1}/${routesToInspect.length}] ${url}`);
      console.log(`  Verdict:          ${result?.verdict || 'UNKNOWN'}`);
      console.log(`  Coverage State:   ${result?.coverageState || 'UNKNOWN'}`);
      console.log(`  User Canonical:   ${userCanonical}`);
      console.log(`  Google Canonical: ${googleCanonical}`);
      console.log(`  Canonical Match:  ${canonicalMatch ? '✅ PASS' : '⚠️ MISMATCH / PENDING'}`);
      console.log(`  Robots.txt State: ${result?.robotsTxtState || 'ALLOWED'}`);
      console.log(`  Indexing State:   ${result?.indexingState || 'UNKNOWN'}`);
      console.log(`  Last Crawled:     ${result?.lastCrawlTime || 'Never'}\n`);

      // Gentle pause to stay well within Google URL Inspection quotas (600 QPM)
      if (routesToInspect.length > 1) {
        await delay(300);
      }
    } catch (err: unknown) {
      errorCount++;
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[${i + 1}/${routesToInspect.length}] ❌ Error inspecting ${url}:`);
      console.error(`   ${message}\n`);
    }
  }

  console.log(`======================================================`);
  console.log(`📊 Audit Summary: ${passCount} Passed | ${failCount} Mismatches/Pending | ${errorCount} Errors`);
  console.log(`======================================================\n`);
}

runAudit();
