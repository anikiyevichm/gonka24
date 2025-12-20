import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Что такое GONKA24.com?",
      answer: "Это сервис по аренде готовых GPU-нод для участия в сети Gonka, который упрощает настройку и получение вознаграждений от майнинга и вычислений."
    },
    {
      question: "Что такое “нода Gonka” и зачем она нужна?",
      answer: "Нода - это сервер с графическим процессором (GPU), настроенный для работы в сети Gonka. Он участвует в распределённых вычислениях и получает вознаграждения за вклад в сеть."
    },
    {
      question: "Как рассчитываются вознаграждения?",
      answer: "Мы настраиваем ноду на ваш холодный кошелёк и гарантируем вознаграждение. Если ваша нода не получает награду за эпоху, мы возвращаем деньги. Если вес ноды ниже 2000 - цена корректируется пропорционально."
    },
    {
      question: "Какие способы оплаты принимаются?",
      answer: (
        <>
          Вы можете оплатить аренду через:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>BTC (Bitcoin)</li>
            <li>USDT</li>
            <li>USD/EUR</li>
          </ul>
        </>
      )
    },
    {
      question: "Как происходит настройка и запуск ноды?",
      answer: "После оплаты мы полностью настраиваем сервер под ваш кошелёк и обеспечиваем его работу. Вам не нужно иметь технических знаний — всё делается за вас."
    },
    {
      question: "Сколько времени занимает запуск ноды?",
      answer: "После подтверждения оплаты настройка обычно выполняется быстро - при этом мы свяжемся с вами для уточнения кошелька и деталей."
    }
  ];

  return (
    <section id="faq-section" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-primary w-8 h-8 md:w-10 md:h-10" /> FAQ
          </h2>
          <p className="text-gray-400 text-lg">
            Часто задаваемые вопросы
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white pr-8">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
