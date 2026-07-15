"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Brain, 
  BarChart, 
  MousePointerClick, 
  ShoppingCart, 
  Zap,
  Network,
  Database,
  TerminalSquare
} from 'lucide-react';

const Experience: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const skillItems = [
    { name: "n8n & Make Workflows", icon: Network },
    { name: "API Integration", icon: TerminalSquare },
    { name: "Prompt Engineering", icon: Brain },
    { name: "Voiceflow Agents", icon: Zap },
    { name: "Airtable Orchestration", icon: Database },
    { name: "Technical SEO", icon: Search },
    { name: "Data Dashboards", icon: BarChart },
    { name: "CRM Architecture", icon: ShoppingCart },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 scroll-mt-24">
      <motion.div 
        {...fadeInUp}
        className="container mx-auto px-6 max-w-6xl bg-black text-white rounded-xl p-8 md:p-10 shadow-2xl border border-neutral-800"
      >
        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <Briefcase className="w-7 h-7 text-aeo-cyan" />
          <h3 className="text-3xl md:text-4xl font-bold">
            Experience & Capabilities
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Column 1: Narrative Summary */}
          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-sm text-neutral-400 leading-relaxed">
              I bring over 15 years of commercial experience spanning business development, agency operations, and digital architecture. 
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I don't just paste code from ChatGPT. My approach to AI is grounded in deep technical understanding - building the infrastructure necessary to make AI agents actually work. This includes configuring secure webhooks, mapping JSON payloads, and engineering complex logic gates in platforms like n8n and Make.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Because I also possess a deep understanding of Technical SEO, GA4, and PPC environments, my automation pipelines are designed to directly support and scale your broader business growth goals without creating isolated data silos.
            </p>
          </motion.div>

          {/* Column 2: Skills Grid */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-aeo-cyan" />
              <h4 className="text-xl font-semibold text-aeo-cyan">Core Skills Matrix</h4>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-900 hover:bg-[#171717] border border-neutral-800 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-3 transition-colors group"
                >
                  <skill.icon className="w-6 h-6 text-aeo-cyan group-hover:text-aeo-purple transition-colors" />
                  <span className="text-xs font-medium leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
