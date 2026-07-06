import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, Layers, Cpu, Search, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "AI Search Marketing & Strategy | AEObility",
  description: "Deploy optimization strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.",
  keywords: [
    "ai search marketing",
    "ai search strategy",
    "ai search marketing strategy",
    "ai search marketing examples",
    "ai search marketing course",
    "answer engine prompt strategy"
  ],
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing",
  },
};

export default function AISearchMarketingPage() {
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
        "@id": "https://aeobility.com.au/services/ai-search-marketing#service",
        "name": "AI Search Marketing",
        "description": "Deploy optimization strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        }
      }
    ]
  };

  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-aeo-cyan" />,
      title: "The Core Priorities of Generative Search Engine Optimization",
      desc: "Deploy structured vector configurations to ensure query fan-out models and retrieval augmentation systems place your brand in direct answer outputs."
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-purple" />,
      title: "Maximizing Your Citation Share",
      desc: "Build authority across generative visibility models and coordinate vector space networks so LLMs confidently index and reference your business."
    },
    {
      icon: <Search className="w-5 h-5 text-aeo-cyan" />,
      title: "Mapping Atomic Answer Blocks",
      desc: "We parse your services into granular semantic components optimized for LLM search queries, answering multi-layered user intents clearly."
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
        {/* Left Side: Services Directory Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Our Services</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Services Overview
              </Link>
              <Link href="/services/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Answer Engine Optimisation (AEO)
              </Link>
              <Link href="/services/ai-search-marketing" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                AI Search Marketing
              </Link>
              <Link href="/services/geo-marketing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Local & GEO Map Marketing
              </Link>
            </nav>
          </div>

          <div className="p-6 bg-gradient-to-br from-aeo-cyan/10 to-transparent border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-sm font-bold text-white">Need immediate clarity?</h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Get a custom-crafted report looking at how Perplexity, ChatGPT, and Google Maps currently see your business.
            </p>
            <Link
              href="/#audit-form"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-aeo-cyan hover:underline"
            >
              <span>Get your Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>AI Search Marketing Strategies</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AI Search <span className="text-gradient-aeo">Marketing & Strategy</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Deploy optimization strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Why Generative Search Engine Optimization Matters</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              As search tools transition from list-based keyword matching to conversational retrieval platforms, traditional SEO fails. Users no longer just type &quot;plumber Perth&quot;; they use complex sentences querying specific capabilities, price transparent policies, and availability.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By structuring your business data for <strong>retrieval augmentation</strong>, optimizing against <strong>query fan-out</strong> behaviors, and aligning your local pages within <strong>vector space</strong> maps, AEObility positions your brand directly in the citations LLMs output.
            </p>
          </div>

          {/* Checklist */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">AI Readiness Optimisation Steps</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Optimize website code for query fan-out search agent parsing.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Configure structures to excel in vector space relevance algorithms.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Verify and format atomic answer blocks for direct model retrieval.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Configure content indexing authority to match generative visibility models.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
