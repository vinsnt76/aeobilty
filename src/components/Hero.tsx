'use client';

import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export function GraphVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Node definitions (Representing Search, AI, Social platforms and business nodes)
    const nodeCount = 18;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }> = [];

    const labels = ['AI Search', 'ChatGPT', 'Google Maps', 'Claude', 'Perplexity', 'LinkedIn', 'Social Leads', 'New Clients'];
    
    for (let i = 0; i < nodeCount; i++) {
      const isLabeled = i < labels.length;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isLabeled ? 5 : Math.random() * 2 + 1,
        color: isLabeled 
          ? (i % 2 === 0 ? '#00f0ff' : '#bd00ff') 
          : '#ffffff',
        label: isLabeled ? labels[i] : undefined,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, nodes[i].color === '#ffffff' ? `rgba(255,255,255,${alpha})` : `${nodes[i].color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
            grad.addColorStop(1, nodes[j].color === '#ffffff' ? `rgba(255,255,255,${alpha})` : `${nodes[j].color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.label ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw labels for key nodes
        if (node.label) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.font = '10px system-ui';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }

        // Update positions
        node.x += node.vx;
        node.y += node.vy;

        // Boundary checks
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[480px] flex items-center justify-center">
      {/* Decorative blurred background glows inside the graph container */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-aeo-cyan glow-blur opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-aeo-purple glow-blur opacity-25 pointer-events-none"></div>
      
      <canvas
        ref={canvasRef}
        className="w-full h-full border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-3xl"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden bg-black pt-12 pb-16 md:pb-24">
      {/* Absolute Radial Gradient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-radial from-aeo-purple/20 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left relative">
            {/* Geometric Grid Background Motif */}
            <div className="absolute inset-y-0 -inset-x-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-aeo-cyan animate-pulse" />
                <span>AI Search Engine Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-soehne-breit">
                Measure Your<br />
                <span className="text-aeo-cyan font-normal">[</span>AI Search<span className="text-aeo-cyan font-normal">]</span> Visibility
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl font-serif">
                AEObility helps your business show up more often across search, social, and AI so you get more leads and more enquiries without the complexity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/diagnostic"
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  Show My AI Score
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/40 pt-4">
                <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                <span>Add your website to See how AI search engines understand your business</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <GraphVisual />
          </div>
        </div>
      </div>
    </header>
  );
}
