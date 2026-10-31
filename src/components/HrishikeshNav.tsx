import React from 'react';
import { Home, FolderGit2, Briefcase, Wrench, Mail, FileText, Printer } from 'lucide-react';

interface HrishikeshNavProps {
  onPrintResume?: () => void;
}

export const HrishikeshNav: React.FC<HrishikeshNavProps> = ({ onPrintResume }) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none no-print">
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#1A1E26]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
        <a
          href="#home"
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Home"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
          <span className="hidden md:inline">Home</span>
        </a>

        <a
          href="#projects"
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Experience & Projects"
          aria-label="Experience & Projects"
        >
          <FolderGit2 className="w-4 h-4" />
          <span className="hidden md:inline">Experience</span>
        </a>

        <a
          href="#experience"
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Career History"
          aria-label="Career History"
        >
          <Briefcase className="w-4 h-4" />
          <span className="hidden md:inline">Career</span>
        </a>

        <a
          href="#tools"
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Tools & Technologies"
          aria-label="Tools"
        >
          <Wrench className="w-4 h-4" />
          <span className="hidden md:inline">Tools</span>
        </a>

        <a
          href="#contact"
          className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Contact"
          aria-label="Contact"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden md:inline">Contact</span>
        </a>

        <div className="w-[1px] h-4 bg-white/20 mx-1" />

        <a
          href="./Hrishikesh_Tonge_Resume.pdf"
          download="Hrishikesh_Tonge_Resume.pdf"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 font-bold text-xs font-mono transition-all shadow-md cursor-pointer"
          title="Download Official Resume (PDF)"
          aria-label="Download Official Resume (PDF)"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Resume PDF</span>
        </a>
      </div>
    </header>
  );
};
