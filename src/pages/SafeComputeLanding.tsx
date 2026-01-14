import React from 'react';
import { Header } from '../components/ui/Header';
import { Background3D } from '../components/ui/Background3D';
import { useLanguage } from '../contexts/LanguageContext';
import { Hero } from '../components/sections/Hero';
import { AboutSafeCompute } from '../components/sections/AboutSafeCompute';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { Pricing } from '../components/sections/Pricing';
import { Process } from '../components/sections/Process';
import { Fomo } from '../components/sections/Fomo';
import { SafeComputeFAQ } from '../components/sections/SafeComputeFAQ';

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
    <div className="min-h-screen text-white font-sans selection:bg-primary/30 relative">
      <Background3D />
      <Header customLinks={navLinks} />
      <main className="relative z-10">
        <Hero content={content?.hero} />
        <AboutSafeCompute content={content?.about_custom} />
        <ProblemSolution content={content?.problem_solution} />

        <Pricing content={content?.pricing} />
        <Process content={content?.how_it_works} />
        <Fomo content={content?.fomo} />
        <SafeComputeFAQ />
      </main>
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <p className="mb-2">{t.footer.rights}</p>
          <p className="text-xs text-gray-600">{t.footer.payment}</p>
        </div>
      </footer>
    </div>
  );
}
