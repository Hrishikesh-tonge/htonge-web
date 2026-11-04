import React from 'react';
import { Award, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';
import { CREDENTIALS_DATA } from '../utils/portfolioData';

export const HrishikeshCredentials: React.FC = () => {
  const certifications = CREDENTIALS_DATA.filter((c) => c.type === 'certification');
  const honors = CREDENTIALS_DATA.filter((c) => c.type === 'honor');
  const education = CREDENTIALS_DATA.filter((c) => c.type === 'education');

  return (
    <section id="credentials" className="space-y-8 scroll-mt-24 pt-6" aria-label="Credentials and Education">
      {/* Executive Section Header */}
      <div className="space-y-2 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
          <span>[ 04 // ACCREDITATIONS & HONORS ]</span>
          <span>•</span>
          <span className="text-[#8A99AD]">VERIFIED CREDENTIALS</span>
        </div>
        <div className="space-y-0.5">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
            HONORS &
          </h2>
          <div className="text-3xl sm:text-5xl font-black font-display tracking-tight bg-gradient-to-r from-white/70 to-white/20 bg-clip-text text-transparent uppercase leading-[0.95]">
            CREDENTIALS
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Certification Card with Cyan Glow */}
        {certifications.map((cert, idx) => (
          <div 
            key={idx} 
            className="group rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#122030]/80 via-[#101826]/70 to-[#0F141E]/90 border border-sky-500/30 hover:border-sky-400/60 space-y-3.5 shadow-xl transition-all duration-300 relative overflow-hidden ring-1 ring-white/5"
          >
            <div 
              aria-hidden="true" 
              className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" 
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-xs font-mono text-[#38BDF8]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-semibold">OFFICIAL CERTIFICATION</span>
              </div>
              <span className="text-xs font-mono text-[#8A99AD]">{cert.periodOrDate}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-sky-200 transition-colors">
                {cert.title}
              </h3>
              <div className="text-xs font-mono text-[#38BDF8] font-medium">{cert.issuer}</div>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {cert.details}
            </p>
          </div>
        ))}

        {/* Honor Card with Amber Glow */}
        {honors.map((honor, idx) => (
          <div 
            key={idx} 
            className="group rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#1E1B24]/80 via-[#161722]/70 to-[#0F141E]/90 border border-amber-500/30 hover:border-amber-400/60 space-y-3.5 shadow-xl transition-all duration-300 relative overflow-hidden ring-1 ring-white/5"
          >
            <div 
              aria-hidden="true" 
              className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" 
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-mono text-[#F59E0B]">
                <Award className="w-4 h-4" />
                <span className="font-semibold">EXCELLENCE RECOGNITION</span>
              </div>
              <span className="text-xs font-mono text-[#8A99AD]">{honor.periodOrDate}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-amber-200 transition-colors">
                {honor.title}
              </h3>
              <div className="text-xs font-mono text-[#F59E0B] font-medium">{honor.issuer}</div>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {honor.details}
            </p>
          </div>
        ))}
      </div>

      {/* Academic Foundation in Modern Frosted Card */}
      <div className="rounded-3xl p-6 sm:p-7 bg-[#111622]/70 border border-white/10 space-y-5 shadow-xl ring-1 ring-white/5">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 w-fit">
          <GraduationCap className="w-4 h-4" />
          <span className="font-semibold">ACADEMIC FOUNDATION</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {education.map((edu, idx) => (
            <div 
              key={idx} 
              className="space-y-2 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all duration-200"
            >
              <div className="text-[11px] font-mono text-[#F59E0B] font-medium">{edu.periodOrDate}</div>
              <h4 className="text-sm font-bold text-white leading-snug">
                {edu.title}
              </h4>
              <div className="text-xs text-[#8A99AD]">{edu.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
