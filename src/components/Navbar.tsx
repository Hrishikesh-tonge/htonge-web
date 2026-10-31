import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('architecture');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['architecture', 'experience', 'topology', 'credentials'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Experience', href: '#experience' },
    { name: 'Topology', href: '#topology' },
    { name: 'Credentials', href: '#credentials' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#0B0F17]/90 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/60'
            : 'bg-[#151C28]/75 backdrop-blur-md border-white/10 shadow-lg'
        }`}
      >
        {/* Left: Monogram Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-[#F0F4F8] hover:text-[#F59E0B] transition-colors whitespace-nowrap shrink-0 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] group-hover:scale-125 transition-transform" />
          <span>HT // DATA.ENG</span>
        </a>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#8A99AD]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-[#F0F4F8] transition-colors whitespace-nowrap shrink-0 ${
                activeSection === link.href.substring(1) ? 'text-[#F59E0B] font-semibold' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Live Status & Resume Button */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#8A99AD] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Available for Consulting & High-Impact Roles</span>
          </div>

          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 text-xs font-semibold font-mono tracking-tight transition-all duration-200 hover:scale-[1.02] shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 p-4 rounded-2xl bg-[#0B0F17]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-[10px] text-[#8A99AD] pb-2 border-b border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>Consultant @ Ernst & Young</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-white/5 text-[#F0F4F8] hover:text-[#F59E0B] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
