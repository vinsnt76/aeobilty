import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Network, Layers, HelpCircle, FileText } from 'lucide-react';

export const metadata = {
  title: "Entity Authority: Why AI Search Ranks Entities, Not Pages | AEObility",
  description: "Learn how entity authority building strengthens semantic search visibility, improves Answer Engine Optimisation and helps AI systems recognise and recommend your business.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
  },
};

export default function EntityAuthorityArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/android-chrome-512x512.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
        "name": "Entity Authority: Why AI Search Ranks Entities, Not Pages",
        "description": "Learn how entity authority building strengthens semantic search visibility, improves Answer Engine Optimisation and helps AI systems recognise and recommend your business."
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building#article",
        "headline": "Entity Authority: Why AI Search Ranks Entities, Not Pages",
        "description": "Learn how entity authority building strengthens semantic search visibility, improves Answer Engine Optimisation and helps AI systems recognise and recommend your business.",
        "author": {
          "@type": "Organization",
          "name": "AEObility"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AEObility",
          "logo": {
            "@type": "ImageObject",
            "url": "https://aeobility.com.au/logo.png"
          }
        },
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
        "image": "https://aeobility.com.au/ai-search-knowledge-hub.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is entity authority",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entity authority is how AI systems recognise, understand and trust your business. Strong entity authority improves visibility in Search, Maps and AI answers."
            }
          },
          {
            "@type": "Question",
            "name": "Why does entity authority matter for AEO",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEO relies on machine understanding. When your identity, services and location are consistent across the web, AI systems can confidently recommend you."
            }
          },
          {
            "@type": "Question",
            "name": "How do I improve my entity authority",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start with consistent identity signals, structured data, expert content and external validation. AEObility’s free audit shows exactly what needs attention."
            }
          }
        ]
      }
    ]
  };

  const pillars = [
    {
      title: "1. Identity",
      subtitle: "Stable Identifiers & Anti-Collision",
      description: "AI systems need stable identifiers to avoid entity collisions.",
      items: [
        "Consistent business name across all platforms",
        "Verified website, logo and contact details",
        "Structured data (JSON-LD microdata schema)",
        "Social profiles with matching information"
      ],
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "2. Semantic Relevance",
      subtitle: "Topical Mastery & Concept Mapping",
      description: "Entities gain authority by repeatedly demonstrating expertise around core topics.",
      items: [
        "Educational research content & guides",
        "Clear relationships between domain concepts",
        "Consistent coverage of services & solutions",
        "Internal linking that reinforces topical clusters"
      ],
      icon: <Network className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "3. External Validation",
      subtitle: "Credible Mentions & Citations",
      description: "AI systems weigh who mentions you and how credible those sources are.",
      items: [
        "Mentions on reputable industry publications",
        "Verified business & industry directories",
        "Podcasts, interviews & guest contributions",
        "Backlinks that reinforce topical authority"
      ],
      icon: <CheckCircle2 className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "4. Knowledge Graph Consistency",
      subtitle: "Fact Alignment Across Web Indexes",
      description: "Conflicting facts weaken machine retrieval confidence.",
      items: [
        "The same business name everywhere",
        "The same core service descriptions",
        "The same physical & regional location",
        "The same founding & entity relationships"
      ],
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Article Header */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Entity Salience &amp; AEO Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Entity Authority: <br />
              <span className="text-gradient-aeo">Why AI Search Ranks Entities, Not Pages</span>
            </h1>

            <p className="text-xl text-white/80 font-serif font-light leading-relaxed">
              AI search has changed how customers discover businesses. Instead of ranking pages by keywords, modern systems evaluate entities. An entity is the person, brand, product or organisation behind the page.
            </p>

            <div className="flex items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-4">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Updated July 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Banner Graphic */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/60 shadow-2xl">
            <Image
              src="/ai-search-knowledge-hub.webp"
              alt="Entity Authority diagram illustrating Knowledge Graph node mapping, Answer Engine Optimisation, and semantic search relationships by AEObility"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Intro Section */}
          <section className="prose prose-invert max-w-none text-base text-white/80 font-light leading-relaxed space-y-6">
            <p>
              Entity authority building is how your business becomes consistently recognisable, trustworthy and machine understandable across the web. When AI systems know who you are, what you do and who you serve, they can confidently recommend you.
            </p>
            <p className="text-lg font-medium text-white border-l-2 border-aeo-cyan pl-4 py-1 bg-white/[0.02]">
              This is the foundation of Answer Engine Optimisation (AEO).
            </p>
          </section>

          {/* What Entity Authority Means */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What Entity Authority Means</h2>
            <p className="text-white/80 leading-relaxed font-light">
              Traditional SEO focused on ranking URLs. Entity authority focuses on establishing the thing behind the URL.
            </p>
            <p className="text-white/80 leading-relaxed font-light">
              For AEObility, this means ensuring AI systems understand:
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <ul className="space-y-2.5 text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility is a company</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility specialises in Answer Engine Optimisation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility provides AI visibility audits and AI search consulting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility serves Australian businesses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility demonstrates expertise through content, client work and citations</span>
                </li>
              </ul>
            </div>

            <p className="text-white/70 font-light text-sm italic">
              When these facts appear consistently across trusted sources, AI systems gain confidence. Confidence leads to visibility.
            </p>
          </section>

          {/* The Four Pillars of Entity Authority */}
          <section className="space-y-8 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Four Pillars of Entity Authority</h2>
              <p className="text-white/60 text-sm font-light">Essential building blocks for machine trust and LLM retrieval preference.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-aeo-cyan/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                      <span className="text-xs text-aeo-cyan font-mono">{pillar.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-white/80 pt-2 border-t border-white/5">
                    {pillar.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Why Entity Authority Matters for AI Search */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Why Entity Authority Matters for AI Search</h2>
            <p className="text-white/80 leading-relaxed font-light">
              Large language models do not rank pages by keywords. They estimate whether an entity is a trustworthy answer based on signals such as:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-aeo-cyan uppercase">Signal 1</span>
                <p className="text-xs text-white/80 font-medium">Frequency of mention</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-aeo-cyan uppercase">Signal 2</span>
                <p className="text-xs text-white/80 font-medium">Source credibility</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-aeo-cyan uppercase">Signal 3</span>
                <p className="text-xs text-white/80 font-medium">Topical consistency</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-xs font-bold text-aeo-cyan uppercase">Signal 4</span>
                <p className="text-xs text-white/80 font-medium">Cross-platform corroboration</p>
              </div>
            </div>

            <p className="text-white/80 font-light text-sm">
              The stronger and more consistent these signals are, the more likely your business is to appear in AI generated answers.
            </p>
          </section>

          {/* A Practical Example */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">A Practical Example</h2>
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <span className="text-xs text-emerald-400 font-mono font-semibold uppercase">Simulated User Query:</span>
              <p className="text-white font-medium text-base font-serif italic">
                &ldquo;Who are good AEO consultants in Australia&rdquo;
              </p>
            </div>

            <p className="text-white/80 leading-relaxed font-light">
              If AEObility has:
            </p>

            <ul className="space-y-2 text-sm text-white/80 pl-4 border-l-2 border-white/10">
              <li>&bull; High quality educational content about AEO</li>
              <li>&bull; Consistent structured data (JSON-LD schemas)</li>
              <li>&bull; Mentions in Australian marketing publications</li>
              <li>&bull; A LinkedIn profile, GitHub, Reddit, YouTube and industry directories using the same branding</li>
              <li>&bull; Case studies demonstrating expertise</li>
            </ul>

            <p className="text-white/80 font-light text-sm">
              AI systems have multiple reinforcing signals connecting:
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono text-xs sm:text-sm text-aeo-cyan font-bold tracking-wide">
              AEObility &rarr; AEO Consulting &rarr; Australia &rarr; Trusted &rarr; Authoritative
            </div>

            <p className="text-white/70 font-light text-xs">
              This increases the likelihood of being recognised and recommended by Perplexity, ChatGPT, and Google AI Overviews.
            </p>
          </section>

          {/* Entity Authority as a Graph */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Entity Authority as a Graph</h2>
            <div className="p-6 bg-zinc-950 rounded-2xl border border-white/15 overflow-x-auto font-mono text-xs text-emerald-400 leading-relaxed shadow-2xl">
              <pre>{`AEObility
    │
    ├── provides ─────────► AEO Consulting
    ├── provides ─────────► AI Visibility Audits
    ├── specialises in ───► Answer Engine Optimisation
    ├── located in ───────► Australia
    ├── publishes ────────► AI Search Research
    ├── mentioned by ─────► Industry Publications
    └── trusted by ───────► Clients`}</pre>
            </div>
            <p className="text-white/70 font-light text-xs text-center">
              Each verified relationship strengthens the entity’s authority and improves visibility across Search, Maps and AI.
            </p>
          </section>

          {/* Why This Matters Now & Next Steps */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Why This Matters Now</h2>
            <p className="text-white/80 leading-relaxed font-light">
              AI search collapses the funnel. One question leads to one answer which leads to one shortlist which leads to one recommendation.
            </p>
            <p className="text-white/80 leading-relaxed font-light">
              If your entity is not well defined, well connected and well validated, you will not appear. Entity authority is now a core requirement for visibility in AI generated answers.
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white">Next Steps for Businesses</h3>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Establish consistent identity signals across all digital assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Publish semantically rich expert content grounded in entity schemas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Strengthen external validation and cross-platform corroboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Use structured data (JSON-LD) to reinforce explicit relationships</span>
                </li>
              </ul>
              <p className="text-xs text-white/70 font-light pt-2">
                AEObility’s 90 day blueprint provides a structured roadmap for improving visibility, understanding and selection across Search, Maps and AI.
              </p>
            </div>
          </section>

          {/* Three FAQ Items for Mobile */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white">1) What is entity authority?</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Entity authority is how AI systems recognise, understand and trust your business. Strong entity authority improves visibility in Search, Maps and AI answers.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white">2) Why does entity authority matter for AEO?</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  AEO relies on machine understanding. When your identity, services and location are consistent across the web, AI systems can confidently recommend you.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white">3) How do I improve my entity authority?</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Start with consistent identity signals, structured data, expert content and external validation. AEObility’s free audit shows exactly what needs attention.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="p-8 bg-gradient-to-br from-aeo-cyan/10 via-neutral-950 to-aeo-purple/10 border border-white/15 rounded-3xl text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to Build Your Entity Authority?</h3>
            <p className="text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed">
              Discover how AI search engines parse your brand identity today. Get a free, manual AI visibility audit for your Australian business.
            </p>
            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)]"
              >
                <span>Get Visibility Score</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
