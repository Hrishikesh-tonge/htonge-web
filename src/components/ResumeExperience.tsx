import React from 'react';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { CAREER_DATA } from '../utils/portfolioData';

export const ResumeExperience: React.FC = () => {
  return (
    <section id="experience" className="py-8 border-b border-white/10 space-y-6 scroll-mt-20" aria-label="Professional Experience">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F59E0B] print-heading">
          Professional Experience
        </h2>
        <span className="text-xs font-mono text-[#8A99AD] no-print">
          3 Roles · Enterprise Analytics & Engineering
        </span>
      </div>

      <div className="space-y-8">
        {CAREER_DATA.map((job) => (
          <div key={job.id} className="space-y-3">
            {/* Header: Title, Company, Period, Location */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  {job.role}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm font-semibold text-[#38BDF8]">{job.company}</span>
                  {job.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/30 font-bold">
                      <Award className="w-3 h-3" /> {job.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#8A99AD] shrink-0">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{job.period}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{job.location}</span>
                </span>
              </div>
            </div>

            {/* Role summary */}
            <p className="text-xs sm:text-sm text-[#8A99AD] italic">
              {job.summary}
            </p>

            {/* Core Bullet Points */}
            <ul className="space-y-2 text-xs sm:text-sm text-[#F0F4F8]/90 pl-1">
              {job.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#F59E0B] mt-1.5 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stack Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-mono text-[#8A99AD]">Environment:</span>
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-[#8A99AD] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
