import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface AboutSafeComputeProps {
  content?: {
    title: string;
    title_accent: string;
    description: string;
    facts: { title: string; desc: string }[];
  };
}

export const AboutSafeCompute = ({ content }: AboutSafeComputeProps) => {
  const { t } = useLanguage();
  // @ts-ignore
  const c = content || t.safecompute?.about_custom;

  if (!c) return null;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {c.title} <span className="text-primary">{c.title_accent}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {c.description}
            </p>
          </div>

          <div className="space-y-6">
            {c.facts.map((fact: any, index: number) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-4 items-start"
              >
                <div className="p-2 rounded-full bg-primary/20 shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{fact.title}</h3>
                  <p className="text-muted-foreground">{fact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
