import React from 'react';

export default function VideoExplainer() {

  return (
    <section id="explainer-video" className="py-20 bg-black relative border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-aeo-purple/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-aeo-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        <div className="relative py-4">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-soehne-breit">
              Our Approach to <span className="text-gradient-aeo">Answer Engine Search</span>
            </h2>
            <p className="text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed font-serif">
              Search has changed more in the last year than it has since the introduction of mobile phones, see our approach to this fundamental shift
            </p>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
          <video
            controls
            preload="metadata"
            poster="/aeobility-video-explainer-thubnail_1.1.2.png"
            className="w-full h-full object-cover"
          >
            <source src="/videos/explainer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
