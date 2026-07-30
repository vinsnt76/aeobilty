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
  title: "Competitor Overlap & Semantic Dominance Framework | AEObility Technical Guide",
  description: "Learn how AEObility measures competitor overlap, semantic dominance, and AI search readiness. A practical guide for SMBs and agencies to diagnose visibility, understand blind spots, and improve AI-driven discovery.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework",
  },
};

export default function CompetitorOverlapFrameworkGuidePage() {
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
        "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework",
        "name": "Competitor Overlap & Semantic Dominance Framework",
        "description": "A comprehensive guide explaining how AEObility evaluates competitor overlap, vector proximity, semantic dominance, and RAG survival to calculate AI Search Readiness.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework#article",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework#webpage"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework"
        },
        "headline": "Competitor Overlap & Semantic Dominance Framework",
        "description": "Learn how AEObility measures competitor overlap, semantic dominance, and AI search readiness. A practical guide for SMBs and agencies to diagnose visibility, understand blind spots, and improve AI-driven discovery.",
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
        "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework#howto",
        "name": "AEObility Competitor Overlap & Semantic Dominance Diagnostic Workflow",
        "description": "Follow AEObility's 7-step telemetry workflow to measure semantic space, identify competitor blind spots, and calculate AI Search Readiness.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Define Target Intent Query",
            "text": "Identify core commercial query vector (e.g. 'digital marketing specialist Perth')."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Ingest Real-Time Competitors",
            "text": "Query Brave Search and Gemini APIs to harvest top organic competitor domain URLs."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Embed Vectors & Compute Proximity",
            "text": "Generate 768-dimensional text-embedding-004 vectors for client and competitor nodes, calculating Cosine Similarity to intent."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Calculate Semantic Dominance",
            "text": "Score net similarity advantage: Semantic Dominance = max(0, min(100, (ClientSim - CompAvgSim) * 100))."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Extract Technical & Entity Features",
            "text": "Benchmark content length ratios, Schema.org completeness, internal link depth, and RDF triple graph authority."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Adversarial RAG Survival Test",
            "text": "Run synthetic query fan-out variations to verify whether atomic answer blocks survive RAG retrieval thresholds (>0.62 similarity)."
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Generate AI Search Readiness Score",
            "text": "Aggregate weighted scores across Semantic (40%), Technical (20%), Entity (15%), Competitor (15%), and Authority (10%) vectors into an actionable diagnosis."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework#breadcrumb",
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
            "name": "Guides",
            "item": "https://aeobility.com.au/knowledge-hub/guides"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Competitor Overlap & Semantic Dominance Framework",
            "item": "https://aeobility.com.au/knowledge-hub/guides/competitor-overlap-semantic-dominance-framework"
          }
        ]
      }
    ]
  };

  const workflowSteps = [
    { step: "01", title: "Target Intent Definition", desc: "Isolate the precise commercial or local service query vector (e.g., 'freelance AI search consultant Perth').", icon: <Target className="w-5 h-5 text-aeo-cyan" /> },
    { step: "02", title: "Competitor Ingestion", desc: "Dynamically harvest top organic competitor domain nodes using real-time search API endpoints.", icon: <Search className="w-5 h-5 text-aeo-purple" /> },
    { step: "03", title: "Vector Proximity Embedding", desc: "Generate 768-dimensional text-embedding-004 vectors and calculate normalized Cosine Similarity.", icon: <Cpu className="w-5 h-5 text-aeo-cyan" /> },
    { step: "04", title: "Semantic Dominance Calculation", desc: "Compute net vector advantage over average competitor proximity: (ClientSim - CompAvgSim) * 100.", icon: <TrendingUp className="w-5 h-5 text-aeo-purple" /> },
    { step: "05", title: "Feature Extraction Benchmarking", desc: "Extract Content Length Ratios, Schema.org completeness, internal structural depth, and RDF triples.", icon: <BarChart3 className="w-5 h-5 text-aeo-cyan" /> },
    { step: "06", title: "Adversarial RAG Survival", desc: "Run synthetic query fan-out prompt passes to test chunk retention (>0.62 similarity threshold).", icon: <Sparkles className="w-5 h-5 text-aeo-purple" /> },
    { step: "07", title: "Readiness Score & Diagnosis", desc: "Synthesise weighted multi-pillar telemetry into a 0–100 score and prioritised AEO Sprint roadmap.", icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" /> }
  ];

  const frameworkModules = [
    {
      title: "Competitor Ingestion",
      smbSummary: "We identify who is currently occupying search attention for your core service terms.",
      agencySummary: "Executes real-time SERP parsing, removing aggregator noise and extracting top organic brand domain nodes.",
      metrics: ["Domain URL extraction", "SERP noise filtering", "Homepage vs inner-page selection"],
      icon: <Globe2 className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "Vector Proximity",
      smbSummary: "We measure how closely your site's meaning matches what potential clients are asking AI systems.",
      agencySummary: "Calculates high-dimensional Cosine Similarity between query vector embeddings and document chunk embeddings.",
      metrics: ["768-dim vector embeddings", "Cosine similarity scoring", "Dense retrieval alignment"],
      icon: <Network className="w-5 h-5 text-aeo-purple" />
    },
    {
      title: "Semantic Dominance",
      smbSummary: "Shows whether your business commands stronger AI clarity than competing local businesses.",
      agencySummary: "Scores relative semantic distance: Positive = Market Advantage, Neutral = Parity, Negative = Retrieval Risk.",
      metrics: ["Net vector differential", "Topical boundary mapping", "Category authority index"],
      icon: <PieChart className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "Feature Extraction",
      smbSummary: "We compare your website's depth, schema markup, and trust signals directly against your rivals.",
      agencySummary: "Benchmarks Content Length Ratio, Schema.org entity count, internal link depth, and RDF subject-predicate triples.",
      metrics: ["Content Length Ratio", "Schema completeness %", "RDF triple graph density"],
      icon: <Sliders className="w-5 h-5 text-aeo-purple" />
    },
    {
      title: "RAG Survival Testing",
      smbSummary: "We test if AI search engines keep your content when answering complex user questions.",
      agencySummary: "Executes synthetic query fan-out across adversarial prompt variations to evaluate chunk retention (>0.62 threshold).",
      metrics: ["Synthetic query fan-out", "Adversarial prompt testing", "Chunk survival rate"],
      icon: <Zap className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "AI Search Readiness Score",
      smbSummary: "A single, clear rating (0–100) with prioritized steps to help you get found and chosen.",
      agencySummary: "Weighted multi-pillar aggregation (Semantic: 40%, Technical: 20%, Entity: 15%, Competitor: 15%, Authority: 10%).",
      metrics: ["0-100 Readiness Score", "4 Diagnostic Tiers", "Prioritised AEO Sprint roadmap"],
      icon: <Award className="w-5 h-5 text-aeo-purple" />
    }
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
            <span>Knowledge Hub • Level 3 Technical Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Competitor Overlap &amp; <span className="text-gradient-aeo">Semantic Dominance</span> Framework
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl font-light">
            Learn how AEObility measures competitor overlap, vector proximity, and AI search readiness. A practical technical guide for Australian small businesses and agency teams to diagnose visibility, uncover hidden blind spots, and dominate conversational search engines.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-white/50">
            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg">
              <Crosshair className="w-3.5 h-3.5 text-aeo-cyan" /> Focus: competitor overlap semantic dominance framework
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg">
              <Globe2 className="w-3.5 h-3.5 text-aeo-purple" /> Target: Australia &amp; New Zealand
            </span>
            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-aeo-cyan" /> Dual Schema: Article + HowTo
            </span>
          </div>
        </header>

        {/* SECTION 1 — Intro Atomic Answer Block */}
        <section className="atomic-answer-block p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-4 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-aeo-cyan" />
            <h2 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider font-mono">
              WHAT THIS FRAMEWORK MEASURES
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
            AEObility’s Competitor Overlap &amp; Semantic Dominance Framework evaluates how clearly a business appears, is understood, and is selected across Search, Maps, and AI systems. It measures vector proximity, competitor content depth, entity clarity, and RAG survival to produce an actionable <strong>AI Search Readiness Score</strong>.
          </p>
        </section>

        {/* SECTION 2 — Guide Goal */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Target className="w-6 h-6 text-aeo-cyan" />
            <span>Guide Goal: AI Search Clarity</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            Traditional SEO relies on keyword density and backlink counts. Modern Answer Engine Optimisation (AEO) requires machine clarity. This guide details AEObility&apos;s analytical framework, providing a clear system to answer four vital commercial questions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 1. Visibility Check
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Does your business surface when prospective clients ask AI search engines for local solutions?
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-purple flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 2. Machine Understanding
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Do Large Language Models accurately parse your core services, locations, and value propositions?
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 3. Semantic Benchmarking
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Is your digital footprint semantically stronger or weaker than competing domain nodes?
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-purple flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 4. Prioritised Execution
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                What structural changes, schema additions, or content rewrites should be executed first?
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Who This Guide Is For */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Users className="w-6 h-6 text-aeo-purple" />
            <span>Who This Guide Is For</span>
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
                  <span><strong>Higher Visibility:</strong> Surface in conversational AI answers and map packs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Stronger Brand Trust:</strong> Prevent AI engines from generating inaccurate hallucinations about your business.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Local Discovery:</strong> Optimise coordinate maps and entity signals for Aussie trade and service areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Clear Next Actions:</strong> Transparent 90-day sprint milestones without jargon.</span>
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
                  <span className="text-xs text-aeo-purple font-mono">Technical Implementation Methodology</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Competitor Benchmarking:</strong> Measure relative vector distance using text-embedding-004 models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Entity &amp; Schema Validation:</strong> Verify nested Schema.org microdata and RDF triple graph density.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>RAG Chunk Testing:</strong> Test atomic answer block survival rates against synthetic query fan-out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Repeatable Telemetry:</strong> Standardised observability scorecards for client reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Core Concept: Measuring Semantic Space */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Network className="w-6 h-6 text-aeo-cyan" />
            <span>Core Concept — Measuring Semantic Space</span>
          </h2>
          <div className="space-y-4 text-sm text-white/80 leading-relaxed font-light">
            <p>
              In traditional search, websites competed for literal keyword matching across sparse document indices. In generative AI search, engines convert text into dense mathematical vectors inside a multi-dimensional <strong>semantic space</strong>.
            </p>
            <p>
              Think of semantic space as the digital territory your business occupies. When a user asks an AI assistant for recommendations, the AI calculates which business vector sits closest to the user&apos;s intent vector.
            </p>
          </div>

          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-aeo-cyan" />
              Why Cosine Similarity Beats Keyword Matching
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-light">
              <div className="space-y-2 p-4 bg-black/40 rounded-xl border border-white/5">
                <h4 className="font-bold text-red-400 font-mono">Classic SEO (Keyword Indexing)</h4>
                <p className="text-white/60">
                  Matches exact text strings. If a site lacks the exact word &quot;consultant&quot;, traditional search engines might rank a lower-quality site that repeats the keyword multiple times.
                </p>
              </div>
              <div className="space-y-2 p-4 bg-black/40 rounded-xl border border-white/5">
                <h4 className="font-bold text-aeo-cyan font-mono">AEO Vector Proximity (Dense Retrieval)</h4>
                <p className="text-white/60">
                  Evaluates conceptual alignment using Cosine Similarity. AI search models recognise that &quot;technical marketing architect&quot; and &quot;AEO strategist&quot; occupy adjacent vector coordinates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Workflow Overview */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Layers className="w-6 h-6 text-aeo-purple" />
            <span>End-to-End Workflow Pipeline</span>
          </h2>
          <p className="text-xs text-white/60 font-light">
            Unlike static SEO audits, AEObility executes a dynamic, query-specific diagnostic workflow:
          </p>

          <div className="space-y-4">
            {workflowSteps.map((s, idx) => (
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

        {/* SECTION 6 — Component Deep-Dive Modules */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Cpu className="w-6 h-6 text-aeo-cyan" />
            <span>Framework Component Deep-Dive</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworkModules.map((m, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {m.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">{m.title}</h3>
                  </div>

                  <div className="space-y-2 text-xs font-light">
                    <div className="p-3 bg-black/30 rounded-xl border border-white/5">
                      <span className="font-bold text-aeo-cyan block mb-1">SMB Perspective:</span>
                      <p className="text-white/70">{m.smbSummary}</p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-xl border border-white/5">
                      <span className="font-bold text-aeo-purple block mb-1">Agency Metric:</span>
                      <p className="text-white/70">{m.agencySummary}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-2">Key Metrics Evaluated:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {m.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="text-[11px] font-mono bg-white/5 text-white/70 px-2.5 py-1 rounded-md border border-white/5">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — Competitor Overlap & Blind Spot Detection */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-aeo-purple" />
            <span>Competitor Overlap &amp; Blind Spot Detection</span>
          </h2>
          <div className="space-y-4 text-sm text-white/80 leading-relaxed font-light">
            <p>
              When evaluating competitor overlap, AEObility distinguishes between two distinct layers of market intersection:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-aeo-cyan flex items-center gap-2">
                <Network className="w-4 h-4" /> 1. Semantic Overlap
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Measures whether your content matches the same conceptual topics as top-ranking competitors. High semantic overlap without strong schema structure risks content dilution, where AI search engines view your page as a generic duplicate.
              </p>
            </div>
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-aeo-purple flex items-center gap-2">
                <Sliders className="w-4 h-4" /> 2. Feature Overlap
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Compares structural capabilities—such as nested JSON-LD microdata, atomic answer blocks, coordinate mapping, and content depth. Gaps in feature overlap expose strategic <strong>Blind Spots</strong>.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Common Blind Spots Discovered:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70 font-light">
              <div className="flex items-center gap-2 p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>Missing structured Schema.org microdata</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>Thin subject-predicate RDF triple coverage</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>Unstructured content paragraphs lacking answer blocks</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>Weak local coordinate &amp; service area signals</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — Worked Real-World Example */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-aeo-cyan" />
            <span>Worked Example &amp; Practical Use Cases</span>
          </h2>

          {/* Example Box */}
          <div className="p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] font-mono text-aeo-cyan uppercase tracking-wider block">Real-World Diagnostic Case</span>
                <h3 className="text-base font-bold text-white">Local Service Business (Perth, WA)</h3>
              </div>
              <span className="text-xs font-mono bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 px-3 py-1 rounded-full font-bold">
                Intent: &quot;AEO consultant Perth&quot;
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <span className="text-white/40 text-[10px] uppercase">Client Similarity</span>
                <p className="text-lg font-bold text-white">0.785</p>
                <span className="text-[10px] text-white/50">Cosine score to intent</span>
              </div>
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <span className="text-white/40 text-[10px] uppercase">Competitor Avg Similarity</span>
                <p className="text-lg font-bold text-white">0.692</p>
                <span className="text-[10px] text-white/50">Top 2 organic domain avg</span>
              </div>
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <span className="text-white/40 text-[10px] uppercase">Semantic Dominance</span>
                <p className="text-lg font-bold text-aeo-cyan">+9.3%</p>
                <span className="text-[10px] text-aeo-cyan">Positive market advantage</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-white/80 font-light">
              <h4 className="font-bold text-white text-sm">Diagnostic Outcome &amp; Recommended Actions:</h4>
              <p>
                The client holds positive semantic ground (+9.3%), but competitor analysis revealed a key <strong>Feature Blind Spot</strong>: competitors deployed nested <code className="text-aeo-cyan">FAQPage</code> schema and denser content length ratios.
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-white/70 pl-2">
                <li>Deploy structured atomic answer blocks targeting synthetic prompt variations.</li>
                <li>Implement nested JSON-LD schema microdata to raise Technical Advantage.</li>
                <li>Reinforce regional coordinate nodes for hyper-local Perth map pack placement.</li>
              </ul>
            </div>
          </div>

          {/* Practical Use Cases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-aeo-cyan" /> Pre-Launch Content Planning
              </h4>
              <p className="text-white/60">
                Benchmark draft page copy against top competitors before publishing to guarantee positive semantic dominance.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-aeo-purple" /> AI Visibility Monitoring
              </h4>
              <p className="text-white/60">
                Track citation share and vector proximity changes over time as AI search algorithms re-crawl your site.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-aeo-cyan" /> Agency Competitor Auditing
              </h4>
              <p className="text-white/60">
                Provide clients with objective, data-backed telemetry scorecards comparing their brand against industry rivals.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-aeo-purple" /> RAG Documentation Optimisation
              </h4>
              <p className="text-white/60">
                Structure technical documentation and product specs into high-density chunks that survive RAG retrieval passes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9 — Strategic CTA */}
        <section className="p-8 bg-gradient-to-br from-aeo-purple/10 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono">
            <span>Ready to measure your semantic space?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Run a Free AI Visibility Diagnostic
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Discover how your website performs across conversational search engines, maps, and RAG retrieval pipelines. Get your custom AI Search Readiness Score.
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
