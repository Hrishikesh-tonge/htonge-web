import React from 'react';
import { SKILL_TOPOLOGY_CATEGORIES } from '../utils/portfolioData';

export const ResumeSkills: React.FC = () => {
  return (
    <section id="skills" className="py-8 border-b border-white/10 space-y-6 scroll-mt-20" aria-label="Technical Skills Matrix">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F59E0B] print-heading">
          Technical Skills & Tooling
        </h2>
        <span className="text-xs font-mono text-[#8A99AD] no-print">
          23 Core Technologies
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_TOPOLOGY_CATEGORIES.map((cat) => (
          <div key={cat.category} className="p-4 rounded-xl glass-panel space-y-2 border border-white/10">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
              {cat.category}
            </h3>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {cat.skills.map((s) => (
                <span
                  key={s.name}
                  className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-[#F0F4F8] border border-white/5 hover:border-[#F59E0B]/40 transition-colors"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
