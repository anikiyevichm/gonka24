import React from "react";
import { motion } from "framer-motion";
import { Server, TrendingUp, Zap, Cpu } from "lucide-react";

export const Infrastructure = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Инфраструктура <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Промышленного Уровня</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Почему аренда ноды у нас выгоднее, чем сборка собственной фермы.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bare Metal Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 rounded-xl bg-primary/20 text-primary">
                <Server className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Bare Metal Эффективность</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Мы предоставляем <span className="text-white font-medium">прямой доступ к железу</span> без слоев виртуализации.
                  Ваша нода использует 100% ресурсов GPU.
                  Домашние и облачные решения (AWS, Azure) теряют <strong>15-20%</strong> производительности на оверхед гипервизоров.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Cpu className="w-4 h-4" />
                  <span>Максимальный хешрейт без потерь</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Economies of Scale Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 rounded-xl bg-secondary/20 text-secondary">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Эффект Масштаба</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Выгода достигается за счет объема. Мы закупаем оборудование и электроэнергию по 
                  <span className="text-white font-medium"> оптовым промышленным тарифам</span>.
                  Одиночному майнеру такие цены недоступны.
                </p>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Zap className="w-4 h-4" />
                  <span>Cost-reduction до 40%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
