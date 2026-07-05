"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoExplainer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="explainer-video" className="py-20 bg-black relative border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-aeo-purple/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-aeo-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Approach to <span className="text-gradient-aeo">Answer Engine Search</span>
          </h2>
          <p className="text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            Search has changed more in the last year than it has since the introduction of mobile phones, see our approach to this fundamental shift
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_0_30px_rgba(0,240,255,0.05)] group cursor-pointer">
          {isPlaying ? (
            <iframe
              src="https://drive.google.com/file/d/18D0_A6T5Xikp7wvAg0AGcDDXRtdQKlG1/preview?autoplay=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Our Approach to Answer Engine Search"
            ></iframe>
          ) : (
            <div 
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src="/aeobility-video-explainer-thubnail_1.1.2.png"
                alt="Our Approach to Answer Engine Search Explainer Video Thumbnail"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              
              <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-white text-black shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-aeo-cyan group-hover:text-black">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
