import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SafeComputeIcon } from "./SafeComputeIcon";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "../../contexts/ContactModalContext";
import { useLanguage } from "../../contexts/LanguageContext";

import { Link } from "react-router-dom";

interface HeaderProps {
  customLinks?: { name: string; href: string }[];
}

export const Header = ({ customLinks }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openContactModal } = useContactModal();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultNavLinks = [
    { name: t.header.nav.about, href: "#about" },
    { name: t.header.nav.pricing, href: "#pricing" },
    { name: t.header.nav.faq, href: "#faq" },
  ];

  const navLinks = customLinks || defaultNavLinks;

  const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
      if (mobile) return;
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.language-dropdown')) {
          setIsOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, [mobile]);

    const languages = [
      { code: 'ru', label: 'RU' },
      { code: 'en', label: 'EN' },
      { code: 'es', label: 'ES' },
      { code: 'de', label: 'DE' },
      { code: 'zh', label: 'CN' },
      { code: 'ar', label: 'AR' },
    ] as const;

    const currentLang = languages.find(l => l.code === language) || languages[0];

    if (mobile) {
      return (
        <div className="flex items-center justify-center gap-4 mt-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={cn(
                "text-sm font-medium transition-colors",
                language === lang.code ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="relative language-dropdown">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {currentLang.label}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen ? "rotate-180" : "")} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 bg-card border border-border rounded-md shadow-lg overflow-hidden min-w-[80px] py-1"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors",
                    language === lang.code ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-card/80 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary font-mono font-bold text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <SafeComputeIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          <span>Safe<span className="text-foreground">Compute</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:glow"
            >
              {link.name}
            </a>
          ))}
          <LanguageSwitcher />
          <button
            onClick={openContactModal}
            className="bg-primary text-primary-foreground px-5 py-2 rounded font-bold hover:bg-primary/90 transition-transform active:scale-95"
          >
            {t.header.cta}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
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
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary text-center"
                >
                  {link.name}
                </a>
              ))}
              <LanguageSwitcher mobile />
              <button
                onClick={() => {
                  openContactModal();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-primary text-primary-foreground px-5 py-3 rounded font-bold w-full"
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
