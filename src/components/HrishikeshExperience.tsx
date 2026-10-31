import React from 'react';
import { ArrowUpRight, Award, Calendar, MapPin } from 'lucide-react';
import { CAREER_DATA } from '../utils/portfolioData';

export const HrishikeshExperience: React.FC = () => {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24 pt-6" aria-label="Professional Experience">
      {/* Sawad-Style Giant Section Header */}
      <div className="space-y-1 border-b border-white/10 pb-4">
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
          CAREER
        </h2>
        <div className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white/20 uppercase leading-[0.95]">
          HISTORY
        </div>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-4">
        {CAREER_DATA.map((job) => (
          <div
            key={job.id}
            className="group rounded-3xl p-6 sm:p-7 bg-[#151C28]/60 hover:bg-[#151C28]/90 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4"
          >
            {/* Top row: Company, Role, Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {job.company}
                  </h3>
                  {job.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 text-xs font-mono font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{job.badge}</span>
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#F59E0B] font-display">
                  {job.role}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8A99AD] shrink-0">
                <span>{job.period}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-[#8A99AD] leading-relaxed">
              {job.summary}
            </p>

            {/* Achievements Bullet Points */}
            <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[#F0F4F8]/90">
              {job.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#F59E0B] font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
              <span className="text-xs font-mono text-[#8A99AD] mr-1">Stack:</span>
              {job.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-[#8A99AD] border border-white/5"
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
