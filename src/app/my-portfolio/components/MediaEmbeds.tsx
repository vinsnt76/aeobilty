"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Play } from 'lucide-react';

export default function MediaEmbeds() {
  return (
    <section id="media-embeds" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
            <Play size={18} />
            <span>Interactive Media</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Reports & <span className="text-blue-600">Demos.</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* PDF Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4 p-6 bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Analytics Performance Report</h3>
                <p className="text-xs text-neutral-400">PDF Document</p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] xl:aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <iframe
                src="https://drive.google.com/file/d/1m03il0l5T3H8W8ZqaoSK7DnmL-35YZpL/preview"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-4 p-6 bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
                <Play size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">AEO Video Engine Demo</h3>
                <p className="text-xs text-neutral-400">Interactive Video Stream</p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] xl:aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <iframe
                src="https://drive.google.com/file/d/13TJucyE9G28aRUVRdNHWC_1HgkuC8kr-/preview"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
