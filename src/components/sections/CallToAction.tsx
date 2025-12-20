import React from "react";
import { ArrowRight } from "lucide-react";
import { useTally } from "../../hooks/useTally";

export const CallToAction = () => {
  const { openTally } = useTally();

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Участвуйте в создании децентрализованной<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              ИИ-инфраструктуры нового поколения
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-medium">
            Открытой. Масштабируемой. Независимой.
          </p>

          <button
            onClick={() => openTally()}
            className="px-10 py-5 bg-primary text-black font-bold text-xl rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-95 flex items-center gap-3 mx-auto mb-20"
          >
            Начать майнинг
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* How it works */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Как это работает</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Вы оставляете заявку", desc: "Заполните простую форму" },
                { title: "Мы настраиваем ноду", desc: "Под ваш кошелёк" },
                { title: "Вы получаете награды", desc: "В токенах GNK" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
