import React from 'react';
import { X, TrendingUp } from 'lucide-react';
import { PortfolioItem, SiteSettings } from '../types/site';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  settings: SiteSettings;
  onOpenQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  item,
  onClose,
  settings,
  onOpenQuote,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-[#11141a] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0 bg-neutral-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md bg-black/70 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 p-4 bg-black/75 rounded-lg border border-neutral-800">
            <div className="text-[11px] font-mono text-[#e11d48] font-bold uppercase tracking-wider mb-1">
              {item.categoryLabel} · {item.client}
            </div>
            <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-3">
            {item.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center"
              >
                <div className="font-['Syne'] text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-['Syne'] text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-white" />
              Strategic Execution & Outcome
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
              Discipline Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Need Similar Commercial Velocity?
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Let's discuss how we can tailor this strategy for your brand.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] shrink-0 transition-colors uppercase tracking-wider"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
