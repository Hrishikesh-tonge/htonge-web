import React, { useState } from 'react';
import { TECH_ITEMS, TechItem } from './TechLogos';
import { Wrench, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const HrishikeshTools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterCategories = [
    'All',
    'Distributed & Lakehouse',
    'SQL & Warehouse',
    'AI & Automation',
  ];

  const filteredItems = TECH_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Distributed & Lakehouse') {
      return ['databricks', 'pyspark', 'scala'].includes(item.id);
    }
    if (selectedCategory === 'SQL & Warehouse') {
      return ['snowflake', 'dbt', 'bigquery', 'azure', 'sql', 'mongodb'].includes(item.id);
    }
    if (selectedCategory === 'AI & Automation') {
      return ['langchain', 'python', 'powerbi'].includes(item.id);
    }
    return true;
  });

  return (
    <section id="tools" className="space-y-8 scroll-mt-24 pt-6" aria-label="Tools and Technologies">
      {/* Executive Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
            <span>[ 03 // PRODUCTION TOOLCHAIN ]</span>
            <span>•</span>
            <span className="text-[#8A99AD]">CORE TECH STACK</span>
          </div>
          <div className="space-y-0.5">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
              TOOLS &
            </h2>
            <div className="text-3xl sm:text-5xl font-black font-display tracking-tight bg-gradient-to-r from-white/70 to-white/20 bg-clip-text text-transparent uppercase leading-[0.95]">
              PLATFORMS
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 no-print">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-slate-950 font-bold shadow-md shadow-[#F59E0B]/20 border border-transparent'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#8A99AD] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-[#8A99AD] max-w-xl">
        Official production technologies, cloud engines, and distributed frameworks used daily in
        enterprise risk detection and lakehouse architectures.
      </p>

      {/* Grid of Tools in Frosted Obsidian Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl p-4 sm:p-5 bg-[#111622]/70 hover:bg-[#141B29]/90 border border-white/10 hover:border-amber-500/35 transition-all duration-300 flex items-center gap-4 cursor-default shadow-lg hover:shadow-xl relative overflow-hidden ring-1 ring-white/5"
          >
            {/* Dark Frosted Glass Logo Container (No harsh white cutouts) */}
            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-amber-500/35 group-hover:bg-white/[0.08] flex items-center justify-center p-2.5 shrink-0 shadow-inner group-hover:scale-105 transition-all duration-300">
              {item.icon}
            </div>

            {/* Label, Description & Status */}
            <div className="space-y-0.5 overflow-hidden flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-amber-200 transition-colors truncate">
                  {item.name}
                </h3>
                {item.verified && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF3621]/15 text-[#FF3621] border border-[#FF3621]/30 font-bold tracking-wider shrink-0">
                    CERTIFIED
                  </span>
                )}
              </div>
              <p className="text-xs text-[#F59E0B]/90 font-mono truncate">
                {item.category}
              </p>
              <p className="text-[11px] text-[#8A99AD] truncate">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
