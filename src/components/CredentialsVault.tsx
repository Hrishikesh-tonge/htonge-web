import React from 'react';
import { Award, ShieldCheck, GraduationCap, ExternalLink, CheckCircle } from 'lucide-react';
import { CREDENTIALS_DATA } from '../utils/portfolioData';

export const CredentialsVault: React.FC = () => {
  const cert = CREDENTIALS_DATA.find((c) => c.type === 'certification');
  const honor = CREDENTIALS_DATA.find((c) => c.type === 'honor');
  const educationItems = CREDENTIALS_DATA.filter((c) => c.type === 'education');

  return (
    <section id="credentials" className="py-20 sm:py-28 relative scroll-mt-24" aria-label="Credentials, Honors and Education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
            <span>[ SECTION_04 ]</span>
            <span>•</span>
            <span className="text-[#8A99AD]">ACCREDITATIONS // VAULT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F0F4F8]">
            Credentials, Honors & Academic Grounding
          </h2>
          <p className="text-sm sm:text-base text-[#8A99AD] max-w-2xl">
            Certified technical competencies, firm-wide client excellence recognition, and formal
            foundations in big data analytics and computer engineering.
          </p>
        </div>

        {/* 3 Sleek Architectural Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Certification */}
          {cert && (
            <div className="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#38BDF8]/20 transition-all" />

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                    <span>PROFESSIONAL CERTIFICATION</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#8A99AD]">{cert.periodOrDate}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold font-display text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-[#38BDF8]">{cert.issuer}</div>
                </div>

                <p className="text-xs sm:text-sm text-[#8A99AD] leading-relaxed">
                  {cert.details}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono text-[#F0F4F8] block">Verified Syllabus Domains:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags?.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8A99AD] border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#38BDF8]">
                <span>Status: Active & Validated</span>
                <span className="text-[#8A99AD]">Databricks Inc.</span>
              </div>
            </div>
          )}

          {/* Card 2: Honor */}
          {honor && (
            <div className="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-[#F59E0B]/30 hover:border-[#F59E0B]/60 transition-all duration-300 relative overflow-hidden group bg-gradient-to-br from-[#151C28]/90 via-[#151C28]/70 to-[#0B0F17]/90">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F59E0B]/20 transition-all" />

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F59E0B] font-semibold">
                    <Award className="w-4 h-4 text-[#F59E0B]" />
                    <span>EXCELLENCE RECOGNITION</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#8A99AD]">{honor.periodOrDate}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold font-display text-white leading-snug">
                    {honor.title}
                  </h3>
                  <div className="text-xs font-mono text-[#F59E0B]">{honor.issuer}</div>
                </div>

                <p className="text-xs sm:text-sm text-[#8A99AD] leading-relaxed">
                  {honor.details}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono text-[#F0F4F8] block">Evaluation Criteria:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {honor.tags?.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8A99AD] border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#F59E0B]">
                <span>Firm Honor: Top Tier Impact</span>
                <span className="text-[#8A99AD]">Ernst & Young</span>
              </div>
            </div>
          )}

          {/* Card 3: Academic Background */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#10B981] font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#10B981]" />
                  <span>ACADEMIC FOUNDATION</span>
                </span>
                <span className="text-[11px] font-mono text-[#8A99AD]">3 Degrees</span>
              </div>

              <div className="space-y-4">
                {educationItems.map((edu, idx) => (
                  <div key={idx} className="space-y-1 pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {edu.title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#F59E0B] shrink-0">
                        {edu.periodOrDate}
                      </span>
                    </div>
                    <div className="text-xs text-[#8A99AD]">{edu.issuer}</div>
                    <p className="text-[11px] text-[#8A99AD]/90 leading-relaxed pt-0.5">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#8A99AD]">
              <span>Specialization: Big Data Analytics</span>
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
