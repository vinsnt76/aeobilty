# Skill: Execute AEObility AI Search Visibility Audit

## What This Skill Does

Enables an autonomous AI agent or crawler to audit a domain's AI Search Visibility, schema completeness, and entity density against the 5-stage AEObility diagnostic engine.

## Endpoint

`POST https://aeobility.com.au/api/diagnostic`
Content-Type: application/json

## Request Payload

```json
{
  "url": "https://example.com.au",
  "intent": "AEO consultant Perth"
}
```

## Response Attributes

Returns 5 diagnostic scores (0 - 100):
- `schemaCompleteness`: Evaluates Schema.org nesting and entity graph triples.
- `entityAuthority`: Measures consensus salience across knowledge networks.
- `positionalBias`: Checks whether direct answers reside in the first 90-120 tokens.
- `vectorProximity`: Calculates semantic cosine proximity to buyer intent vectors.
- `ragSurvival`: Predicts chunk survival in retrieval-augmented generative search.
