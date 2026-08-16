import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { Clock, Lock, Sparkles, BookOpen } from 'lucide-react';

export const metadata = {
  title: "AI Search & AEO Technical Tutorials | AEObility",
  description: "Explore step-by-step technical tutorials on Answer Engine Optimisation (AEO), vector semantic density, and positional bias mitigation.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/tutorials",
  },
};

export default function TutorialsHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AEObility AI Search & AEO Technical Tutorials",
    "description": "Explore step-by-step technical tutorials on Answer Engine Optimisation (AEO), vector semantic density, and positional bias mitigation.",
    "url": "https://aeobility.com.au/knowledge-hub/tutorials",
    "publisher": {
      "@type": "Organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  const tutorials = [
    {
      title: "Understanding Semantic Density in Vector Retrieval",
      category: "Vector Embeddings & Semantic Density",
      description: "Step-by-step tutorial on optimising chunk semantic density, RDF triple salience, and vector embedding proximity for AI engine citations.",
      href: "/knowledge-hub/tutorials/semantic-density",
      image: "/coming-soon-placeholder.svg",
      alt: "Semantic density tutorial placeholder graphic depicting AI vector retrieval by AEObility.",
      metrics: [
        { label: "Level", value: "Advanced" },
        { label: "Status", value: "Coming Soon" }
      ]
    },
    {
      title: "Mitigating Positional Bias & Lost-in-the-Middle Attention",
      category: "LLM Context Windows & Attention",
      description: "Technical tutorial on structuring long-form document passages to maximize primacy and recency attention spikes during RAG retrieval.",
      href: "/knowledge-hub/tutorials/positional-bias",
      image: "/coming-soon-placeholder.svg",
      alt: "Positional bias tutorial placeholder graphic depicting LLM context window attention by AEObility.",
      metrics: [
        { label: "Level", value: "Advanced" },
        { label: "Status", value: "Coming Soon" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />

      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />

      <main className="flex-grow pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs />
        </div>

        {/* Hero Header */}
        <div className="relative border-b border-white/10 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Execution Blueprints
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            AI Search & AEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-aeo-cyan to-aeo-purple">Tutorials</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Step-by-step technical tutorials on vector chunking, semantic density optimisation, and LLM attention window formatting for direct machine citation.
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-950/80 border border-white/10 rounded-2xl overflow-hidden hover:border-aeo-cyan/50 transition-all duration-300 flex flex-col shadow-xl"
            >
              {/* Coming Soon Overlay Badge */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-aeo-cyan/40 text-aeo-cyan text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Coming Soon
              </div>

              {/* Card Image */}
              <div className="relative w-full h-56 bg-zinc-900 overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt={tutorial.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-aeo-cyan tracking-wider uppercase mb-2 block">
                    {tutorial.category}
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors mb-3 leading-snug">
                    {tutorial.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {tutorial.description}
                  </p>
                </div>

                {/* Card Footer / Status Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-zinc-400">
                    {tutorial.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="flex items-center gap-1">
                        <span className="text-zinc-500">{m.label}:</span>
                        <span className="text-white font-medium">{m.value}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-aeo-cyan transition-colors">
                    <Lock className="w-3.5 h-3.5" />
                    In Blueprint Queue
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
