import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Coins } from "lucide-react";
import { useContactModal } from "../../contexts/ContactModalContext";
import { useLanguage } from "../../contexts/LanguageContext";

interface HeroProps {
  content?: {
    tag: string;
    title: string;
    title_accent: string;
    description: string;
    cta: string;
    features: {
      ready: string;
      ready_desc: string;
      passive: string;
      passive_desc: string;
      warranty: string;
      warranty_desc: string;
    };
  };
}

export const Hero = ({ content }: HeroProps) => {
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();
  const c = content || t.hero;


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid/Matrix Effect - Adjusted opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-primary text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {c.tag}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
        >
          {c.title}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">{c.title_accent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {c.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => openContactModal()}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
          >
            {c.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, label: c.features.ready, desc: c.features.ready_desc },
            { icon: Coins, label: c.features.passive, desc: c.features.passive_desc },
            { icon: ShieldCheck, label: c.features.warranty, desc: c.features.warranty_desc },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm backdrop-blur-sm">
              <item.icon className="w-8 h-8 text-primary" />
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
