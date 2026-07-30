import React from 'react';
import Link from 'next/link';
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
  Target,
  Zap,
  Search,
  Cpu,
  Network,
  Sparkles,
  Award,
  BarChart3,
  Globe2,
  PieChart,
  Users,
  Building2,
  Lightbulb,
  Crosshair,
  TrendingUp,
  Sliders,
  Check
} from 'lucide-react';

export const metadata = {
  title: "Competitor Overlap & Semantic Dominance Framework | AEObility",
  description: "Learn how AEObility evaluates competitor overlap, semantic dominance, and AI search readiness. Discover how your business compares to competitors and what to fix first.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
  },
};

export default function CompetitorOverlapFrameworkArticlePage() {
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
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/vince-baker#author",
        "name": "Vince Baker",
        "url": "https://aeobility.com.au/vince-baker",
        "jobTitle": "Founder & AI Search Consultant",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
        "name": "Competitor Overlap & Semantic Dominance Framework",
        "description": "A practical guide explaining how AEObility compares your business against competitors in AI search, identifies key visibility gaps, and builds a clear action plan.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#article",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#webpage"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework"
        },
        "headline": "Competitor Overlap & Semantic Dominance Framework",
        "description": "Learn how AEObility evaluates competitor overlap, semantic dominance, and AI search readiness. Discover how your business compares to competitors and what to fix first.",
        "author": {
          "@id": "https://aeobility.com.au/vince-baker#author"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "inLanguage": "en-AU"
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#howto",
        "name": "AEObility Competitor Overlap & Semantic Dominance Audit Workflow",
        "description": "Follow AEObility's 6-step audit process to compare your content against competitors, identify visibility gaps, and turn your score into a prioritised action plan.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Define Target Search Intent",
            "text": "Identify the primary query prospective clients use when searching for your services."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Identify Active Competitors",
            "text": "Scrape real-time organic search results to determine which competitor websites currently occupy search attention."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Compare Content & Structure",
            "text": "Evaluate how clearly your content matches the intent compared to rival pages, checking relevance, depth, and Schema.org markup."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Test AI Retrieval Survival",
            "text": "Run synthetic query variations to verify whether your core service answers stay intact during AI answer generation."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Calculate Your Readiness Score",
            "text": "Combine metrics across 5 weighted vectors into an overall AI Search Readiness rating (0–100)."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Build a Prioritised Action Plan",
            "text": "Translate technical gaps into a clear 90-day execution roadmap to improve machine recommendations."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Articles",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Competitor Overlap & Semantic Dominance Framework",
            "item": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework"
          }
        ]
      }
    ]
  };

  const processSteps = [
    { step: "01", title: "Define the Target Search Intent", desc: "We pinpoint the exact question or local service query your ideal clients ask AI systems.", icon: <Target className="w-5 h-5 text-aeo-cyan" /> },
    { step: "02", title: "Identify Active Competitors", desc: "We pull the top competitor websites currently showing up for that search in real-time.", icon: <Search className="w-5 h-5 text-aeo-purple" /> },
    { step: "03", title: "Compare Content & Structure", desc: "We evaluate how clearly your pages answer the search intent compared to your rivals.", icon: <BarChart3 className="w-5 h-5 text-aeo-cyan" /> },
    { step: "04", title: "Test AI Retrieval Survival", desc: "We run related prompt variations to check if AI search engines keep your content when generating answers.", icon: <Zap className="w-5 h-5 text-aeo-purple" /> },
    { step: "05", title: "Calculate Your Readiness Score", desc: "We aggregate relevance, structure, and depth into a clear 0–100 rating for your domain.", icon: <Award className="w-5 h-5 text-aeo-cyan" /> },
    { step: "06", title: "Build a Prioritised Action Plan", desc: "We turn your score into step-by-step recommendations on what to fix first.", icon: <ShieldCheck className="w-5 h-5 text-aeo-purple" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Dual Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full space-y-16">
        {/* Header / Hero Section */}
        <header className="space-y-6 border-b border-white/5 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Hub • Technical Article</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Competitor Overlap &amp; <span className="text-gradient-aeo">Semantic Dominance</span> Framework
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl font-light">
            How AEObility compares your business against competitors in AI search, identifies your key visibility gaps, and builds a clear action plan to get you recommended.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-white/50">
            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg">
              <Crosshair className="w-3.5 h-3.5 text-aeo-cyan" /> Focus: competitor overlap &amp; AI search readiness
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg">
              <Globe2 className="w-3.5 h-3.5 text-aeo-purple" /> Target: Australian Small Businesses &amp; Agencies
            </span>
          </div>
        </header>

        {/* SECTION 1 — What AEObility Checks (Two-Layer Intro) */}
        <section className="atomic-answer-block p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-4 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-aeo-cyan" />
            <h2 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider font-mono">
              WHAT AEOBILITY CHECKS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
            AEObility compares your business against the competitors currently showing up for your target search queries. It checks whether your content is clear enough, structured enough, and relevant enough for AI systems—like ChatGPT, Google Gemini, and Perplexity—to understand and recommend your services.
          </p>
          
          <div className="pt-3 border-t border-white/5 text-xs text-white/60 space-y-1 font-mono">
            <span className="text-aeo-purple font-bold block mb-1">Technical Note:</span>
            <p>
              Under the hood, the framework evaluates high-dimensional vector embeddings, Schema.org completeness, content depth ratios, and synthetic query retrieval survival.
            </p>
          </div>
        </section>

        {/* SECTION 2 — Four Core Diagnostic Pillars */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Target className="w-6 h-6 text-aeo-cyan" />
            <span>The Four Core Questions We Answer</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            Instead of relying on keyword density or link counts, our framework answers four essential commercial questions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 1. Visibility Check
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Does your business surface when prospective clients ask AI search engines for local recommendations?
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-purple flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 2. Machine Understanding
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Do AI models accurately parse your core services, locations, and value propositions?
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 3. Competitor Benchmarking
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Is your content clearer and better structured than rival websites in your target market?
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-purple flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 4. Prioritised Actions
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                What structural changes, schema additions, or content rewrites should you execute first?
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Who This Article Is For */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Users className="w-6 h-6 text-aeo-purple" />
            <span>Who This Framework Helps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SMB Perspective */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/20">
                  <Building2 className="w-5 h-5 text-aeo-cyan" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Small Business Owners</h3>
                  <span className="text-xs text-aeo-cyan font-mono">Plain Language &amp; Practical Outcomes</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Higher Visibility:</strong> Get found across AI search engines, voice assistants, and map packs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Stronger Brand Trust:</strong> Ensure AI tools describe your services accurately without hallucinations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Local Discovery:</strong> Optimise coordinate maps and location signals for Australian service areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Clear Priorities:</strong> Focus on straight-forward execution steps with no locked-in agency contracts.</span>
                </li>
              </ul>
            </div>

            {/* Agency Perspective */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-aeo-purple/10 border border-aeo-purple/20">
                  <Sliders className="w-5 h-5 text-aeo-purple" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Agency Teams &amp; Consultants</h3>
                  <span className="text-xs text-aeo-purple font-mono">Repeatable Telemetry &amp; Diagnostics</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Competitor Benchmarking:</strong> Measure relative vector distance using text-embedding models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Schema &amp; Entity Auditing:</strong> Validate nested Schema.org microdata and RDF graph density.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>RAG Retention Testing:</strong> Test atomic answer block survival rates under prompt fan-out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Objective Metrics:</strong> Deliver standardized AI readiness scorecards for client reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4 — The 6-Step Audit Sequence */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Layers className="w-6 h-6 text-aeo-cyan" />
            <span>How the Audit Works: Step-by-Step Sequence</span>
          </h2>
          <p className="text-xs text-white/60 font-light">
            Instead of dumping raw technical data, AEObility follows a clear 6-step audit process:
          </p>

          <div className="space-y-4">
            {processSteps.map((s, idx) => (
              <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-xl flex items-start gap-4 hover:border-white/10 transition-colors">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 flex-shrink-0 mt-0.5">
                  {s.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-aeo-cyan">{s.step}</span>
                    <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — How AEObility Compares You to Competitors (Two-Layer Style) */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Network className="w-6 h-6 text-aeo-purple" />
            <span>How We Compare You to Competitors</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vector Proximity */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-base font-bold text-white">Relevance Comparison</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                <strong>Plain English:</strong> We measure how closely your site&apos;s meaning matches what potential clients are asking AI search engines.
              </p>
              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-white/40">
                <span>Technical Note: Calculated using Cosine Similarity over 768-dimensional text embeddings.</span>
              </div>
            </div>

            {/* Semantic Dominance */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-aeo-purple" />
                <h3 className="text-base font-bold text-white">Semantic Advantage</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                <strong>Plain English:</strong> We check whether your content provides clearer, more direct answers than your top local competitors.
              </p>
              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-white/40">
                <span>Technical Note: Net vector differential = (Client Similarity - Competitor Avg Similarity) * 100.</span>
              </div>
            </div>

            {/* Schema & Structure */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-base font-bold text-white">Structured Data Coverage</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                <strong>Plain English:</strong> We check if your website provides machine-readable facts that AI models can verify without guessing.
              </p>
              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-white/40">
                <span>Technical Note: Validates Schema.org JSON-LD microdata, internal linking depth, and RDF triple graphs.</span>
              </div>
            </div>

            {/* RAG Survival */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-aeo-purple" />
                <h3 className="text-base font-bold text-white">AI Retrieval Survival</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                <strong>Plain English:</strong> We test whether your key service answers stay intact when AI search engines generate response summaries.
              </p>
              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-white/40">
                <span>Technical Note: Tests chunk retention under synthetic prompt fan-out against a 0.62 similarity threshold.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — What the Score Means */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Award className="w-6 h-6 text-aeo-cyan" />
            <span>What Your AI Search Readiness Score Means</span>
          </h2>
          <p className="text-xs text-white/60 font-light">
            Your final telemetry score (0–100) maps directly to four clear visibility tiers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-light">
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-aeo-cyan">
              <span className="font-mono text-aeo-cyan font-bold text-sm block">85–100: Dominant</span>
              <p className="text-white/60 leading-relaxed">
                Consistently cited and recommended across conversational search engines and map assistants.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-aeo-purple">
              <span className="font-mono text-aeo-purple font-bold text-sm block">65–84: Competitive</span>
              <p className="text-white/60 leading-relaxed">
                Strong overall foundation, but minor structural gaps allow top competitors to capture citations.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-yellow-400">
              <span className="font-mono text-yellow-400 font-bold text-sm block">45–64: Emerging</span>
              <p className="text-white/60 leading-relaxed">
                Moderate relevance, but at risk of being missed by AI search due to missing schema or thin content.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-red-400">
              <span className="font-mono text-red-400 font-bold text-sm block">0–44: At Risk</span>
              <p className="text-white/60 leading-relaxed">
                AI search models struggle to parse your business, resulting in zero citation share and low discovery.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Gaps Competitors Are Covering Better */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-aeo-purple" />
            <span>Gaps Competitors Are Covering Better</span>
          </h2>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            When your business lags behind competitors, our audit pinpoints the exact structural gaps giving rival sites an advantage:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/70 font-light">
            <div className="flex items-start gap-3 p-4 bg-white/[0.01] border border-white/5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
              <div>
                <strong className="text-white block mb-0.5">Missing Structured Schema</strong>
                <span>Competitors provide explicit JSON-LD data (like FAQs and Services) while your site relies on plain text.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/[0.01] border border-white/5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
              <div>
                <strong className="text-white block mb-0.5">Unstructured Content Paragraphs</strong>
                <span>Your site uses long prose without direct, atomic answer blocks formatted for quick extraction.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/[0.01] border border-white/5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
              <div>
                <strong className="text-white block mb-0.5">Thinner Content Depth</strong>
                <span>Competitors cover related questions and sub-topics more thoroughly, giving AI models more context.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/[0.01] border border-white/5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
              <div>
                <strong className="text-white block mb-0.5">Weak Local Coordinate Signals</strong>
                <span>Missing location microdata prevents regional AI search tools from routing nearby users to your business.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — Worked Real-World Case Example */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-aeo-cyan" />
            <span>Real-World Example: Perth Local Service Business</span>
          </h2>

          <div className="p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] font-mono text-aeo-cyan uppercase tracking-wider block">Case Audit Study</span>
                <h3 className="text-base font-bold text-white">Local Service Provider (Perth, WA)</h3>
              </div>
              <span className="text-xs font-mono bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 px-3 py-1 rounded-full font-bold">
                Intent: &quot;AEO consultant Perth&quot;
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <span className="text-white/40 text-[10px] uppercase">Client Similarity Score</span>
                <p className="text-lg font-bold text-white">0.785</p>
                <span className="text-[10px] text-white/50">Closeness to search intent</span>
              </div>
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <span className="text-white/40 text-[10px] uppercase">Competitor Avg Similarity</span>
                <p className="text-lg font-bold text-white">0.692</p>
                <span className="text-[10px] text-white/50">Top organic competitors</span>
              </div>
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <span className="text-white/40 text-[10px] uppercase">Semantic Advantage</span>
                <p className="text-lg font-bold text-aeo-cyan">+9.3%</p>
                <span className="text-[10px] text-aeo-cyan">Positive market lead</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-white/80 font-light">
              <h4 className="font-bold text-white text-sm">Audit Findings &amp; What Was Fixed:</h4>
              <p>
                While the business held a positive semantic lead (+9.3%), the audit uncovered that top competitors had richer FAQ schema markup. AEObility deployed structured atomic answer blocks and nested JSON-LD microdata, increasing machine retrieval confidence across ChatGPT and Perplexity within 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9 — Strategic Call to Action */}
        <section className="p-8 bg-gradient-to-br from-aeo-purple/10 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono">
            <span>Ready to see how you compare?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Run Your Free AI Visibility Diagnostic
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Discover how your website performs across conversational search engines, maps, and AI recommendation systems. Get your custom AI Search Readiness Score.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/diagnostic"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Run Diagnostic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions/aeo-blueprint"
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <span>Explore $995 Strategic Blueprint</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
