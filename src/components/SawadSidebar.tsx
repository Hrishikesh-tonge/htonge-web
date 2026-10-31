import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Code2, MapPin, Award, ShieldCheck, Download, Copy, Check, ExternalLink } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface SawadSidebarProps {
  onPrintResume: () => void;
}

export const SawadSidebar: React.FC<SawadSidebarProps> = ({ onPrintResume }) => {
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
      {/* Sawad Style White Floating Card */}
      <div className="bg-white text-slate-900 rounded-[32px] p-6 sm:p-7 shadow-2xl space-y-6 border border-slate-100 relative overflow-hidden">
        {/* Dotted aesthetic curve */}
        <div className="absolute top-4 left-6 right-6 h-28 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
            <path
              d="M10 60 C 50 10, 150 10, 190 70"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle cx="100" cy="20" r="5" fill="#F59E0B" />
          </svg>
        </div>

        {/* Portrait Image Container */}
        <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#F59E0B] via-[#E25A1C] to-[#1E293B] p-1.5 shadow-md group">
          <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#E2E8F0] relative">
            <img
              src="/hrishikesh.png"
              alt="Hrishikesh Tonge"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Available for Roles</span>
            </span>
            <span className="text-[#F59E0B] font-semibold">EY CONSULTANT</span>
          </div>
        </div>

        {/* Identity & Bio */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-900">
            Hrishikesh Tonge
          </h1>
          <p className="text-xs font-mono font-semibold text-[#F59E0B] uppercase tracking-wider">
            Data Analytics & Engineering Consultant
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Specializing in PySpark, Snowflake, dbt, and Databricks. Turning complex ERP streams and
            unstructured documents into production-grade intelligence.
          </p>
        </div>

        {/* Accreditations Badges */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-mono text-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
            <span className="truncate font-medium">Databricks GenAI Certified</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs font-mono text-amber-900">
            <Award className="w-4 h-4 text-[#D97706] shrink-0" />
            <span className="truncate font-semibold">🏆 EY Client Extraordinaire</span>
          </div>
        </div>

        {/* Social Icons Row matching Sawad */}
        <div className="flex items-center justify-center gap-3 pt-2 border-t border-slate-100">
          <a
            href="https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-100 hover:bg-[#0A66C2] text-slate-700 hover:text-white transition-all shadow-sm"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://www.hackerrank.com/profile/hrishikeshtonge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-100 hover:bg-[#00EA64] text-slate-700 hover:text-slate-950 transition-all shadow-sm"
            title="HackerRank Profile"
            aria-label="HackerRank Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${email}`}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-[#F59E0B] text-slate-700 hover:text-slate-950 transition-all shadow-sm"
            title="Email Hrishikesh"
            aria-label="Email Hrishikesh"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={`tel:${phone}`}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-[#10B981] text-slate-700 hover:text-white transition-all shadow-sm"
            title="Call / WhatsApp"
            aria-label="Phone Number"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onPrintResume}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-slate-950/20 cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#F59E0B]" />
          <span>Download / Print CV</span>
        </button>

        {/* Location & Contact Meta */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>Mumbai, Maharashtra, India</span>
        </div>
      </div>
    </aside>
  );
};
