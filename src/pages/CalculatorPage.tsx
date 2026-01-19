import React from 'react';
import { Header } from '../components/ui/Header';
import { Background3D } from '../components/ui/Background3D';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactModalProvider } from '../contexts/ContactModalContext';
import { CalculatorSection } from '../components/sections/CalculatorSection';

export function CalculatorPage() {
  const { t } = useLanguage();

  // @ts-ignore
  const nav = t.header.safecompute_nav;
  const navLinks = [
    { name: nav?.about || "About", href: "/gnk-mining-infrastructure#about" },
    { name: nav?.pricing || "Pricing", href: "/gnk-mining-infrastructure#pricing" },
    { name: nav?.faq || "FAQ", href: "/gnk-mining-infrastructure#faq-section" },
  ];

  return (
    <ContactModalProvider>
      <div className="min-h-screen font-sans selection:bg-emerald-500/30 relative text-foreground bg-gradient-to-br from-emerald-50/50 to-blue-50/50 flex flex-col">
        <Background3D />

        <Header customLinks={navLinks} />

        <main className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center flex-1">
          <CalculatorSection />
        </main>

        <Footer />
      </div>
    </ContactModalProvider>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-6 text-center text-muted-foreground text-sm border-t border-border bg-card/80 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2">
        <div className="space-y-1">
          <p className="text-muted-foreground/60 font-medium">{t.footer.rights}</p>
          <p className="text-xs text-muted-foreground/50">{t.footer.payment}</p>
        </div>

        <div className="flex flex-col gap-1 text-xs">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center">
            <p>
              {t.footer.contact_text}{' '}
              <a href={t.footer.manager_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all font-medium">
                {t.footer.contact_link_text}
              </a>
            </p>
            <span className="hidden sm:inline text-border">•</span>
            <p>
              {t.footer.community_text}{' '}
              <a href={t.footer.community_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all font-medium">
                {t.footer.community_link_text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
