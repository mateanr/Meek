import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SiteSettings, ServiceItem } from '../../types/site';

interface ServicesPageProps {
  settings: SiteSettings;
  services: ServiceItem[];
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  settings,
  services,
  onOpenQuote,
}) => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
          Core Disciplines
        </div>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Full-Stack Marketing & Digital Engineering
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          From high-production commercial video to sub-second headless applications, we build integrated growth engines for ambitious brands.
        </p>
      </section>

      {/* Services In-Depth List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="p-7 sm:p-10 rounded-xl bg-[#11141a] border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                <span>0{index + 1}.</span>
                <span className="text-[#e11d48] font-bold uppercase tracking-wider">{service.badge}</span>
              </div>

              <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
                {service.title}
              </h2>

              <div className="text-xs text-neutral-400 font-medium">
                {service.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {service.description}
              </p>

              {/* Features breakdown */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Sprint Methodologies
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="p-3 rounded-lg bg-neutral-900 border border-neutral-800/80 flex items-start gap-2.5 text-xs text-neutral-300"
                    >
                      <span className="text-[#e11d48] font-bold shrink-0">—</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#e11d48] hover:bg-[#be123c] inline-flex items-center gap-2 transition-colors uppercase tracking-wider"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                  <span className="font-mono font-bold text-white uppercase tracking-wider">
                    Key Deliverables
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Production Handover
                  </span>
                </div>

                <div className="space-y-2">
                  {service.deliverables.map((deliv, dIndex) => (
                    <div
                      key={dIndex}
                      className="flex items-center justify-between p-2.5 rounded-md bg-[#11141a] border border-neutral-800/80 text-xs text-neutral-300 font-mono"
                    >
                      <span>{deliv}</span>
                      <span className="text-[10px] text-neutral-500">
                        Verified
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-md bg-[#11141a]/60 border border-dashed border-neutral-800 text-center text-xs text-neutral-400">
                  Custom sprint scopes and dedicated team pods available upon request.
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pt-8 border-t border-neutral-800">
        <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
          Ready to Modernize Your Digital Architecture?
        </h2>
        <button
          onClick={onOpenQuote}
          className="px-7 py-3.5 rounded-lg font-semibold text-white text-xs uppercase tracking-wider bg-[#e11d48] hover:bg-[#be123c] inline-flex items-center gap-2 transition-colors"
        >
          <span>Request Custom Proposal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
