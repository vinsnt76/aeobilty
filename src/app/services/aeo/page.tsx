import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, Eye, Brain, CheckCircle2, MapPin, ShieldCheck, Award } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Answer Engine Optimisation (AEO) Services — AEObility",
  description: "Professional content engineering solutions that restructure, format, and optimise digital assets for conversational AI engines and RAG systems.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
};

export default function AEORootPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au"
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo#service",
        "name": "Answer Engine Optimisation (AEO) Services",
        "description": "Professional content engineering solutions that restructure, format, and optimise digital assets to be accurately ingested, synthesized, and cited by conversational AI engines and retrieval-augmented generation (RAG) systems.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        }
      }
    ]
  };

  const serviceModules = [
    {
      title: "AEO Visibility Check",
      bullets: ["Comprehensive crawl compatibility scan", "LLM citation index baseline assessment", "Entity validation & visibility report"],
      linkText: "Explore AI Search Integration",
      linkHref: "/services/ai-search-marketing"
    },
    {
      title: "AEO Strategy",
      bullets: ["Structured content chunking map", "Semantic entity relation architecture", "Atomic answer block mapping templates"],
      linkText: "Explore GEO Map Strategy",
      linkHref: "/services/geo-marketing"
    },
    {
      title: "AEO Implementation",
      bullets: ["JSON-LD schema.org Microdata formatting", "Neural vector space content alignment", "LLM crawler authorization checks"],
      linkText: "Services Overview",
      linkHref: "/services"
    },
    {
      title: "AEO Sprints",
      bullets: ["90-Day authority and reference tuning", "Secondary citation node reinforcement", "Continuous retrieval validation passes"],
      linkText: "View Packages",
      linkHref: "/solutions"
    }
  ];

  const benefitCards = [
    {
      icon: <Eye className="w-5 h-5 text-aeo-cyan" />,
      title: "Get Found",
      desc: "Show up more often across conversational search queries, digital maps, and Large Language Model references."
    },
    {
      icon: <Brain className="w-5 h-5 text-aeo-purple" />,
      title: "Get Understood",
      desc: "Ensure machines read, parse, and categorize your business nodes correctly without indexing bottlenecks."
    },
    {
      icon: <Award className="w-5 h-5 text-aeo-cyan" />,
      title: "Get Chosen",
      desc: "Feed AI recommendation models high-confidence data so they select your services as primary citations."
    },
    {
      icon: <MapPin className="w-5 h-5 text-aeo-purple" />,
      title: "Get Local Visibility",
      desc: "Optimise coordinate mapping files and location metadata tags so nearby consumers target your GBP pins."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />,
      title: "Build Trust Signals",
      desc: "Establish clear semantic structure to reduce model hallucinations and capture citation priority."
    }
  ];

  const featuredArticles = [
    {
      title: "What is AEO and why does it matter?",
      desc: "Understand what AEO actually is, why search visibility is changing, and how AI assistants read and interpret your business.",
      href: "/services/aeo/definition",
      hook: "Unlock the machine logic",
      image: "/service-dashboard-layers.png"
    },
    {
      title: "Is AEO just SEO with a new name?",
      desc: "How SEO and AEO overlap, how they differ, and why structured clarity matters more than old search engine ranking tricks.",
      href: "/services/aeo/comparison",
      hook: "Expose search differences",
      image: "/services-intent-matrix.png"
    },
    {
      title: "How do I make my business AI-readable?",
      desc: "Explore how Large Language Models (LLMs) ingest, interpret, and cite content, and how to structure pages so they are machine-readable.",
      href: "/services/aeo/procedures",
      hook: "Command crawler authority",
      image: "/structured-search-audit-wireframe.png"
    },
    {
      title: "What stops my business from showing up?",
      desc: "Identify trust signals, authority thresholds, conflicting business profiles, and key blockers that prevent conversational AI tools from citation.",
      href: "/services/aeo/constraints",
      hook: "Eradicate hidden blockers",
      image: "/contact-map-coordinates.png"
    },
    {
      title: "How much does AEO cost & what do I get?",
      desc: "Find package options, initial AI visibility telemetry checks, our $995 Strategic Blueprint MVP, credit back options, and delivery timelines.",
      href: "/services/aeo/costs-timing",
      hook: "Explore blueprint pricing",
      image: "/client-milestones-onboarding.png"
    }
  ];

  const glossaryTerms = [
    { term: "Entity", definition: "A distinct, well-defined conceptual object (like a business, person, or location) that machines recognize and link." },
    { term: "Salience", definition: "A mathematical score reflecting how relevant a specific entity is within a given body of content." },
    { term: "Atomic Answer Block", definition: "A concise, direct text response structured specifically for extraction, indexing, and synthesis by LLMs." },
    { term: "Context Chunk", definition: "A section of text parsed by crawlers containing enough semantic relationships to convey a complete answer." },
    { term: "Citation Index", definition: "A metric that scores how often and how confidently conversational search engines quote your business." },
    { term: "RAG (Retrieval-Augmented Generation)", definition: "The technical framework of pulling external site data to enrich LLM response generations." }
  ];

  const workflowSteps = [
    { step: "01", name: "Telemetry Scan", desc: "Assess crawling index authorizations and baseline citation share rates." },
    { step: "02", name: "Strategy", desc: "Map semantic category graphs and construct conversational answer grids." },
    { step: "03", name: "Implementation", desc: "Deploy JSON-LD schemas and restructure website copy into context chunks." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Our Services</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Services Overview
              </Link>
              <Link href="/services/aeo" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                Answer Engine Optimisation (AEO)
              </Link>
              <Link href="/services/ai-search-marketing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Search Marketing
              </Link>
              <Link href="/services/geo-marketing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Local & GEO Map Marketing
              </Link>
            </nav>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services/aeo" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/services/aeo/definition" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                1. What is AEO and why does it matter?
              </Link>
              <Link href="/services/aeo/comparison" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                2. Is AEO just SEO with a new name?
              </Link>
              <Link href="/services/aeo/procedures" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                3. How do I make my business AI-readable?
              </Link>
              <Link href="/services/aeo/constraints" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                4. What stops my business from showing up?
              </Link>
              <Link href="/services/aeo/costs-timing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                5. How much does AEO cost & what do I get?
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-12">
          {/* SECTION 1 — Hero Block */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Services that start the conversation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AEO <span className="text-gradient-aeo">Services</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light mb-6">
              Optimise your digital footprint so Large Language Models retrieve, cite, and recommend your services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book"
                className="btn-primary"
              >
                Book a Call
              </Link>
              <Link
                href="/solutions"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all"
              >
                View AEO Packages
              </Link>
            </div>
          </div>

          {/* SECTION 2 — Atomic Answer Block (Keep for IA/SLM) */}
          <section className="atomic-answer-block p-6 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-2 font-mono">WHAT IS ANSWER ENGINE OPTIMISATION (AEO)?</p>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Answer Engine Optimisation (AEO) is a method for structuring your digital content so AI search systems can read it accurately. It helps engines like Perplexity, ChatGPT and Google Gemini interpret your information, classify your services correctly, and retrieve your brand as a relevant local recommendation.
            </p>
          </section>

          {/* SECTION 3 — What You Get (Service Modules) */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Services We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceModules.map((module, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start text-xs font-light text-white/60 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
                    <Link
                      href={module.linkHref}
                      className="text-xs font-bold text-aeo-cyan hover:underline inline-flex items-center gap-1"
                    >
                      {module.linkText}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4 — Why AEO Matters */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-xl font-bold">Why AEO Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefitCards.map((card, idx) => (
                <div key={idx} className={`p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 ${idx === 4 ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <h3 className="font-bold text-sm text-white">{card.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7 — How We Work */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-xl font-bold">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative">
                  <span className="absolute top-4 right-6 text-2xl font-mono font-bold text-aeo-purple/30">{step.step}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{step.name}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 — Featured Articles (L3 pages) */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-xl font-bold">Featured Articles</h2>
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featuredArticles.map((article, idx) => (
                <Link
                  key={idx}
                  href={article.href}
                  className="w-[280px] sm:w-[320px] bg-white text-black rounded-2xl overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 flex-shrink-0 snap-start shadow-xl border border-neutral-200 group"
                >
                  <div>
                    {/* Image Insert */}
                    <div className="h-40 w-full relative bg-neutral-950 overflow-hidden border-b border-neutral-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      
                      <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-aeo-purple uppercase border border-neutral-200/60 rounded px-2 py-0.5 bg-white/80 shadow-sm backdrop-blur-sm z-10">
                        AEObility Article
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-aeo-cyan transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed font-light">
                        {article.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="text-[11px] font-bold text-aeo-purple uppercase tracking-wider font-mono border-t border-neutral-100 pt-4 flex justify-between items-center w-full">
                      <span>{article.hook}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-aeo-purple group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SECTION 6 — Glossary of Terms */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-xl font-bold">Glossary of Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {glossaryTerms.map((g, idx) => (
                <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl space-y-1">
                  <h4 className="text-xs font-bold text-aeo-cyan font-mono">{g.term}</h4>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{g.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 8 — Pricing & Packages CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6 border-t pt-10">
            <h3 className="text-2xl font-bold text-white">Pricing & Strategic Blueprint</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Accelerate your authority. Access our $995 AUD Strategic Roadmap and packages to capture conversational query pack placements.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all"
              >
                <span>View Blueprint Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
