import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface ProcessProps {
  content?: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
}

export const Process = ({ content }: ProcessProps) => {
  const { t } = useLanguage();
  // @ts-ignore
  const c = content || t.safecompute?.how_it_works;

  if (!c) return null;

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {c.title}
          </h2>
          <p className="text-gray-400 text-lg">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
          {c.steps.map((step: any, i: number) => (
            <div key={i} className="relative group">
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < c.steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-full w-10 items-center justify-center z-10 text-white/20">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
