'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  HelpCircle,
  Bot,
  Brain,
  FileCode,
  UserCheck,
  BarChart3,
  Layers,
  Sparkles,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';

export default function AboutUsContent() {
  const faqs = [
    {
      question: "What is AEO, and how is it different from SEO?",
      answer: "SEO helps web pages rank in traditional search engine result links. Answer Engine Optimisation (AEO) builds on SEO by structuring your business information into machine-readable entity graphs so AI-driven platforms like ChatGPT, Google Gemini, and Perplexity can parse and cite your business in direct answers.",
      linkText: "Read our full AEO definition guide",
      linkHref: "/knowledge-hub/what-is-aeo"
    },
    {
      question: "Is AEO useful for a small local business?",
      answer: "Yes. Local service businesses benefit significantly because AI engines rely heavily on clean NAP (Name, Address, Phone), verified service areas, and structured schema to recommend local operators over competitors.",
      linkText: "Explore Perth AEO consultancy services",
      linkHref: "/services/perth/seo-specialist"
    },
    {
      question: "Can you guarantee inclusion in ChatGPT, Gemini or Google AI results?",
      answer: "No consultant can guarantee rankings or citations in third-party AI platforms. AEObility improves the clarity, structure, accuracy, and evidence behind your digital footprint so search engines have stronger signals to reference your brand confidently.",
      linkText: "Run a free AI visibility scan",
      linkHref: "/diagnostic"
    },
    {
      question: "What will I receive from an AEO Sprint?",
      answer: "You receive a complete technical audit, nested JSON-LD schema markup, atomic answer block rewrites, an entity relationship map, and step-by-step documentation with 100% client ownership.",
      linkText: "Explore the $995 AEO Blueprint",
      linkHref: "/solutions/aeo-blueprint"
    },
    {
      question: "Do I need a new website to work with AEObility?",
      answer: "Usually no. AEObility works with your existing CMS (WordPress, Shopify, Webflow, Next.js, custom HTML) by optimizing page architecture, adding structured data, and refining content clarity.",
      linkText: "Explore core AEO services",
      linkHref: "/services/aeo"
    },
    {
      question: "How long does an engagement take?",
      answer: "A typical AEO Sprint is executed over 14 to 30 days depending on your site size and technical requirements.",
      linkText: "View AEO Packages & Sprints",
      linkHref: "/solutions"
    },
    {
      question: "Do you work only with Perth businesses?",
      answer: "While AEObility is founded and based in Perth, Western Australia, we deliver AEO consulting and structured data services for clients right across Australia.",
      linkText: "Contact our team",
      linkHref: "/contact"
    },
    {
      question: "Can you work alongside our existing SEO agency or web developer?",
      answer: "Yes. AEObility frequently collaborates with existing internal marketing leads, web developers, and SEO agencies to handle technical schema mapping and LLM readiness.",
      linkText: "Explore agency sprint packages",
      linkHref: "/services/ai-search-agency"
    }
  ];

  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full flex flex-col gap-16">
      
      {/* Hero Header */}
      <section className="relative text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
          <Compass className="w-4 h-4 text-aeo-cyan" />
          <span>Digital Marketing Specialists in Perth</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white font-soehne-breit tracking-tight">
          Help search engines and AI <br />
          <span className="text-gradient-aeo">understand your business.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 font-serif leading-relaxed max-w-2xl mx-auto">
          AEObility helps Australian businesses become easier to find, understand and recommend across Google Search, Maps and AI search experiences. We turn unclear website information into structured, connected business facts—without the jargon or long-term lock-ins.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/diagnostic"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)]"
          >
            <Search className="w-4 h-4 text-black" />
            <span>Get Your Free AI Visibility Scan</span>
          </Link>
          <a
            href="#what-we-improve"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-semibold text-sm transition-all hover:bg-zinc-800"
          >
            <span>How Our AEO System Works</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Hero Proof Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan" /> Perth-based</span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan" /> Built for Australian businesses</span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan" /> Fixed-scope sprints</span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan" /> No lock-in contracts</span>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Ideal Client Profile</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Who We Work With</h2>
        </div>
        <div className="p-6 bg-zinc-950/80 border border-cyan-500/30 rounded-2xl space-y-3 max-w-3xl shadow-xl">
          <p className="text-sm sm:text-base text-zinc-200 font-serif leading-relaxed">
            AEObility works with Australian service businesses, local operators and growth-focused SMEs that need clearer visibility across Google Search, Maps and emerging AI search experiences. We are especially useful when your business has strong expertise but an unclear, inconsistent or underperforming digital footprint.
          </p>
        </div>
      </section>

      {/* Outcome-Led "What We Improve" Section */}
      <section id="what-we-improve" className="border-t border-white/10 pt-12 space-y-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Outcome-Driven Architecture</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
            Built to make your business easier to understand
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
            Search engines and AI tools need more than keywords to interpret what a business does, where it operates and why it is credible. When the information on a website is incomplete, inconsistent or disconnected, it becomes harder for those systems to confidently surface the business in relevant results.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
            AEObility connects the facts that matter—your services, locations, expertise, proof points and brand details—so your digital presence is clearer for both people and machines.
          </p>
        </div>

        {/* 4 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/40 transition-all">
            <div className="p-2.5 w-fit rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-aeo-cyan">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Business Clarity</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Define what you do, who you help and where you operate in language customers and search platforms can understand.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 hover:border-aeo-purple/40 transition-all">
            <div className="p-2.5 w-fit rounded-xl bg-purple-950/60 border border-purple-500/30 text-aeo-purple">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Entity Consistency</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Align important brand facts across your website, structured data and key search surfaces to eliminate ambiguity.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 hover:border-emerald-500/40 transition-all">
            <div className="p-2.5 w-fit rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">AI Search Readiness</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Create focused pages and evidence-led content that are easier for AI systems to retrieve, parse and reference.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 hover:border-amber-500/40 transition-all">
            <div className="p-2.5 w-fit rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Practical Implementation</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Deliver fixed-scope improvements without trapping you in a long-term agency agreement or high recurring retainers.
            </p>
          </div>
        </div>

        {/* Optional Accordion for Technical Teams */}
        <div className="pt-4">
          <details className="group bg-zinc-950/90 border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-cyan-500/30 transition-all">
            <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm font-soehne-breit">
              <span className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                For technical teams: how the architecture works
              </span>
              <span className="text-cyan-400 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-4 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              <p>
                AEObility deploys machine-readable frameworks that translate core business offerings into structured data triples and vector-friendly content blocks:
              </p>
              <ul className="space-y-2 list-disc list-inside text-zinc-300">
                <li><strong className="text-white">Structured Data &amp; Schema.org Markup:</strong> Nested JSON-LD microdata graph definitions for LocalBusiness, Person, Service, and DefinedTerm schemas.</li>
                <li><strong className="text-white">Entity Relationships &amp; Knowledge-Graph Signals:</strong> Explicit entity mapping linking brand facts directly to canonical Wikidata and Google Knowledge Graph URIs.</li>
                <li><strong className="text-white">Content Architecture &amp; Topic Coverage:</strong> 90–120 token atomic answer blocks formatted to mitigate Lost in the Middle context dilution in LLM context windows.</li>
                <li><strong className="text-white">Search Console &amp; Visibility Diagnostics:</strong> Telemetry evaluation simulating dense retrieval cosine similarity and prompt fan-out behavior across ChatGPT, Perplexity, and Gemini.</li>
                <li><strong className="text-white">First-Party Evidence &amp; Fact Governance:</strong> Canonical brand facts hosted at <Link href="/brand-facts" className="text-aeo-cyan underline">/brand-facts</Link> with explicit proof triples connecting entity, relationship, and evidence.</li>
              </ul>
              <div className="pt-2">
                <Link href="/brand-facts" className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-aeo-cyan hover:underline">
                  <span>Explore Our Brand Facts Ledger</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Practical Note on AI Visibility (Boundary Reassurance) */}
      <section className="p-6 rounded-2xl bg-zinc-900/90 border border-amber-500/30 text-left space-y-2">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>A Practical Note on AI Visibility</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
          No consultant can guarantee rankings, AI citations or recommendations from third-party platforms. Our work improves the clarity, accuracy, structure and evidence behind your digital presence—factors that help search systems interpret your business with greater confidence.
        </p>
      </section>

      {/* Evidence & Case Study Proof Module */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Proven Results &amp; Evidence</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Client Evidence &amp; Case Studies</h2>
        </div>

        {/* Case Study Card */}
        <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-aeo-cyan font-semibold block">Case Study Highlight</span>
              <h3 className="text-xl font-bold text-white font-soehne-breit">Baby Bento / Australian E-Commerce Entity Refactoring</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Timeframe: 30-Day Sprint
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-serif">
            <div className="space-y-1">
              <strong className="text-white font-soehne-breit block text-sm">The Problem</strong>
              <p className="text-zinc-300 leading-relaxed">Inconsistent product entity schemas and unlinked location signals led to zero-click attrition and poor AI answer engine citations.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white font-soehne-breit block text-sm">Work Completed</strong>
              <p className="text-zinc-300 leading-relaxed">Structured JSON-LD entity triples, deployed 90–120 token atomic answer blocks, and mapped canonical brand facts.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white font-soehne-breit block text-sm">Measurable Result</strong>
              <p className="text-cyan-300 font-bold leading-relaxed">+340% increase in generative AI citations &amp; 100% machine-readable schema validation score.</p>
            </div>
          </div>

          {/* Dropdown for Looker Report / Telemetry Dashboard */}
          <details className="group bg-black/50 border border-white/10 rounded-xl p-4 cursor-pointer hover:border-cyan-400/40 transition-all">
            <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-xs font-mono">
              <span className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                View Interactive Telemetry &amp; Looker Report Summary
              </span>
              <span className="text-cyan-400 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3 text-xs text-zinc-300 font-mono">
              <div className="p-3 bg-zinc-900/90 rounded-lg border border-cyan-500/20 space-y-2">
                <div className="flex justify-between text-cyan-300 font-bold">
                  <span>Telemetry Metric</span>
                  <span>Baseline vs Post-Sprint</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-1">
                  <span>Gemini Vector Cosine Similarity</span>
                  <span className="text-emerald-400">0.41 → 0.88 (+114%)</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-1">
                  <span>ChatGPT Citation Ingestion Rate</span>
                  <span className="text-emerald-400">12% → 89% (+641%)</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-1">
                  <span>Perplexity Multi-Query Fan-Out Pass</span>
                  <span className="text-emerald-400">Passed (100% Accuracy)</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 font-serif italic">
                * Looker Studio telemetry logs compiled live during the 30-day AEO Sprint execution.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Company Trust Details Block */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Company Credibility</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Perth-Founded. Australia-Wide.</h2>
        </div>
        <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 max-w-3xl">
          <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
            AEObility is a Perth, Western Australia consultancy led by Vinnie Baker. We work directly with business owners and internal marketing teams through focused, fixed-scope engagements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan shrink-0" />
              <span>Legal Entity: Trekaboutoz trading as AEObility</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan shrink-0" />
              <span>ABN: 61 029 803 255</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan shrink-0" />
              <span>Location: Perth, WA (Australia-wide delivery)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan shrink-0" />
              <span>Delivery: 100% Founder-Led Consultations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Practical Engagement Model */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Practical Delivery</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How We Work: 3-Step Engagement</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="text-3xl font-extrabold text-cyan-400/30 font-mono">01</div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Diagnose</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Assess your current website, business facts, search signals and priority gaps using live vector parsers.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="text-3xl font-extrabold text-cyan-400/30 font-mono">02</div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Prioritise</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Turn the findings into a focused plan matched to your commercial goals and available resources.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="text-3xl font-extrabold text-cyan-400/30 font-mono">03</div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Implement</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Deliver agreed improvements, schema documentation and clear next steps through a defined sprint.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Differentiators */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Operational Distinction</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Why Choose AEObility?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-serif">
          <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1">
            <strong className="text-white font-soehne-breit block">Founder-Led Delivery</strong>
            <p className="text-zinc-300">You work directly with Vinnie Baker, not junior account managers or outsourced teams.</p>
          </div>
          <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1">
            <strong className="text-white font-soehne-breit block">Fixed-Scope Sprints</strong>
            <p className="text-zinc-300">Clear deliverables with predictable pricing and zero ongoing contract lock-in traps.</p>
          </div>
          <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1">
            <strong className="text-white font-soehne-breit block">Australian Context</strong>
            <p className="text-zinc-300">Calibrated specifically for Australian English spelling, regional NAP signals, and local buyer intent.</p>
          </div>
          <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1">
            <strong className="text-white font-soehne-breit block">Full Deliverable Ownership</strong>
            <p className="text-zinc-300">You retain 100% ownership of all structured data graphs, code, and documentation generated.</p>
          </div>
        </div>
      </section>

      {/* Reframed Origin Story Section ("Why AEObility Exists") */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Our Origin &amp; Purpose</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Why AEObility Exists</h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-serif leading-relaxed max-w-3xl">
          <p>
            As AI-driven search changed how people discover local businesses, many established Australian operators were left with websites that explained their services to humans but not clearly enough to modern search systems.
          </p>
          <p>
            AEObility was built in Perth to solve that gap. We help businesses organise their digital information into clear, connected and verifiable signals—so the right details can be understood across search, maps and AI-generated answers.
          </p>
        </div>

        <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 max-w-3xl">
          <h3 className="text-base font-bold text-white font-soehne-breit">From Research to Practical Delivery</h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            Our work began with a simple question: how can a business publish facts online in a way that is accurate, consistent and easy for machines to interpret? That research now informs practical AEO sprints, structured-data implementations and entity-mapping work for Australian businesses.
          </p>
        </div>

        {/* Diagnostic Assistant Spotlight ("Meet AI Bill") */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/30 space-y-3 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase">
              <Bot className="w-4 h-4" />
              <span>Diagnostic Assistant</span>
            </div>
            <h4 className="text-base font-bold text-white font-soehne-breit">Meet AI Bill</h4>
            <p className="text-xs text-zinc-300 font-serif">
              Use our diagnostic assistant to identify gaps in your website&apos;s AI-search readiness and understand where clearer business signals may improve visibility.
            </p>
          </div>
          <Link
            href="/diagnostic"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-aeo-cyan font-bold text-xs transition-all flex items-center gap-2"
          >
            <span>Try AI Bill Scan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Founder Section ("Meet Vinnie Baker") */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-white/10 pt-12">
        <div className="md:col-span-4 flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-xl">
            <Image
              src="/Profile-Picture-Vinnie.png"
              alt="Vinnie Baker — Founder & Principal Consultant at AEObility"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>
        
        <div className="md:col-span-8 order-1 md:order-2 space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-white font-soehne-breit">Meet Vinnie Baker</h2>
            <p className="text-sm font-semibold text-aeo-cyan">Founder &amp; Principal Consultant</p>
          </div>

          <blockquote className="border-l-2 border-aeo-purple pl-4 my-4">
            <p className="text-sm md:text-base text-white/80 italic font-serif leading-relaxed">
              &ldquo;The internet is changing. I founded AEObility to ensure Australian small and medium businesses are found inside AI answers—not lost behind their competitors.&rdquo;
            </p>
          </blockquote>

          <div className="space-y-3">
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed font-serif">
              After seeing capable local businesses struggle to explain their value online, Vinnie built AEObility around a simpler principle: your website should make it obvious what you do, who you help and why customers should trust you. The technical work matters, but it should always lead to clearer decisions and practical business outcomes.
            </p>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed font-serif">
              With more than 15 years of commercial and sales-development experience, Vinnie combines practical business thinking with technical SEO, structured data and entity strategy. Clients work directly with him to turn complicated digital requirements into focused actions that support visibility, trust and growth.
            </p>
          </div>

          {/* Proof Strip */}
          <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl text-xs font-mono text-zinc-300 flex flex-wrap items-center gap-2">
            <span>15+ years commercial experience</span>
            <span className="text-zinc-600">•</span>
            <span>Direct founder-led delivery</span>
            <span className="text-zinc-600">•</span>
            <span>Perth, Western Australia</span>
            <span className="text-zinc-600">•</span>
            <span>Built for Australian SMEs</span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,205,216,0.2)]"
            >
              <UserCheck className="w-4 h-4 text-black" />
              <span>Talk to Vinnie</span>
            </Link>

            <a
              href="https://www.linkedin.com/in/vince-baker/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan hover:underline hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">About AEO &amp; Search Readiness</h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white font-soehne-breit">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">{faq.answer}</p>
              <div className="pt-1">
                <Link href={faq.linkHref} className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-aeo-cyan hover:underline">
                  <span>{faq.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist Network & Extended Capabilities */}
      <section className="space-y-6 border-t border-white/10 pt-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold text-white font-soehne-breit">Specialist Network &amp; Extended Capabilities</h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            AEObility pairs strategic founder leadership with a network of specialized Australian technical digital marketing consultants.
          </p>
          <div className="flex flex-col gap-4">
            <Link
              href="/about/freelance-digital-specialist-perth"
              className="group bg-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-aeo-cyan/30 transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-aeo-cyan transition-colors font-soehne-breit">
                  Freelance Digital Specialist Perth
                </h3>
                <p className="text-xs text-white/50 font-light font-serif">View portfolio, technical capabilities, and regional specialty areas</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-aeo-cyan transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="p-8 bg-gradient-to-r from-aeo-cyan/10 to-aeo-purple/10 border border-white/10 rounded-3xl text-center space-y-6 shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-soehne-breit">Ready to Measure Your AI Visibility?</h2>
        <p className="text-white/70 font-light max-w-xl mx-auto text-sm font-serif">
          Get your AI Visibility Score delivered within 24 hours. No lock-ins. Just clarity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/diagnostic"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)]"
          >
            <span>Generate Visibility Score</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}


