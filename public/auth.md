# AEObility auth.md

Agent registration and authentication discovery specification for AEObility (https://aeobility.com.au).

This document guides autonomous AI agents, LLM reasoning engines, Model Context Protocol (MCP) clients, and automated crawlers through discovering, registering, and authenticating for programmatic access to AEObility APIs and services.

Follow the discovery and authentication flow in sequence: discover -> register -> (claim if required) -> exchange token -> execute requests -> handle revocation.

---

## 1. Agent Audience

This authentication profile is designed for:
- Autonomous AI Agents operating on behalf of human users, business organisations, or engineering teams.
- LLM Search Synthesizers and semantic crawlers requiring verifiable data provenance and structured retrieval.
- Automated Diagnostic Clients invoking AI Search Visibility Audits and Entity Density checks.
- Model Context Protocol (MCP) clients connecting to AEObility tool endpoints.

---

## 2. Discovery Endpoints

AEObility implements RFC 9728 (OAuth Protected Resource Metadata) and RFC 8414 (OAuth 2.0 Authorization Server Metadata).

### Protected Resource Metadata (PRM)
- Canonical URI: `https://aeobility.com.au/.well-known/oauth-protected-resource`
- Resource Identifier: `https://aeobility.com.au`
- Bearer Methods Supported: `["header"]`

### Authorization Server Metadata
- Canonical URI: `https://aeobility.com.au/.well-known/oauth-authorization-server`
- Issuer: `https://aeobility.com.au`
- Token Endpoint: `https://aeobility.com.au/api/auth/token`
- Revocation Endpoint: `https://aeobility.com.au/api/auth/revoke`
- OpenID Fallback URI: `https://aeobility.com.au/.well-known/openid-configuration`

### Agent Auth Configuration
- Skill Documentation: `https://aeobility.com.au/auth.md`
- Registration Endpoint: `https://aeobility.com.au/api/agent/register`
- Identity Endpoint: `https://aeobility.com.au/api/agent/identity`
- Claim Endpoint: `https://aeobility.com.au/api/agent/identity/claim`
- User Claim URI: `https://aeobility.com.au/contact/agent-claim`
- Revocation URI: `https://aeobility.com.au/api/auth/revoke`

---

## 3. Supported Registration Methods

AEObility supports three registration flows:

### Method 1: ID-JAG Identity Assertion (Recommended for Enterprise Agents)
- Identity Type: `identity_assertion`
- Assertion Type: `urn:ietf:params:oauth:token-type:id-jag`
- Credential Types: `bearer_token`, `bearer`
- Use Case: The agent holds an active user session attested cryptographically by a recognised Identity Provider (IdP) or agent platform.
- Flow: The agent mints an ID-JAG token with `aud: "https://aeobility.com.au"` and presents it via JWT-bearer grant (`urn:ietf:params:oauth:grant-type:jwt-bearer`) to obtain an access token without human interaction.

### Method 2: Verified Email Assertion
- Identity Type: `identity_assertion`
- Assertion Type: `verified_email`
- Credential Types: `bearer_token`, `bearer`
- Claim URI: `https://aeobility.com.au/contact/agent-claim`
- Use Case: The agent possesses a verified user email address without an existing enterprise trust relationship.
- Flow: Agent submits registration with email assertion; user confirms access via the claim ceremony URI.

### Method 3: Anonymous Registration (Public Read & Diagnostic Scan)
- Identity Type: `anonymous`
- Credential Types: `bearer_token`, `bearer`
- Claim URI: `https://aeobility.com.au/contact/agent-claim`
- Use Case: Unauthenticated exploration, public knowledge graph querying, and introductory diagnostic testing.
- Flow: Agent requests an anonymous session. If the user later decides to save diagnostic reports or unlock custom sprint packages, the agent promotes the session using the claim ceremony.

---

## 4. Registration Protocol

### Dynamic Agent Registration Request

```http
POST /api/agent/register HTTP/1.1
Host: aeobility.com.au
Content-Type: application/json
Accept: application/json

{
  "agent_name": "Autonomous-Audit-Bot/1.0",
  "identity_type": "anonymous",
  "requested_scopes": ["read", "diagnostic", "search"]
}
```

### Successful Registration Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "registered",
  "agent_id": "agent_session_aeo_live",
  "token_endpoint": "https://aeobility.com.au/api/auth/token",
  "claim_uri": "https://aeobility.com.au/contact/agent-claim",
  "token": {
    "access_token": "aeo_live_agent_session_token",
    "token_type": "Bearer",
    "expires_in": 86400,
    "scope": "read diagnostic search aeo:read diagnostic:execute knowledge:query"
  }
}
```

---

## 5. Token Exchange

To exchange an assertion or refresh credentials, POST to the token endpoint:

```http
POST /api/auth/token HTTP/1.1
Host: aeobility.com.au
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=<signed_id_jag_jwt>
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "aeo_access_token_bearer_payload",
  "token_type": "Bearer",
  "expires_in": 86400,
  "scope": "read diagnostic search"
}
```

---

## 6. Credential Usage & Scopes

### Authorization Header
Include the issued access token in the `Authorization` header of all subsequent API calls:

```http
GET /api/diagnostic HTTP/1.1
Host: aeobility.com.au
Authorization: Bearer <access_token>
Accept: application/json
```

### Supported Scopes

| Scope | Description | Access Level |
| :--- | :--- | :--- |
| `read` | Read public brand facts, articles, and semantic entity data | Public / Anonymous |
| `diagnostic` | Execute AI Search Visibility and Entity Density scans | Public / Anonymous |
| `search` | Execute semantic vector search and hybrid keyword queries | Public / Anonymous |
| `aeo:read` | Retrieve raw machine-readable knowledge graph triples | Registered Agent |
| `diagnostic:execute` | Request complete multi-page automated telemetry audits | Registered Agent |
| `knowledge:query` | High-frequency vector similarity queries against AEO Corpus | Registered Agent |

---

## 7. Revocation & Lifecycle Management

Tokens and agent sessions may be revoked at any time:

```http
POST /api/auth/revoke HTTP/1.1
Host: aeobility.com.au
Content-Type: application/x-www-form-urlencoded

