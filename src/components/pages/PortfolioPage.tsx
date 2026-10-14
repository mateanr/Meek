import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteSettings, PortfolioItem } from '../../types/site';

interface PortfolioPageProps {
  settings: SiteSettings;
  portfolio: PortfolioItem[];
  onSelectPortfolio: (item: PortfolioItem) => void;
  onOpenQuote: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  settings,
  portfolio,
  onSelectPortfolio,
  onOpenQuote,
}) => {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
          Selected Portfolio
        </div>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Commercial Case Studies & Milestones
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          How we help UAE and regional brands achieve commercial scale through strategic positioning, high-converting design, and agile execution.
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1 p-1 bg-[#11141a] rounded-lg border border-neutral-800 overflow-x-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'marketing', label: 'Market Expansion' },
              { id: 'design', label: 'UI/UX Design' },
              { id: 'production', label: 'Video Production' },
              { id: 'development', label: 'Web & App' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolio(item)}
              className="group cursor-pointer rounded-xl bg-[#11141a] border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span>{item.client}</span>
                    <span className="text-neutral-400 font-bold">{item.categoryLabel}</span>
                  </div>

                  <h3 className="font-['Syne'] text-lg font-bold text-white group-hover:text-[#e11d48] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-semibold">
                  {item.impact}
                </span>
                <span className="text-neutral-400 group-hover:text-white font-medium flex items-center gap-1">
                  <span>Inspect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pt-8 border-t border-neutral-800">
        <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
          Have an Ambitious Project in Mind?
        </h2>
        <button
          onClick={onOpenQuote}
          className="px-7 py-3.5 rounded-lg font-semibold text-white text-xs uppercase tracking-wider bg-[#e11d48] hover:bg-[#be123c] inline-flex items-center gap-2 transition-colors"
        >
          <span>Request Custom Assessment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
