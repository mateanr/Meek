import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { SiteSettings } from '../types/site';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: SiteSettings;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  settings,
  defaultService = 'marketing',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState('$10k - $25k');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-[#11141a] border border-neutral-800 rounded-xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-white mx-auto" />
            <h3 className="font-['Syne'] text-xl font-bold text-white">
              Consultation Brief Received
            </h3>
            <p className="text-neutral-400 text-xs max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{name}</span>. Our strategy directors in Dubai will review your brief and contact you directly at <span className="text-white font-mono">{email}</span> within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 space-y-1">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Direct Inquiry
              </div>
              <h2 className="font-['Syne'] text-2xl font-bold text-white">
                Request a Consultation & Estimate
              </h2>
              <p className="text-xs text-neutral-400">
                Tell us about your objectives. We will prepare an agile proposal tailored for your budget and timeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Matean Rahmat"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Discipline
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-neutral-600"
                  >
                    <option value="marketing">Market Expansion & Growth</option>
                    <option value="ui-ux">UI/UX & Web Design</option>
                    <option value="video">Video Production</option>
                    <option value="web-dev">Web & App Engineering</option>
                    <option value="cloud">Cloud Computing & DevOps</option>
                    <option value="security">Cyber Security</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Target Budget Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['$5k - $10k', '$10k - $25k', '$25k - $50k+'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-2 px-2 text-xs rounded-lg font-medium transition-colors ${
                        budget === b
                          ? 'bg-neutral-800 text-white font-semibold border border-neutral-700'
                          : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Project Brief & Objectives *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your timeline, current obstacles, and desired results..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-neutral-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] transition-colors text-xs uppercase tracking-wider"
              >
                Submit Consultation Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
