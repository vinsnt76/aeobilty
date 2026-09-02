# AEObility UX & Typography Styleguide

> **Version:** 1.0.0  
> **Target Environment:** Next.js 15+ / Tailwind CSS v4 / React 19  
> **Brand Promise:** *Get Found. Get Chosen.*  
> **Core Tagline:** *No jargon. No pressure. Just clarity.*

---

## 1. Brand & Design Principles

### Vision & Voice
AEObility’s interface, copy, and typography operate as a unified system designed for Australian owner-operators and localized marketing decision-makers. Technical recommendations must carry authority without cognitive overload, eliminating agency buzzwords and artificial fluff in favour of structured, machine-readable clarity.

### Core Front-End Rules
1. **Single-Eyebrow Standard:** Never stack multiple eyebrow pills or competing category tags above a single headline. Exactly one mono/inter-spaced context pill anchors each content block.
2. **Semantic Hierarchy:** The page contains strictly one `<h1>`. Mid-page interactive tools drop to an `<h2>` or `<h3>` styled specifically for in-flow utility.
3. **Sentence Case Default:** Eliminate all-caps header treatments. Use bold weight, tight letter-spacing (`-0.02em`), and sentence case for optimal readability.
4. **Button Geometry:** Cap interactive button labels at 2–4 words (`Run Free Visibility Scan`, `Explore AEO Technical Sprints`) to preserve geometry, padding, and prevent awkward wrapping on 320px mobile screens.
5. **Australian English (AU):** Enforce AU spelling across all UI copy, metadata, and alt tags (`optimisation`, `specialises`, `organisation`, `behaviour`, `maximise`, `analysing`).

---

## 2. Color Palette & Surface System

### Color Tokens

```css
/* Core Brand Colors */
--color-aeo-cyan: #00E5FF;       /* Primary Brand Accent & High-Intent Highlights */
--color-aeo-cyan-hover: #33EBFF; /* Primary Interactive Hover */
--color-aeo-purple: #BD00FF;     /* Secondary Brand Gradient Anchor */
--color-aeo-indigo: #6366F1;     /* Interactive Secondary Tone */

/* Dark Theme Surface Stack */
--color-aeo-black: #030303;      /* Root Canvas Background */
--color-aeo-dark: #07070A;       /* Deep Ambient Layer */
--color-aeo-card: #0D111A;       /* Primary Component Card Background */
--color-aeo-card-well: #111522;  /* Recessed Input Well Background */
--color-aeo-card-border: rgba(255, 255, 255, 0.08); /* Neutral Component Border */
--color-aeo-cyan-border: rgba(0, 229, 255, 0.30);   /* Active Accent Border */

/* Typography & Content Colors */
--color-text-primary: #FFFFFF;   /* Headlines, Primary Labels, Active Metrics */
--color-text-secondary: #E2E8F0; /* Subheads, High-Contrast Body */
--color-text-body: #94A3B8;      /* Paragraph Body Prose */
--color-text-muted: #64748B;     /* Footnotes, Microcopy, Inactive Placeholders */
```

### Palette Reference Table

| Role | Color Name | Hex Token | Tailwind Utility | Visual Application |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Accent** | AEO Cyan | `#00E5FF` | `text-aeo-cyan`, `bg-aeo-cyan` | Eyebrow badges, active icons, primary glow |
| **Secondary Accent** | AEO Purple | `#BD00FF` | `text-aeo-purple`, `bg-aeo-purple` | Brand gradients, telemetry cards, CTA glow |
| **Canvas Background**| Obsidian Black | `#030303` | `bg-black`, `bg-[#030303]` | Main viewport canvas, body root |
| **Card Surface** | Deep Obsidian | `#0D111A` | `bg-zinc-950/90`, `bg-[#0D111A]` | Technical sprint cards, module containers |
| **Recessed Well** | Void Navy | `#111522` | `bg-black/50`, `bg-[#111522]` | Input wells, metric counters, data strips |
| **Primary Text** | Solid White | `#FFFFFF` | `text-white` | Display headlines (`h1`, `h2`), key values |
| **Secondary Text** | Slate White | `#E2E8F0` | `text-slate-200` | Lead paragraphs, card titles |
| **Muted Text** | Slate Gray | `#94A3B8` | `text-slate-400`, `text-zinc-400`| Body descriptions, explanatory copy |
| **Microcopy** | Dim Gray | `#64748B` | `text-slate-500` | Metadata, reassurance rows, timestamps |

