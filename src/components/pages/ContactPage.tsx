import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { SiteSettings } from '../../types/site';

interface ContactPageProps {
  settings: SiteSettings;
}

export const ContactPage: React.FC<ContactPageProps> = ({ settings }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'marketing',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'marketing',
        message: '',
      });
    }, 6000);
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
          Direct Inquiries
        </div>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Initiate a Project Brief
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          Connect directly with our leadership team in {settings.address}. We analyze requirements and reply with transparent scope assessments.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 rounded-xl bg-[#11141a] border border-neutral-800 space-y-5">
              <h3 className="font-['Syne'] text-xl font-bold text-white">
                Dubai Studio
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-neutral-500 uppercase tracking-wider font-semibold">
                    Physical Address
                  </div>
                  <div className="text-neutral-200 mt-1 font-medium">
                    {settings.address}, {settings.city}, {settings.country}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-neutral-500 uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-white hover:text-[#e11d48] transition-colors mt-1 block font-mono"
                  >
                    {settings.email}
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-neutral-500 uppercase tracking-wider font-semibold">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-[#e11d48] transition-colors mt-1 block font-mono"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-500">
                Operating Hours: Sunday – Thursday: 9:00 AM – 6:00 PM (GST)
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-xl bg-[#11141a] border border-neutral-800 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">Direct WhatsApp</h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Direct client partnership channel
                </p>
              </div>
              <a
                href={`https://wa.me/${settings.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs shrink-0 transition-colors"
              >
                Open Chat
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-xl bg-[#11141a] border border-neutral-800 space-y-6">
              <div>
                <h3 className="font-['Syne'] text-xl font-bold text-white">
                  Send Project Details
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  We reply within 24 hours with an actionable roadmap.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-700 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-white mx-auto" />
                  <h4 className="font-['Syne'] font-bold text-white text-base">
                    Brief Dispatched Successfully
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Your brief has been submitted directly to our Dubai directors at {settings.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Matean Rahmat"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Core Discipline
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-neutral-600"
                      >
                        <option value="marketing">Market Expansion & Growth</option>
                        <option value="uiux">UI/UX & Web Design</option>
                        <option value="video">Video Production</option>
                        <option value="webdev">Web & App Engineering</option>
                        <option value="cloud">Cloud Infrastructure</option>
                        <option value="security">Cyber Security</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Scope & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, goals, and key deliverables..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] transition-colors text-xs uppercase tracking-wider"
                  >
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
