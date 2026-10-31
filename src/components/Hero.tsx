import React from 'react';
import { ArrowDown, Linkedin, Mail, ExternalLink, Code2, Award, ShieldCheck, Terminal } from 'lucide-react';
import { DataPrismCanvas } from './DataPrismCanvas';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden" aria-label="Introduction">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#8A99AD] mb-6 tracking-wide">
          <span className="text-[#F59E0B] font-semibold">[ MUMBAI, MH, IN ]</span>
          <span className="text-white/20">•</span>
          <span className="text-[#F0F4F8]">[ CONSULTANT @ ERNST & YOUNG ]</span>
          <span className="text-white/20">•</span>
          <span className="text-[#38BDF8]">[ DATABRICKS GEN AI CERTIFIED ]</span>
        </div>

        {/* Hero Split Layout: Left Headline & Prose, Right Interactive Prism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Anchor */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F0F4F8] leading-[1.12]">
              Hrishikesh Tonge —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBD38D] to-[#38BDF8]">
                Engineering Governed Data Pipelines,
              </span>{' '}
              Distributed Risk Engines & Enterprise RAG.
            </h1>

            <p className="text-base sm:text-lg text-[#8A99AD] leading-relaxed max-w-xl font-normal">
              Data Analytics & Engineering Consultant specializing in{' '}
              <strong className="text-[#F0F4F8] font-semibold">PySpark</strong>,{' '}
              <strong className="text-[#F0F4F8] font-semibold">Snowflake</strong>,{' '}
              <strong className="text-[#F0F4F8] font-semibold">dbt</strong>, and{' '}
              <strong className="text-[#F0F4F8] font-semibold">Databricks</strong>. Turning complex ERP
              streams and unstructured documents into production-grade intelligence.
            </p>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 font-bold font-mono text-xs sm:text-sm tracking-tight transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#F59E0B]/20 cursor-pointer"
              >
                <span>Explore Engineered Systems</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                <a
                  href="https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#F0F4F8] hover:text-[#38BDF8] hover:bg-white/5 transition-colors"
                  aria-label="Hrishikesh Tonge on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href="https://www.hackerrank.com/profile/hrishikeshtonge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#F0F4F8] hover:text-[#10B981] hover:bg-white/5 transition-colors"
                  aria-label="Hrishikesh Tonge on HackerRank"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">HackerRank</span>
                </a>

                <a
                  href="mailto:hrishikeshtonge@gmail.com"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#F0F4F8] hover:text-[#F59E0B] hover:bg-white/5 transition-colors"
                  aria-label="Email Hrishikesh Tonge"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>

            {/* Quick credentials teaser */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#8A99AD] pt-2">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>EY Client Extraordinaire</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Databricks Certified</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Data Prism Canvas */}
          <div className="lg:col-span-6 w-full">
            <DataPrismCanvas />
          </div>
        </div>

        {/* Metrics Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl glass-panel">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F59E0B]">45M+</div>
            <div className="text-xs font-medium text-[#F0F4F8] mt-1">ERP Records / Run</div>
            <div className="text-[11px] text-[#8A99AD] font-mono mt-0.5">Automated Three-Way Matching</div>
          </div>

          <div className="p-4 rounded-xl glass-panel">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#38BDF8]">-62%</div>
            <div className="text-xs font-medium text-[#F0F4F8] mt-1">Warehouse Compute Cost</div>
            <div className="text-[11px] text-[#8A99AD] font-mono mt-0.5">Incremental dbt Architectures</div>
          </div>

          <div className="p-4 rounded-xl glass-panel">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#10B981]">98.4%</div>
            <div className="text-xs font-medium text-[#F0F4F8] mt-1">KRI Extraction Precision</div>
            <div className="text-[11px] text-[#8A99AD] font-mono mt-0.5">Audit RAG & FAISS Vectors</div>
          </div>

          <div className="p-4 rounded-xl glass-panel">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F0F4F8]">100%</div>
            <div className="text-xs font-medium text-[#F0F4F8] mt-1">GxP Audit Traceability</div>
            <div className="text-[11px] text-[#8A99AD] font-mono mt-0.5">Pharmaceutical CMC Models</div>
          </div>
        </div>
      </div>
    </section>
  );
};