---

## 3. Font System & Stack Specifications

### Typeface Roles
* **Display & Headings:** **Söhne** (Architectural, bold Swiss-geometric sans for primary anchors and section headers).
* **Body, UI & Paragraphs:** **Geist Sans** (Clean, neutral, high-performance UI typeface for reading comfort).
* **Telemetry & Machine Data:** **Geist Mono** (Precision monospace for eyebrows, status chips, confidence scores, and code).
* **Editorial Supporting Text:** **IBM Plex Serif** (Humanist editorial support for explanatory guidance).

### Next.js Font Setup (`src/app/layout.tsx`)

```tsx
import { Geist, Geist_Mono, IBM_Plex_Serif } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const ibmPlexSerif = IBM_Plex_Serif({
  variable: '--font-ibm-plex-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});
```

### Tailwind Configuration Tokens (`src/app/globals.css`)

```css
@theme {
  --color-aeo-cyan: #00E5FF;
  --color-aeo-purple: #BD00FF;
  --color-aeo-dark: #07070A;

  --font-display: "Söhne Breit", "Söhne", var(--font-geist-sans), "Inter", system-ui, sans-serif;
  --font-sans: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
  --font-serif: var(--font-ibm-plex-serif), "Georgia", serif;

  --tracking-tighter: -0.04em;
  --tracking-tight: -0.02em;
  --tracking-widest: 0.12em;
}

@utility font-display {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

@utility font-soehne-breit {
  font-family: var(--font-display);
  letter-spacing: -0.015em;
}
```

---

## 4. Typographic Hierarchy & Scale Tokens

| Semantic Role | HTML Element | Font & Weight | Tailwind Utility Classes | Desktop Size / Leading | Mobile Size / Leading | Optical Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Telemetry Eyebrow** | `<span>` / `<p>` | Geist Mono Medium (500) | `font-mono text-xs uppercase tracking-widest text-[#00E5FF]` | 12px / 16px | 11px / 14px | `+0.12em` |
| **Page H1** | `<h1>` | Söhne Bold (700) | `font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]` | 56px–64px / 1.1 | 36px–40px / 1.15 | `-0.03em` |
| **Section H2** | `<h2>` | Söhne Bold (700) | `font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-[1.2]` | 32px–36px / 1.2 | 24px–28px / 1.25 | `-0.02em` |
| **Card / Sub H3** | `<h3>` | Söhne Halbfett (600) | `font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug` | 20px / 1.3 | 18px / 1.3 | `-0.01em` |
| **Step / Feature H4** | `<h4>` | Söhne Halbfett (600) | `font-display text-base font-semibold text-slate-200` | 16px / 1.4 | 15px / 1.4 | `0` |
| **Lead Paragraph** | `<p>` | Geist Sans Regular (400) | `font-sans text-lg sm:text-xl text-slate-300 font-normal leading-relaxed` | 18px–20px / 1.6 | 16px / 1.5 | `0` |
| **Body Paragraph** | `<p>` | Geist Sans Regular (400) | `font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed` | 16px / 1.6 | 14px–15px / 1.5 | `0` |
| **Microcopy / Meta** | `<span>` | Geist Sans Regular (400) | `font-sans text-xs text-slate-500 leading-normal` | 12px / 1.4 | 12px / 1.4 | `0` |
| **Data Metric / Price** | `<span>` | Geist Mono Semibold (600) | `font-mono text-xl sm:text-2xl font-semibold text-white tracking-tight` | 24px / 1.2 | 20px / 1.2 | `-0.02em` |
| **Interactive CTA** | `<button>` / `<a>` | Geist Sans Medium (500) | `font-sans text-sm font-semibold tracking-wide text-white` | 14px / 1 | 14px / 1 | `0` |

