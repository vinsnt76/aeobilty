<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AEObility AI Agent & Project Guidelines

For the public AI agent grounding specification, see [public/AGENTS.md](file:///c:/Users/vince/agy2/projects/aeobility/public/AGENTS.md) or visit `https://aeobility.com.au/AGENTS.md`.

## Key Conventions
- **Language & Spelling**: Always enforce Australian English (AU) spelling across user-facing text and API responses (`optimisation`, `specialises`, `organisation`, `behaviour`, `maximise`).
- **Image Specifications & Naming**: All featured page images must be converted to `.webp` format, sized to `1200x800px`, and follow the naming convention `<descriptive-name>_AEObility.webp` (or `_AEObilty` brand variant suffix). Always provide entity and keyword-rich alt text.
- **Prebuild Vector Hook**: Any changes to site entity data or `AEObility -IA & SLM.csv` require re-compiling vectors via `node scripts/build-knowledge-base.mjs` (automatically run during `npm run build`).
- **Search Telemetry**: Ensure internal site search interactions fire GA4 `gtag('event', 'search', ...)` telemetry events.
