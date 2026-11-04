import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code2, MapPin, Award, ShieldCheck, Download, Copy, Check, Sparkles } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface HrishikeshSidebarProps {
  onPrintResume?: () => void;
}

export const HrishikeshSidebar: React.FC<HrishikeshSidebarProps> = ({ onPrintResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'hrishikeshtonge@gmail.com';
  const phone = '+91 9004597959';

  const handleCopyEmail = async () => {
    await copyToClipboard(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <aside className="w-full lg:w-[360px] xl:w-[390px] shrink-0 lg:sticky lg:top-20 space-y-4">
      {/* Modern Frosted Obsidian Floating Card */}
      <div className="bg-[#111622]/85 backdrop-blur-xl text-[#F0F4F8] rounded-[32px] p-6 sm:p-7 shadow-2xl space-y-6 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group/card ring-1 ring-white/5">
        
        {/* Soft Ambient Radial Lighting behind Card */}
        <div 
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-52 h-52 bg-gradient-to-br from-[#F59E0B]/18 to-transparent rounded-full blur-3xl pointer-events-none" 
        />
        <div 
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-52 h-52 bg-gradient-to-tl from-[#38BDF8]/12 to-transparent rounded-full blur-3xl pointer-events-none" 
        />

        {/* Dotted aesthetic curve */}
        <div className="absolute top-4 left-6 right-6 h-28 pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
            <path
              d="M10 60 C 50 10, 150 10, 190 70"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="100" cy="20" r="4" fill="#F59E0B" className="animate-pulse" />
          </svg>
        </div>

        {/* Portrait Image Container */}
        <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#F59E0B]/60 via-[#E25A1C]/40 to-[#38BDF8]/30 p-1 shadow-2xl group">
          <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#0B0F17] relative">
            <img
              src="./hrishikesh.png"
              alt="Hrishikesh Tonge"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Floating badge with animated radar ring */}
          <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-[#0B0F17]/85 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono flex items-center justify-between shadow-lg">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">Available for Roles</span>
            </span>
            <span className="text-[#F59E0B] font-semibold tracking-wider">EY CONSULTANT</span>
          </div>
        </div>

        {/* Identity & Bio */}
        <div className="text-center space-y-2 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
            Hrishikesh Tonge
          </h1>
          <p className="text-xs font-mono font-semibold text-[#F59E0B] uppercase tracking-wider">
            Data Analytics & Engineering Consultant
          </p>
          <p className="text-sm text-[#8A99AD] leading-relaxed font-normal">
            Specializing in PySpark, Snowflake, dbt, and Databricks. Turning complex ERP streams and
            unstructured documents into production-grade intelligence.
          </p>
        </div>

        {/* Micro Key Metrics Row */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-white/[0.03] border border-white/5 text-center font-mono">
          <div>
            <div className="text-sm font-bold text-white">3.5+</div>
            <div className="text-[10px] text-[#8A99AD]">Yrs at EY</div>
          </div>
          <div className="border-x border-white/10">
            <div className="text-sm font-bold text-[#F59E0B]">45M+</div>
            <div className="text-[10px] text-[#8A99AD]">Tx Analyzed</div>
          </div>
          <div>
            <div className="text-sm font-bold text-[#38BDF8]">6+</div>
            <div className="text-[10px] text-[#8A99AD]">Prod Systems</div>
          </div>
        </div>

        {/* Accreditations Badges */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-200">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <span className="truncate font-medium">Databricks GenAI Certified</span>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-200">
            <Award className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span className="truncate font-semibold">🏆 EY Client Extraordinaire</span>
          </div>
        </div>

        {/* Social Profiles Row */}
        <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/10">
          <a
            href="https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] hover:bg-[#0A66C2] border border-white/10 hover:border-[#0A66C2] text-[#8A99AD] hover:text-white transition-all shadow-sm group"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://github.com/Hrishikesh-tonge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/20 border border-white/10 hover:border-white/40 text-[#8A99AD] hover:text-white transition-all shadow-sm group"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://www.hackerrank.com/profile/hrishikeshtonge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] hover:bg-[#00EA64]/20 border border-white/10 hover:border-[#00EA64]/50 text-[#8A99AD] hover:text-[#00EA64] transition-all shadow-sm group"
            title="HackerRank Profile"
            aria-label="HackerRank Profile"
          >
            <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Action Button: Direct PDF Download */}
        <a
          href="./Hrishikesh_Tonge_Resume.pdf"
          download="Hrishikesh_Tonge_Resume.pdf"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#E25A1C] to-[#D97706] hover:from-[#F59E0B]/90 hover:to-[#B45309] text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#F59E0B]/20 active:scale-[0.98] cursor-pointer"
          title="Download Official Resume PDF"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>Download Resume (PDF)</span>
        </a>

        {/* Location & Contact Meta */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#8A99AD]">
          <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Mumbai, Maharashtra, India</span>
        </div>
      </div>
    </aside>
  );
};
