import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useContactModal } from '../../contexts/ContactModalContext';

interface FinalCTAProps {
  content?: {
    title: string;
    subtitle: string;
    text: string;
    button: string;
  };
}

export const FinalCTA = ({ content }: FinalCTAProps) => {
  const { openContactModal } = useContactModal();

  if (!content) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border p-12 text-center shadow-lg relative overflow-hidden"
          >
            {/* Decoratiive flare */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>{content.subtitle}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
                {content.title}
              </h2>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                {content.text}
              </p>

              <button
                onClick={() => openContactModal()}
                className="px-10 py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                {content.button}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
