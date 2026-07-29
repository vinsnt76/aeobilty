# ✅ Antigravity QA Checklist — Production Pipeline & Re‑render Isolation

This checklist is structured around the exact failure modes eliminated during the Bill agent rollout, providing a repeatable, auditable QA procedure for AEObility's unified streaming and telemetry architecture.

---

## 1. Stream Integrity & Message Extraction
Every release must validate that `BillWidget` safely extracts text from both OpenAI-style `content` and AI SDK v7 `parts`.

- **Verify Dual Stream Parsing**  
  - `getMessageText` returns correct text for:  
    - `m.content`  
    - `m.parts[].text`  
  - No empty strings returned for valid messages  
  - No dropped tokens during streaming

- **Confirm No React Re-render Loops**  
  - `reportedCardIds` uses `useState(() => new Set())`  
  - No state mutation inside render pass  
  - No infinite render loops when telemetry cards appear

---

## 2. Telemetry Card Rendering & Isolation
Telemetry cards must render **without mutating component-level state** and without interfering with streaming.

- **Validate Isolated `renderMessageBubbleContent`**  
  - Pattern detection runs per message bubble  
  - No global state mutation  
  - Cards render only when patterns match  
  - Raw text fallback works when no patterns match

- **Check `TELEMETRY_PATTERNS` Accuracy**  
  - First Impression (`/AI First Impression:\s*([^\n]+)/i`)  
  - Blind Spot (`/Biggest Blind Spot:\s*([^\n]+)/i`)  
  - Verdict (`/Recommendation Verdict:\s*(PASS|HIGH RISK|ALERT|FAIL)/i`)  
  - Clarity Score (`/Clarity Score:\s*(\d+)/i`)  
  - Citation Share (`/Citation Share:\s*(\d+)/i`)  
  - Risk Indicators (`/Hallucination Risk:\s*(High|Medium|Low)/i`)  
  - Regex patterns match multiline streamed chunks

---

## 3. GA4 Telemetry Event Safety
Ensure analytics never break streaming or UI rendering.

- **Verify GA4 Events Fire Once Per Card / Action**  
  - `bill_lattice_node_hit`  
  - `bill_funnel_conversion_step`  
  - `bill_query_submitted`  
  - `bill_mode_toggle`  
  - `bill_chip_clicked`  
  - `bill_telemetry_card_rendered`  
  - No duplicate events from re-renders

- **Confirm GA4 Does Not Block UI**  
  - All GA4 calls wrapped in `if (window.gtag)` or `typeof window.gtag === 'function'`  
  - No synchronous blocking  
  - No exceptions thrown when `gtag` is unavailable

---

## 4. Skill Routing & Backend Consistency
Validate that `/api/bill` consistently activates the correct skill.

- **Skill 1 Telemetry Guide**  
- **Skill 3 Blueprint Funnel** ($995 AUD quote trigger)  
- **Skill 5 Technical Concept Explainer**  
- **General Agent Fallback**  

Checks:
- Weighted relevance scoring over `knowledgeBase.json` returns top 3 nodes  
- Stop-word filtering isolates key technical phrases  
- No silent fallback drop-offs  
- No empty assistant messages  
- All skills produce streamed output

---

## 5. Frontend → Backend Payload Topology
Ensure `BillWidget` sends the correct payload shape.

- **Validate Payload Structure**  
  - `{ intent, audit }` always present  
  - Telemetry mode sends hydrated audit object  
  - General mode sends `audit: null`  
  - No undefined fields passed to `/api/bill`

- **Confirm Unified Endpoint Usage**  
  - `DefaultChatTransport({ api: '/api/bill' })`  
  - No legacy endpoints (`/api/ask`, `/api/nlweb`)  
  - No fetch/axios calls bypassing streaming

---

## 6. Quick Action Chips
Ensure chips trigger correct prompts and analytics.

- **Verify Chip Click Execution**  
  - Chips submit prompt via chat transport (`"Semantic Density"`, `"Positional Bias"`, `"Fix RAG Drops"`, `"90-Day Blueprint"`)  
  - GA4 `bill_chip_clicked` fires  
  - Chips activate correct skill (Blueprint, Concept Explainer, etc.)

---

## 7. TTS (Australian Voice) Stability
Ensure speech synthesis never blocks streaming.

- **Validate TTS Toggle**  
  - Toggle switches between `Volume2` / `VolumeX`  
  - Voice selection uses `en-AU`  
  - No speech overlap or stuck utterances (`window.speechSynthesis.cancel()`)  
  - No exceptions when speech synthesis is unavailable in browser

---

## 8. Build & Test Pipeline Quality Gates
Every release must pass all quality gates.

- 🧪 **Vitest Suite**: `15/15` tests passing (`npm run test`)  
- 🛡️ **TypeScript**: `0` type errors (`npm run typecheck`)  
- 🧹 **ESLint**: `0` lint errors (`npm run lint`)  
- ⚡ **Next.js Build**: Clean dynamic/edge build (`npm run build`)  
- 🔄 **Prebuild Hook**: `node scripts/build-knowledge-base.mjs` compiles 41 vector nodes cleanly

---

## 9. Regression Guardrails
Ensure no regressions introduced by future releases.

- **Check `parts` and `content` payload normalization**  
- **Check Schema.org entity fragment `@id` URIs**  
- **Check inline card parser stability**  
- **Check re-render isolation**  
