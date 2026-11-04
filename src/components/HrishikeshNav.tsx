import React, { useState, useEffect } from 'react';
import { Home, FolderGit2, Briefcase, Wrench, Mail, FileText, Award } from 'lucide-react';

export const HrishikeshNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'experience', 'tools', 'credentials', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Career', icon: Briefcase },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'credentials', label: 'Honors', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex items-center justify-center px-2 sm:px-4 pointer-events-none no-print">
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-0.5 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0E131E]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 ring-1 ring-white/5 max-w-full"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative p-2 sm:px-3 sm:py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 text-xs font-mono ${
                isActive
                  ? 'text-white bg-white/10 shadow-sm border border-white/15'
                  : 'text-[#8A99AD] hover:text-white hover:bg-white/5'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#F59E0B]' : ''}`} />
              <span className="hidden md:inline">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#F59E0B] ml-0.5 animate-pulse" />
              )}
            </a>
          );
        })}

        <div className="w-[1px] h-4 bg-white/15 mx-0.5 sm:mx-1" />

        <a
          href="./Hrishikesh_Tonge_Resume.pdf"
          download="Hrishikesh_Tonge_Resume.pdf"
          className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#F59E0B]/90 hover:to-[#B45309] text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-[#F59E0B]/20 cursor-pointer active:scale-95 shrink-0"
          title="Download Official Resume (PDF)"
          aria-label="Download Official Resume (PDF)"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Resume PDF</span>
        </a>
      </nav>
    </header>
  );
};
