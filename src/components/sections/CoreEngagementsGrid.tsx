'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Rocket, Compass, MapPin } from 'lucide-react';

export function CoreEngagementsGrid() {
  return (
    <section className="w-full bg-black py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-radial from-aeo-cyan/10 via-aeo-purple/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Our Core Optimisation Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
            Flat-Rate AEO Solutions & Sprints
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-serif">
            Whether you need a standalone strategic audit and roadmap or complete technical implementation, we provide transparent, flat-rate engagements.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: The Strategic Blueprint Method */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                  <Compass className="w-4 h-4" />
                  <span>Strategic Audit</span>
                </div>
                <span className="text-lg font-bold text-cyan-300 font-mono">$995 AUD</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">The Strategic Blueprint Method</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                  A comprehensive, risk-free visibility audit and 90-day step-by-step roadmap to format your business details for generative search.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Full entity & schema audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>AI discovery readiness score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Topical Q&A structure map</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Vector indexing compatibility check</span>
                </li>
                <li className="flex items-start gap-2 font-medium text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>100% credit back if you stay with us</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800"
              >
                <span>Explore Blueprint Solution</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: AEO Technical Sprints (Featured Gradient Border) */}
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 group">
            <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-[15px] bg-zinc-950/95 backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider font-mono">
                    <Rocket className="w-4 h-4" />
                    <span>Execution Sprints</span>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">No Lock-in</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">AEO Technical Sprints</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                    Accelerate your machine discovery with intensive execution sprints: custom nesting graphs, code refactoring, and atomic block rewrites.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>JSON-LD graph nesting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>HTML refactoring rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Passage level extraction setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Token optimisation passes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>No locked-in commitments</span>
                  </li>
                </ul>
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

          {/* Card 3: GEO Services Sprint */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Location Domination</span>
                </div>
                <span className="text-xs font-semibold text-cyan-400 font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">Map Focus</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">GEO Services Sprint</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                  Deploy location-aware optimisation rules. Clean coordinates, nested maps schema, and hyper-local citation structures to dominate regional search.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Coordinate precision mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Verified map pack foundations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Regional intent frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Proximity signal validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>No contracts, no locking</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/solutions/geo-services"
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800"
              >
                <span>Explore GEO Sprints</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreEngagementsGrid;
