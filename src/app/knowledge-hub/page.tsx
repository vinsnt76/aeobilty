'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, ShieldAlert, BadgeDollarSign, FileCode2 } from 'lucide-react';

export default function KnowledgeHubPage() {
  const corridors = [
    {
      name: "1. What is AEO and why does it matter?",
      href: "/services/aeo/definition",
      description: "Understand the core concepts of Answer Engine Optimisation and how generative AI models represent your brand entities.",
      icon: <BookOpen className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "2. Is AEO just SEO with a new name?",
      href: "/services/aeo/comparison",
      description: "Compare traditional keyword density search optimization with vector embeddings, neural search, and RAG pipelines.",
      icon: <Brain className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "3. How do I make my business AI-readable?",
      href: "/services/aeo/procedures",
      description: "Step-by-step technical guide to structuring answers, optimizing schemas, and building clean topical entity maps.",
      icon: <FileCode2 className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "4. What stops my business from showing up?",
      href: "/services/aeo/constraints",
      description: "Identify indexation limits, entity ambiguity, conflicting web data sources, and trust parameters in LLM reasoning.",
      icon: <ShieldAlert className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "5. How much does AEO cost & what do I get?",
      href: "/services/aeo/costs-timing",
      description: "Transparent pricing breakdown of the AEObility Blueprint package and long-term retainer implementation plans.",
      icon: <BadgeDollarSign className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            AEO <span className="text-gradient-aeo">Knowledge Hub</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed font-light">
            Deep dive into the mechanics of neural search, semantic chunking, and how machines synthesize your business profiles.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          {corridors.map((item, idx) => (
            <Link 
              key={idx}
              href={item.href}
              className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 hover:bg-white/[0.04] transition-all flex gap-5 items-start group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-aeo-cyan transition-colors">{item.name}</h3>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
