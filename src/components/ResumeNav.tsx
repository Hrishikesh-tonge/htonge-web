import React, { useState } from 'react';
import { Printer, Copy, Check, FileText, Download, Mail, Phone } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface ResumeNavProps {
  onCopyCV: () => void;
  copied: boolean;
}

export const ResumeNav: React.FC<ResumeNavProps> = ({ onCopyCV, copied }) => {
  const [activeSection, setActiveSection] = useState('summary');

  const handlePrint = () => {
    window.print();
  };

  const navItems = [
    { label: 'Summary', href: '#summary' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/10 no-print">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Identity */}
        <div className="flex items-center gap-3">
          <a href="#summary" className="flex items-center gap-2 font-display font-bold text-base text-white hover:text-[#F59E0B] transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span>Hrishikesh Tonge</span>
          </a>
          <span className="hidden sm:inline text-xs font-mono text-[#8A99AD] border-l border-white/10 pl-3">
            Consultant @ EY
          </span>
        </div>

        {/* Section links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-[#8A99AD]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Primary Resume Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCopyCV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F0F4F8] border border-white/10 transition-colors cursor-pointer"
            title="Copy plain-text CV to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 font-mono font-bold text-xs transition-all shadow-sm cursor-pointer"
            title="Print or save this resume as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
