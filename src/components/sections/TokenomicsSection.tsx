
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

interface TokenomicsSectionProps {
  content?: {
    title: string;
    description: string;
    link_text: string;
    link_url: string;
  };
}

export const TokenomicsSection = ({ content }: TokenomicsSectionProps) => {
  if (!content) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow similar to other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {content.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 whitespace-pre-line leading-relaxed">
              {content.description}
            </p>

            <a
              href={content.link_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black rounded-xl transition-all group shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              <span className="font-bold">{content.link_text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
