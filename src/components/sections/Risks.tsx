import React from "react";
import { AlertTriangle, TrendingUp } from "lucide-react";

export const Risks = () => {
  return (
    <section id="faq" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Risks */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="text-yellow-500" /> Риски
            </h3>
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl">
              <p className="text-gray-300 text-sm mb-4">
                Пожалуйста, учитывайте специфику крипторынка:
              </p>
              <ul className="space-y-2 list-disc list-inside text-gray-400 text-sm">
                <li>Доходность в долларовом эквиваленте не гарантирована.</li>
                <li>Цена токена GNK волатильна и может меняться.</li>
              </ul>
            </div>
          </div>

          {/* Insights / Why Now */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-primary" /> Почему стоит заходить сейчас?
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Ранний этап", desc: "Сеть Mainnet запущена недавно. Количество GPU растет экспоненциально." },
                { title: "Хеджирование", desc: "Ставка против централизованных гигантов. Владение инфраструктурой AI." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">{item.title}</strong>
                    <span className="text-gray-400 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
