import React from "react";
import { Check, ShieldAlert, Cpu } from "lucide-react";
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
          <p className="text-gray-400">
            Прозрачные тарифы. Мы гарантируем вес ноды более 2000+.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-black border border-white/20 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-primary/20 p-3 rounded-bl-xl border-b border-l border-white/10">
              <Cpu className="text-primary w-6 h-6" />
            </div>

            <h3 className="text-xl font-medium text-gray-300 mb-2">GPU Нода</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-white">3000</span>
              <span className="text-xl text-gray-400 mb-2">USDT / месяц</span>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Срок аренды: 30 дней",
                "Мощность: Weight 2000+ (Гарантия)",
                "Подключение к Mainnet: Включено",
                "Техподдержка: 24/7"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors mb-6">
              Арендовать Ноду
            </button>

            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
              <h4 className="flex items-center gap-2 text-primary text-sm font-bold mb-2">
                <ShieldAlert className="w-4 h-4" /> Гарантии производительности
              </h4>
              <p className="text-xs text-gray-400 mb-2">
                Если вес ноды падает ниже 2000, мы компенсируем потери (доп. дни, возврат токенов или денег).
              </p>
              <h4 className="flex items-center gap-2 text-primary text-sm font-bold mb-2 mt-4">
                Форс-мажор
              </h4>
              <p className="text-xs text-gray-400">
                Гарантируем возврат средств за неиспользованные дни в случае ЧП (отключение света, сети и т.д.).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
