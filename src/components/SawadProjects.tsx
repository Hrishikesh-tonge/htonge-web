import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { SYSTEMS_DATA, SystemArchitecture } from '../utils/portfolioData';
import { SystemFilterCategory, filterSystems } from '../utils/systemFilter';

export const SawadProjects: React.FC = () => {
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
      {/* Sawad-Style Giant Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
            PROJECT
          </h2>
          <div className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white/20 uppercase leading-[0.95]">
            EXPERIENCE
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 no-print">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-slate-950 font-bold shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-[#8A99AD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List matching Sawad Layout */}
      <div className="space-y-4">
        {displayed.map((proj) => (
          <div
            key={proj.id}
            className="group rounded-3xl p-6 sm:p-7 bg-[#151C28]/60 hover:bg-[#151C28]/85 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg"
          >
            {/* Top row: Project Number, Title */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
                <span>SYSTEM {proj.number}</span>
                <span>•</span>
                <span className="text-[#8A99AD]">{proj.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8A99AD] font-mono">
                {proj.subtitle}
              </p>
            </div>

            {/* Impact Text */}
            <p className="text-xs sm:text-sm text-[#F0F4F8]/90 leading-relaxed font-normal">
              {proj.impact}
            </p>

            {/* Metrics and Stack Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {proj.metrics.slice(0, 2).map((m, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[#38BDF8]">
                    <strong>{m.value}</strong> <span className="text-[#8A99AD]">{m.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {proj.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#8A99AD] border border-white/5"
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
