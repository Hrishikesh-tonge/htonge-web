import React from 'react';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';
import { CREDENTIALS_DATA } from '../utils/portfolioData';

export const HrishikeshCredentials: React.FC = () => {
  const certifications = CREDENTIALS_DATA.filter((c) => c.type === 'certification');
  const honors = CREDENTIALS_DATA.filter((c) => c.type === 'honor');
  const education = CREDENTIALS_DATA.filter((c) => c.type === 'education');

  return (
    <section id="credentials" className="space-y-8 scroll-mt-24 pt-6" aria-label="Credentials and Education">
      {/* Sawad-Style Giant Section Header */}
      <div className="space-y-1 border-b border-white/10 pb-4">
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
          HONORS &
        </h2>
        <div className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white/20 uppercase leading-[0.95]">
          CREDENTIALS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Certification Card */}
        {certifications.map((cert, idx) => (
          <div key={idx} className="rounded-3xl p-6 bg-[#151C28]/60 border border-[#38BDF8]/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIAL CERTIFICATION</span>
            </div>
            <h3 className="text-lg font-bold font-display text-white">
              {cert.title}
            </h3>
            <div className="text-xs font-mono text-[#38BDF8]">{cert.issuer} • {cert.periodOrDate}</div>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              {cert.details}
            </p>
          </div>
        ))}

        {/* Honor Card */}
        {honors.map((honor, idx) => (
          <div key={idx} className="rounded-3xl p-6 bg-[#151C28]/60 border border-[#F59E0B]/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
              <Award className="w-4 h-4" />
              <span>EXCELLENCE RECOGNITION</span>
            </div>
            <h3 className="text-lg font-bold font-display text-white">
              {honor.title}
            </h3>
            <div className="text-xs font-mono text-[#F59E0B]">{honor.issuer} • {honor.periodOrDate}</div>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              {honor.details}
            </p>
          </div>
        ))}
      </div>

      {/* Academic Background */}
      <div className="rounded-3xl p-6 sm:p-7 bg-[#151C28]/60 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#10B981]">
          <GraduationCap className="w-4 h-4" />
          <span>ACADEMIC FOUNDATION</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {education.map((edu, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-[11px] font-mono text-[#F59E0B]">{edu.periodOrDate}</div>
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
