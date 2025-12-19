import React from "react";
import { Brain, Cpu, Globe } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Что такое <span className="text-primary">GONKA</span> и почему это важно?
            </h2>
            <p className="text-gray-400 text-lg">
              GONKA — это децентрализованный протокол для AI-вычислений, созданный братьями Либерманами.
              В отличие от классического майнинга, который просто сжигает электричество, сеть GONKA выполняет полезную работу.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border-l-4 border-primary">
                <Brain className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">Полезные вычисления</h3>
                  <p className="text-gray-400 text-sm">
                    Предоставляет мощности для работы искусственного интеллекта (Inference) и тренировки моделей.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border-l-4 border-secondary">
                <Cpu className="w-8 h-8 text-secondary shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">Уникальный протокол</h3>
                  <p className="text-gray-400 text-sm">
                    Transformer-Based Proof-of-Work: 99% мощности идет на реальные задачи AI, и только 1% на защиту сети.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30" />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> Почему сейчас?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Сеть Mainnet запущена всего несколько месяцев назад. Сложность растет экспоненциально.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Острый дефицит чипов H100/A100 в мире. GONKA позволяет монетизировать дефицит.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Шанс посоревноваться с техногигантами (Google, OpenAI) в инфраструктуре AI.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
