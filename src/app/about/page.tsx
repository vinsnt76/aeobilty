'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full flex flex-col gap-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            About <span className="text-gradient-aeo">AEObility</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed font-light">
            We help Australian small businesses show up, make sense, and stand out across Search, Maps, and AI platforms.
          </p>
        </div>

        {/* Section 1: The AI Paradigm Shift */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-white/5 pt-12">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-white">Why AEObility Was Founded</h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Traditional SEO was built for keywords and backlink volume to win human clicks on search engines. But in 2026, the landscape has fundamentally shifted. People ask ChatGPT, Claude, Gemini, and Siri direct conversational questions.
            </p>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              If your business details are not formatted for machine understanding, vector search models cannot match your website, meaning you do not get cited or recommended. We bridge this technical gap.
            </p>
          </div>
          <div className="md:col-span-5 p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Our Core Focus</h3>
            <ul className="space-y-3 text-xs text-white/80 font-light">
              <li className="flex gap-2 items-center">
                <Compass className="w-4 h-4 text-aeo-cyan" />
                <span>Entity & Relationship Mapping</span>
              </li>
              <li className="flex gap-2 items-center">
                <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                <span>RAG Citation Alignment</span>
              </li>
              <li className="flex gap-2 items-center">
                <Zap className="w-4 h-4 text-aeo-cyan" />
                <span>Neural Local Intent Tuning</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Founder Vince Baker */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-white/5 pt-12">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10">
              <Image 
                src="/Profile-Picture-Vinnie.png" 
                alt="Vince Baker" 
                fill 
                priority
                sizes="(max-width: 768px) 192px, 192px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-2xl font-bold text-white">Vince Baker — Founder</h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Vince Baker founded AEObility to help Australian services and local brands build visible, trustworthy digital footprints. With deep expertise in semantic data mapping, local SEO architectures, and generative AI systems, Vince works directly with businesses to design custom visibility strategies.
            </p>
            <Link 
              href="/vince-baker" 
              className="inline-flex items-center gap-2 text-xs font-bold text-aeo-cyan hover:underline"
            >
              <span>View Vince&apos;s Digital Business Card</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="p-8 bg-gradient-to-r from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold">Ready to Audit Your Brand Visibility?</h2>
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

      <Footer />
    </div>
  );
}
