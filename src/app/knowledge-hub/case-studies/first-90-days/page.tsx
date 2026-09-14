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
      impressions: 52071,
      position: 6.14,
      salience: 78.64,
    },
    {
      query: "aeo seo australia",
      impressions: 15133,
      position: 2.99,
      salience: 84.01,
    },
    {
      query: "aeo services",
      impressions: 217255,
      position: 65.82,
      salience: 18.89,
    },
    {
      query: "aeo agency",
      impressions: 57544,
      position: 97.41,
      salience: 0.64,
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
            strong early visibility across narrowly defined commercial query
            sets in the Australian market. This case study documents the full
            observable evidence base during the measurement window.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-sm hover:border-cyan-500/40 transition-colors backdrop-blur-sm">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white mb-2">
                617,584
              </div>
              <div className="font-sans text-sm font-bold text-slate-200">
                Recorded impressions
              </div>
              <div className="font-serif text-sm text-slate-400 mt-1">
                Across 624 URL/query observations
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                Source: AEObility Internal Visibility Telemetry
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-sm hover:border-purple-500/40 transition-colors backdrop-blur-sm">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white mb-2">
                61,419
              </div>
              <div className="font-sans text-sm font-bold text-slate-200">
                Selected commercial-query impressions
              </div>
              <div className="font-serif text-sm text-slate-400 mt-1">
                Two high-intent query definitions
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                Source: AEObility Internal Visibility Telemetry
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-sm hover:border-cyan-500/40 transition-colors backdrop-blur-sm">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white mb-2">
                2.70
              </div>
              <div className="font-sans text-sm font-bold text-slate-200">
                Impression-weighted average position
              </div>
              <div className="font-serif text-sm text-slate-400 mt-1">
                Selected commercial query set
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                Source: AEObility Internal Visibility Telemetry
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-sm hover:border-purple-500/40 transition-colors backdrop-blur-sm">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white mb-2">
                1,052
              </div>
              <div className="font-sans text-sm font-bold text-slate-200">
                Bing AI citations
              </div>
              <div className="font-serif text-sm text-slate-400 mt-1">
                Primary cited asset: Structured Data Query Fan-Out
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                Source: Bing AI Performance
              </div>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Entering a competitive digital marketing sector on a brand-new
            domain requires explicit machine readability, clear entity
            disambiguation, and structured retrieval readiness. The first 78
            days of implementation were structured around the{" "}
            <Link
              href="/solutions/aeo-blueprint"
              className="text-cyan-400 hover:underline font-semibold"
            >
              AEO Blueprint
            </Link>
            . Rather than relying on legacy domain authority or backlink
            accumulation, AEObility established canonical definitions for its
            brand, services, and location, engineered an entity-first Semantic
            Lattice Map, and structured answer blocks for rapid parsing and
            direct citation across AI retrieval systems.
          </p>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            1. Empirical performance: Commercial specificity
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The telemetry dataset highlights the critical distinction between
            establishing relevance for explicit commercial intents versus
            broader, historically defended categories.
          </p>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-8">
              Salience share and visibility
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

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The visibility dataset shows a marked difference between explicitly
            defined commercial queries and broader category formulations.
            AEObility records substantially stronger visibility for
            geographically or semantically explicit queries, while broader
            category terms remain considerably more competitive.
          </p>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            2. URL distribution and homepage concentration
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            When examining the highest-performing commercial query families, a
            distinct concentration pattern emerges around the domain's root
            entity (the homepage).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-6">
                Query: "aeo services perth"
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-sans text-sm font-semibold text-slate-200">
                      Query-family total
                    </span>
                    <span className="font-mono text-sm text-slate-300">
                      52,071
                    </span>
                  </div>
                  <div className="h-2 w-full bg-black/50 border border-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-sans text-sm font-semibold text-slate-200">
                      Homepage URL
                    </span>
                    <span className="font-mono text-sm text-slate-300">
                      46,374
                    </span>
                  </div>
                  <div className="h-2 w-full bg-black/50 border border-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-6">
                Query: "aeo seo australia"
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-sans text-sm font-semibold text-slate-200">
                      Query-family total
                    </span>
                    <span className="font-mono text-sm text-slate-300">
                      15,133
                    </span>
                  </div>
                  <div className="h-2 w-full bg-black/50 border border-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-sans text-sm font-semibold text-slate-200">
                      Homepage URL
                    </span>
                    <span className="font-mono text-sm text-slate-300">
                      15,045
                    </span>
                  </div>
                  <div className="h-2 w-full bg-black/50 border border-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: "99.4%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            This concentration demonstrates that while the{" "}
            <Link
              href="/services/aeo"
              className="text-cyan-400 hover:underline font-semibold"
            >
              commercial intent
            </Link>{" "}
            is strongly understood by the retrieval engine, the relevance is
            currently resolving predominantly to the root domain. This serves as
            the primary architectural opportunity for the next phase.
          </p>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            3. AI citation concentration
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The technical architecture included query-fan-out-aware structured
            data, yielding significant citation events within Microsoft's AI
            search ecosystem.
          </p>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-8">
              Bing AI citation events
            </h3>
            <div className="space-y-8">
              {aiCitations.map((item) => (
                <div key={item.asset}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm font-semibold text-slate-200">
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
            <div className="mt-10 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono text-right">
              Source: Bing AI Performance
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Citation counts represent platform-reported citation events and do
            not indicate answer position, authority, conversions or sustained
            visibility. However, the extreme concentration indicates that deep,
            highly specific technical nodes (evidence assets) serve as highly
            effective entry points for AI retrieval systems.
          </p>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            4. Strategic priorities: Evidence to opportunity
          </h2>

          <div className="my-10 max-w-xl mx-auto bg-zinc-900/50 border border-purple-500/20 rounded-2xl p-8 sm:p-10 text-center shadow-lg relative isolate overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="font-sans font-semibold text-slate-200">
                Strong explicit commercial visibility
              </div>
              <div className="text-slate-600">↓</div>
              <div className="font-sans font-semibold text-slate-200">
                Homepage concentration
              </div>
              <div className="text-slate-600">↓</div>
              <div className="font-sans font-semibold text-slate-200">
                Broader category visibility gap
              </div>
              <div className="text-slate-600">↓</div>
              <div className="font-display font-bold text-lg text-purple-400">
                Hub rebalancing
              </div>
              <div className="text-slate-600">↓</div>
              <div className="font-sans font-semibold text-slate-200">
                Evidence-to-commercial corridors
              </div>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The dataset dictates a clear evolutionary path for the architecture.
            The transition from phase one to phase two revolves around{" "}
            <strong>Hub Rebalancing</strong>, executed through three clear
            actions:
          </p>
          <ul className="space-y-4 pl-0 list-none mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                Actively migrate high-impression local and commercial intent
                queries from the homepage into dedicated, highly targeted
                service hubs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                Strengthen contextual internal linking from high-citation
                evidence assets into those primary commercial nodes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                Refine answer-block alignment for the broader category queries
                (for example, "AEO services") to close the visibility gap.
              </span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
