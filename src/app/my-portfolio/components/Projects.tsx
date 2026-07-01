"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TrendingUp, Code, Cpu, Layers, ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date: string;
  summary: string;
  outcomes: string[];
  value?: string;
  skills?: string[];
  imageSrc?: string;
  videoSrc?: string;
  iframeSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  summary,
  outcomes,
  value,
  skills,
  imageSrc,
  videoSrc,
  iframeSrc,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-shrink-0 w-[85vw] md:w-[600px] bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-aeo-cyan/50 flex flex-col"
    >
      {/* Media Block */}
      <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allow="autoplay"
          />
        ) : videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-100">
            <Layers className="w-16 h-16 text-neutral-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-40" />
      </div>

      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
        <header className="space-y-1">
          <div className="flex items-center gap-2 text-aeo-cyan font-bold text-sm tracking-widest uppercase">
            <Cpu size={16} />
            <span>{date}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            {title}
          </h3>
        </header>

        <section className="space-y-6 flex-grow">
          <p className="text-neutral-700 leading-relaxed">
            {summary}
          </p>

          {/* Outcomes Grid */}
          {outcomes.length > 0 && (
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-200">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 text-aeo-cyan">
                    <TrendingUp size={16} />
                    <span className="font-bold text-neutral-900">
                      {outcome.split(" ").slice(-1)}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                    {outcome.split(" ").slice(0, -1).join(" ")}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Core Value */}
          {value && (
            <div className="bg-aeo-cyan/5 border-l-2 border-aeo-cyan p-4 rounded-r-xl">
              <p className="text-neutral-700 text-sm italic leading-relaxed">{value}</p>
            </div>
          )}
        </section>

        {/* Skills/Tags */}
        {skills && (
          <footer className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-1 px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-bold rounded-full uppercase tracking-tighter transition-colors group-hover:border-aeo-cyan/30"
              >
                <Code size={10} className="text-aeo-cyan" />
                {skill}
              </span>
            ))}
          </footer>
        )}
      </div>
    </motion.article>
  );
};

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const projects = [
    {
      title: "AI Video Engine: Content Automation",
      date: "Mar 2026 — AEObility",
      summary: "Architected an automated video generation engine that translates brand assets, scripts, and synthetic voiceovers into high‑converting, platform‑ready marketing assets at scale.",
      outcomes: ["Production time -90%", "Creative output 10×", "Cost per video -85%", "Engagement rate +40%"],
      value: "Empowers brands to deploy hyper-personalized video campaigns within minutes rather than weeks.",
      skills: ["AI Video Synthesis", "Speech Synthesis", "FFmpeg Automation", "Python Orchestration", "Branded Content"],
      iframeSrc: "https://drive.google.com/file/d/13TJucyE9G28aRUVRdNHWC_1HgkuC8kr-/preview"
    },
    {
      title: "Analytics Performance Report",
      date: "Feb 2026 — AEObility",
      summary: "A comprehensive SEO & AEO visibility report demonstrating performance lift, attribution signals, and search volume growth across Google and AI search engines.",
      outcomes: ["Search volume +140%", "AI mentions +85%", "Traffic attribution 3×", "Visibility index +92%"],
      value: "Translates raw model retrieval metrics into a clear, actionable visibility roadmap.",
      skills: ["Data Analytics", "Performance Tracking", "Search Intelligence", "Client Reporting", "AEO Attribution"],
      iframeSrc: "https://drive.google.com/file/d/1m03il0l5T3H8W8ZqaoSK7DnmL-35YZpL/preview"
    },
    {
      title: "Baby Bento Social Reel Generator",
      date: "Apr 2026 — Baby Bento",
      summary: "Engineered a workflow automation tool for Baby Bento that compiles raw product imagery, user‑generated reviews, and trending audio tracks into polished, high‑impact Instagram Reels and TikToks.",
      outcomes: ["Weekly reels +300%", "Production workflow -95%", "Reel views +150%", "Audience growth +45%"],
      value: "Seamlessly scales social media marketing pipelines through programmatic content synthesis.",
      skills: ["Social Automation", "Video Synthesis APIs", "Node.js", "Instagram Graph API", "Content Generation"],
      imageSrc: "/projects/baby-bento-reels.jpg"
    },
    {
      title: "Local SEO & Maps Accelerator",
      date: "Jan 2026 — AEObility",
      summary: "Developed a local signals automation tool that synchronizes business metadata, local citations, and geo-targeted landing pages to dominate search engines' local Map Packs.",
      outcomes: ["Maps visibility +180%", "Local enquiries +85%", "Map Pack ranks #1-3", "Search traffic +120%"],
      value: "Ensures Australian small businesses capture high-intent local search queries at the exact moment of purchase intent.",
      skills: ["Local SEO", "Google Maps API", "Schema Markups", "Geo-Targeting", "Lead Generation"],
      imageSrc: "/projects/maps-accelerator.jpg"
    },
    {
      title: "AI Onboarding Automation",
      date: "May 2026 — AEObility",
      summary: "Built a zero‑touch client onboarding funnel that uses AI to analyze client domains, generate instant SEO/AEO visibility reports, and configure personalized roadmaps in under 60 seconds.",
      outcomes: ["Onboarding time -98%", "Conversion rate +35%", "Instant reports 100%", "Manual hours saved 40/mo"],
      value: "Eliminates traditional sales friction by delivering deep, customized value before the first discovery call.",
      skills: ["Workflow Automation", "API Integrations", "OpenAI API", "PDF Generation", "Next.js"],
      imageSrc: "/projects/onboarding-engine.jpg"
    }
  ];

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-aeo-cyan font-bold text-sm tracking-widest uppercase">
              <BarChart3 size={18} />
              <span>Portfolio</span>
            </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Featured <span className="text-gradient-aeo">Impact.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-aeo-cyan to-aeo-purple rounded-full" />
          </div>

          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-4 rounded-full border border-neutral-800 text-white hover:bg-neutral-900 hover:border-aeo-cyan transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-4 rounded-full border border-neutral-800 text-white hover:bg-neutral-900 hover:border-aeo-cyan transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </header>
      </div>

      {/* Carousel Track */}
      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-8 px-6 md:px-[calc((100vw-1200px)/2)]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {/* Spacer for end padding */}
          <div className="flex-shrink-0 w-6 md:w-32" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;