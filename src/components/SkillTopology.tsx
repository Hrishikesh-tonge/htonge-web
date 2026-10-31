import React from 'react';
import { Network, Sparkles, Database, Terminal, Cpu, Cloud, Check } from 'lucide-react';
import { SKILL_TOPOLOGY_CATEGORIES } from '../utils/portfolioData';

interface SkillTopologyProps {
  activeSkillTag: string | null;
  onSelectSkill: (skillName: string) => void;
}

export const SkillTopology: React.FC<SkillTopologyProps> = ({ activeSkillTag, onSelectSkill }) => {
  const getDomainIcon = (cat: string) => {
    switch (cat) {
      case 'Languages':
        return <Terminal className="w-4 h-4 text-[#F59E0B]" />;
      case 'Frameworks & Libraries':
        return <Cpu className="w-4 h-4 text-[#38BDF8]" />;
      case 'Cloud & Platforms':
        return <Cloud className="w-4 h-4 text-[#10B981]" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-[#F43F5E]" />;
      default:
        return <Network className="w-4 h-4 text-[#F59E0B]" />;
    }
  };

  return (
    <section id="topology" className="py-20 sm:py-28 relative scroll-mt-24" aria-label="Interactive Skill Topology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
            <span>[ SECTION_03 ]</span>
            <span>•</span>
            <span className="text-[#8A99AD]">STACK TOPOLOGY // INTERACTIVE NODES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F0F4F8]">
            Interactive Technical Topology
          </h2>
          <p className="text-sm sm:text-base text-[#8A99AD] max-w-2xl">
            Select any technical node below to instantly isolate, cross-reference, and inspect its
            corresponding production pipelines and architectural implementations above.
          </p>
        </div>

        {/* 4 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_TOPOLOGY_CATEGORIES.map((domain) => (
            <div
              key={domain.category}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/5">
                  {getDomainIcon(domain.category)}
                  <h3 className="text-sm font-bold font-display uppercase tracking-wider text-[#F0F4F8]">
                    {domain.category}
                  </h3>
                </div>

                {/* Skill Nodes List */}
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => {
                    const isSelected = activeSkillTag?.toLowerCase() === skill.name.toLowerCase();

                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => onSelectSkill(skill.name)}
                        className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-[#F59E0B] text-slate-950 font-bold shadow-lg shadow-[#F59E0B]/30 ring-2 ring-[#F59E0B]/50'
                            : 'bg-[#0B0F17]/80 hover:bg-white/10 text-[#F0F4F8] border border-white/10 hover:border-[#38BDF8]/40'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span>{skill.name}</span>
                        <span
                          className={`text-[10px] px-1 rounded ${
                            isSelected ? 'bg-black/20 text-black' : 'bg-white/5 text-[#8A99AD] group-hover:text-[#38BDF8]'
                          }`}
                        >
                          {skill.systemsCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer Hint */}
              <div className="pt-6 text-[11px] font-mono text-[#8A99AD]/80 flex items-center justify-between">
                <span>{domain.skills.length} core technologies</span>
                <span>Click node to filter</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
