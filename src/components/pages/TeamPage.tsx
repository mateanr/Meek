import React from 'react';
import { ArrowRight, Mail, Globe } from 'lucide-react';
import { SiteSettings, TeamMember } from '../../types/site';

interface TeamPageProps {
  settings: SiteSettings;
  team: TeamMember[];
  onOpenQuote: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  settings,
  team,
  onOpenQuote,
}) => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
          Agency Leadership
        </div>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Strategic & Creative Directors
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          Led by Matean Rahmat, our Dubai collective unites creative directors, engineers, and growth strategists with direct client collaboration.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-7 rounded-xl bg-[#11141a] border border-neutral-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="font-['Syne'] text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#e11d48] uppercase tracking-wider mt-0.5">
                    {member.role}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
                {member.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 text-center space-y-5 pt-8 border-t border-neutral-800">
        <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
          Collaborate Directly with Our Leadership
        </h2>
        <button
          onClick={onOpenQuote}
          className="px-7 py-3.5 rounded-lg font-semibold text-white text-xs uppercase tracking-wider bg-[#e11d48] hover:bg-[#be123c] inline-flex items-center gap-2 transition-colors"
        >
          <span>Connect With Our Directors</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
