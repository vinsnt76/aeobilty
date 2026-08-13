'use client';

import React, { useState } from 'react';
import { Sliders, Calculator, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ScoreCalculator() {
  const [semantic, setSemantic] = useState<number>(75);
  const [technical, setTechnical] = useState<number>(80);
  const [entity, setEntity] = useState<number>(65);
  const [competitor, setCompetitor] = useState<number>(70);
  const [kg, setKg] = useState<number>(60);

  // Score = 0.40S + 0.20T + 0.15E + 0.15C + 0.10K
  const finalScore = Math.min(100, Math.max(0, Math.round(
    0.40 * semantic +
    0.20 * technical +
    0.15 * entity +
    0.15 * competitor +
    0.10 * kg
  )));

  const getScoreRating = (score: number) => {
    if (score >= 80) return { label: 'Optimal AI Visibility', color: 'text-emerald-400', border: 'border-emerald-500/40' };
    if (score >= 60) return { label: 'Moderate AI Readiness', color: 'text-aeo-cyan', border: 'border-aeo-cyan/40' };
    if (score >= 40) return { label: 'Retrieval Risk Identified', color: 'text-amber-400', border: 'border-amber-500/40' };
    return { label: 'High Information Dilution', color: 'text-red-400', border: 'border-red-500/40' };
  };

  const rating = getScoreRating(finalScore);

  const resetToDefault = () => {
    setSemantic(75);
    setTechnical(80);
    setEntity(65);
    setCompetitor(70);
    setKg(60);
  };

  return (
    <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>Interactive AI Readiness Score Simulator</span>
          </div>
          <h4 className="text-base font-bold text-white">5-Category Score Weighting Simulator</h4>
          <p className="text-xs text-white/60 font-light">
            Adjust category sub-scores (0-100) to observe real-time weighted normalization.
          </p>
        </div>

        <button
          onClick={resetToDefault}
          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-white/70 hover:text-white flex items-center gap-1.5 transition-all font-mono"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Default</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sliders Column */}
        <div className="space-y-4 font-sans text-xs">
          {/* Semantic Relevance (40%) */}
          <div className="space-y-1.5 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <div className="flex justify-between items-center font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-aeo-cyan" />
                Semantic Relevance (S)
              </span>
              <span className="text-aeo-cyan font-bold font-mono text-sm">{semantic} / 100 <span className="text-white/40 text-[10px]">(Weight: 40%)</span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={semantic}
              onChange={(e) => setSemantic(Number(e.target.value))}
              className="w-full accent-aeo-cyan cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
          </div>

          {/* Technical Readiness (20%) */}
          <div className="space-y-1.5 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <div className="flex justify-between items-center font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white" />
                Technical Readiness (T)
              </span>
              <span className="text-white font-bold font-mono text-sm">{technical} / 100 <span className="text-white/40 text-[10px]">(Weight: 20%)</span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={technical}
              onChange={(e) => setTechnical(Number(e.target.value))}
              className="w-full accent-white cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
          </div>

          {/* Entity Clarity (15%) */}
          <div className="space-y-1.5 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <div className="flex justify-between items-center font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Entity Clarity (E)
              </span>
              <span className="text-purple-300 font-bold font-mono text-sm">{entity} / 100 <span className="text-white/40 text-[10px]">(Weight: 15%)</span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={entity}
              onChange={(e) => setEntity(Number(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
          </div>

          {/* Competitor Coverage (15%) */}
          <div className="space-y-1.5 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <div className="flex justify-between items-center font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Competitor Coverage (C)
              </span>
              <span className="text-amber-300 font-bold font-mono text-sm">{competitor} / 100 <span className="text-white/40 text-[10px]">(Weight: 15%)</span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={competitor}
              onChange={(e) => setCompetitor(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
          </div>

          {/* Knowledge Graph Corroboration (10%) */}
          <div className="space-y-1.5 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <div className="flex justify-between items-center font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                KG Corroboration (K)
              </span>
              <span className="text-emerald-400 font-bold font-mono text-sm">{kg} / 100 <span className="text-white/40 text-[10px]">(Weight: 10%)</span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={kg}
              onChange={(e) => setKg(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
          </div>
        </div>

        {/* Dynamic Display Card */}
        <div className={`p-6 bg-black rounded-2xl border ${rating.border} flex flex-col items-center justify-center text-center space-y-4 shadow-2xl relative overflow-hidden`}>
          <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Calculated Readiness Score</div>

          <div className="relative flex items-center justify-center">
            <span className={`text-5xl sm:text-6xl font-extrabold font-mono tracking-tight ${rating.color}`}>
              {finalScore}
            </span>
            <span className="text-xl font-mono text-white/40 ml-1">/100</span>
          </div>

          <div className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold ${rating.color}`}>
            {rating.label}
          </div>

          <div className="text-[11px] font-mono text-white/50 border-t border-white/10 pt-3 w-full text-center leading-relaxed">
            <div>Score = 0.40({semantic}) + 0.20({technical}) + 0.15({entity}) + 0.15({competitor}) + 0.10({kg})</div>
            <div className="text-aeo-cyan font-bold mt-1">= {finalScore}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
