import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTally } from "../../hooks/useTally";
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
  const { openTally } = useTally();
  const { t } = useLanguage();
  const c = content || t.pricing;


  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black/50 to-black/80 opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {c.title}
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            {c.subtitle}
          </p>
          <p className="text-gray-400 text-lg">
            <span className="font-bold text-white">{c.note}</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative flex flex-col"
          >
            <h3 className="text-xl font-medium text-gray-300 mb-2">{c.plans.short.name}</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-white">{c.plans.short.price}</span>
              <span className="text-sm text-gray-400 mb-2">{c.plans.short.period}</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {c.plans.short.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openTally({ hiddenFields: { plan: '1_month' } })}
              className="w-full py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
            >
              {c.plans.short.cta}
            </button>
          </motion.div>

          {/* Plan 2 - Popular */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-primary/20 to-black border border-primary/50 backdrop-blur-xl relative transform md:-translate-y-4 flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              {c.plans.medium.tag || "POPULAR"}
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{c.plans.medium.name}</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-primary">{c.plans.medium.price}</span>
              <span className="text-sm text-gray-400 mb-2">{c.plans.medium.period}</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {c.plans.medium.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openTally({ hiddenFields: { plan: '2_months' } })}
              className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              {c.plans.medium.cta}
            </button>
          </motion.div>

          {/* Plan 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative flex flex-col"
          >
            <h3 className="text-xl font-medium text-gray-300 mb-2">{c.plans.long.name}</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-white">{c.plans.long.price}</span>
              <span className="text-sm text-gray-400 mb-2">{c.plans.long.period}</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {c.plans.long.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openTally({ hiddenFields: { plan: '3_months' } })}
              className="w-full py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
            >
              {c.plans.long.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
