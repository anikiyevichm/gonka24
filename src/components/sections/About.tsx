import React from "react";
import { Brain, Cpu, Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface AboutProps {
  content?: {
    title: string;
    title_accent: string;
    title_suffix: string;
    description: string;
    cards: {
      useful: { title: string; desc: string };
      protocol: { title: string; desc: string };
    };
    why: {
      title: string;
      list: string[];
    };
  };
}

export const About = ({ content }: AboutProps) => {
  const { t } = useLanguage();
  const c = content || t.about;


  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {c.title} <span className="text-primary">{c.title_accent}</span> {c.title_suffix}
            </h2>
            <p className="text-gray-400 text-lg">
              {c.description}
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border-l-4 border-primary">
                <Brain className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">{c.cards.useful.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {c.cards.useful.desc}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border-l-4 border-secondary">
                <Cpu className="w-8 h-8 text-secondary shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">{c.cards.protocol.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {c.cards.protocol.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30" />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> {c.why.title}
              </h3>
              <ul className="space-y-4 text-gray-300">
                {c.why.list.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
