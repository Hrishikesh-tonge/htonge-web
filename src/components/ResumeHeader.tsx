import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Code2, Award, ShieldCheck, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const ResumeHeader: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'hrishikeshtonge@gmail.com';
  const phone = '+91 9004597959';
  const location = 'Mumbai, MH, India';

  const handleCopyEmail = async () => {
    await copyToClipboard(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = async () => {
    await copyToClipboard(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header id="summary" className="pt-8 pb-10 border-b border-white/10 space-y-6">
      {/* Top Identity & Title */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Hrishikesh Tonge
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#F59E0B] font-display">
            Data Analytics & Engineering Consultant — Ernst & Young (EY)
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#8A99AD]">
            Specializing in PySpark · Snowflake · dbt · Databricks · Enterprise RAG
          </p>
        </div>

        {/* Accreditations / Honors Badges */}
        <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8]">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span className="font-semibold">Databricks GenAI Certified</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs font-mono text-[#F59E0B]">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span className="font-semibold">🏆 EY Client Extraordinaire</span>
          </div>
        </div>
      </div>

      {/* Contact Info Strip */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#8A99AD] pt-2 border-t border-white/5">
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
          <a href={`mailto:${email}`} className="text-white hover:text-[#F59E0B] transition-colors">
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="p-1 rounded hover:bg-white/10 text-[#8A99AD] hover:text-white transition-colors no-print"
            title="Copy email"
            aria-label="Copy email"
          >
            {copiedEmail ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
          <a href={`tel:${phone}`} className="text-white hover:text-[#38BDF8] transition-colors">
            {phone}
          </a>
          <button
            type="button"
            onClick={handleCopyPhone}
            className="p-1 rounded hover:bg-white/10 text-[#8A99AD] hover:text-white transition-colors no-print"
            title="Copy phone"
            aria-label="Copy phone"
          >
            {copiedPhone ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <a
            href="https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-[#38BDF8] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.hackerrank.com/profile/hrishikeshtonge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-[#10B981] transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>HackerRank</span>
          </a>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="space-y-2 pt-2">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F59E0B] print-heading">
          Executive Summary
        </h2>
        <p className="text-sm leading-relaxed text-[#F0F4F8]/90 font-normal">
          Data Analytics & Engineering Consultant at <strong>Ernst & Young (EY)</strong> specializing in
          distributed data processing, enterprise cloud data warehousing, and governed generative AI pipelines.
          Proven background in architecting large-scale <strong>PySpark</strong>, <strong>Snowflake</strong>,{' '}
          <strong>dbt</strong>, and <strong>Databricks</strong> solutions for automotive manufacturing, pharmaceutical
          CMC operations, and financial audit clients. Experienced in transforming high-throughput ERP streams and
          unstructured compliance records into robust, production-grade intelligence.
        </p>
      </div>
    </header>
  );
};
