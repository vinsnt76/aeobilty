import React from "react";
import Script from "next/script";
import Link from "next/link";
import { BarChart3 } from "lucide-react";

export const metadata = {
  title: "From Entity Ambiguity to Commercial Discovery | AEObility",
  description:
    "An empirical case study detailing the first 78 days of AEObility's 90-Day AEO/GEO Blueprint on a fresh Australian domain, measuring commercial query visibility and AI citations.",
};

export default function First90DaysCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "From Entity Ambiguity to Commercial Discovery",
    description:
      "An empirical case study detailing the first 78 days of AEObility's 90-Day AEO/GEO Blueprint on a fresh Australian domain, measuring commercial query visibility and AI citations.",
    about: {
      "@type": "Thing",
      name: "Answer Engine Optimisation",
    },
    author: {
      "@type": "Person",
      name: "Vince Baker",
    },
    publisher: {
      "@type": "Organization",
      name: "AEObility",
      legalName: "AEObility",
      identifier: "ABN 61 029 803 255",
      logo: {
        "@type": "ImageObject",
        url: "https://aeobility.com.au/logo.png",
      },
    },
    datePublished: "2026-09-14T00:00:00+08:00",
    dateModified: "2026-09-14T00:00:00+08:00",
    mainEntityOfPage:
      "https://aeobility.com.au/knowledge-hub/case-studies/first-90-days",
    citation:
      "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
  };

  const queries = [
    {
      query: "aeo services perth",
      impressions: 46374,
      position: 2.75,
      salience: 78.64,
    },
    {
      query: "aeo seo australia",
      impressions: 15045,
      position: 2.53,
      salience: 84.01,
    },
    {
      query: "Brand Cluster",
      impressions: 388515,
      position: 64.47,
      salience: 20.99,
    },
    {
      query: "AEO Services Cluster",
      impressions: 186641,
      position: 76.93,
      salience: 8.13,
    },
  ];

  const aiCitations = [
    { asset: "Structured Data Query Fan-Out", citations: 1052 },
    { asset: "Optimising for Different AI Search Engines", citations: 13 },
    { asset: "AEO Guide", citations: 10 },
  ];
  const maxCitations = Math.max(...aiCitations.map((c) => c.citations));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black pt-24 pb-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-aeo-cyan/10 to-transparent blur-3xl pointer-events-none" />

      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-6 w-full space-y-16 relative z-10">
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 font-medium font-mono uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>90-Day Blueprint Case Study</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              From entity ambiguity to commercial discovery
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-200 leading-[1.2]">
              Applying a 90-Day AEO/GEO Blueprint to a new Australian domain
            </h2>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs text-slate-300 font-mono shadow-md backdrop-blur-sm">
            <div className="space-y-1">
              <strong className="text-white font-sans text-sm block">
                Publication Date
              </strong>
              <span>14 September 2026</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <div className="space-y-1">
              <strong className="text-white font-sans text-sm block">
                Site Launch Date
              </strong>
              <span>28 June 2026</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <div className="space-y-1">
              <strong className="text-white font-sans text-sm block">
                Measurement Window
              </strong>
              <span>28 June 2026 to 14 September 2026 (78 days live)</span>
            </div>
          </div>
        </header>

        <section className="space-y-8 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            Executive summary
          </h2>
          <p className="font-sans text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Within 78 days of launching on a fresh domain, AEObility established
            strong early visibility across two narrowly defined commercial query
            sets in the Australian market.
          </p>

          <ul className="space-y-4 pl-0 list-none mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>National Reach:</strong> Average position 2.53 with
                84.01% Salience Share across 15,045 impressions for "aeo seo
                australia".
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Local Authority:</strong> Average position 2.75 with
                78.64% Salience Share across 46,374 impressions for "aeo
                services perth".
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Combined Exposure:</strong> 61,419 impressions with an
                impression-weighted average position of 2.70 across both primary
                query sets.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Broader Baseline Context:</strong> The site-wide Brand
                Cluster recorded an average position of 64.47 (20.99% Salience
                Share across 388,515 impressions), while the AEO Services
                Cluster recorded an average position of 76.93 (8.13% Salience
                Share across 186,641 impressions).
              </span>
            </li>
          </ul>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Entering a competitive digital marketing sector on a brand-new
            domain requires explicit machine readability, clear entity
            disambiguation, and structured retrieval readiness. Between site
            launch on 28 June 2026 and 14 September 2026, AEObility executed the
            opening 78 days of its{" "}
            <Link
              href="/solutions/aeo-blueprint"
              className="text-cyan-400 hover:underline font-semibold"
            >
              90-Day Blueprint
            </Link>{" "}
            across its primary digital property. Rather than relying on legacy
            domain authority or backlink accumulation, AEObility established
            canonical definitions for its brand, services, and location,
            engineered an entity-first Semantic Lattice Map, and structured
            answer blocks for rapid parsing and direct citation across AI
            retrieval systems.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Across this initial 78-day window, internal query reports recorded
            strong early visibility across core commercial terms, generating a
            combined 61,419 impressions. Broader cluster data demonstrates
            established market visibility while defining a clear baseline for
            ongoing iterative optimisation.
          </p>
          <div className="mt-8">
            <Link
              href="/services/aeo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium font-sans text-slate-300 bg-transparent border border-slate-500/30 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Explore AEO Services
            </Link>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            1. The starting strategic challenge: Entity disambiguation and
            vulnerabilities
          </h2>

          <div className="space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Competitive footprint
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Established agencies commonly hold advantages in domain history,
              content breadth, and authority signals, defending primary search
              categories such as "AEO services" and "GEO marketing".
            </p>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Lexical and semantic collisions
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Because the domain had no prior historical footprint, early
              indexing faced immediate semantic and lexical collisions:
            </p>
            <ul className="space-y-4 pl-0 list-none">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Software Platforms:</strong> Direct lexical confusion
                  with SEObility (a global SEO tool platform).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Phonetic/Organizational Collisions:</strong> Vector
                  overlap with Aerobility (a UK aviation charity) and broad
                  category terms such as "mobility".
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Geographic Grounding:</strong> The immediate necessity
                  to anchor AEObility as a Perth-based Western Australian
                  ProfessionalService serving clients Australia-wide, preventing
                  misclassification as an offshore software tool or remote
                  directory.
                </span>
              </li>
            </ul>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-4">
              Cold-start and indexation risks
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              A fresh domain lacks historical graph connections, exposing the
              brand to specific structural vulnerabilities:
            </p>
            <ul className="space-y-4 pl-0 list-none">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Cold-Start Vulnerability:</strong> Unresolved entity
                  ambiguity can reduce the likelihood that retrieval systems
                  correctly associate a new brand with its intended category,
                  location, and services.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Categorical Ambiguity and Entity Conflation:</strong>{" "}
                  Algorithms risk conflating a new brand with established global
                  software or charities, diluting local commercial relevance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Perception Drift:</strong> Unstructured body text
                  allows search and retrieval systems to infer incorrect service
                  capabilities, resulting in inaccurate answer summaries.
                </span>
              </li>
            </ul>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-4">
              Entity-first disambiguation framework
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              To eliminate entity ambiguity and establish immediate machine
              readability, AEObility deployed a four-part structural response:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  Explicit Schema Typing
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Implemented precise Schema.org ProfessionalService and
                  Organization JSON-LD graphs across all primary nodes.
                </p>
              </div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  Geographic Scoping
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Declared Perth, Western Australia geographic coordinates
                  (-31.9523, 115.8613), Australian Business Number (ABN)
                  declarations, and explicit service area definitions.
                </p>
              </div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  External Anchoring
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Corroborated brand facts across external knowledge profiles,
                  including Substack, Medium, LinkedIn, and Reddit.
                </p>
              </div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  Lattice Mapping
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Structured internal links and radial loops to explicitly
                  connect commercial offerings, founder profiles, and evidence
                  assets.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-900/10 border border-purple-500/20 rounded-xl">
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                <strong>Explicit Corrective Implementation:</strong> AEObility
                published a canonical Brand Facts directory, declared its
                Australian Business Number (ABN), attributed founder entity
                profiles, marked up geographic coordinates for Perth, Western
                Australia, and technically validated schema relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            2. Engineering the semantic lattice: Vector-modeled entity
            architecture
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            To ensure entity relationships remained mathematically coherent
            before deployment, AEObility modelled its information architecture
            as a semantic vector graph rather than a traditional flat sitemap.
          </p>

          <div className="space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Architectural challenge
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              A fresh domain lacks historical graph connections, leaving new
              brand profiles vulnerable to categorical ambiguity and
              misclassification across search engines. Flat site structures fail
              to convey explicit topical relationships to AI scrapers.
            </p>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Engineering methodology
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Core operational assets (canonical URLs, schema definitions,
              service scopes, and commercial topics) were defined as 48 discrete
              entity nodes within a master semantic matrix. Node attributes were
              encoded into a 384-dimensional semantic space at build time,
              evaluating all 1,128 reciprocal node pairs via cosine similarity.
            </p>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Graph execution
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              This mathematical mapping governed internal linking and radial
              loops, ensuring pages only linked to contextually adjacent topics
              with high semantic affinity. To validate how LLMs parse this
              structure, AEObility exposed the graph through an internal
              conversational search interface compatible with emerging NLWeb and
              Model Context Protocol (MCP) standards.
            </p>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Methodological boundary
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              This internal vector pipeline serves two specific functions: it
              algorithmically informs the site's contextual internal linking
              structure, and it provides an interactive proof-of-concept for
              conversational retrieval. It is not an external search engine
              ranking mechanism. Third-party crawlers (such as Googlebot and
              Bingbot) index the resulting public HTML, rendered JSON-LD schema,
              and contextual links.
            </p>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            3. Implementation architecture: The first 78 days
          </h2>

          <div className="my-10 max-w-xl mx-auto bg-zinc-900/50 border border-purple-500/20 rounded-2xl p-8 sm:p-10 text-center shadow-lg relative isolate overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="font-sans font-semibold text-slate-200 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                Core Brand Node: AEObility
              </div>
              <div className="text-slate-600">↓</div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-black/40 px-4 py-3 rounded-lg border border-white/10 text-xs">
                  <strong className="text-cyan-400 block mb-1">
                    Intent Families
                  </strong>
                  <span className="text-slate-400">
                    Category Nodes
                    <br />
                    Topic Clusters
                  </span>
                </div>
                <div className="bg-black/40 px-4 py-3 rounded-lg border border-white/10 text-xs">
                  <strong className="text-cyan-400 block mb-1">
                    Conversion Corridor
                  </strong>
                  <span className="text-slate-400">
                    High-Intent Offerings
                    <br />
                    Transparent Pricing
                  </span>
                </div>
                <div className="bg-black/40 px-4 py-3 rounded-lg border border-white/10 text-xs">
                  <strong className="text-cyan-400 block mb-1">
                    Radial Loops
                  </strong>
                  <span className="text-slate-400">
                    Contextual Links
                    <br />
                    Across Nodes
                  </span>
                </div>
              </div>
              <div className="text-slate-600">↓</div>
              <div className="font-sans font-semibold text-slate-200 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                Off-Site Entity Corroboration Network
              </div>
              <div className="font-mono text-xs text-slate-500 mt-2">
                (Substack | Medium | LinkedIn | Reddit | Geo-Nodes)
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                Days 1 to 30
              </h3>
              <strong className="font-sans text-sm text-slate-200 block mb-2">
                Entity Foundation
              </strong>
              <p className="font-sans text-sm text-slate-400">
                Published canonical Brand Facts; implemented JSON-LD graph
                (Schema.org ProfessionalService), ABN declarations, founder
                attribution, Perth, Western Australia geographic coordinates
                (-31.9523, 115.8613), and external verification profiles on
                Substack, Medium, LinkedIn, and Reddit.
              </p>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2">
                Days 31 to 60
              </h3>
              <strong className="font-sans text-sm text-slate-200 block mb-2">
                Commercial Architecture
              </strong>
              <p className="font-sans text-sm text-slate-400">
                Deployed an Intent-Family information architecture; established
                conversion corridors connecting educational articles to
                commercial service hubs; instituted radial internal linking to
                circulate context across brand, service, evidence, and founder
                pages.
              </p>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
                Days 61 to 78
              </h3>
              <strong className="font-sans text-sm text-slate-200 block mb-2">
                Retrieval Readiness and Observability
              </strong>
              <p className="font-sans text-sm text-slate-400">
                Implemented an answer-first section structure, using prominent
                placement as an editorial and retrieval-readiness hypothesis
                tested through AEObility's own methodology; structured atomic
                answer blocks (applying an internal editorial heuristic of 80 to
                120 words); tested open-protocol interfaces compatible with
                emerging NLWeb and Model Context Protocol (MCP) standards;
                instrumented telemetry reporting.{" "}
                <Link
                  href="/knowledge-hub/articles/structured-data-query-fan-out"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Read Query Fan-Out Study
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 bg-black/50 border border-white/10 p-6 sm:p-8 rounded-2xl">
            <h3 className="font-display text-lg font-bold text-slate-100 mb-4">
              Methodology and Data Interpretation
            </h3>
            <p className="font-sans text-sm text-slate-400 mb-6">
              How to Interpret the Evidence Sources. This case study reports
              data from three distinct, non-interchangeable systems:
            </p>
            <ul className="space-y-4 pl-0 list-none mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0"></div>
                <span className="font-sans text-sm text-slate-400">
                  <strong>Google Search Console (GSC):</strong> Records direct
                  organic Google Search clicks, impressions, click-through rate
                  (CTR), and average position across the measurement window
                  (filtered to Australia and property-level page variants).
                  Average position represents the average of the topmost
                  eligible URL across impressions, not a static SERP rank.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0"></div>
                <span className="font-sans text-sm text-slate-400">
                  <strong>Bing Webmaster Tools AI Performance:</strong> Reports
                  citations, cited pages, and sampled grounding-query data
                  across supported Microsoft AI experiences. Citation counts
                  indicate that a URL was referenced as a cited source; they do
                  not indicate answer placement, authority, rank, or conversion.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0"></div>
                <span className="font-sans text-sm text-slate-400">
                  <strong>AEObility Internal Looker Telemetry:</strong>{" "}
                  Proprietary diagnostic query and topic-cluster telemetry
                  tracking search exposure.{" "}
                  <strong>AEObility Adjusted Visibility Score (AAVS)</strong> is
                  an internal diagnostic metric that weights recorded
                  impressions against average position using a logarithmic
                  discount. <strong>Salience Share %</strong> represents
                  AEObility’s proprietary adjusted visibility share relative to
                  the defined benchmark set within that query family.
                </span>
              </li>
            </ul>
            <p className="font-sans text-xs text-slate-500 italic mb-8">
              Results are point-in-time, platform-specific, and query-set
              specific. They do not prove single-factor causation, guarantee
              future rankings or AI citations, or represent total market share.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-3">
                  What This Case Study Demonstrates
                </h4>
                <ul className="space-y-2 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Early visibility on a new domain for defined commercial
                      query sets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Observed AI citation activity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Implementation of an entity-first information
                      architecture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Measurable movement between broad and focused query
                      clusters.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-3">
                  What This Case Study Does Not Demonstrate
                </h4>
                <ul className="space-y-2 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Causal ranking effects of individual SEO or AEO
                      techniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Universal AI visibility or permanent rankings.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Increased revenue or sales conversions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Direct algorithmic ranking influence of private vector
                      similarity models.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            4. Empirical performance and results
          </h2>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-8">
              Early commercial query visibility
            </h3>
            <div className="space-y-8">
              {queries.map((item) => (
                <div key={item.query}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm font-semibold text-slate-200">
                      {item.query}
                    </span>
                    <span className="font-mono text-sm font-semibold text-cyan-300">
                      {item.salience.toFixed(2)}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-black/50 border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-aeo-cyan to-aeo-purple"
                      style={{ width: `${item.salience}%` }}
                    />
                  </div>

                  <div className="mt-2 text-xs text-slate-500 font-mono flex items-center justify-between">
                    <span>
                      <span className="text-slate-300">
                        {item.impressions.toLocaleString()}
                      </span>{" "}
                      impressions
                    </span>
                    <span>
                      Position{" "}
                      <span className="text-slate-300">
                        {item.position.toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono text-right">
              Source: AEObility Internal Visibility Telemetry
            </div>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-6">
            Commercial query analysis
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            <strong>Location and Service Association:</strong> The two primary
            query definitions recorded a combined exposure of 61,419 impressions
            and an impression-weighted average position of approximately 2.70
            within internal Looker telemetry.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            <strong>Interpretation:</strong> This early result reflects observed
            visibility and salience for this narrowly defined query set, which
            is distinct from inferred entity recognition. It does not isolate
            the contribution of any single implementation, nor does it
            demonstrate universal ranking superiority across all engines,
            devices, or personalisation parameters.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            <strong>Broader Market Distribution:</strong> The brand cluster
            (388,515 impressions; 20.99% Salience Share; average position 64.47)
            and AEO Services cluster (186,641 impressions; 8.13% Salience Share;
            average position 76.93) confirm that broader category exposure
            remains distributed across competitive search results.
          </p>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-sm mt-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-4">
              Commercial conversion corridor evidence
            </h3>
            <p className="font-sans text-sm text-slate-400 mb-6">
              The <code>/services/aeo/costs-timing</code> page recorded:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="font-mono text-2xl font-bold text-white">9</div>
                <div className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  Impressions
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="font-mono text-2xl font-bold text-cyan-400">
                  4
                </div>
                <div className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  Clicks (44.44% CTR)
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="font-mono text-2xl font-bold text-white">
                  5.78
                </div>
                <div className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  Average Position
                </div>
              </div>
            </div>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              The costs-and-timing page began attracting qualified search
              interaction while ranking on the first page for its recorded
              impressions, producing 4 clicks from 9 impressions during the
              measurement period. While this sample size is too small to
              establish a stable CTR benchmark, it demonstrates measurable
              organic search interaction. This metric measures search-result
              click-through interaction (CTR), not completed commercial
              enquiries or sales conversions.{" "}
              <Link
                href="/services/aeo/costs-timing"
                className="text-cyan-400 hover:underline font-semibold"
              >
                View AEO Costs & Milestones
              </Link>
              .
            </p>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-8">
            Observed Bing AI performance citation data
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The Bing AI Performance report recorded a concentrated period of
            citation activity between 7 August and 12 August 2026, representing
            a point-in-time platform observation in supported Microsoft AI
            experiences.
          </p>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm mb-6 mt-6">
            <div className="space-y-8">
              {aiCitations.map((item) => (
                <div key={item.asset}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm font-semibold text-slate-200 truncate">
                      {item.asset}
                    </span>
                    <span className="font-mono text-sm font-semibold text-cyan-300">
                      {item.citations.toLocaleString()}
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-black/50 border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-aeo-cyan to-aeo-cyan"
                      style={{
                        width: `${(item.citations / maxCitations) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <strong className="font-sans text-sm text-slate-200 block mb-3">
                Grounding Queries (Sampled by Bing):
              </strong>
              <ul className="space-y-3 pl-0 list-none">
                <li className="font-sans text-sm text-slate-400 flex justify-between">
                  <span className="italic">
                    "essential features of query fan-out aware content tools"
                  </span>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap ml-4">
                    666 citations (4.53%)
                  </span>
                </li>
                <li className="font-sans text-sm text-slate-400 flex justify-between">
                  <span className="italic">
                    "solutions optimized for query fan-out scenarios"
                  </span>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap ml-4">
                    334 citations (7.40%)
                  </span>
                </li>
                <li className="font-sans text-sm text-slate-400 flex justify-between">
                  <span className="italic">
                    "content best practices query fan-out scenarios"
                  </span>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap ml-4">
                    10 citations (12.82%)
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono text-right">
              Source: Bing AI Performance
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The grounding-query data suggests the page was associated with
            related query-fan-out topics in supported Microsoft AI experiences.
            This constitutes an observation of platform-reported citations; it
            does not demonstrate exact retrieval-pipeline operations, algorithm
            mechanics, or sustained citation placement.
          </p>

          <div className="mt-12">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-4">
              Point-in-Time AI Retrieval Test Log
            </h3>
            <p className="font-sans text-xs text-slate-500 mb-4">
              Note: AI-search mentions and citations are logged separately using
              dated, reproducible prompt tests. These observations reflect
              point-in-time outputs and vary by model checkpoint, interface,
              geography, and index state.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-sm backdrop-blur-sm">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-black/40 border-b border-white/10 text-slate-300">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Test Date</th>
                    <th className="px-4 py-3 font-semibold">
                      Engine / Interface
                    </th>
                    <th className="px-4 py-3 font-semibold">Prompt Tested</th>
                    <th className="px-4 py-3 font-semibold">
                      Retrieval Result
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-400">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-12</td>
                    <td className="px-4 py-4">Bing Copilot</td>
                    <td className="px-4 py-4 italic">
                      "essential features of query fan-out aware content tools"
                    </td>
                    <td className="px-4 py-4 text-cyan-400 font-medium">
                      Cited
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-14</td>
                    <td className="px-4 py-4">Bing Copilot</td>
                    <td className="px-4 py-4 italic">
                      "solutions optimized for query fan-out scenarios"
                    </td>
                    <td className="px-4 py-4 text-cyan-400 font-medium">
                      Cited
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-20</td>
                    <td className="px-4 py-4">Perplexity AI</td>
                    <td className="px-4 py-4 italic">
                      "AEO agency Perth Western Australia"
                    </td>
                    <td className="px-4 py-4 text-purple-400 font-medium">
                      Mentioned
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-28</td>
                    <td className="px-4 py-4">ChatGPT (Search)</td>
                    <td className="px-4 py-4 italic">
                      "Top national digital agencies Australia"
                    </td>
                    <td className="px-4 py-4 text-slate-500 font-medium">
                      Not Observed
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-09-02</td>
                    <td className="px-4 py-4">Claude 3.5 Sonnet</td>
                    <td className="px-4 py-4 italic">
                      "Compare AEO vs SEO consultants Perth"
                    </td>
                    <td className="px-4 py-4 text-slate-500 font-medium">
                      Not Observed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            5. Strategic priorities for the next Blueprint phase
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The dataset dictates a clear evolutionary path for the architecture.
            The transition from phase one to phase two revolves around{" "}
            <strong>Hub Rebalancing</strong>, executed through the following
            strategic priorities:
          </p>
          <ul className="space-y-4 pl-0 list-none mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Hub Rebalancing:</strong> Transition from concentrated
                commercial query visibility on the homepage to broader URL-level
                commercial relevance by shifting high-impression queries onto
                targeted service hubs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Corridor Link Densification:</strong> Strengthen
                contextual internal linking from informational knowledge-hub
                articles into primary commercial nodes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Answer-Block Refinement:</strong> Refine title,
                description, heading, and answer-block alignment for high-intent
                query variations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Independent Corroboration:</strong> Expand third-party
                proof assets and directory profiles to further distinguish
                AEObility from similarly named global entities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Query Segmentation:</strong> Track branded, non-branded,
                local, and Australia-wide queries separately across external
                rank-tracking tools.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Commercial Conversion Tracking:</strong> Measure
                completed enquiry forms, diagnostic audits, and qualified calls
                alongside impressions, clicks, and salience.
              </span>
            </li>
          </ul>
        </section>

        <section className="scroll-mt-24 border-t border-white/10 pt-16 pb-8">
          <div className="bg-zinc-950/80 border border-white/10 p-8 sm:p-12 rounded-2xl shadow-lg backdrop-blur-sm text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug mb-4">
              Ready to validate your domain's AI retrieval readiness?
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Stop guessing how AI search engines interpret your business. Run a
              targeted diagnostic or review our fixed-scope execution plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-sans text-white bg-gradient-to-r from-[#A855F7] to-[#7C3AED] rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-400/20"
              >
                Execute AI Diagnostic
              </Link>
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-sans text-slate-200 bg-slate-900/80 border border-slate-400/40 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1)" }}
              >
                View $995 Strategic Blueprint
              </Link>
            </div>
            <div className="mt-6 font-mono text-[11px] text-slate-500 uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span>Zero lock-in contracts</span>
              <span className="hidden sm:inline">•</span>
              <span>2-minute real-time audit</span>
              <span className="hidden sm:inline">•</span>
              <span>No agency jargon</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
