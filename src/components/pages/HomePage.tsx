import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Code,
  Video,
  Cloud,
  Check,
  Star,
  MapPin,
  Mail,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { SiteSettings, ServiceItem, PortfolioItem, TeamMember, Testimonial } from '../../types/site';

interface HomePageProps {
  settings: SiteSettings;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  team: TeamMember[];
  testimonials: Testimonial[];
  setCurrentPage: (page: string) => void;
  onOpenQuote: () => void;
  onSelectPortfolio: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  settings,
  services,
  portfolio,
  team,
  testimonials,
  setCurrentPage,
  onOpenQuote,
  onSelectPortfolio,
}) => {
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'marketing',
    message: '',
  });

  const filteredPortfolio =
    portfolioFilter === 'all'
      ? portfolio
      : portfolio.filter((p) => p.category === portfolioFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'marketing',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="space-y-28 sm:space-y-36">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 sm:pt-40 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet Editorial Kicker */}
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                <span>Meek Digital Marketing</span>
                <span aria-hidden="true" className="text-neutral-600">/</span>
                <span className="text-neutral-300">Al Garhood, Dubai</span>
                <span aria-hidden="true" className="text-neutral-600">/</span>
                <span className="text-[#e11d48]">Est. 2014</span>
              </div>

              {/* Bold, Solid Display Headline */}
              <h1 className="font-['Syne'] text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
                Digital Experiences Engineered for{' '}
                <span className="text-[#e11d48]">Commercially Measurable</span> Growth.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
                We operate as an agile creative collective based in Dubai. For over a decade, we have united strategic brand positioning, intuitive digital design, commercial video production, and high-speed web engineering without agency bureaucracy.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-3.5 rounded-lg font-semibold text-white text-xs uppercase tracking-wider bg-[#e11d48] hover:bg-[#be123c] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-lg font-semibold text-neutral-300 hover:text-white text-xs uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors text-center"
                >
                  Explore Capabilities
                </button>
              </div>

              {/* Quiet Credentials Strip */}
              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-6 text-xs text-neutral-400">
                <div>
                  <div className="font-mono text-white text-base font-bold tabular-nums">10+ Yrs</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">UAE Track Record</div>
                </div>
                <div>
                  <div className="font-mono text-white text-base font-bold tabular-nums">250+</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Deliverables Shipped</div>
                </div>
                <div>
                  <div className="font-mono text-white text-base font-bold tabular-nums">100%</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Direct Accountability</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#11141a] border border-neutral-800 p-6 sm:p-7 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs">
                  <span className="font-mono text-neutral-400 uppercase tracking-wider">
                    Creative Brief 01
                  </span>
                  <span className="text-neutral-500 font-mono">Dubai HQ</span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-[#e11d48] font-semibold">
                    Core Methodology
                  </div>
                  <h3 className="font-['Syne'] text-xl font-bold text-white leading-snug">
                    Agile Sprints Over Corporate Bloat
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Our compact squads work directly with brand owners and marketing directors. No middle layers, no generic templates, and zero guesswork.
                  </p>
                </div>

                {/* Structured Ledger */}
                <div className="space-y-2 border-t border-neutral-800 pt-4 text-xs font-mono">
                  <div className="flex items-center justify-between py-1.5 text-neutral-300 border-b border-neutral-800/50">
                    <span className="text-neutral-500">Service Area</span>
                    <span>Brand Growth & Engineering</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-neutral-300 border-b border-neutral-800/50">
                    <span className="text-neutral-500">Turnaround</span>
                    <span>2–4 Week Iteration Sprints</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-neutral-300">
                    <span className="text-neutral-500">Performance Focus</span>
                    <span className="text-white font-bold">Conversion & Retention</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs transition-colors text-center"
                  >
                    Request Project Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURAL STATS STRIP ================= */}
      <section className="border-y border-neutral-800 bg-[#0e1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800 py-10">
            <div className="p-4 sm:p-6 text-center lg:text-left space-y-1">
              <div className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                +340%
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Average Portfolio ROI
              </div>
            </div>

            <div className="p-4 sm:p-6 text-center lg:text-left space-y-1">
              <div className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                250+
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Projects Completed
              </div>
            </div>

            <div className="p-4 sm:p-6 text-center lg:text-left space-y-1">
              <div className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                98%
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Client Retention Rate
              </div>
            </div>

            <div className="p-4 sm:p-6 text-center lg:text-left space-y-1">
              <div className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                4.8x
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Average Conversion Lift
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT AGENCY ================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Container */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Meek Creative Studio in Dubai"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                About The Agency
              </div>

              <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Design-Led Discipline with Technical Depth.
              </h2>

              <p className="text-neutral-300 text-sm leading-relaxed">
                With over a decade of continuous presence in Dubai, Meek Digital Marketing LLC is built for commercial impact. Our agile framework replaces bureaucratic delays with rapid creative cycles and uncompromising execution.
              </p>

              <p className="text-neutral-400 text-sm leading-relaxed">
                Under the leadership of Matean Rahmat, our collective brings together brand strategists, film directors, performance media buyers, and full-stack software engineers working under one unified roof.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#11141a] border border-neutral-800 space-y-1.5">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    01. Agile Sprints
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Direct founder communication, bi-weekly deliverables, and real-time project collaboration.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#11141a] border border-neutral-800 space-y-1.5">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    02. Full Spectrum
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    From 4K video storytelling and brand identity to bespoke Jamstack web portals and cloud infrastructure.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-white hover:text-[#e11d48] transition-colors"
                >
                  <span>Read Agency Background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES / SERVICES ================= */}
      <section className="relative py-16 bg-[#0a0d11] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
            <div className="space-y-2">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Core Capabilities
              </div>
              <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white">
                Six Disciplines. One Studio.
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              End-to-end capabilities designed to remove growth bottlenecks and establish market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="rounded-xl bg-[#11141a] border border-neutral-800 p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span>0{idx + 1}.</span>
                    <span>{service.badge}</span>
                  </div>

                  <h3 className="font-['Syne'] text-lg font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-4 border-t border-neutral-800/60 text-xs text-neutral-400">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#e11d48] font-bold">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK / CASE STUDIES ================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
            <div className="space-y-2">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Selected Portfolio
              </div>
              <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white">
                Commercial Case Studies
              </h2>
            </div>

            {/* Filter Tabs - Clean Segmented Buttons */}
            <div className="flex items-center gap-1 p-1 bg-[#11141a] rounded-lg border border-neutral-800 overflow-x-auto">
              {[
                { id: 'all', label: 'All' },
                { id: 'marketing', label: 'Marketing' },
                { id: 'design', label: 'Design' },
                { id: 'production', label: 'Video' },
                { id: 'development', label: 'Dev' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPortfolioFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    portfolioFilter === tab.id
                      ? 'bg-neutral-800 text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectPortfolio(item)}
                className="group cursor-pointer rounded-xl bg-[#11141a] border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
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

                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
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
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="relative py-16 bg-[#0a0d11] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
              Leadership
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white">
              The Directors Behind Meek
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="rounded-xl bg-[#11141a] border border-neutral-800 p-6 space-y-4"
              >
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

                <div className="pt-2 text-[11px] text-neutral-500 font-mono border-t border-neutral-800/60">
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VERIFIED TESTIMONIALS ================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
              Client Endorsements
            </div>
            <h2 className="font-['Syne'] text-3xl font-extrabold text-white">
              Verifiable Commercial Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-xl bg-[#11141a] border border-neutral-800 p-7 space-y-5 flex flex-col justify-between"
              >
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-neutral-800">
                  <div className="font-['Syne'] text-white font-bold text-xs uppercase tracking-wider">
                    {t.author}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">
                    {t.role} · <span className="text-neutral-400">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative pb-16" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Direct Contact
              </div>
              <h2 className="font-['Syne'] text-3xl font-extrabold text-white">
                Let's Discuss Scope & Deliverables
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Connect directly with our strategy directors in {settings.address}. We analyze requirements, estimate timelines, and provide transparent deliverables.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-lg bg-[#11141a] border border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Headquarters
                  </div>
                  <div className="text-sm font-medium text-white mt-1">
                    {settings.address}, {settings.city}, {settings.country}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#11141a] border border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-sm font-medium text-white hover:text-[#e11d48] transition-colors mt-1 block font-mono"
                  >
                    {settings.email}
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-[#11141a] border border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-medium text-white hover:text-[#e11d48] transition-colors mt-1 block font-mono"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[#11141a] border border-neutral-800 p-7 sm:p-9 space-y-6">
                <div>
                  <h3 className="font-['Syne'] text-xl font-bold text-white">
                    Project Consultation Request
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your details below and a director will respond within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-700 text-center space-y-2">
                    <h4 className="font-['Syne'] font-bold text-white text-base">
                      Inquiry Dispatched Successfully
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Thank you. We have logged your request and will contact you directly at {formData.email}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
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
                          Email Address *
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
                          Core Service
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
                          <option value="cloud">Cloud Computing & DevOps</option>
                          <option value="security">Cyber Security</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Project Brief *
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
        </div>
      </section>
    </div>
  );
};
