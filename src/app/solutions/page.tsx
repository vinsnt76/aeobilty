'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  const packages = [
    {
      name: "The 90-Day Blueprint",
      price: "$995 AUD",
      description: "A comprehensive visibility audit and deep-dive strategic roadmap to structure your business for Search, Maps, and conversational AI.",
      features: [
        "Full entity & schema audit",
        "AI discovery readiness score",
        "90-day step-by-step roadmap",
        "Question-answering architecture map",
        "Competitor semantic gap analysis",
        "No lock-ins, you own the strategy"
      ],
      cta: "Request Blueprint",
      href: "/#audit-form",
      highlighted: false
    },
    {
      name: "Full AEO Implementation",
      price: "$2,495 AUD / mo",
      description: "Leave the heavy lifting to us. We will execute the blueprint and continuously optimize your brand authority across LLM engines.",
      features: [
        "Everything in the Blueprint",
        "Full schema markup deployment",
        "AI-optimized content generation",
        "Weekly vector indexing checks",
        "Dedicated entity graph building",
        "Blueprint fee credited back to your plan"
      ],
      cta: "Apply For Partner Plan",
      href: "/contact",
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-20 w-full flex flex-col gap-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            AEO <span className="text-gradient-aeo">Packages & Pricing</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed font-light">
            Simple, risk-free solutions to optimize your business for conversational AI and map search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`p-1 rounded-2xl bg-gradient-to-br transition-all duration-300 ${
                pkg.highlighted 
                  ? 'from-aeo-cyan via-aeo-purple to-black shadow-[0_0_30px_rgba(0,240,255,0.15)] scale-105' 
                  : 'from-white/10 to-white/5 border border-white/5'
              }`}
            >
              <div className="p-8 bg-neutral-950 rounded-xl flex flex-col justify-between h-full gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    {pkg.highlighted && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-aeo-cyan bg-aeo-cyan/10 border border-aeo-cyan/20 px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 items-start text-xs text-white/80 font-light">
                        <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={pkg.href}
                  className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
                    pkg.highlighted 
                      ? 'bg-gradient-to-r from-aeo-cyan to-aeo-purple text-white shadow-lg shadow-aeo-purple/25 hover:opacity-90' 
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
