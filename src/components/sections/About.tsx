import React from "react";
import { Brain, Cpu, Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t.about.title} <span className="text-primary">{t.about.title_accent}</span> {t.about.title_suffix}
            </h2>
            <p className="text-gray-400 text-lg">
              {t.about.description}
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border-l-4 border-primary">
                <Brain className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">{t.about.cards.useful.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {t.about.cards.useful.desc}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border-l-4 border-secondary">
                <Cpu className="w-8 h-8 text-secondary shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">{t.about.cards.protocol.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {t.about.cards.protocol.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30" />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> {t.about.why.title}
              </h3>
              <ul className="space-y-4 text-gray-300">
                {t.about.why.list.map((item, index) => (
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
