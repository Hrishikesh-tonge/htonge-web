import React, { useMemo } from 'react';
import { ArrowUpRight, Database, Flame, Sparkles, Activity, Layers } from 'lucide-react';
import { getYearsOfExperience } from '../utils/experience';

export const HrishikeshHero: React.FC = () => {
  const yoe = useMemo(() => getYearsOfExperience(), []);

  return (
    <section id="home" className="space-y-10 pt-4" aria-label="Hero Introduction">
      {/* Category Tag & Giant Split Headline */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F59E0B] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>ENTERPRISE DATA ARCHITECT & CONSULTANT</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
            DATA ANALYTICS
          </h1>
          <div className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-display tracking-tight bg-gradient-to-r from-white/70 via-white/40 to-white/15 bg-clip-text text-transparent uppercase leading-[0.95]">
            & ENGINEERING
          </div>
        </div>

        <p className="text-base sm:text-lg text-[#8A99AD] max-w-2xl leading-relaxed pt-2 font-normal">
          Consultant at <strong className="text-white font-semibold">Ernst & Young (EY)</strong> specializing in high-throughput distributed
          pipelines, governed cloud lakehouses, and enterprise Generative AI. Transforming complex ERP
          streams into production intelligence.
        </p>
      </div>

      {/* Years of Experience Milestone & Credential Highlights */}
      <div className="flex flex-wrap items-center gap-6 pt-1">
        <div className="flex items-center gap-3.5">
          <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            +{yoe}
          </div>
          <div className="text-xs font-mono text-[#8A99AD] uppercase leading-tight border-l border-white/15 pl-3.5">
            Years of<br />
            Experience
          </div>
        </div>

        <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono text-[#8A99AD]">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>Active in EY Data & AI Advisory Practice</span>
        </div>
      </div>

      {/* 2 Modern Frosted Obsidian Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Card 1: Warm Amber / Bronze Risk & Exception Engines */}
        <a
          href="#projects"
          className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#1C2333]/90 via-[#141B28]/80 to-[#0F141E]/90 border border-amber-500/30 hover:border-amber-400/70 text-white flex flex-col justify-between min-h-[220px] overflow-hidden transition-all duration-300 hover:translate-y-[-2px] shadow-xl shadow-black/40 hover:shadow-amber-500/10"
        >
          {/* Subtle Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/15 via-orange-500/5 to-transparent rounded-full blur-2xl pointer-events-none" 
          />

          <div className="flex items-center justify-between relative z-10">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-[#F59E0B]">
              <Flame className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-[#F59E0B] group-hover:text-slate-950 group-hover:border-[#F59E0B] transition-all duration-300 shadow-sm">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <div className="space-y-2 relative z-10 pt-4">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#F59E0B] flex items-center gap-1.5">
              <span>PYSPARK • SAP ERP • BENFORD RISK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight group-hover:text-amber-200 transition-colors">
              DISTRIBUTED RISK & EXCEPTION ENGINES
            </h3>
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-[#8A99AD]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>45M+ Transactions Analyzed • Sub-Hour SLA</span>
            </div>
          </div>
        </a>

        {/* Card 2: Electric Lakehouse Cyan & dbt Marts */}
        <a
          href="#projects"
          className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#132233]/90 via-[#101A27]/80 to-[#0F141E]/90 border border-sky-500/30 hover:border-sky-400/70 text-white flex flex-col justify-between min-h-[220px] overflow-hidden transition-all duration-300 hover:translate-y-[-2px] shadow-xl shadow-black/40 hover:shadow-sky-500/10"
        >
          {/* Subtle Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sky-500/15 via-blue-500/5 to-transparent rounded-full blur-2xl pointer-events-none" 
          />

          <div className="flex items-center justify-between relative z-10">
            <div className="p-3 rounded-2xl bg-sky-500/15 border border-sky-500/30 text-[#38BDF8]">
              <Database className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-[#38BDF8] group-hover:text-slate-950 group-hover:border-[#38BDF8] transition-all duration-300 shadow-sm">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <div className="space-y-2 relative z-10 pt-4">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#38BDF8] flex items-center gap-1.5">
              <span>SNOWFLAKE • DBT • DELTA LAKE • RAG</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight group-hover:text-sky-200 transition-colors">
              GOVERNED LAKEHOUSE & DBT MARTS
            </h3>
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-[#8A99AD]">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>Incremental Models • 100% Audit Lineage</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
