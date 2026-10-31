import React, { useState } from 'react';
import { Filter, Maximize2, Sparkles, X, ArrowUpRight } from 'lucide-react';
import { SystemArchitecture, SYSTEMS_DATA } from '../utils/portfolioData';
import { SystemFilterCategory, filterSystems } from '../utils/systemFilter';
import { BenfordVisual } from './visuals/BenfordVisual';
import { RagMatrixVisual } from './visuals/RagMatrixVisual';
import { IncrementalDagVisual } from './visuals/IncrementalDagVisual';
import { PharmaLineageVisual } from './visuals/PharmaLineageVisual';
import { TemporalSnapshotVisual } from './visuals/TemporalSnapshotVisual';
import { IndexReconciliationVisual } from './visuals/IndexReconciliationVisual';

interface FeaturedSystemsProps {
  onSelectSystem: (system: SystemArchitecture) => void;
  activeSkillTag: string | null;
  onClearSkillTag: () => void;
}

export const FeaturedSystems: React.FC<FeaturedSystemsProps> = ({
  onSelectSystem,
  activeSkillTag,
  onClearSkillTag,
}) => {
  const [activeCategory, setActiveCategory] = useState<SystemFilterCategory>('All');

  const categories: SystemFilterCategory[] = [
    'All',
    'PySpark & Distributed',
    'Snowflake & dbt',
    'GenAI & RAG',
  ];

  const displayedSystems = filterSystems(SYSTEMS_DATA, activeCategory, activeSkillTag);

  const renderVisual = (type: SystemArchitecture['visualType']) => {
    switch (type) {
      case 'benford':
        return <BenfordVisual />;
      case 'rag_matrix':
        return <RagMatrixVisual />;
      case 'incremental_dag':
        return <IncrementalDagVisual />;
      case 'pharma_lineage':
        return <PharmaLineageVisual />;
      case 'temporal_snapshot':
        return <TemporalSnapshotVisual />;
      case 'index_reconciliation':
        return <IndexReconciliationVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="architecture" className="py-20 sm:py-28 relative scroll-mt-24" aria-label="Featured Systems and Architectures">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
              <span>[ SECTION_01 ]</span>
              <span>•</span>
              <span className="text-[#8A99AD]">SYSTEMS & ARCHITECTURE DOSSIER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F0F4F8]">
              Engineered Production Architectures
            </h2>
            <p className="text-sm sm:text-base text-[#8A99AD] max-w-2xl">
              Deterministic data pipelines, distributed risk algorithms, and governed semantic marts
              powering Fortune 500 manufacturing, audit, and life-sciences operations.
            </p>
          </div>

          {/* Filter Bar Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#F59E0B] text-slate-950 font-bold shadow-md shadow-[#F59E0B]/20'
                    : 'bg-white/5 hover:bg-white/10 text-[#8A99AD] hover:text-[#F0F4F8] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}

            {activeSkillTag && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8]">
                <span>Filter: {activeSkillTag}</span>
                <button
                  type="button"
                  onClick={onClearSkillTag}
                  className="hover:text-white transition-colors"
                  aria-label="Clear skill filter"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {displayedSystems.map((system) => {
            const isLarge = system.isLarge;

            return (
              <div
                key={system.id}
                onClick={() => onSelectSystem(system)}
                className={`group relative rounded-2xl glass-panel p-5 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#F59E0B]/40 hover:shadow-2xl hover:shadow-[#F59E0B]/5 ${
                  isLarge
                    ? 'lg:col-span-12 xl:col-span-8 bg-gradient-to-br from-[#151C28]/90 via-[#151C28]/60 to-[#0B0F17]/90'
                    : 'lg:col-span-6 xl:col-span-4'
                }`}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${system.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectSystem(system);
                  }
                }}
              >
                {/* Card Top Label & Inspect Button */}
                <div className="flex items-start justify-between gap-2 pb-4">
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#F59E0B] font-bold">
                      SYS_{system.number}
                    </span>
                    <span className="text-[#8A99AD] text-[11px] truncate">{system.category}</span>
                  </div>

                  <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#F59E0B]/20 text-[#8A99AD] group-hover:text-[#F59E0B] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-[#F59E0B] transition-colors leading-tight">
                    {system.title}
                  </h3>
                  <p className="text-xs text-[#8A99AD] font-mono leading-relaxed line-clamp-2">
                    {system.subtitle}
                  </p>
                </div>

                {/* Abstract Visual Schematic inside Card */}
                <div className="my-3 overflow-hidden rounded-xl border border-white/5 bg-[#0B0F17]/60">
                  {renderVisual(system.visualType)}
                </div>

                {/* Impact Statement */}
                <p className="text-xs text-[#8A99AD] leading-relaxed my-3 line-clamp-3">
                  {system.impact}
                </p>

                {/* Metrics Pill Strip */}
                <div className="grid grid-cols-2 gap-2 my-2 py-2 border-y border-white/5">
                  {system.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="text-left font-mono">
                      <div className="text-xs sm:text-sm font-bold text-[#38BDF8]">{m.value}</div>
                      <div className="text-[10px] text-[#8A99AD] truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Tech Tags */}
                <div className="pt-3 flex flex-wrap items-center gap-1.5">
                  {system.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-[#8A99AD] group-hover:text-[#F0F4F8] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {system.tags.length > 4 && (
                    <span className="text-[10px] font-mono text-[#8A99AD]">
                      +{system.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
