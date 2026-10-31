import React from 'react';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';
import { CREDENTIALS_DATA } from '../utils/portfolioData';

export const ResumeEducation: React.FC = () => {
  const certifications = CREDENTIALS_DATA.filter((c) => c.type === 'certification');
  const honors = CREDENTIALS_DATA.filter((c) => c.type === 'honor');
  const education = CREDENTIALS_DATA.filter((c) => c.type === 'education');

  return (
    <section id="education" className="py-8 border-b border-white/10 space-y-6 scroll-mt-20" aria-label="Education and Certifications">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F59E0B] print-heading">
          Education, Certification & Honors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Certifications & Honors */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Accreditation & Awards</span>
          </h3>

          {certifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-xl glass-panel space-y-1.5 border border-[#38BDF8]/20">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-white leading-snug">
                  {cert.title}
                </h4>
                <span className="text-[10px] font-mono text-[#38BDF8] shrink-0 font-bold">
                  {cert.periodOrDate}
                </span>
              </div>
              <div className="text-xs font-mono text-[#38BDF8]">{cert.issuer}</div>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                {cert.details}
              </p>
            </div>
          ))}

          {honors.map((honor, idx) => (
            <div key={idx} className="p-4 rounded-xl glass-panel space-y-1.5 border border-[#F59E0B]/20">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-white leading-snug">
                  {honor.title}
                </h4>
                <span className="text-[10px] font-mono text-[#F59E0B] shrink-0 font-bold">
                  {honor.periodOrDate}
                </span>
              </div>
              <div className="text-xs font-mono text-[#F59E0B]">{honor.issuer}</div>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                {honor.details}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Formal Education */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#10B981] flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-3">
            {education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-panel space-y-1 border border-white/10">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {edu.title}
                  </h4>
                  <span className="text-[10px] font-mono text-[#F59E0B] shrink-0">
                    {edu.periodOrDate}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#8A99AD]">{edu.issuer}</div>
                <p className="text-xs text-[#8A99AD] leading-relaxed pt-0.5">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
