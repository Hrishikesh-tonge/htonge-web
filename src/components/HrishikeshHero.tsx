import React, { useMemo } from 'react';
import { ArrowUpRight, Zap, Database, ShieldCheck, Flame, GitBranch } from 'lucide-react';
import { getYearsOfExperience } from '../utils/experience';

export const HrishikeshHero: React.FC = () => {
  const yoe = useMemo(() => getYearsOfExperience(), []);

  return (
    <section id="home" className="space-y-10 pt-4" aria-label="Hero Introduction">
      {/* Sawad-Style Giant Split Headline */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
          DATA ANALYTICS
        </h1>
        <div className="text-4xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-white/20 uppercase leading-[0.95]">
          & ENGINEERING
        </div>

        <p className="text-base sm:text-lg text-[#8A99AD] max-w-2xl leading-relaxed pt-3 font-normal">
          Consultant at <strong>Ernst & Young (EY)</strong> specializing in high-throughput distributed
          pipelines, governed cloud lakehouses, and enterprise Generative AI. Transforming complex ERP
          streams into production intelligence.
        </p>
      </div>

      {/* Years of Experience Milestone (Auto-updates on September 2nd each year) */}
      <div className="flex items-center gap-3.5 pt-1">
        <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
          +{yoe}
        </div>
        <div className="text-xs font-mono text-[#8A99AD] uppercase leading-tight border-l border-white/15 pl-3.5">
          Years of<br />
          Experience
        </div>
      </div>

      {/* 2 Vibrant Feature Cards matching Sawad's orange & lime cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Card 1: Warm Amber / Orange */}
        <a
          href="#projects"
          className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#F59E0B] via-[#E25A1C] to-[#C2410C] text-slate-950 flex flex-col justify-between min-h-[200px] overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-xl shadow-[#F59E0B]/20"
        >
          {/* Subtle wavy background lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
              <path d="M0 60 Q 50 10, 100 60 T 200 60" fill="none" stroke="#FFFFFF" strokeWidth="4" />
              <path d="M0 90 Q 50 40, 100 90 T 200 90" fill="none" stroke="#FFFFFF" strokeWidth="4" />
            </svg>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#E25A1C] transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-1 relative z-10">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-black/70">
              PYSPARK, SAP ERP, BENFORD RISK
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight">
              DISTRIBUTED RISK & EXCEPTION ENGINES
            </h3>
          </div>
        </a>

        {/* Card 2: Lime / Emerald Vibrant Card */}
        <a
          href="#projects"
          className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#84CC16] via-[#65A30D] to-[#4D7C0F] text-slate-950 flex flex-col justify-between min-h-[200px] overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-xl shadow-[#84CC16]/20"
        >
          {/* Subtle geometric lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
              <line x1="0" y1="20" x2="200" y2="100" stroke="#FFFFFF" strokeWidth="4" />
              <line x1="0" y1="100" x2="200" y2="20" stroke="#FFFFFF" strokeWidth="4" />
            </svg>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#65A30D] transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-1 relative z-10">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-black/70">
              SNOWFLAKE, DBT, DELTA LAKE
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white leading-tight">
              GOVERNED LAKEHOUSE & DBT MARTS
            </h3>
          </div>
        </a>
      </div>
    </section>
  );
};
