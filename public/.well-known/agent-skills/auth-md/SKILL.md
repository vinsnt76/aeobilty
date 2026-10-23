# Skill: AEObility Auth.md Registration & Token Exchange

## What This Skill Does

Enables autonomous agents to discover authentication options, register client sessions, and acquire scoped bearer tokens for AEObility services per auth.md and RFC 8414.

## Endpoints

- Registration: `POST https://aeobility.com.au/api/agent/register`
- Token Exchange: `POST https://aeobility.com.au/api/auth/token`
- User Claim: `https://aeobility.com.au/contact/agent-claim`
- Revocation: `POST https://aeobility.com.au/api/auth/revoke`

## Flow

1. Register dynamically via `POST /api/agent/register`
2. Obtain scoped bearer access token
3. Include `Authorization: Bearer <token>` in requests
