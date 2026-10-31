import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { CAREER_DATA } from '../utils/portfolioData';

export const CareerDag: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative scroll-mt-24" aria-label="Career Experience Pipeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
            <span>[ SECTION_02 ]</span>
            <span>•</span>
            <span className="text-[#8A99AD]">CHRONOLOGICAL PIPELINE // CAREER DAG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F0F4F8]">
            Career Execution & Professional Trajectory
          </h2>
          <p className="text-sm sm:text-base text-[#8A99AD] max-w-2xl">
            From enterprise cloud infrastructure to designing high-throughput PySpark engines and
            generative AI RAG pipelines for multinational clients at Ernst & Young.
          </p>
        </div>

        {/* Vertical Pipeline DAG Layout */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#F59E0B] before:via-[#38BDF8] before:to-white/10">
          {CAREER_DATA.map((job, idx) => {
            const isCurrent = idx === 0;

            return (
              <div key={job.id} className="relative group">
                {/* Glowing Node on Timeline Rail */}
                <div
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#F59E0B] border-[#F59E0B] shadow-lg shadow-[#F59E0B]/40 ring-4 ring-[#F59E0B]/20'
                      : 'bg-[#151C28] border-white/20 group-hover:border-[#38BDF8] group-hover:ring-4 group-hover:ring-[#38BDF8]/20'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-black' : 'bg-white/60'}`} />
                </div>

                {/* Job Card */}
                <div className="rounded-2xl glass-panel p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all duration-300">
                  {/* Top Line: Company, Badge, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                          {job.company}
                        </h3>
                        {job.badge && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 text-xs font-mono font-semibold">
                            <Award className="w-3.5 h-3.5" />
                            <span>{job.badge}</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-[#F59E0B] font-mono mt-1">
                        {job.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8A99AD]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{job.period}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8A99AD]" />
                        <span>{job.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#8A99AD] leading-relaxed">
                    {job.summary}
                  </p>

                  {/* Impact Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono text-[#F0F4F8] uppercase tracking-wider block">
                      Production Contributions & Milestones:
                    </span>
                    <ul className="grid grid-cols-1 gap-2">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#F0F4F8]/90 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-xs font-mono text-[#8A99AD] mr-1">Stack:</span>
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#0B0F17]/80 text-xs font-mono text-[#38BDF8] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
