import React from "react";
import { AlertTriangle } from "lucide-react";

export const Risks = () => {
  return (
    <section id="faq" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Наша позиция - открыто о рисках
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

        </div>
      </div>
    </section>
  );
};
