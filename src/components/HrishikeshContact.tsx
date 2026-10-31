import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

export const HrishikeshContact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', scope: 'Consulting Engagement', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'hrishikeshtonge@gmail.com';
  const phone = '+91 9004597959';

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
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', scope: 'Consulting Engagement', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-24 pt-6 pb-16" aria-label="Contact Section">
      {/* Sawad-Style Giant Section Header */}
      <div className="space-y-1 border-b border-white/10 pb-4">
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[0.95]">
          LET'S WORK
        </h2>
        <div className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white/20 uppercase leading-[0.95]">
          TOGETHER
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Contact Info & Direct Links */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm text-[#8A99AD] leading-relaxed">
            Interested in data engineering consulting, high-throughput pipeline optimizations, or enterprise RAG architecture? Reach out directly:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#151C28]/60 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8A99AD] uppercase">Email Inquiries</div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono font-medium text-white hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                    title="Click to copy email"
                  >
                    {email}
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#151C28]/60 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8A99AD] uppercase">Phone / WhatsApp</div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="text-xs font-mono font-medium text-white hover:text-[#38BDF8] transition-colors cursor-pointer text-left"
                    title="Click to copy phone number"
                  >
                    {phone}
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#151C28]/60 border border-white/10 flex items-center gap-3 text-xs font-mono text-[#8A99AD]">
              <div className="p-2 rounded-xl bg-white/5 text-white">
                <MapPin className="w-4 h-4 text-[#10B981]" />
              </div>
              <div>
                <div className="text-[10px] text-[#8A99AD] uppercase">Location</div>
                <div className="text-xs font-medium text-white">Mumbai, MH, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form matching Sawad */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-7 bg-[#151C28]/60 border border-white/10 shadow-xl space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-[#8A99AD] mb-1.5 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0B0F17] border border-white/10 text-white focus:border-[#F59E0B] focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[#8A99AD] mb-1.5 uppercase tracking-wider">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0B0F17] border border-white/10 text-white focus:border-[#F59E0B] focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-scope" className="block text-[#8A99AD] mb-1.5 uppercase tracking-wider">
                Engagement Scope
              </label>
              <select
                id="contact-scope"
                value={formState.scope}
                onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#0B0F17] border border-white/10 text-white focus:border-[#F59E0B] focus:outline-none transition-colors text-sm"
              >
                <option value="Consulting Engagement">Consulting Engagement</option>
                <option value="Data Pipeline Architecture">Data Pipeline Architecture (PySpark/Databricks)</option>
                <option value="Warehouse Optimization">Warehouse Optimization (Snowflake/dbt)</option>
                <option value="Generative AI & RAG">Generative AI & RAG Implementation</option>
                <option value="Full-Time Advisory Role">Full-Time / Senior Advisory Role</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-[#8A99AD] mb-1.5 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your data platform goals or consulting inquiry..."
                className="w-full px-4 py-3 rounded-2xl bg-[#0B0F17] border border-white/10 text-white focus:border-[#F59E0B] focus:outline-none transition-colors resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-2xl bg-white hover:bg-slate-200 text-slate-950 font-display font-bold text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <span>Dispatching Inquiry...</span>
              ) : status === 'success' ? (
                <span className="flex items-center gap-2 text-[#10B981]">
                  <Check className="w-4 h-4" /> Message Sent Successfully!
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#F59E0B]" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
