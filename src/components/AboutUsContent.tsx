import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

function TransitionFlowChart() {
  const steps = [
    { title: "Traditional SEO", desc: "Keywords & PageRank", color: "border-white/10" },
    { title: "Entity Extraction", desc: "JSON-LD & Schema", color: "border-aeo-cyan/30" },
    { title: "Vector Embedding", desc: "Semantic Search & RAG", color: "border-aeo-purple/30" },
    { title: "AEO Optimization", desc: "Citations & AI Answers", color: "border-aeo-cyan" }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className={`w-full max-w-[280px] p-4 bg-neutral-950/85 border ${step.color} rounded-xl text-center shadow-lg backdrop-blur-xl group hover:border-aeo-cyan/20 transition-all`}>
            <div className="text-xs font-bold text-white group-hover:text-aeo-cyan transition-colors">{step.title}</div>
            <div className="text-[10px] text-white/50 font-light mt-1">{step.desc}</div>
          </div>
          {idx < steps.length - 1 && (
            <div className="h-4 w-[2px] bg-gradient-to-b from-aeo-cyan to-aeo-purple" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function AboutUsContent() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full flex flex-col gap-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
          <span>Digital Marketing Specialist Perth</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Digital Marketing <br />
          <span className="text-gradient-aeo font-extrabold">Specialists in Perth</span>
        </h1>
        <p className="text-white/60 text-lg leading-relaxed font-light max-w-2xl mx-auto">
          Meet the technical architects behind AEObility. Over several years engineering custom code, business automations, and AEO systems in Perth.
        </p>
      </div>

      {/* AI Systems Architect */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-t border-white/5 pt-12">
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-white">AI Systems Architect</h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            specialty is Google Search Console, Bing Webmaster Tools, SEMrush, and structured data validators. SEO → AEO transition frameworks, focusing on entity clarity, local intent, and machine‑readable content.
          </p>
          <div className="text-xs text-white/50 font-mono space-y-1">
            <div>Tech Architecture: Search Engine APIs & Semantic Mappers</div>
            <div>Clear Background Credentials: Certified Systems Architects</div>
          </div>
        </div>
        <div className="md:col-span-5">
          <TransitionFlowChart />
        </div>
      </section>

      {/* Eliminating Costly Agency Complexity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-t border-white/5 pt-12">
        <div className="md:col-span-4 flex justify-center order-2 md:order-1">
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
            <Image
              src="/Profile-Picture-Vinnie.png"
              alt="Portrait layout frame highlighting official developer certifications and workspace tokens"
              fill
              priority
              className="object-cover"
              sizes="192px"
            />
          </div>
        </div>
        <div className="md:col-span-8 order-1 md:order-2 space-y-4">
          <h2 className="text-2xl font-bold text-white">Eliminating Costly Agency Complexity</h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            As jargon-free optimization specialists, we focus on what works. We eliminate convoluted reports and hidden retainers. Instead, we offer a transparent sprint blueprint method that provides professional framework proof to verify results.
          </p>
          <ul className="space-y-2 text-xs text-white/60 font-light">
            <li className="flex gap-2 items-center">
              <Compass className="w-4 h-4 text-aeo-cyan" />
              <span>Direct corporate entity verification</span>
            </li>
            <li className="flex gap-2 items-center">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
              <span>Custom RAG ingestion blueprints</span>
            </li>
          </ul>
          <Link
            href="/vince-baker"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-aeo-cyan hover:underline mt-2"
          >
            <span>View Vince&apos;s Digital Business Card</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Our Commitment to Data Integrity */}
      <section className="space-y-6 border-t border-white/5 pt-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Commitment to Data Integrity</h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            We believe that clean, machine-readable schemas are the bedrock of local search. Our team of Australian marketing experts implements strict data standards to ensure your brand details are consistently understood, trusted, and verified across all search and maps models.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 bg-gradient-to-r from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white">Ready to Audit Your Brand Visibility?</h2>
        <p className="text-sm text-white/60 font-light max-w-md mx-auto">
          Get a free visibility and entity structure audit delivered within 24 hours. No lock-ins. Just clarity.
        </p>
        <div>
          <Link
            href="/#audit-form"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-300"
          >
            <span>Get Free Visibility Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
