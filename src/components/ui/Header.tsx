import React, { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTally } from "../../hooks/useTally";
import { useLanguage } from "../../contexts/LanguageContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openTally } = useTally();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.header.nav.about, href: "#about" },
    { name: t.header.nav.pricing, href: "#pricing" },
    { name: t.header.nav.faq, href: "#faq" },
  ];

  const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={cn("flex items-center gap-2 text-sm font-medium", mobile ? "justify-center mt-4" : "")}>
      <button
        onClick={() => setLanguage('ru')}
        className={cn("transition-colors", language === 'ru' ? 'text-primary font-bold' : 'text-gray-500 hover:text-white')}
      >
        RU
      </button>
      <span className="text-gray-700">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={cn("transition-colors", language === 'en' ? 'text-primary font-bold' : 'text-gray-500 hover:text-white')}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-mono font-bold text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <Cpu className="w-8 h-8" />
          <span>GONKA<span className="text-white">24</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors hover:glow"
            >
              {link.name}
            </a>
          ))}
          <LanguageSwitcher />
          <button
            onClick={() => openTally()}
            className="bg-primary text-black px-5 py-2 rounded font-bold hover:bg-primary/90 transition-transform active:scale-95"
          >
            {t.header.cta}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-primary text-center"
                >
                  {link.name}
                </a>
              ))}
              <LanguageSwitcher mobile />
              <button
                onClick={() => {
                  openTally();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-primary text-black px-5 py-3 rounded font-bold w-full"
              >
                {t.header.cta}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