---

## 5. Section Implementation Standards

### 1. Hero Block
* **Eyebrow:** Single Geist Mono pill badge (`AI Visibility Telemetry`) with subtle pulse animation dot.
* **Headline (H1):** Outcome-led proposition: `Get Found on Google, Maps, and AI Search`.
* **Lead Paragraph:** Max 2 lines on desktop: `Discover how Search engines, Google Maps, and AI answer engines understand and recommend your business for the services you provide.`
* **CTA Button:** `Run Free Visibility Scan` + microcopy `Free visibility scan • No email required to start • See your biggest opportunities`.

### 2. Services & Sprints Hub
* **Eyebrow:** `Predictable Engagements`
* **Heading (H2):** `Fixed-Scope Sprints. Zero Retainer Lock-In.`
* **Card Structure:** 3 equal-height flex containers (`Explore the 90-Day Blueprint`, `Explore AEO Technical Sprints`, `Explore Local Visibility Sprints`) with CTAs anchored to card bottoms.

### 3. Overview & Video Explainer
* **Eyebrow:** `Clear Outcomes`
* **Heading (H2):** `Why Australian Businesses Choose AEObility`
* **Prose:** Clear, plain-spoken Australian English addressing traffic drop and customer discovery.

### 4. Value Proposition (Entity Authority)
* **Eyebrow:** `Entity Authority`
* **Heading (H2):** `Stop Losing Customers on Google, Maps, and AI`
* **Card Titles:** `Stop Losing Traffic on Google, Maps and AI`, `Strengthen Visibility Signals`, `Build a Machine-Readable Foundation`.

### 5. Telemetry Process (How It Works)
* **Eyebrow:** `The Telemetry Engine`
* **Heading (H2):** `Four Steps to Machine-Readable Clarity`
* **Steps:** Numbered `01`–`04` in Geist Mono with declarative titles.

### 6. Mid-Page Diagnostic Form Card
* **Card Heading:** `Check Where Your Business Stands Across AI Search` *(Prevents verbatim H1 duplication)*.

### 7. Strategic Blueprint Section
* **Eyebrow:** Single pill badge (`Strategic Roadmap`).
* **Heading (H3):** `The AEObility 90-Day Blueprint`.
* **Fee Credit Line:** `100% of your $995 Blueprint fee is credited toward eligible implementation sprints.`
* **CTA:** `Book a 15-Minute Diagnostic`.

### 8. Lead Capture & Consultation Form
* **Eyebrow:** `Direct Implementation`
* **Heading (H2):** `Ready to Clarify Your Search Visibility?`
* **Subhead:** `Speak directly with an AEO specialist or request a custom sprint scope.`
* **CTA:** `Request Sprint Scope`.

---

## 6. Pre-Flight Typography QA Checklist

- [ ] **Single Eyebrow:** Exactly one eyebrow pill tag per section; no stacked labels.
- [ ] **Semantic Single H1:** Exactly one `<h1>` per page, positioned in the Hero.
- [ ] **No Duplicate Titles:** In-flow mid-page tools use distinct action-led headings.
- [ ] **Sentence Case Default:** All titles and card headings formatted in sentence case.
- [ ] **Typeface Role Separation:**
  - Söhne (`font-display` / `font-soehne-breit`) for headlines and card headers.
  - Geist Sans (`font-sans`) for body paragraphs, forms, and buttons.
  - Geist Mono (`font-mono`) for machine telemetry, confidence scores, and eyebrows.
- [ ] **CTA Button Geometry:** Interactive buttons strictly capped at 2–4 words to preserve padding on mobile viewports.
- [ ] **Australian English (AU):** Verified `optimisation`, `prioritised`, `analyse`, `behaviour` across all visible layers.
