import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black/50 to-black/80 opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Стоимость и условия
          </h2>
          <p className="text-gray-400 text-lg">
            <span className="font-bold text-white">Чем дольше аренда — тем ниже цена за час</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative flex flex-col"
          >
            <h3 className="text-xl font-medium text-gray-300 mb-2">До 1 месяца</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-white">$8</span>
              <span className="text-sm text-gray-400 mb-2">/ час</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Вес ноды: 2000+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Гарантия аптайма</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Поддержка 24/7</span>
              </div>
            </div>

            <button
              onClick={() => window.Tally?.openPopup('RGdRaQ', { hiddenFields: { plan: '1_month' } })}
              className="w-full py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
            >
              Выбрать
            </button>
          </motion.div>

          {/* Plan 2 - Popular */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-primary/20 to-black border border-primary/50 backdrop-blur-xl relative transform md:-translate-y-4 flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <h3 className="text-xl font-medium text-white mb-2">До 2 месяцев</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-primary">$6</span>
              <span className="text-sm text-gray-400 mb-2">/ час</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                <span className="text-gray-300 text-sm">Вес ноды: 2000+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Максимальная выгода</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Приоритетная поддержка</span>
              </div>
            </div>

            <button
              onClick={() => window.Tally?.openPopup('RGdRaQ', { hiddenFields: { plan: '2_months' } })}
              className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Арендовать Ноду
            </button>
          </motion.div>

          {/* Plan 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative flex flex-col"
          >
            <h3 className="text-xl font-medium text-gray-300 mb-2">3 месяца и более</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold text-white">$5</span>
              <span className="text-sm text-gray-400 mb-2">/ час</span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Вес ноды: 2000+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Долгосрочный контракт</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">Персональный менеджер</span>
              </div>
            </div>

            <button
              onClick={() => window.Tally?.openPopup('RGdRaQ', { hiddenFields: { plan: '3_months' } })}
              className="w-full py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
            >
              Выбрать
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
