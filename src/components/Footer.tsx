import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { SiteSettings } from '../types/site';

interface FooterProps {
  settings: SiteSettings;
  setCurrentPage: (page: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  setCurrentPage,
  onOpenQuote,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090b0f] border-t border-neutral-800 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-neutral-800">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-['Syne'] font-extrabold text-2xl text-white">
              MEEK<span className="text-[#e11d48]">.</span>AE
            </span>

            <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 max-w-sm">
              Meek Digital Marketing LLC is a commercially focused, digitally-led creative agency headquartered in Al Garhood, Dubai, UAE.
            </p>

            <div className="pt-1 text-xs text-neutral-500 font-mono">
              Dubai, United Arab Emirates · Established 2014
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-['Syne'] text-white font-bold text-xs tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'services', 'portfolio', 'team', 'contact'].map((p) => (
                <li key={p}>
                  <button
                    onClick={() => {
                      setCurrentPage(p);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors capitalize"
                  >
                    {p === 'portfolio' ? 'Case Studies' : p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div className="space-y-3">
            <h4 className="font-['Syne'] text-white font-bold text-xs tracking-wider uppercase">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Market Expansion
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  UI/UX & Web Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Video Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Cloud Computing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Cyber Security
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact */}
          <div className="space-y-3">
            <h4 className="font-['Syne'] text-white font-bold text-xs tracking-wider uppercase">
              Dubai Studio
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 mt-0.5 shrink-0" />
                <span>{settings.address}, {settings.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-[#e11d48] font-mono transition-colors"
                >
                  {settings.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <a
                  href={`mailto:${settings.email}`}
                  className="text-white hover:text-[#e11d48] font-mono transition-colors"
                >
                  {settings.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold border border-neutral-800 transition-colors text-center"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {settings.agencyName} (Meek Digital Marketing LLC). All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-neutral-400 font-mono text-[11px]">
            <span>meek.ae</span>
            <span>·</span>
            <span>Al Garhood, Dubai</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
