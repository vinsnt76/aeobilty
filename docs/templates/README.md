# AEObility Page Template Reference Architecture (SSOT)

> **Version:** 1.0.0  
> **Target Framework:** Next.js 15+ (App Router) • React 19 • Tailwind CSS v4  
> **Brand & Design Grounding:** [UX_STYLEGUIDE.md](file:///c:/Users/vince/agy2/projects/aeobility/UX_STYLEGUIDE.md) • [AGENTS.md](file:///c:/Users/vince/agy2/projects/aeobility/AGENTS.md)  
> **Spelling & Locale:** Australian English (`en-AU`) strictly enforced.

---

## 1. Overview & Purpose

This directory contains the authoritative reference specifications for all 8 page archetypes across the AEObility web ecosystem. 

Each template serves as a **Single Source of Truth (SSOT)** designed to:
1. **Audit & Standardise Existing Pages:** Guide refactoring of all 52+ live routes to eliminate structural drift, enforce single H1/eyebrow rules, and guarantee WCAG 2.2 AA dark glassmorphism.
2. **Scaffold New Pages:** Provide unambiguous blueprints and copy-pasteable Next.js 15+ Server Component boilerplate for human developers and autonomous AI agents.
3. **Maximise AI Answer Engine Grounding:** Optimise content for vector extraction, passage retrieval, and citation confidence across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.

---

## 2. Master Template Selection Matrix

| File | Page Archetype | Target Routes & Examples | Primary Intent Family | Primary Schema Types |
| :--- | :--- | :--- | :--- | :--- |
| [`01-commercial-service.md`](./01-commercial-service.md) | **Commercial Service Pillar** | `/services/aeo`, `/services/geo-marketing`, `/services/aeo/shopify`, `/services/ai-search-agency` | Commercial Decision Intent | `Service`, `Offer`, `Product`, canonical internal links |
| [`02-commercial-solution.md`](./02-commercial-solution.md) | **Productised Solution Sprint** | `/solutions/aeo-blueprint`, `/solutions/aeo-sprint` | Commercial Commitment & Risk-Reversal | `Product`, `OfferCatalog`, `FAQPage` |
| [`03-local-intent.md`](./03-local-intent.md) | **Local Metro Landing** | `/services/ai-search-marketing/{perth,sydney,melbourne,brisbane,adelaide}` | Localized Proximity & Discovery | `LocalBusiness`, `areaServed`, `geoCoordinates` |
| [`04-concept-article.md`](./04-concept-article.md) | **Concept Research Article** | `/knowledge-hub/articles/*` (RAG, entity authority, query fan-out, hallucinations) | Conceptual & Mechanistic Intent | `TechArticle`, `DefinedTermSet`, `FAQPage` |
| [`05-evidence-case-study.md`](./05-evidence-case-study.md) | **Empirical Case Study** | `/knowledge-hub/case-studies/baby-bento`, `/case-studies/aeo-geo-blueprint-90-days` | Empirical Proof & Verification | `TechArticle`, `ClaimReview`, `about` -> `/services/aeo#service` |
| [`06-practical-tutorial.md`](./06-practical-tutorial.md) | **Practical Tutorial & Guide** | `/knowledge-hub/tutorials/*`, `/knowledge-hub/guides/aeo` | Procedural & Task Execution | `HowTo`, `HowToStep`, `HowToSupply` |
| [`07-hub-index.md`](./07-hub-index.md) | **Directory & Hub Index** | `/knowledge-hub`, `/knowledge-hub/articles`, `/services`, `/solutions` | Exploratory & Taxonomy Discovery | `CollectionPage`, `ItemList`, `hasPart` |
| [`08-core-utility.md`](./08-core-utility.md) | **Core Brand, Trust & Utility** | `/about`, `/contact`, `/diagnostic`, `/brand-facts` | Provenance, Trust & Factual Ledger | `AboutPage`, `ContactPage`, `Organization`, `DefinedTermSet` |

---

## 3. The 5 Core Inflexible Rules (Applies to All Templates)

Every page on AEObility, regardless of archetype, must pass these 5 rules without exception:

1. **Exact Single Eyebrow:** Exactly one mono context badge anchors each section (`font-mono text-xs uppercase tracking-widest text-aeo-cyan`). Never stack multiple eyebrow pills or competing tags above a headline.
2. **Strict Semantic Single H1:** Exactly one `<h1>` per page, positioned inside the Hero block. In-flow tools or mid-page sections drop to an `<h2>` or `<h3>` with distinct action-led phrasing.
3. **Australian English (AU) Only:** Enforce AU spelling across all visible text, meta descriptions, schema text, and image alt attributes (`optimisation`, `specialises`, `organisation`, `behaviour`, `maximise`, `analysing`). Banned: US variants (`optimization`, `behavior`).
4. **Button Hierarchy & Canonical CTA Taxonomy:**
   - **Primary Action (Dominant Fill):** Exactly one unmistakable solid breakout button per module (`Run Free Scan` or `Run Visibility Scan`), set in solid white/cyan fill with dark text and subtle cyan glow.
   - **Secondary Action (Subordinate Ghost):** Styled as a low-luminance recessed dark button with a subtle 1px border (`Discuss AEO Services`), never competing for primary fill luminance.
   - **Canonical CTA Vocabulary:** Button labels adhere strictly to the 2–4 word canonical dictionary (`Run Free Scan`, `Run Visibility Scan`, `Free AI Visibility Scan`, `Free Visibility Scan`, `Discuss AEO Services`, `Discuss Micro-Sprint`, `Order $995 Blueprint`).
5. **Absolute Canonical Schema URIs:** All `@id` tags and node references in JSON-LD must use fully-qualified canonical URIs (`https://aeobility.com.au/...`). Relative paths in schema are strictly prohibited.

---

## 4. Next.js 15 Server Component Architecture

To guarantee SEO compliance and prevent Next.js 15 metadata compilation failures:
- **`page.tsx` is always a Server Component:** Do NOT place `'use client'` at the root of `page.tsx`.
- **Export standard metadata:** `export const metadata: Metadata = { ... }` runs on the server.
- **Isolate client state in leaf components:** Interactive FAQ toggles (`<FaqAccordion />`), lead capture forms (`<QuoteFormSection />`), and diagnostic modals must live in dedicated client components with `'use client'`.

---

## 5. Dark Glassmorphism, Typography & The Solid Breakout Rule

All templates follow the controlled-depth dark glassmorphism system codified in [UX_STYLEGUIDE.md](file:///c:/Users/vince/agy2/projects/aeobility/UX_STYLEGUIDE.md):
- **Base Canvas:** Deep off-black `#0C0D12` / `#030303` with subtle ambient cyan/violet underlay orbs.
- **Glass Panel Recipe:** Low-opacity white fill (`rgba(255,255,255,0.04)`), `backdrop-filter: blur(16px) saturate(140%)`, 1px directional top specular catch, and `transform: translateZ(0)`.
- **The Solid Breakout Rule & Attention Budget:** Primary conversion triggers (`Run Free Scan`), form input wells, and pricing guarantees must remain **solid opaque** or vibrant high-contrast fills. Dual competing primary fills are strictly prohibited under Hick's Law.
- **Typography Scale & Weights:**
  - Hero subhead (lead value prop) sized at **18–20px desktop** in **Medium 500** (`text-zinc-100`) to anchor F-pattern reading.
  - Operational reassurance micro-copy beneath CTAs sized at **14–15px Medium 500+** (`text-zinc-200`).
  - Continuous body prose strictly $\ge$ **16px (1rem)**, styled in `#E2E8F0` / `#E4E4E7` Geist Sans Medium (500 weight).
  - Field note and practitioner callouts enforce minimum **14px**, **1.6 line-height**, and **60–75 characters maximum line measure**.
  - Diagram node labels enforce minimum **14px bold**, or are treated as illustrative abstract visuals with adjacent structured tables.
- **Viewport Blur Budget:** Maximum **2 active blurred layers per viewport** to prevent mobile GPU frame drops.

---

## 6. How to Use These Templates

### When Standardising an Existing Page:
1. Identify the route's template archetype from the table above.
2. Open the corresponding `.md` file in this directory.
3. Compare the existing `page.tsx` against the template's **Mandatory Section Sequence**, **Reserved Anchor ID Registry**, and **Retrieval Grounding Specifications**.
4. Move client state to leaf components if `page.tsx` currently has `'use client'`.
5. Run the QA verification checklist at the bottom of the template.
6. Run `npm test`, `node scripts/qa-asset-check.mjs`, and `npm run build` to verify vector synchronization.

### When Creating a New Page:
1. Copy the **Copy-Pasteable React/Next.js Code Boilerplate** from the relevant template file.
2. Customize metadata, JSON-LD `@graph`, and section slots while keeping the structural framework intact.
3. Verify Australian English spelling and 2–4 word CTA button constraints.
4. Execute `npm test` and `npm run build`.
