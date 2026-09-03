import crypto from 'crypto';

interface TurnTokenPayload {
  auditId: string;
  turnCount: number;
  exp: number; // Unix timestamp in seconds
}

const DEFAULT_SECRET = process.env.TURN_TOKEN_SECRET || 'aeobility-turn-secret-fallback-key-2026';
const TOKEN_TTL_SECONDS = 3600; // 1 hour validity

/**
 * Creates a cryptographically signed HMAC token for server-side turn progression.
 */
export function createTurnToken(auditId: string, turnCount: number, secret = DEFAULT_SECRET): string {
  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const payload: TurnTokenPayload = { auditId, turnCount, exp };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', secret).update(encodedPayload).digest('base64url');
  return `${encodedPayload}.${signature}`;
}

/**
 * Verifies the HMAC signature and expiration of a turn token.
 */
export function verifyTurnToken(
  token: string,
  secret = DEFAULT_SECRET
): { valid: boolean; payload?: TurnTokenPayload; reason?: string } {
  if (!token || typeof token !== 'string') {
    return { valid: false, reason: 'Missing token' };
  }

  const parts = token.split('.');
  if (parts.length !== 2) {
    return { valid: false, reason: 'Malformed token structure' };
  }

  const [encodedPayload, signature] = parts;
  const expectedSignature = crypto.createHmac('sha256', secret).update(encodedPayload).digest('base64url');

  const sigBuffer = Buffer.from(signature);
  const expectedSigBuffer = Buffer.from(expectedSignature);

  if (sigBuffer.length !== expectedSigBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedSigBuffer)) {
    return { valid: false, reason: 'Invalid signature' };
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8')) as TurnTokenPayload;
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return { valid: false, reason: 'Token expired', payload };
    }
    return { valid: true, payload };
  } catch {
    return { valid: false, reason: 'Corrupted payload' };
  }
}
