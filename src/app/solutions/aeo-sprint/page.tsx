import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, Code2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "AEO Technical Sprints & Schema Deployments | AEObility",
  description: "Accelerate your machine discovery with intensive execution sprints: custom nesting graphs, code refactoring, and atomic block rewrites.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-sprint",
  },
};

export default function AEOSprintPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/aeo-sprint#service",
        "name": "AEO Technical Sprints",
        "description": "Accelerate your machine discovery with intensive execution sprints: custom nesting graphs, code refactoring, and atomic block rewrites.",
        "provider": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      }
    ]
  };

  const pillars = [
    {
      title: "Rapid Schema Graph Architecture",
      desc: "We construct and deploy deep nested JSON-LD graphs, establishing crystal-clear entity associations for AI ingestion systems."
    },
    {
      title: "HTML Content Modularization Blocks",
      desc: "Our structured content agency refactors raw page source code into crawlable, token-optimized modules and atomic blocks."
    },
    {
      title: "Server-Side Infrastructure Verification",
      desc: "Validate crawler permissions, header payloads, and JSON schemas to secure flawless retrieval compatibility."
    }
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Our Solutions</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/solutions" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Solutions Overview
              </Link>
              <Link href="/solutions/aeo-blueprint" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                The AEObility Blueprint
              </Link>
              <Link href="/solutions/aeo-sprint" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                AEO Sprints
              </Link>
              <Link href="/solutions/geo-services" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO Services Sprint
              </Link>
            </nav>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Our Services</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Services Overview
              </Link>
              <Link href="/services/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
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
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Rapid Schema & Code Execution</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AEO Technical <span className="text-gradient-aeo">Sprints</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Accelerate your machine discovery with intensive execution sprints: custom nesting graphs, code refactoring, and atomic block rewrites.
            </p>
          </div>

          {/* Code block terminal representation with flashing bright teal and neon purple script stream colors */}
          <div className="relative w-full rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-2xl font-mono text-xs overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="text-[10px] text-white/40 ml-2">aeo-sprint-deployment-agent (~/bin)</span>
            </div>
            <div className="space-y-2 text-white/80">
              <p className="text-aeo-cyan animate-pulse">Initializing token optimization pass...</p>
              <p className="text-white/40">&gt; Building local JSON-LD graph relations...</p>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                <p className="text-aeo-purple font-semibold">{"{"}</p>
                <p className="text-aeo-purple pl-4">&quot;@context&quot;: &quot;https://schema.org&quot;,</p>
                <p className="text-aeo-purple pl-4">&quot;@type&quot;: &quot;Service&quot;,</p>
                <p className="text-aeo-purple pl-4">&quot;name&quot;: &quot;Local Business Authority Map&quot;,</p>
                <p className="text-aeo-purple pl-4">&quot;areaServed&quot;: &quot;Perth, WA&quot;</p>
                <p className="text-aeo-purple">{"}"}</p>
              </div>
              <p className="text-green-400 font-semibold">&gt; Schema JSON Validation: OK (Passage-level extraction active)</p>
              <p className="text-white/40">&gt; Initiating programmatic code deployments...</p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  <Code2 className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Unblocking Search Index Access</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Generative engines do not rely on standard keyword tags. They ingest content chunks, run vector similarity calculations, and extract concise passage sections.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Through our specialized AEO technical sprints, our structured content agency provides direct AEO implementation support. We write custom nesting graphs, implement HTML refactoring rules, and set up passage-level extraction schemas to align your assets with modern search algorithms.
            </p>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Sprint Deliverables</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Programmatic code deployments to restructure site layouts.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Deploy custom nested graphs to establish clear authority links.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format atomic text copy sections for index validation.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Authorize search engine crawler agents in codebase configs.</span>
              </li>
            </ul>
          </div>

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Accelerate Your Machine Authority</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Partner with AEObility for immediate technical execution sprints. Contact our team to book your slot.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all"
              >
                <span>Book a Technical Call</span>
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
