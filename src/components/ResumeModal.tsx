import React, { useState } from 'react';
import { X, Download, Copy, Check, Printer, ExternalLink, Mail, Phone, MapPin, Award } from 'lucide-react';
import { CAREER_DATA, CREDENTIALS_DATA, SKILL_TOPOLOGY_CATEGORIES } from '../utils/portfolioData';
import { copyToClipboard } from '../utils/clipboard';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    const text = `
HRISHIKESH TONGE
Data Analytics & Engineering Consultant | Ernst & Young (EY)
Location: Mumbai, MH, India | Phone: +91 9004597959 | Email: hrishikeshtonge@gmail.com
LinkedIn: https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/ | HackerRank: hackerrank.com

CERTIFICATION & HONORS
- Databricks Certified Generative AI Engineer Associate (Databricks)
- EY Client Extraordinaire Award (Ernst & Young)

PROFESSIONAL EXPERIENCE
1. Ernst & Young (EY) — Consultant (Data Analytics / Engineering) | Sep 2024 – Present | Mumbai, IN
   - Architected scalable, parameterized PySpark pipelines across automotive and agro-chemical manufacturing.
   - Encoded complex audit and risk algorithms: Three-Way Matching, Segregation of Duties (SoD), Benford's Law anomaly detection.
   - Built RAG workflows (LangChain, FAISS, Azure OpenAI) automating KRI extraction from PDF documentation.
   - Designed governed Snowflake & dbt pipelines computing financial & manufacturing KPIs, cutting query compute cost by 62%.

2. Square Yards — Data Engineer | Oct 2023 – Sep 2024 | Mumbai, IN
   - Developed distributed Scala data pipelines aggregating property pricing indices, mortgages, and consumer behavior.
   - Built scalable data widgets powering analytical dashboards across top 10 Indian markets.

3. LTI (Larsen & Toubro Infotech) — Engineer (Cloud and Infrastructure) | Jun 2022 – Jan 2023 | Mumbai, IN
   - Managed cloud operations, VM provisioning, and server automation for enterprise environments.

EDUCATION
- Post Graduate Diploma in Big Data Analytics — C-DAC Mumbai (Mar 2023 – Sep 2023)
- B.E. in Computer Engineering — A. C. Patil College of Engineering, Mumbai (Aug 2018 – May 2022)
- HSC Science — Ramnarain Ruia Jr. College, Mumbai (Jul 2016 – Feb 2018)

TECHNICAL SKILLS
Languages: Python, Scala, PySpark, SQL, Snowpark
Frameworks: Apache Spark, dbt, scikit-learn, Pandas, NumPy, LangChain, FAISS
Cloud & Platforms: Databricks, Snowflake, Azure, Google BigQuery, Power BI, Qlik Sense, DBeaver
Databases: MySQL, MongoDB, MS SQL Server
    `.trim();

    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume View"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0B0F17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151C28]/80">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <h2 className="text-base sm:text-lg font-bold font-display text-[#F0F4F8]">
              Curriculum Vitae // Hrishikesh Tonge
            </h2>
            <span className="hidden sm:inline text-xs font-mono text-[#8A99AD] bg-white/5 px-2 py-0.5 rounded border border-white/10">
              EY CONSULTANT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F0F4F8] border border-white/10 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F59E0B]/20 hover:bg-[#F59E0B]/30 text-xs font-mono text-[#F59E0B] border border-[#F59E0B]/40 transition-colors font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed text-[#F0F4F8]">
          {/* Header Profile Section */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
                  Hrishikesh Tonge
                </h1>
                <p className="text-base text-[#F59E0B] font-medium mt-1">
                  Data Analytics & Engineering Consultant — Ernst & Young (EY)
                </p>
                <p className="text-xs text-[#8A99AD] mt-1 font-mono">
                  Specializing in PySpark · Snowflake · dbt · Databricks · Enterprise RAG
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs font-mono text-[#8A99AD]">
                <a href="mailto:hrishikeshtonge@gmail.com" className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>hrishikeshtonge@gmail.com</span>
                </a>
                <a href="tel:+919004597959" className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>+91 9004597959</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Mumbai, MH, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Credentials Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#38BDF8] block">OFFICIAL CERTIFICATION</span>
              <strong className="text-sm text-white block mt-0.5">Databricks Certified Generative AI Engineer Associate</strong>
              <span className="text-xs text-[#8A99AD] block mt-1">Vector search, RAG evaluation, LLM deployment, MLflow governance.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30">
              <span className="text-xs font-mono text-[#F59E0B] block">EXCELLENCE AWARD</span>
              <strong className="text-sm text-white block mt-0.5">🏆 EY Client Extraordinaire</strong>
              <span className="text-xs text-[#8A99AD] block mt-1">Honored for exceptional data pipeline delivery & client performance.</span>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-base font-bold font-display uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
              <span>01. Professional Experience</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </h3>

            {CAREER_DATA.map((job) => (
              <div key={job.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white">{job.role}</h4>
                    <span className="text-xs font-mono text-[#38BDF8]">{job.company}</span>
                  </div>
                  <div className="text-xs font-mono text-[#8A99AD]">
                    <span>{job.period}</span> · <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#8A99AD]">{job.summary}</p>

                <ul className="list-disc list-inside space-y-1 text-xs text-[#F0F4F8]/90 pl-1">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.stack.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8A99AD] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Systems */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-display uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
              <span>02. Core Production Systems Delivered</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <strong className="text-white">Distributed ERP Exception-Detection Engine (PySpark, SAP/Oracle):</strong>
                <p className="text-[#8A99AD] mt-1">Automated Three-Way Matching, Segregation of Duties (SoD), and Benford's Law anomaly detection over 45M+ transactions/run.</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <strong className="text-white">Enterprise Audit RAG Pipeline (LangChain, FAISS, Azure OpenAI):</strong>
                <p className="text-[#8A99AD] mt-1">Reduced document audit velocity by 85% with 98.4% KRI extraction accuracy from unstructured PDF filings.</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <strong className="text-white">Global Manufacturing KPI & Incremental dbt Architecture (Snowflake, dbt):</strong>
                <p className="text-[#8A99AD] mt-1">Reduced Snowflake warehouse spend by 62% and dropped runtime from 3.5h down to 18 min.</p>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-display uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
              <span>03. Education & Accreditations</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </h3>

            <div className="space-y-3">
              {CREDENTIALS_DATA.filter((c) => c.type === 'education').map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                  <div>
                    <strong className="text-white block">{edu.title}</strong>
                    <span className="text-[#8A99AD]">{edu.issuer}</span>
                  </div>
                  <span className="font-mono text-[#F59E0B]">{edu.periodOrDate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#151C28]/80 flex items-center justify-between text-xs text-[#8A99AD]">
          <span>Format: Full Production Portfolio CV</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors font-mono"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
