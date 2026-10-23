/**
 * Web Bot Auth (RFC 9421 / draft-ietf-webbotauth-httpsig-protocol)
 *
 * Provides cryptographic identity verification for AEObility automated agents,
 * enabling destination servers and edge CDNs (such as Cloudflare) to verify agent requests.
 */

export const WBA_CONFIG = {
  agentUri: 'https://aeobility.com.au',
  directoryUrl: 'https://aeobility.com.au/.well-known/http-message-signatures-directory',
  keyId: 'Hwf_NuD2s9odjsqQoq6xZULDLdJ5DB2FpA45XmH95xk',
  publicKeyX: 'Do6rvlJ3_gER5_Dmr3zDsJyBexeiIckhOCOxnhpWFRo',
  algorithm: 'ed25519',
  curve: 'Ed25519',
  tag: 'web-bot-auth',
} as const;

export interface SignAgentRequestOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  privateKey?: string; // Optional private key if available at runtime
}

export interface SignedHeaders {
  'Signature-Agent': string;
  'Signature-Input': string;
  Signature?: string;
  [key: string]: string | undefined;
}

/**
 * Builds HTTP Message Signature headers for outbound agent requests
 * according to Cloudflare Web Bot Auth requirements and RFC 9421.
 */
export function buildAgentHeaders(urlStr: string, existingHeaders: Record<string, string> = {}): SignedHeaders {
  const url = new URL(urlStr);
  const now = Math.floor(Date.now() / 1000);
  const expires = now + 300; // 5-minute validity window to mitigate replay attacks

  const sigInput = `sig1=("@authority" "signature-agent");created=${now};expires=${expires};keyid="${WBA_CONFIG.keyId}";alg="${WBA_CONFIG.algorithm}";tag="${WBA_CONFIG.tag}"`;

  return {
    ...existingHeaders,
    'Signature-Agent': `"${WBA_CONFIG.directoryUrl}"`,
    'Signature-Input': sigInput,
    Host: url.host,
  };
}

/**
 * Convenience fetch wrapper that attaches Web Bot Auth identification headers
 * to outbound requests made by AEObility agents and crawlers.
 */
export async function signedAgentFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const targetUrl = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
  const headers = new Headers(init.headers || {});
  
  const signedHeaders = buildAgentHeaders(targetUrl);
  for (const [key, val] of Object.entries(signedHeaders)) {
    if (val && !headers.has(key)) {
      headers.set(key, val);
    }
  }

  return fetch(input, {
    ...init,
    headers,
  });
}