token=<access_token>&token_type_hint=access_token
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "revoked"
}
```

Security Event Tokens (RFC 8417) pushed by upstream identity providers are ingested at:
`https://aeobility.com.au/api/agent/event/notify`
Supported event:
`https://schemas.workos.com/events/agent/auth/identity/assertion/revoked`

---

## 8. Web Bot Auth & Cryptographic Request Signatures (RFC 9421)

AEObility participates in the IETF Web Bot Auth standard, allowing automated agents and crawlers to verify identity and authenticity via asymmetric HTTP Message Signatures.

### Public Key Directory
- Canonical URI: `https://aeobility.com.au/.well-known/http-message-signatures-directory`
- Media Type: `application/http-message-signatures-directory+json`
- Key Algorithm: `Ed25519` (`kty: "OKP"`, `crv: "Ed25519"`)
- Active Key ID: `Hwf_NuD2s9odjsqQoq6xZULDLdJ5DB2FpA45XmH95xk`

### Signature Verification Headers
Outbound requests sent by AEObility agents include the following verification headers:
- `Signature-Agent`: `"https://aeobility.com.au/.well-known/http-message-signatures-directory"`
- `Signature-Input`: `sig1=("@authority" "signature-agent");created=<unix_timestamp>;expires=<unix_timestamp>;keyid="Hwf_NuD2s9odjsqQoq6xZULDLdJ5DB2FpA45XmH95xk";alg="ed25519";tag="web-bot-auth"`
- `Signature`: RFC 9421 Ed25519 cryptographic signature
