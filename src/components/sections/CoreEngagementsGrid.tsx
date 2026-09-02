'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Rocket, Compass, MapPin } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

export function CoreEngagementsGrid() {
  return (
    <section className="w-full bg-black py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-radial from-aeo-cyan/10 via-aeo-purple/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>AEO Services & Technical Sprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
            Choose the right starting point
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-serif leading-relaxed">
            Get a clear roadmap, fix a specific issue or strengthen your local search foundations. All engagements are clearly scoped, transparently priced and designed for Australian businesses.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Strategic Audit */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                  <Compass className="w-4 h-4" />
                  <span>Strategic Audit</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-cyan-300 font-mono">$995 AUD</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">The AEObility Blueprint</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                  A strategic audit and 90-day roadmap to improve how search engines, Maps and AI systems understand your business.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Visibility and entity review</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Structured-data and content opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Prioritised implementation roadmap</span>
                </li>
                <li className="flex items-start gap-2 font-medium text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Fee credited towards eligible implementation work</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800"
                title="Explore the prioritised 90-day action plan with the AEObility Blueprint"
              >
                <span>Explore the Blueprint (90-Day Plan)</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Technical Execution (Featured Gradient Border) */}
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 group">
            <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-[15px] bg-zinc-950/95 backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider font-mono">
                    <Rocket className="w-4 h-4" />
                    <span>Technical Execution</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-cyan-300 font-mono">From $495 AUD</span>
                    <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">AEO Technical Sprints</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                    Focused implementation for your website, structured data and priority service pages.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Schema implementation — from $495</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Single-page content rewrite — from $495</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Foundation Implementation — from $3,195</span>
                  </li>
                </ul>

                <p className="text-[11px] text-zinc-400 font-mono italic pt-1 border-t border-white/5">
                  Typically delivered over 4–5 working days across a four-week period.
                </p>
              </div>

              <div className="pt-8">
                <Link
                  href="/solutions/aeo-sprint"
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-95 text-black font-bold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <span>Explore AEO Sprints</span>
                  <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Local Visibility */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Local Visibility</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-cyan-300 font-mono">From $495 AUD</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">Local Visibility Sprints</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                  Improve the local signals that help customers and search platforms understand where you operate and what you offer.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Business information and citation clean-up — from $495</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Local internal-linking improvements — from $695</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Brand Facts Page — from $495</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/services/aeo/local-business"
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800"
                title="Explore our focused GEO services sprints to enhance local visibility signals"
              >
                <span>Explore our focused GEO services sprints to enhance local visibility signals</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Semantic Service Architecture Decoupling: Core Solutions Navigation Landmark */}
        <nav aria-label="Core solutions" className="mt-14 w-full max-w-5xl mx-auto text-left relative z-10 border-t border-white/10 pt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
            Explore AI Search Support
          </div>
          <h2 className="text-lg font-bold text-slate-100 mb-4 font-soehne-breit">
            Get Expert support and service
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li>
              <Link
                href="/solutions/aeo-blueprint"
                onClick={() => trackGaEvent('core_solutions_nav_clicked', { tier: 'blueprint', destination: '/solutions/aeo-blueprint' })}
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Strategic Audit &amp; Roadmap</span>
                <span className="text-xs text-slate-400">Diagnostic gap analysis &amp; engineering plan</span>
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/aeo-sprint"
                onClick={() => trackGaEvent('core_solutions_nav_clicked', { tier: 'sprint', destination: '/solutions/aeo-sprint' })}
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Technical Implementation</span>
                <span className="text-xs text-slate-400">Deterministic schema &amp; knowledge node deployment</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/aeo/local-business"
                onClick={() => trackGaEvent('core_solutions_nav_clicked', { tier: 'local', destination: '/services/aeo/local-business' })}
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Local Visibility Support</span>
                <span className="text-xs text-slate-400">GEO optimisation &amp; citation integrity</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default CoreEngagementsGrid;
