import React from "react";
import { FileText, Coins, Share2, Users, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Resources = () => {
  return (
    <section id="resources" className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Полезные ресурсы
          </h2>
          <p className="text-gray-400 text-lg">
            Узнайте больше о Gonka Network и децентрализованных вычислениях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Whitepaper",
              desc: "Техническая документация протокола Gonka Network",
              link: "https://gonka.ai/whitepaper.pdf",
              icon: FileText,
              action: "Читать",
            },
            {
              title: "Токеномика GNK",
              desc: "Экономическая модель и распределение токенов",
              link: "https://gonka.ai/tokenomics.pdf",
              icon: Coins,
              action: "Читать",
            },
            {
              title: "X (Twitter)",
              desc: "Следите за новостями и обновлениями Gonka",
              link: "https://x.com/gonka_ai",
              icon: Share2,
              action: "Открыть",
            },
            {
              title: "Discord сообщество",
              desc: "Присоединяйтесь к глобальному сообществу энтузиастов",
              link: "https://discord.com/invite/RADwCT2U6R",
              icon: Users,
              action: "Присоединиться",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="mb-4 text-primary group-hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{item.desc}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:text-white transition-colors">
                {item.action} <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
