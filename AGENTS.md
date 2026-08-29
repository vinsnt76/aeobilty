<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AEObility AI Agent & Project Guidelines

For the public AI agent grounding specification, see [public/AGENTS.md](file:///c:/Users/vince/agy2/projects/aeobility/public/AGENTS.md) or visit `https://aeobility.com.au/AGENTS.md`.

## Key Conventions
- **Language & Spelling**: Always enforce Australian English (AU) spelling across user-facing text, metadata, and API responses (`optimisation`, `specialises`, `organisation`, `behaviour`, `maximise`, `analysing`).
- **Image Specifications & Naming**: All featured page images must be converted to `.webp` format, sized to `1200x800px`, and follow the naming convention `<descriptive-name>_AEObility.webp` (or `_AEObilty` brand variant suffix). Always provide entity and keyword-rich alt text.
- **Prebuild Vector Hook**: Any changes to site entity data or `AEObility -IA & SLM.csv` require re-compiling vectors via `node scripts/build-knowledge-base.mjs` (automatically run during `npm run build`).
- **Search Telemetry**: Ensure internal site search interactions fire GA4 `gtag('event', 'search', ...)` telemetry events.
- **Entity-Relationship-Evidence Framework**: Every commercial offering is structured as a verifiable machine-readable triple: Entity (`/services/aeo#service`) $\rightarrow$ Relationship (`/services/aeo/definition`, `/diagnostic`) $\rightarrow$ Evidence (`/knowledge-hub/case-studies/baby-bento`).
- **Five-Layer Classification**: Map entities across Core (`/`), Commercial (`/services/aeo`), Concept (`/knowledge-hub/articles/entity-authority-building`), Intent (`/knowledge-hub/articles/optimising-for-different-ai-search-engines`), and Evidence (`/knowledge-hub/case-studies/baby-bento`).
- **Tri-Graph Architecture**: Decouple data into Entity Graph (What exists), Semantic/Intent Graph (How concepts link), and Evidence Graph (Where claims are proven).
- **Absolute URI Integrity**: All JSON-LD `@id` and node references must use fully-qualified absolute canonical URIs (`https://aeobility.com.au/...`).

## Tone of Voice & Brand Guidelines (`https://schema.aeobility.com/tov`)
- **Brand Promise**: *"Get Found. Get Chosen."*
- **Core Tagline**: *"No jargon. No pressure. Just clarity."*
- **Voice Pillars**:
  - **Clarity**: Short, declarative sentences; zero filler (*"We define exactly what your business offers so AI stops guessing."*)
  - **Trust**: Explain, do not sell; maintain radical transparency (*"A transparent, fixed-scope setup with zero ongoing contract lock-in."*)
  - **Momentum**: Propel the reader forward using active, outcome-driven verbs (*"Lock in a 15-minute diagnostic review to address map gaps."*)
- **Core Traits**:
  - **Structured**: Engineered clarity, explicit logic, no vague metaphors.
  - **HumanBuilt**: Approachable specialist, demystifies tech, balances authority with practicality.
  - **Confident**: Authority grounded in structural integrity, no hedging, states deliverables directly.
  - **Transparent**: Predictable, fixed-scope sprints, explains what, why, and how.
  - **ModernTech**: Semantic, graph-ready intelligence, contrasts AEO with legacy SEO.
- **Brand Do's**: Use declarative sentences; frame solutions around fixed-scope sprints; differentiate semantic AEO/GEO graphs from legacy SEO; use Australian English spelling; maintain visual consistency with Inter/Söhne and AEO Cyan (`#00E5FF`).
- **Brand Don'ts**: Avoid legacy SEO buzzwords; avoid agency jargon or upsell traps; avoid hedging or uncertain phrasing; avoid American spelling; do not flatten dynamic brand gradients.


