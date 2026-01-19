import React from 'react';
import { Header } from '../components/ui/Header';
import CloudBackground from '../components/ui/CloudBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { Hero } from '../components/sections/Hero';
import { AboutSafeCompute } from '../components/sections/AboutSafeCompute';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { Pricing } from '../components/sections/Pricing';
import { Process } from '../components/sections/Process';
import { Fomo } from '../components/sections/Fomo';
import { SafeComputeFAQ } from '../components/sections/SafeComputeFAQ';
import { TokenomicsSection } from '../components/sections/TokenomicsSection';
import { FinalCTA } from '../components/sections/FinalCTA';

import { ContactModalProvider } from '../contexts/ContactModalContext';

export function SafeComputeLanding() {
  const { t } = useLanguage();
  // @ts-ignore
  const content = t.safecompute;

  // @ts-ignore
  const nav = t.header.safecompute_nav;

  const navLinks = [
    { name: nav?.about || "About", href: "#about" },
    { name: nav?.problem || "Problem", href: "#problem" },
    { name: nav?.pricing || "Pricing", href: "#pricing" },
    { name: nav?.how_it_works || "How it works", href: "#how-it-works" },
    { name: nav?.economics || "Economics", href: "#economics" },
    { name: nav?.faq || "FAQ", href: "#faq-section" },
  ];

  return (
    <ContactModalProvider>
      <div className="min-h-screen font-sans selection:bg-primary/30 relative text-foreground">
        <CloudBackground />
        <Header customLinks={navLinks} />
        <main className="relative z-10">
          <Hero content={content?.hero} />
          <AboutSafeCompute content={content?.about_custom} />
          <ProblemSolution content={content?.problem_solution} />

          <Pricing content={content?.pricing} />
          <Process content={content?.how_it_works} />
          <Fomo content={content?.fomo} />
          <TokenomicsSection content={content?.tokenomics_section} />
          <SafeComputeFAQ />
          <FinalCTA content={content?.final_cta} />
        </main>
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border bg-card/80 backdrop-blur-md">
          <div className="container mx-auto px-4 flex flex-col items-center gap-4">
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
      </div>
    </ContactModalProvider>
  );
}
