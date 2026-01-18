import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export const SafeComputeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { t } = useLanguage();

  const items = t.safecompute.faq.items;

  return (
    <section id="faq-section" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-primary w-8 h-8 md:w-10 md:h-10" /> {t.safecompute.faq.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.safecompute.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-card border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-8">
                  {item.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
