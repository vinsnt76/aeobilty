import { describe, it, expect } from 'vitest';
import { createTurnToken, verifyTurnToken } from '../turn-token';

describe('Tier 0.2: Server-Side Turn-Limit Enforcement via Stateless HMAC Tokens', () => {
  it('Scenario 1: Creates and verifies a valid Turn 1 token', () => {
    const auditId = 'audit-12345';
    const token = createTurnToken(auditId, 1);

    const verification = verifyTurnToken(token);
    expect(verification.valid).toBe(true);
    expect(verification.payload?.auditId).toBe(auditId);
    expect(verification.payload?.turnCount).toBe(1);
  });

  it('Scenario 2: Detects tampering with the payload or signature', () => {
    const auditId = 'audit-12345';
    const token = createTurnToken(auditId, 1);
    const [payload, sig] = token.split('.');

    // Tamper with payload (attempting to reset turnCount from 2 to 0)
    const tamperedPayload = Buffer.from(JSON.stringify({ auditId, turnCount: 0, exp: 9999999999 })).toString('base64url');
    const tamperedToken = `${tamperedPayload}.${sig}`;

    const verification = verifyTurnToken(tamperedToken);
    expect(verification.valid).toBe(false);
    expect(verification.reason).toBe('Invalid signature');
  });

  it('Scenario 3: Rejects expired tokens', () => {
    const auditId = 'audit-12345';
    // Manually build expired token with test secret
    const secret = 'test-secret';
    const expiredPayload = { auditId, turnCount: 1, exp: Math.floor(Date.now() / 1000) - 10 };
    const encoded = Buffer.from(JSON.stringify(expiredPayload)).toString('base64url');
    const crypto = require('crypto');
    const sig = crypto.createHmac('sha256', secret).update(encoded).digest('base64url');
    const expiredToken = `${encoded}.${sig}`;

    const verification = verifyTurnToken(expiredToken, secret);
    expect(verification.valid).toBe(false);
    expect(verification.reason).toBe('Token expired');
  });
});
