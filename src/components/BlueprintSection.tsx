import React from 'react';
import { ArrowRight, Compass, Milestone, Layers, Rocket } from 'lucide-react';

export default function BlueprintSection() {
  const blueprintPhases = [
    {
      icon: <Compass className="w-5 h-5 text-aeo-cyan" />,
      title: 'Days 1-30: Foundation & Online Profile Setup',
      description: 'Audit existing assets and organise business details so Google, map services, and modern AI tools can find and display your business accurately.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-aeo-cyan" />,
      title: 'Days 31-60: Local Presence & Search Optimisation',
      description: 'Optimise local listings, map pins, and structure targeted question-and-answer resources that capture nearby client intent.',
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />,
      title: 'Days 61-90: Scaling Authority & AI Citations',
      description: 'Acquire high-quality local mentions and citations across search engines, directories, and AI assistants to solidify your top ranking positions.',
    },
  ];

  return (
    <section id="blueprint" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-aeo-purple/20 to-aeo-cyan/20 glow-blur opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Rocket className="w-3.5 h-3.5" />
              <span>Full Roadmap Strategy</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Your 90‑Day AI<br />
              <span className="text-gradient-aeo">Success Blueprint</span>
            </h2>

            <p className="text-lg text-white/70 font-light leading-relaxed">
              A clear, actionable roadmap to improve visibility, increase leads, and prepare your business for local maps and future AI search discovery.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="#audit-form"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-100 transition-all duration-300"
              >
                Get My Blueprint
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm">
                <span className="font-semibold text-white">Pricing note:</span> Take the strategy with you, or stay with us for the 90 days — and we credit the $995 blueprint fee back into your plan.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="p-8 space-y-8 bg-neutral-950/80 rounded-xl">
                <h3 className="text-xl font-bold border-b border-white/10 pb-4">
                  What is included in the plan?
                </h3>
                
                <div className="space-y-6">
                  {blueprintPhases.map((phase, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 mt-1">
                        {phase.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white">{phase.title}</h4>
                        <p className="text-xs text-white/60 font-light leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
