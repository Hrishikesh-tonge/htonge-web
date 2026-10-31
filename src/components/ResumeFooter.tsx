import React, { useState } from 'react';
import { Mail, Phone, MapPin, Printer, Copy, Check, Linkedin, Code2 } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const ResumeFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'hrishikeshtonge@gmail.com';
  const phone = '+91 9004597959';
  const location = 'Mumbai, MH, India';

  const handleCopyEmail = async () => {
    await copyToClipboard(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="py-12 text-xs font-mono text-[#8A99AD] space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-bold text-white">Hrishikesh Tonge</span>
          <span className="hidden sm:inline">•</span>
          <span>Data Analytics & Engineering Consultant</span>
          <span className="hidden sm:inline">•</span>
          <span>Ernst & Young (EY)</span>
        </div>

        <div className="flex items-center gap-3 no-print">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 font-bold transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#8A99AD]/80">
        <div>
          © {new Date().getFullYear()} Hrishikesh Tonge. Official Curriculum Vitae.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.hackerrank.com/profile/hrishikeshtonge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            HackerRank
          </a>
          <a
            href="mailto:hrishikeshtonge@gmail.com"
            className="hover:text-[#F59E0B] transition-colors"
          >
            hrishikeshtonge@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
