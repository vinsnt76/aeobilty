import { TelemetryResult } from './types';
import crypto from 'crypto';

interface CacheEntry {
  result: TelemetryResult; 
  timestamp: number;
  version: number;
}

// In-memory cache for local development & MVP.
// Note: In a true serverless environment (like Vercel), this will reset on cold starts.
// For Phase 4, we would swap these implementations for Vercel KV / Redis.
// V3 Enhancement: Includes basic versioning and metadata to prep for KV swap.
const cache = new Map<string, CacheEntry>();

const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const CACHE_VERSION = 5; // Bump this to invalidate old cache shapes when we deploy new telemetry features

function generateCacheKey(url: string, intent: string): string {
  const normalizedUrl = url ? url.toLowerCase().trim() : 'no_url';
  const normalizedIntent = intent ? intent.toLowerCase().trim() : 'no_intent';
  const hash = crypto.createHash('sha256');
  hash.update(`${normalizedUrl}|${normalizedIntent}`);
  return hash.digest('hex');
}

export async function getTelemetryCache(url: string, intent: string): Promise<TelemetryResult | null> {
  const key = generateCacheKey(url, intent);
  const entry = cache.get(key);
  
  if (entry) {
    const age = Date.now() - entry.timestamp;
    if (age < TTL_MS && entry.version === CACHE_VERSION) {
      console.log(`[Telemetry Cache V${CACHE_VERSION}] HIT for ${url} | ${intent}`);
      return entry.result;
    } else {
      console.log(`[Telemetry Cache] EXPIRED or VERSION_MISMATCH for ${url} | ${intent}`);
      cache.delete(key);
    }
  }
  return null;
}

export async function setTelemetryCache(url: string, intent: string, result: TelemetryResult): Promise<void> {
  const key = generateCacheKey(url, intent);
  cache.set(key, { result, timestamp: Date.now(), version: CACHE_VERSION });
  console.log(`[Telemetry Cache V${CACHE_VERSION}] SET for ${url} | ${intent}`);
}
