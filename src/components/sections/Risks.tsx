import React from "react";
import { AlertTriangle, TrendingUp } from "lucide-react";

export const Risks = () => {
  return (
    <section id="faq" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Наша позиция — честно и заранее
            </h3>
            <p className="text-gray-300 mb-8 max-w-lg">
              Мы считаем важным <span className="font-bold text-white">сразу и открыто</span> предупредить о рисках, связанных с крипторынком.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-yellow-500 w-6 h-6" />
              <h4 className="text-xl font-bold text-white">Риски</h4>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              Пожалуйста, учитывайте специфику крипторынка:
            </p>
            <ul className="space-y-3 list-disc list-inside text-gray-300 text-sm">
              <li>
                <span className="font-bold text-white">Доходность не гарантирована.</span>
              </li>
              <li>
                <span className="font-bold text-white">Цена токена GNK волатильна и</span> <span className="font-bold text-white">может как расти, так и снижаться.</span>
              </li>
            </ul>
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
