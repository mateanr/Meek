import React, { useState } from 'react';
import { initialSiteSettings, servicesData, portfolioData, teamMembers, testimonialsData } from './data/initialData';
import { SiteSettings, PortfolioItem } from './types/site';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { TeamPage } from './components/pages/TeamPage';
import { ContactPage } from './components/pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [settings] = useState<SiteSettings>(initialSiteSettings);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            settings={settings}
            team={teamMembers}
            onOpenQuote={() => setIsQuoteOpen(true)}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'services':
        return (
          <ServicesPage
            settings={settings}
            services={servicesData}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        );
      case 'portfolio':
        return (
          <PortfolioPage
            settings={settings}
            portfolio={portfolioData}
            onSelectPortfolio={(item) => setSelectedCaseStudy(item)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        );
      case 'team':
        return (
          <TeamPage
            settings={settings}
            team={teamMembers}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage settings={settings} />;
      case 'home':
      default:
        return (
          <HomePage
            settings={settings}
            services={servicesData}
            portfolio={portfolioData}
            team={teamMembers}
            testimonials={testimonialsData}
            setCurrentPage={setCurrentPage}
            onOpenQuote={() => setIsQuoteOpen(true)}
            onSelectPortfolio={(item) => setSelectedCaseStudy(item)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f9fafb] selection:bg-[#ff385c] selection:text-white flex flex-col justify-between">
      <Header
        settings={settings}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      <Footer
        settings={settings}
        setCurrentPage={setCurrentPage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Global Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        settings={settings}
      />

      <CaseStudyModal
        item={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        settings={settings}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />
    </div>
  );
}
