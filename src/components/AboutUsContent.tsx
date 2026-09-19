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
  UserCheck
} from 'lucide-react';

export default function AboutUsContent() {
  const faqs = [
    {
      question: "What is the difference between SEO and AEO?",
      answer: "SEO helps pages perform in traditional search results. Answer Engine Optimisation (AEO) builds on SEO by making your business information clearer and more connected for AI-driven search experiences, including answer engines and generative search tools.",
      linkText: "Read our full AEO definition guide",
      linkHref: "/knowledge-hub/what-is-aeo"
    },
    {
      question: "Can ChatGPT, Gemini or Perplexity cite my business?",
      answer: "No agency can guarantee a citation or ranking in any third-party AI product. AEObility helps improve the clarity, structure, accuracy and evidence behind your business information so platforms have stronger signals to interpret and potentially reference.",
      linkText: "Run a free AI visibility scan",
      linkHref: "/diagnostic"
    },
    {
      question: "Why does entity mapping matter for a Perth business?",
      answer: "Entity mapping connects the facts that define your business: who you are, what you offer, where you operate, who you serve and the evidence supporting those claims. This reduces ambiguity across your site, local search presence and structured data.",
      linkText: "Explore Perth AEO consultancy services",
      linkHref: "/services/perth/seo-specialist"
    },
    {
      question: "What happens in an AEO Sprint?",
      answer: "An AEO Sprint is a fixed-scope engagement that identifies priority visibility gaps and implements agreed improvements. Depending on your needs, this may include technical SEO, structured data, entity mapping, content architecture and search-readiness recommendations.",
      linkText: "Explore the $995 AEO Blueprint",
      linkHref: "/solutions/aeo-blueprint"
    },
    {
      question: "Do I need to replace my existing SEO strategy?",
      answer: "Usually not. AEO should strengthen a sound SEO foundation, not discard it. The focus is on making your existing website, business facts and content more coherent for today's conversational search environment.",
      linkText: "Explore core AEO services",
      linkHref: "/services/aeo"
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
              Vinnie Baker is the founder and principal consultant at AEObility. He helps Australian businesses make their expertise, services and local relevance easier for search engines and AI systems to understand.
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

