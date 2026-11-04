import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { SYSTEMS_DATA, SystemArchitecture } from '../utils/portfolioData';
import { SystemFilterCategory, filterSystems } from '../utils/systemFilter';

export const HrishikeshProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SystemFilterCategory>('All');

  const categories: SystemFilterCategory[] = [
    'All',
    'PySpark & Distributed',
    'Snowflake & dbt',
    'GenAI & RAG',
  ];

  const displayed = filterSystems(SYSTEMS_DATA, activeCategory);

  return (
    <section id="projects" className="space-y-8 scroll-mt-24 pt-6" aria-label="Recent Projects">
      {/* Executive Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
            <span>[ 01 // PRODUCTION ARCHITECTURES ]</span>
            <span>•</span>
            <span className="text-[#8A99AD]">SYSTEMS DOSSIER</span>
          </div>
          <div className="space-y-0.5">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
              PROJECT
            </h2>
            <div className="text-3xl sm:text-5xl font-black font-display tracking-tight bg-gradient-to-r from-white/70 to-white/20 bg-clip-text text-transparent uppercase leading-[0.95]">
              EXPERIENCE
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 no-print">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-slate-950 font-bold shadow-md shadow-[#F59E0B]/20 border border-transparent'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#8A99AD] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List in Modern Frosted Obsidian Cards */}
      <div className="space-y-4">
        {displayed.map((proj) => (
          <div
            key={proj.id}
            className="group rounded-3xl p-6 sm:p-7 bg-[#111622]/70 hover:bg-[#141B29]/90 border border-white/10 hover:border-amber-500/35 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl hover:shadow-2xl relative overflow-hidden ring-1 ring-white/5"
          >
            {/* Top Subtle Rim Gradient */}
            <div 
              aria-hidden="true" 
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-amber-500/40 transition-colors" 
            />

            {/* Top row: Project Number, Category, Status */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-md bg-[#F59E0B]/15 text-[#F59E0B] font-bold border border-[#F59E0B]/30">
                  SYSTEM {proj.number}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[#38BDF8] font-medium">{proj.category}</span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>PROD GRADE</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-100 transition-colors leading-snug">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F59E0B]/90 font-mono">
                {proj.subtitle}
              </p>
            </div>

            {/* Impact Text */}
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal">
              {proj.impact}
            </p>

            {/* Metrics and Stack Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {proj.metrics.slice(0, 2).map((m, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] flex items-center gap-1.5"
                  >
                    <strong className="text-white">{m.value}</strong>
                    <span className="text-[#8A99AD]">{m.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {proj.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#8A99AD] group-hover:text-slate-200 border border-white/5 group-hover:border-white/15 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
