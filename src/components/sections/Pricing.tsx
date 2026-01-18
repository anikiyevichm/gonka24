import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useContactModal } from "../../contexts/ContactModalContext";
import { useLanguage } from "../../contexts/LanguageContext";

interface PricingProps {
  content?: {
    title: string;
    subtitle: string;
    note: string;
    plans: {
      short: any;
      medium: any;
      long: any;
    };
  };
}

export const Pricing = ({ content }: PricingProps) => {
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();
  const c = content || t.pricing;


  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black/50 to-black/80 opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {c.title}
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            {c.subtitle}
          </p>
          <p className="text-muted-foreground text-lg">
            <span className="font-bold text-foreground">{c.note}</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-card border border-border backdrop-blur-xl relative flex flex-col hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-medium text-muted-foreground mb-2">{c.plans.short.name}</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-foreground">{c.plans.short.price}</span>
              <span className="text-sm text-muted-foreground mb-2">{c.plans.short.period}</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {c.plans.short.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openContactModal()}
              className="w-full py-4 bg-muted text-foreground font-bold rounded-lg hover:bg-muted/80 transition-colors border border-border"
            >
              {c.plans.short.cta}
            </button>
          </motion.div>

          {/* Plan 2 - Popular */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-card border-2 border-primary backdrop-blur-xl relative transform md:-translate-y-4 flex flex-col overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              {c.plans.medium.tag || "POPULAR"}
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">{c.plans.medium.name}</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-primary">{c.plans.medium.price}</span>
              <span className="text-sm text-muted-foreground mb-2">{c.plans.medium.period}</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {c.plans.medium.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openContactModal()}
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              {c.plans.medium.cta}
            </button>
          </motion.div>

          {/* Plan 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-card border border-border backdrop-blur-xl relative flex flex-col hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-medium text-muted-foreground mb-2">{c.plans.long.name}</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-foreground">{c.plans.long.price}</span>
              <span className="text-sm text-muted-foreground mb-2">{c.plans.long.period}</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {c.plans.long.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openContactModal()}
              className="w-full py-4 bg-muted text-foreground font-bold rounded-lg hover:bg-muted/80 transition-colors border border-border"
            >
              {c.plans.long.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
