import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Linkedin, Code2, ArrowUp, Terminal, Shield } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#070A10] border-t border-white/10 pt-20 pb-12 overflow-hidden" aria-label="Contact and Footer">
      {/* Structural subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-64 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative">
        {/* Terminal Contact Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Copy Affordances */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
                <Terminal className="w-3.5 h-3.5" />
                <span>TERMINAL_REACH // DIRECT_DISPATCH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-[#F0F4F8]">
                Initiate Architecture Advisory or High-Impact Engagement
              </h2>
              <p className="text-sm text-[#8A99AD] leading-relaxed max-w-lg">
                Available for enterprise consulting, high-throughput distributed data architectures,
                Snowflake/dbt warehouse optimizations, and custom RAG development.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3 pt-2">
              {/* Email Button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F59E0B]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#8A99AD] uppercase">Primary Inquiries</div>
                    <a href={`mailto:${email}`} className="text-sm font-mono font-medium text-white hover:text-[#F59E0B] transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F0F4F8] transition-colors border border-white/5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#8A99AD] uppercase">Telephone / WhatsApp</div>
                    <a href={`tel:${phone}`} className="text-sm font-mono font-medium text-white hover:text-[#38BDF8] transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F0F4F8] transition-colors border border-white/5 cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#8A99AD]">
                <div className="p-2 rounded-lg bg-white/5 text-[#F0F4F8]">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8A99AD] uppercase">Operational Base</div>
                  <div className="text-sm font-medium text-white">{location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/hrishikesh-tonge-b086b2171/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F0F4F8] hover:text-[#38BDF8] border border-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://www.hackerrank.com/profile/hrishikeshtonge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-[#F0F4F8] hover:text-[#10B981] border border-white/10 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>HackerRank</span>
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Message Form */}
          <div className="lg:col-span-6 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#8A99AD]">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>DISPATCH_MESSAGE.SH</span>
              </div>
              <span className="text-[11px] font-mono text-[#F59E0B]">ENCRYPTED_ENDPOINT</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label htmlFor="name" className="block text-[#8A99AD] mb-1">
                  NAME / ORGANIZATION
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Enterprise Architecture Lead"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-white/10 text-[#F0F4F8] focus:border-[#F59E0B] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#8A99AD] mb-1">
                  RETURN EMAIL ADDRESS *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your.name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-white/10 text-[#F0F4F8] focus:border-[#F59E0B] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#8A99AD] mb-1">
                  ENGAGEMENT SPECIFICATION *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your data engineering requirements, pipeline volume, or consulting scope..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-white/10 text-[#F0F4F8] focus:border-[#F59E0B] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-slate-950 font-bold transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
              >
                {formStatus === 'sending' ? (
                  <span>Dispatching to Ingest Queue...</span>
                ) : formStatus === 'success' ? (
                  <span className="flex items-center gap-1.5 text-black">
                    <Check className="w-4 h-4" /> Message Delivered to Hrishikesh
                  </span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Direct Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A99AD]">
          <div className="flex items-center gap-2">
            <span className="text-[#F0F4F8] font-bold">HT // DATA.ENG</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} Hrishikesh Tonge. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#8A99AD]/80">
              Swiss-Grid Editorial • Governed Pipeline Architecture
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#F0F4F8] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
