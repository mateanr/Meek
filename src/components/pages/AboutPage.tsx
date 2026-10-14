import React from 'react';
import { ArrowRight, Target, Shield, Sparkles } from 'lucide-react';
import { SiteSettings, TeamMember } from '../../types/site';

interface AboutPageProps {
  settings: SiteSettings;
  team: TeamMember[];
  onOpenQuote: () => void;
  setCurrentPage: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  team,
  onOpenQuote,
  setCurrentPage,
}) => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
          Agency Background
        </div>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          A Decade of Creative Strategy in Dubai
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          Founded in Dubai, UAE, Meek Digital Marketing LLC is a commercially focused creative agency built to solve real business challenges.
        </p>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e11d48]">
              Origin & Focus
            </span>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
              Eliminating Friction. Accelerating Commercial Velocity.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              With over a decade of operational excellence in Dubai, Meek Digital Marketing LLC was founded to solve a fundamental disconnect in the agency landscape: the divide between striking creative aesthetics and bottom-line commercial accountability.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Instead of slow corporate layers and outdated retainers, we operate in tight, agile multi-disciplinary squads. Designers, media buyers, motion animators, and software engineers collaborate directly with founders and marketing directors.
            </p>
            <div className="p-4 rounded-lg bg-[#11141a] border border-neutral-800 space-y-1.5">
              <div className="font-['Syne'] font-bold text-xs text-white uppercase tracking-wider">
                Guiding Operating Principle
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We test relentlessly, optimize with algorithmic precision, and build custom web and advertising systems that withstand high-volume commercial scale.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/5] bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="Dubai Studio"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 rounded-xl bg-[#11141a] border border-neutral-800 text-center space-y-0.5">
                <div className="font-['Syne'] text-3xl font-extrabold text-white font-mono tabular-nums">
                  10+
                </div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider">
                  Years Operating
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-5 rounded-xl bg-[#11141a] border border-neutral-800 text-center space-y-0.5">
                <div className="font-['Syne'] text-3xl font-extrabold text-white font-mono tabular-nums">
                  250+
                </div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider">
                  Shipped Projects
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/5] bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                  alt="Product Strategy"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#0a0d11] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
              Operating Values
            </div>
            <h2 className="font-['Syne'] text-3xl font-bold text-white">
              Principles That Govern Every Sprint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-xl bg-[#11141a] border border-neutral-800 space-y-3">
              <div className="text-xs font-mono font-bold text-[#e11d48]">01.</div>
              <h3 className="font-['Syne'] text-lg font-bold text-white">
                Agility & Direct Ownership
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We eliminate layers of account management. You collaborate directly with master practitioners who own outcomes and iterate rapidly.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#11141a] border border-neutral-800 space-y-3">
              <div className="text-xs font-mono font-bold text-[#e11d48]">02.</div>
              <h3 className="font-['Syne'] text-lg font-bold text-white">
                Bespoke Design Craft
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every client receives a custom design system tailored to their brand positioning. No recycled templates or low-effort shortcuts.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#11141a] border border-neutral-800 space-y-3">
              <div className="text-xs font-mono font-bold text-[#e11d48]">03.</div>
              <h3 className="font-['Syne'] text-lg font-bold text-white">
                Measurable Commercial ROI
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Whether deploying cloud infrastructure or scaling regional ad funnels, we build for high security, flawless uptime, and transparent ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
            Leadership
          </div>
          <h2 className="font-['Syne'] text-3xl font-bold text-white">
            Leadership & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-xl bg-[#11141a] border border-neutral-800 space-y-3"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-['Syne'] font-bold text-white text-base">
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-[#e11d48] uppercase tracking-wider mt-0.5">
                  {member.role}
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pt-8 border-t border-neutral-800">
        <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
          Ready to Work with Dubai's Agile Digital Leaders?
        </h2>
        <button
          onClick={onOpenQuote}
          className="px-7 py-3.5 rounded-lg font-semibold text-white text-xs uppercase tracking-wider bg-[#e11d48] hover:bg-[#be123c] inline-flex items-center gap-2 transition-colors"
        >
          <span>Schedule an Initial Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
