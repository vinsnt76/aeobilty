import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
      <div className="relative text-center max-w-3xl mx-auto py-4">
        {/* Geometric Grid Background Motif */}
        <div className="absolute inset-0 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
            <span>Digital Marketing Specialist Perth</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white font-soehne-breit">
            Digital Marketing <br />
            <span className="text-gradient-aeo font-extrabold">Specialists in Perth</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed font-light max-w-2xl mx-auto font-serif">
            Meet the technical architects behind AEObility. Over several years engineering custom code, business automations, and AEO systems in Perth.
          </p>
        </div>
      </div>

      {/* AI Systems Architect */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-t border-white/5 pt-12">
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-white font-soehne-breit">AI Systems Architect</h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed font-serif">
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

      {/* Restructured Founder Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-white/5 pt-12">
        <div className="md:col-span-4 flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-lg">
            <Image
              src="/Profile-Picture-Vinnie.png"
              alt="Vinnie Baker — Founder of AEObility"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>
        
        <div className="md:col-span-8 order-1 md:order-2 space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-white font-soehne-breit">Vinnie Baker</h2>
            <p className="text-sm font-semibold text-aeo-cyan">Founder & Principal Consultant</p>
          </div>

          <blockquote className="border-l-2 border-aeo-purple pl-4 my-4">
            <p className="text-sm md:text-base text-white/80 italic font-serif leading-relaxed">
              &ldquo;The internet is changing. I founded AEObility to ensure Australian small and medium businesses are found inside AI answers—not lost behind their competitors.&rdquo;
            </p>
          </blockquote>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-soehne-breit">About Vinnie</h3>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed font-serif">
              Vinnie bridges the critical gap between traditional SEO and the new era of AI-driven search. With over 15 years of commercial and sales development experience, he designs scalable data strategies that ensure local brands are understood, trusted, and confidently recommended by generative AI platforms like ChatGPT, Gemini, and Perplexity.
            </p>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed font-serif">
              As the driving force behind AEObility&apos;s frameworks, Vinnie works directly with WA business owners to turn complex web data into clear, machine-readable assets, securing their visibility in the future of search.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 font-sans">Core Expertise:</h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-white/70 font-light font-sans">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Answer Engine Optimisation (AEO) & Generative Engine Optimisation (GEO)</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Structured Data Architectures (JSON / JSON-LD Schema Markup)</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                <span>AI Search Visibility Strategies & Entity Brand Mapping</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                <span>B2B Sales Integration & Strategic Partnerships</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <a
              href="https://www.linkedin.com/in/vince-baker/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-aeo-cyan hover:underline hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Connect with Vinnie Baker on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Commitment to Data Integrity */}
      <section className="space-y-6 border-t border-white/5 pt-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold text-white font-soehne-breit">Our Commitment to Data Integrity</h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed font-serif">
            We believe that clean, machine-readable schemas are the bedrock of local search. Our team of Australian marketing experts implements strict data standards to ensure your brand details are consistently understood, trusted, and verified across all search and maps models.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 bg-gradient-to-r from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-soehne-breit">Ready to Measure Your AI Visibility?</h2>
        <p className="text-white/60 font-light max-w-xl mx-auto mb-6 text-sm">
          Get your AI Visibility Score delivered within 24 hours. No lock-ins. Just clarity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/diagnostic"
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-sm transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span>Generate Visibility Score</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
