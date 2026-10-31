import React from 'react';
import { TECH_ITEMS } from './TechLogos';

export const HrishikeshTools: React.FC = () => {
  return (
    <section id="tools" className="space-y-8 scroll-mt-24 pt-6" aria-label="Tools and Technologies">
      {/* Sawad-Style Giant Section Header */}
      <div className="space-y-1 border-b border-white/10 pb-4">
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
          TOOLS &
        </h2>
        <div className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white/20 uppercase leading-[0.95]">
          PLATFORMS
        </div>
      </div>

      <p className="text-sm text-[#8A99AD] max-w-xl">
        Official production technologies, cloud engines, and distributed frameworks used daily in
        enterprise risk detection and data warehouse architectures.
      </p>

      {/* Grid of Tools with Official SVG Logos matching Sawad */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TECH_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl p-4 sm:p-5 bg-[#151C28]/60 hover:bg-[#151C28]/95 border border-white/10 hover:border-white/25 transition-all duration-200 flex items-center gap-4 cursor-default shadow-md hover:shadow-xl"
          >
            {/* White / Translucent Square Logo Container matching Sawad */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2.5 shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Label and Category */}
            <div className="space-y-0.5 overflow-hidden">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#F59E0B] transition-colors truncate">
                  {item.name}
                </h3>
                {item.verified && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#FF3621]/20 text-[#FF3621] font-bold">
                    CERTIFIED
                  </span>
                )}
              </div>
              <p className="text-xs text-[#8A99AD] font-mono truncate">
                {item.category}
              </p>
              <p className="text-[11px] text-white/50 truncate">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
