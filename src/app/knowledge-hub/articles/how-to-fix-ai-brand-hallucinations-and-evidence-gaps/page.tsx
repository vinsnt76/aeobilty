import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  AlertTriangle, 
  Cpu, 
  Database,
  Sparkles,
  RefreshCw,
  Search,
  Code,
  Network,
  FileCheck2,
  Workflow,
  HelpCircle,
  FileText,
  Compass
} from 'lucide-react';

export const metadata = {
  title: "Why This Architecture Is Correct for AI Search | AEObility",
  description: "Discover how semantic propositions, entity relationships, evidence, and role-based content containers create stronger foundations for AI-search visibility.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps",
  },
  openGraph: {
    title: "Why This Architecture Is Correct for AI Search: Entities & Evidence | AEObility",
    description: "Discover how semantic propositions, entity relationships, evidence, and role-based content containers create stronger foundations for AI-search visibility.",
    url: "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps",
    type: "article",
  }
};

export default function AISeachArchitectureArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "legalName": "Trekaboutoz trading as AEObility",
        "taxID": "61 029 803 255",
        "url": "https://aeobility.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/android-chrome-512x512.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/vince-baker#person",
        "name": "Vinnie Baker",
        "jobTitle": "Founder & AEO Specialist",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "url": "https://aeobility.com.au/vince-baker"
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps",
        "name": "Why This Architecture Is Correct for AI Search: Entities, Evidence, and Semantic Propositions",
        "description": "Discover how semantic propositions, entity relationships, evidence, and role-based content containers create stronger foundations for AI-search visibility."
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps#article",
        "headline": "Why This Architecture Is Correct for AI Search",
        "inLanguage": "en-AU",
        "description": "A comprehensive guide on structuring website content around semantic propositions, claim governance, and the 5-stage retrieval verification loop.",
        "author": {
          "@id": "https://aeobility.com.au/vince-baker#person"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps",
        "image": "https://aeobility.com.au/entity-authority-semantic-search_AEObilty.webp",
        "about": [
          {
            "@type": "Service",
            "@id": "https://aeobility.com.au/services/aeo#service",
            "name": "AEO Services",
            "url": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "Thing",
            "name": "Canonical Brand Knowledge Layer",
            "url": "https://aeobility.com.au/brand-facts"
          }
        ],
        "citation": [
          "https://aeobility.com.au/brand-facts",
          "https://aeobility.com.au/diagnostic",
          "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why can't I just add more keyword-targeted pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because fragmented pages dilute canonical ownership, fragment internal links, and weaken passage extraction scores across conversational engines."
            }
          },
          {
            "@type": "Question",
            "name": "Why does evidence matter for AI search visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI retrieval models utilise deep verification filters to evaluate whether claims are substantiated before awarding citation slots."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps#howto",
        "name": "5-Stage Retrieval Verification Loop",
        "description": "The five-step engineering loop used to verify, score, and improve the conditions for AI search citation inclusion.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Declare",
            "text": "Establish your single source of truth in code via an indexable, canonical entity endpoint like the Canonical Brand Facts Ledger."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Observe",
            "text": "Run automated query tests across live AI-search environments to compare declared brand facts with observed answers."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Compare",
            "text": "Measure the gap between your declared brand facts and the passages surfaced in answers."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Score",
            "text": "Measure your 4-quadrant Brand Fact Coverage ratio across Identity, Terminology, Topology, and Evidence completeness."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Fix",
            "text": "Apply targeted AEO Technical Sprints to resolve schema drifts, update text copy blocks, and improve the conditions for citation inclusion."
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Navbar />
      <Breadcrumbs />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-32 sm:pb-24 space-y-16">
        
        {/* Human Scannability Header */}
        <header className="space-y-6 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>AEO Engineering &amp; Semantic Knowledge Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            Why This Architecture Is Correct for AI Search
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 pt-2">
            <span>Author: <strong className="text-white">Vinnie Baker</strong></span>
            <span>•</span>
            <span>Reading Time: 9 min read</span>
            <span>•</span>
            <span>Reviewed: Aug 29, 2026</span>
            <span>•</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              Standard: Verified CBKL
            </span>
          </div>

          <p className="text-lg sm:text-xl text-white/80 font-serif leading-relaxed pt-2">
            AI-search readiness does not come from more keyword-targeted pages or isolated schema. It comes from a coherent architecture that defines entities clearly, connects them through meaningful relationships, and supports important claims with visible evidence.
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl bg-zinc-950">
          <Image
            src="/entity-authority-semantic-search_AEObilty.webp"
            alt="Entities, Evidence, and Semantic Propositions Architecture for AI Search"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Executive Summary Card / Human Anchor Line */}
        <div className="bg-gradient-to-r from-aeo-cyan/15 to-aeo-purple/10 border-l-4 border-aeo-cyan p-6 rounded-r-2xl border-y border-r border-white/10 shadow-lg">
          <p className="text-sm sm:text-base text-zinc-200 font-serif leading-relaxed">
            <strong className="text-white font-sans">Here is the short version:</strong> Modern AI search assistants do not rank standard keyword pages: they extract passages. This guide maps the exact structural boundaries your architecture requires to survive passage-level extraction and win trusted engine citations.
          </p>
        </div>

        {/* Section 1: The Problem */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            1. The Problem With Keyword-Led Content Layouts
          </h2>
          
          <p className="text-base sm:text-lg text-white/70 font-serif leading-relaxed">
            Traditional SEO structures rely on a straightforward historical sequence: <span className="font-mono text-aeo-cyan text-sm">Keyword &rarr; Target URL &rarr; Internal Link Text</span>. While this framework remains useful for mapping user demand signals and discovering query phrasing, it is not enough on its own for modern search and answer environments that may retrieve and summarise content at the passage level.
          </p>

          <p className="text-base sm:text-lg text-white/70 font-serif leading-relaxed">
            A keyword is merely a human expression of need. It is not the underlying concept, commercial requirement, or entity relationship a website must establish to claim authority. When separate pages chase overlapping search strings like <em className="text-white">&ldquo;AEO audit&rdquo;</em>, <em className="text-white">&ldquo;AI search checker&rdquo;</em>, or <em className="text-white">&ldquo;how do I improve AI search visibility&rdquo;</em>, they divide topical equity across competing endpoints. This multi-node signal dilution causes retrieval models to miss important context and surface incomplete sources.
          </p>

          {/* Structural Layout Card: Old vs New */}
          <div className="border border-white/10 rounded-2xl overflow-hidden my-8 bg-zinc-950/90 shadow-xl">
            <div className="bg-white/5 border-b border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
              Workbook Unit Transformation Model
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2.5 p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <h4 className="font-bold text-red-400 font-soehne-breit text-base">Legacy Keyword-Led Architecture</h4>
                <p className="text-zinc-300 font-mono text-xs bg-black/50 p-2.5 rounded border border-white/5">Keyword &rarr; Page Directory &rarr; Link</p>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">Triggers thin content creation, structural competition, and internal link fragmentation.</p>
              </div>
              <div className="space-y-2.5 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="font-bold text-emerald-400 font-soehne-breit text-base">Propositions-Led Architecture</h4>
                <p className="text-zinc-300 font-mono text-xs bg-black/50 p-2.5 rounded border border-white/5">Entity &rarr; Relationship &rarr; Intent &rarr; Evidence</p>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">Builds a coherent knowledge system where multiple diverse paths resolve to one single canonical page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Semantic Propositions */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>Layer 1: Governance &amp; Confidence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            2. The Semantic Proposition Governance Model
          </h2>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            To maintain clear claim governance across AI-search and content systems, every core relationship should be tracked in a central proposition model. A semantic proposition records a meaningful claim that connects a subject entity to an object entity, outcome, or action using a standard pattern: <span className="text-aeo-cyan font-mono font-semibold">Subject &rarr; Predicate &rarr; Object</span>. This is consistent with the structures used in RDF knowledge graphs to express clear relationships between resources.
          </p>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            When establishing a semantic content system, businesses must ensure that core commercial offerings are anchored to a single endpoint. Instead of scattering references, centralising your structural markup onto a dedicated hub for <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO services</Link> eliminates multi-node signal dilution and clarifies canonical ownership for AI crawlers.
          </p>
          
          {/* Claim Confidence Rules Summary */}
          <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-6 my-8 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">The Four Pillars of Claim Confidence Governance</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-black/60 p-4 rounded-xl border border-white/5 space-y-1">
                <strong className="text-aeo-cyan block font-mono text-xs uppercase">1. Defined</strong>
                <span className="text-zinc-400 text-xs font-serif leading-relaxed">Used for proprietary services and internal methodologies (e.g., <em>&ldquo;AEObility defines...&rdquo;</em>).</span>
              </div>
              <div className="bg-black/60 p-4 rounded-xl border border-white/5 space-y-1">
                <strong className="text-aeo-purple block font-mono text-xs uppercase">2. Observed</strong>
                <span className="text-zinc-400 text-xs font-serif leading-relaxed">Based on practitioner audit experience and systematic client testing.</span>
              </div>
              <div className="bg-black/60 p-4 rounded-xl border border-white/5 space-y-1">
                <strong className="text-emerald-400 block font-mono text-xs uppercase">3. Verified</strong>
                <span className="text-zinc-400 text-xs font-serif leading-relaxed">Supported directly by transparent, documented first-party data layers.</span>
              </div>
              <div className="bg-black/60 p-4 rounded-xl border border-white/5 space-y-1">
                <strong className="text-amber-400 block font-mono text-xs uppercase">4. Qualified</strong>
                <span className="text-zinc-400 text-xs font-serif leading-relaxed">Acknowledges dependency on system variations and crawler behaviours.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page Conversion Corridor 1 */}
        <div className="border border-aeo-cyan/30 bg-gradient-to-r from-aeo-cyan/15 via-zinc-950 to-black rounded-2xl p-6 sm:p-8 my-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl font-bold text-white font-soehne-breit">Audit Your Platform Factual Grounding</h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-serif leading-relaxed">
              Our diagnostic engine measures the exact delta between your declared brand parameters and what AI engines observe.
            </p>
          </div>
          <Link 
            href="/diagnostic" 
            className="bg-white text-black px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-aeo-cyan transition-colors whitespace-nowrap self-start md:self-center shadow-lg"
          >
            Run AI Visibility Scan
          </Link>
        </div>

        {/* Section 3: Five-Layer Architecture */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-purple">
            <Workflow className="w-4 h-4" />
            <span>Layer 2: Structural Progression</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            3. The Five-Layer Knowledge Framework
          </h2>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            A high-performance content strategy can be organised around five explicit cognitive layers. This architecture moves an early-stage user problem smoothly down through underlying technical frameworks and proof metrics into verified commercial actions without asking for immediate conversion.
          </p>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            Optimising for conversational retrieval models requires understanding how individual engines process information. For example, a business targeting visibility within a <Link href="/services/ai-search-marketing" className="text-aeo-purple font-semibold hover:underline">perplexity aeo service</Link> layout needs to structure its technical documentation to allow multi-engine scrapers to extract verified facts without attribute drift.
          </p>
          
          {/* Layer Summary Grid */}
          <div className="space-y-3 text-sm my-6">
            <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono font-bold text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded text-xs border border-aeo-cyan/25">01</span>
              <div><strong className="text-white font-sans">Intent Layer:</strong> <span className="text-zinc-400 font-serif">Captures a user problem, question, task, or desired outcome (e.g., <em>&ldquo;How do I improve AI visibility?&rdquo;</em>).</span></div>
            </div>
            <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono font-bold text-aeo-purple bg-aeo-purple/10 px-2 py-0.5 rounded text-xs border border-aeo-purple/25">02</span>
              <div><strong className="text-white font-sans">Concept Layer:</strong> <span className="text-zinc-400 font-serif">Explains the underlying knowledge mechanism or technical framework (e.g., <em>&ldquo;What is entity authority?&rdquo;</em>).</span></div>
            </div>
            <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-xs border border-emerald-500/25">03</span>
              <div><strong className="text-white font-sans">Evidence Layer:</strong> <span className="text-zinc-400 font-serif">Substantiates claims using original research, transparent criteria, and case studies (e.g., <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan hover:underline">Baby Bento Case Study</Link>).</span></div>
            </div>
            <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded text-xs border border-amber-500/25">04</span>
              <div><strong className="text-white font-sans">Commercial Layer:</strong> <span className="text-zinc-400 font-serif">Details the specific service deliverables, timelines, and package frameworks via <Link href="/services/aeo" className="text-aeo-cyan hover:underline">/services/aeo</Link>.</span></div>
            </div>
            <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded text-xs border border-blue-500/25">05</span>
              <div><strong className="text-white font-sans">Core Layer:</strong> <span className="text-zinc-400 font-serif">Connects the complete system back to an accountable, verified brand entity via <Link href="/brand-facts" className="text-aeo-cyan hover:underline">/brand-facts</Link> and <Link href="/about" className="text-aeo-cyan hover:underline">/about</Link>.</span></div>
            </div>
          </div>

          {/* Micro-FAQ Ingestion Block */}
          <div className="border border-white/10 rounded-2xl overflow-hidden my-8 bg-zinc-950/90 shadow-xl">
            <div className="bg-white/5 border-b border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-aeo-cyan font-mono flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>Micro-FAQ Ingestion Block</span>
            </div>
            <div className="p-6 space-y-5 text-sm">
              <div className="space-y-1">
                <h4 className="font-bold text-white font-soehne-breit text-base">Q: Why can&apos;t I just add more keyword-targeted pages?</h4>
                <p className="text-zinc-300 font-serif text-xs leading-relaxed">
                  A: Because fragmented pages dilute canonical ownership, fragment internal links, and weaken passage extraction scores across conversational engines.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 space-y-1">
                <h4 className="font-bold text-white font-soehne-breit text-base">Q: Why does evidence matter for AI search visibility?</h4>
                <p className="text-zinc-300 font-serif text-xs leading-relaxed">
                  A: AI retrieval models utilise deep verification filters to evaluate whether claims are substantiated before awarding citation slots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Entity-Relationship-Evidence Page Architecture */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <FileText className="w-4 h-4" />
            <span>Layer 3: Page Formulation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            4. Page Ingestion Design: Entity, Relationship, Evidence
          </h2>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            Many time-poor operators fall into the trap of assuming standard website copy is sufficient for modern search. Implementing a qualified <Link href="/services/aeo" className="text-emerald-400 font-semibold hover:underline">ai aeo service</Link> framework ensures that your service lists are machine-readable, moving your platform out of deep ranking tiers and into active citation slots.
          </p>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            Because automated scrapers extract short text chunks to compile direct answers, each self-contained content segment should maintain contextual clarity when read independently. Every high-value content block should incorporate a strict three-part architecture:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white font-soehne-breit">Entity Definition</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Every service, metric, or diagnostic tool must feature a direct definition that makes sense out of context.
              </p>
              <div className="p-3 bg-black/60 rounded-lg border border-white/10 font-mono text-xs text-aeo-cyan">
                Formula: [Entity] is a [category] that [primary function] for [context] by [mechanism].
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white font-soehne-breit">Semantic Relationships</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Content blocks must move past flat self-description to express precise relational connections. For instance, structured data is merely one supporting component of a broader AI-search strategy that also includes content clarity, crawlability, internal linking, and source evidence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white font-soehne-breit">Evidence and Proof</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                High-value claims require visible support. Google&apos;s grounding documentation describes grounded answers as those whose claims are supported directly by supplied reference texts, allowing systems to evaluate whether claims are substantiated and return appropriate citations. Authoritative proof types include defined measurement criteria, anonymised audit examples, and case studies with clearly documented scopes, reporting periods, and limitations.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page Conversion Corridor 2 */}
        <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/15 rounded-2xl p-8 my-10 text-center shadow-2xl space-y-4">
          <div className="inline-flex p-3 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan mb-2">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">Ready to Structure Your Facts?</h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-serif max-w-xl mx-auto leading-relaxed">
            We systematically eliminate canonical competition across commercial URLs and align content paths to improve conditions for citation inclusion.
          </p>
          <div className="pt-2">
            <Link 
              href="/solutions/aeo-blueprint" 
              className="inline-block bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
            >
              Explore the Strategic Blueprint Method
            </Link>
          </div>
        </div>

        {/* Section 5: The Taxonomy Trap */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <Database className="w-4 h-4" />
            <span>Layer 4: Information Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            5. Role-Based Semantic Containers vs. The Taxonomy Trap
          </h2>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            Building a large physical URL directory for every technical noun (e.g., creating individual paths for <em>/json-ld/</em>, <em>/chunking/</em>, and <em>/embeddings/</em>) can create crawl-depth issues, internal link fragmentation, and excessive maintenance overhead.
          </p>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            Google recommends descriptive, readable URL structures. However, URL folder depth should not be confused with crawl depth or information architecture. The practical strength of a website&apos;s hierarchy comes from page quality, hub layouts, contextual links, and canonical clarity. Minor technical concepts should be contained inside shallow, high-level role containers like our central <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO services</Link> hub. The underlying files handle the deep relational work behind the scenes through nested schema graphs and exact in-content hyperlinks, keeping the physical file system simple.
          </p>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            Transparent commercial alignment is a core pillar of professional data governance. Operators evaluating their digital footprint often ask: <Link href="/solutions" className="text-cyan-300 font-semibold hover:underline">how much does AEO cost</Link>? Addressing this through fixed-scope, itemised pricing configurations eliminates agency complexity and builds immediate user trust.
          </p>
        </section>

        {/* Section 6: Operationalising the Architecture */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <RefreshCw className="w-4 h-4" />
            <span>Layer 5: Execution Protocol</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            6. How Australian SMBs Operationalise the Model
          </h2>

          <p className="text-base text-white/70 font-serif leading-relaxed">
            To stop AI search engines from guessing your commercial metrics, you can deploy the <strong>5-Stage Retrieval Verification Loop</strong> to monitor and align your data footprints:
          </p>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 divide-y divide-white/10">
            <div className="p-5 flex items-start gap-4">
              <span className="text-xs font-bold font-mono text-aeo-cyan bg-aeo-cyan/10 px-2.5 py-1 rounded border border-aeo-cyan/25 shrink-0">Stage 1</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-soehne-breit">Declare</h3>
                <p className="text-xs text-zinc-400 font-serif">Establish your single source of truth in code via a canonical entity endpoint like the <Link href="/brand-facts" className="text-aeo-cyan hover:underline">Canonical Brand Facts Ledger</Link>.</p>
              </div>
            </div>

            <div className="p-5 flex items-start gap-4">
              <span className="text-xs font-bold font-mono text-aeo-purple bg-aeo-purple/10 px-2.5 py-1 rounded border border-aeo-purple/25 shrink-0">Stage 2</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-soehne-breit">Observe</h3>
                <p className="text-xs text-zinc-400 font-serif">Run automated query tests across live AI-search environments to compare declared brand facts with observed answers.</p>
              </div>
            </div>

            <div className="p-5 flex items-start gap-4">
              <span className="text-xs font-bold font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/25 shrink-0">Stage 3</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-soehne-breit">Compare</h3>
                <p className="text-xs text-zinc-400 font-serif">Measure the gap between your declared brand facts and the passages surfaced in answers.</p>
              </div>
            </div>

            <div className="p-5 flex items-start gap-4">
              <span className="text-xs font-bold font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/25 shrink-0">Stage 4</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-soehne-breit">Score</h3>
                <p className="text-xs text-zinc-400 font-serif">Evaluate your 4-quadrant Brand Fact Coverage ratio across Identity, Terminology, Topology, and Evidence completeness.</p>
              </div>
            </div>

            <div className="p-5 flex items-start gap-4">
              <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/25 shrink-0">Stage 5</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-soehne-breit">Fix</h3>
                <p className="text-xs text-zinc-400 font-serif">Apply targeted <Link href="/solutions/aeo-sprint" className="text-emerald-400 hover:underline">AEO Technical Sprints</Link> to resolve schema drifts, update text copy blocks, and improve conditions for citation inclusion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Summary Card / 5-Point Human Recap */}
        <footer className="bg-zinc-950/90 border border-white/10 rounded-2xl p-6 sm:p-8 font-sans shadow-xl space-y-4">
          <h3 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider font-mono">Summary: Closing the Context Gap</h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
              <span>Keywords indicate demand; semantic propositions define your system&apos;s actual facts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
              <span>Decoupling simple human menus from machine data models keeps your site scannable.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
              <span>Self-contained, monosemantic text passages improve conditions for direct citation extraction.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
              <span>Shallow physical folder routes combined with deep internal linking prevents the taxonomy trap.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
              <span>Structured data acts as a supporting representation layer, not a hidden substitute for web quality.</span>
            </li>
          </ul>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
