import React from 'react';
import { ArrowUpRight, Award, Calendar, MapPin, Briefcase } from 'lucide-react';
import { CAREER_DATA } from '../utils/portfolioData';

export const HrishikeshExperience: React.FC = () => {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24 pt-6" aria-label="Professional Experience">
      {/* Executive Section Header */}
      <div className="space-y-2 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
          <span>[ 02 // CAREER TRAJECTORY ]</span>
          <span>•</span>
          <span className="text-[#8A99AD]">PROFESSIONAL ENGAGEMENTS</span>
        </div>
        <div className="space-y-0.5">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
            CAREER
          </h2>
          <div className="text-3xl sm:text-5xl font-black font-display tracking-tight bg-gradient-to-r from-white/70 to-white/20 bg-clip-text text-transparent uppercase leading-[0.95]">
            HISTORY
          </div>
        </div>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-5">
        {CAREER_DATA.map((job) => (
          <div
            key={job.id}
            className="group rounded-3xl p-6 sm:p-7 bg-[#111622]/70 hover:bg-[#141B29]/90 border border-white/10 hover:border-amber-500/35 transition-all duration-300 space-y-4 shadow-xl relative overflow-hidden ring-1 ring-white/5"
          >
            {/* Top Subtle Rim Gradient */}
            <div 
              aria-hidden="true" 
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-amber-500/40 transition-colors" 
            />

            {/* Top row: Company, Role, Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-amber-100 transition-colors">
                    {job.company}
                  </h3>
                  {job.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 text-xs font-mono font-bold shadow-sm">
                      <Award className="w-3.5 h-3.5" />
                      <span>{job.badge}</span>
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#F59E0B] font-display">
                  {job.role}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8A99AD] bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/5 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{job.period}</span>
                <span className="text-white/20">•</span>
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{job.location}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {job.summary}
            </p>

            {/* Achievements Bullet Points */}
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#CBD5E1]">
              {job.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#F59E0B] font-bold mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
              <span className="text-xs font-mono text-[#8A99AD] mr-1">Stack:</span>
              {job.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[11px] font-mono text-[#8A99AD] group-hover:text-slate-200 border border-white/5 group-hover:border-white/15 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
