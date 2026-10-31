import React, { useState } from 'react';
import { SYSTEMS_DATA, SystemArchitecture } from '../utils/portfolioData';
import { SystemFilterCategory, filterSystems } from '../utils/systemFilter';
import { CheckCircle2, Layers } from 'lucide-react';

export const ResumeProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SystemFilterCategory>('All');

  const categories: SystemFilterCategory[] = [
    'All',
    'PySpark & Distributed',
    'Snowflake & dbt',
    'GenAI & RAG',
  ];

  const displayed = filterSystems(SYSTEMS_DATA, activeCategory);

  return (
    <section id="projects" className="py-8 border-b border-white/10 space-y-6 scroll-mt-20" aria-label="Key Production Systems and Projects">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F59E0B] print-heading">
          Key Production Systems & Engineering Deliverables
        </h2>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-1.5 no-print">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F59E0B] text-slate-950 font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-[#8A99AD] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayed.map((sys) => (
          <div
            key={sys.id}
            className="rounded-xl glass-panel p-5 space-y-3 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#F59E0B] font-bold">
                      SYSTEM {sys.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#8A99AD]">• {sys.category}</span>
                  </div>
                  <h3 className="text-base font-bold font-display text-white mt-1 leading-snug">
                    {sys.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#8A99AD] font-mono leading-relaxed">
                {sys.subtitle}
              </p>

              <p className="text-xs text-[#F0F4F8]/90 leading-relaxed pt-1">
                {sys.impact}
              </p>

              {/* Architectural Highlights */}
              <ul className="space-y-1.5 pt-1 text-[11px] text-[#8A99AD]">
                {sys.architecturalHighlights.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics & Stack */}
            <div className="space-y-2 pt-3 border-t border-white/5">
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                {sys.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx} className="p-1.5 rounded bg-white/5">
                    <span className="text-[#38BDF8] font-bold block">{m.value}</span>
                    <span className="text-[10px] text-[#8A99AD] truncate block">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {sys.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#8A99AD] border border-white/5"
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
