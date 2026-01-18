import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export const SafeComputeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { language, t } = useLanguage();

  const ruItems = [
    {
      q: "Какие гарантии вы предоставляете?",
      a: (
        <div className="space-y-3">
          <p>Мы предоставляем вам публичную ссылку на блокчейн, по которой вы можете в любой момент отслеживать:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>баланс,</li>
            <li>начисленные GNK,</li>
          </ul>
          <p>Все операции прозрачны и проверяемы в блокчейне.</p>
        </div>
      )
    },
    {
      q: "Что такое Management Fee?",
      a: (
        <div className="space-y-3">
          <p>Management Fee — это комиссия за управление инфраструктурой, которую мы удерживаем поверх суммы, которую вы внесли.</p>
          <p>В комиссию входит:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>администрирование нод,</li>
            <li>мониторинг аптайма,</li>
            <li>unjail ноды при блокировках,</li>
            <li>claim наград,</li>
            <li>техническая поддержка и сопровождение.</li>
          </ul>
        </div>
      )
    },
    {
      q: "Можно ли вывести деньги после аллокации на мощности?",
      a: (
        <div className="space-y-3">
          <p className="font-bold text-red-400">Нет.</p>
          <p>Если средства уже аллоцированы на вычислительные мощности, возврат средств невозможен до окончания периода майнинга.</p>
          <p>Это связано с тем, что мощности арендуются и фиксируются под конкретный кейс.</p>
        </div>
      )
    },
    {
      q: "Когда обновляется статус платежа?",
      a: (
        <div className="space-y-3">
          <p>Статус платежа обновляется автоматически в течение 1–2 часов после подтверждения транзакции в блокчейне.</p>
          <p>Если прошло более 2 часов и статус не обновился — напишите в нашу поддержку в Telegram.</p>
        </div>
      )
    },
    {
      q: "Что такое вестинг и зачем он нужен?",
      a: (
        <div className="space-y-3">
          <p>Вестинг — это механизм постепенного разблокирования заработанных токенов, используемый в Gonka Network для:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>стабильности экономики,</li>
            <li>защиты от спекуляций,</li>
            <li>предотвращения резких продаж.</li>
          </ul>
        </div>
      )
    },
    {
      q: "Как работает вестинг?",
      a: (
        <div className="space-y-3">
          <p>Каждый день разблокируется 1/180 от суммы, заработанной за предыдущий день.</p>
          <div className="bg-muted p-4 rounded-lg border border-border">
            <p className="font-semibold mb-2 text-primary">Пример:</p>
            <ul className="space-y-2 text-sm">
              <li>Сегодня пул заработал <span className="text-foreground font-semibold">180 GNK</span></li>
              <li>Завтра разблокируется <span className="text-foreground font-semibold">1 GNK</span></li>
              <li>Послезавтра — ещё <span className="text-foreground font-semibold">1 GNK</span></li>
            </ul>
            <p className="mt-3 text-sm italic opacity-80">
              Если завтра пул снова заработал 180 GNK, то послезавтра разблокируется уже 2 GNK
              (1 GNK за первый день + 1 GNK за второй)
            </p>
          </div>
        </div>
      )
    },
    {
      q: "Как вывести заработанные токены?",
      a: (
        <div className="space-y-3">
          <p>Процесс вывода простой:</p>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>
              В личном кабинете вы видите:
              <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
                <li>заработанные токены,</li>
                <li>разблокированную сумму</li>
              </ul>
            </li>
            <li>Привяжите ваш GNK-кошелёк в настройках профиля</li>
            <li>Отправьте запрос на вывод</li>
            <li>Мы отправим токены в течение 24 часов после подачи заявки</li>
          </ol>
        </div>
      )
    },
    {
      q: "Как создать кошелёк Gonka Network?",
      a: (
        <div className="space-y-4">
          <p>Мы рекомендуем использовать <span className="text-foreground font-semibold">Keplr Wallet</span> с авторизацией через Google.</p>
          
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2 text-red-400">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">Важно:</span>
            </div>
            <ul className="space-y-1 text-sm text-red-600/80">
              <li>Никогда не передавайте приватный ключ третьим лицам</li>
              <li>Храните приватный ключ в безопасном месте</li>
              <li>Если вы потеряете доступ к Gmail — восстановление возможно только через приватный ключ</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      q: "Пошаговая инструкция по созданию кошелька Keplr",
      a: (
        <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>Перейдите на официальный сайт Keplr и нажмите "Get Keplr Wallet"</li>
            <li>Выберите расширение для вашего браузера (Chrome, Firefox, Edge, Brave)</li>
            <li>Установите расширение</li>
            <li>Нажмите "Create a new wallet"</li>
            <li>Выберите "Connect with Google"</li>
          </ol>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
             <div className="flex items-center gap-2 mb-2 text-yellow-400">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">Важно:</span>
            </div>
            <p className="text-sm text-yellow-700/80 mb-2">Не выбирайте вариант с mnemonic phrase.</p>
            <p className="text-sm text-yellow-700/80">
              Без авторизации через Google вы не сможете выполнять транзакции через bridge — для работы с платформой требуется именно Google-авторизация.
            </p>
          </div>

          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
             <li>Завершите настройку кошелька</li>
             <li>Сохраните приватный ключ</li>
             <li>Выберите сети Cosmos Hub и Gonka</li>
          </ul>
        </div>
      )
    },
    {
      q: "Как подключиться к децентрализованному Dashboard Gonka?",
      a: (
        <div className="space-y-4">
          <p>Выберите любую ноду из списка (все они равнозначны):</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono text-primary">
            {[
              "http://185.216.21.98:8000",
              "http://69.19.136.233:8000",
              "http://36.189.234.197:18026",
              "http://36.189.234.237:17241",
              "http://node1.gonka.ai:8000",
              "http://node2.gonka.ai:8000",
              "http://node3.gonka.ai:8000",
              "http://47.236.26.199:8000",
              "http://47.236.19.22:18000",
              "http://gonka.spv.re:8000"
            ].map((url) => (
              <a 
                key={url} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2 rounded bg-muted/50 hover:bg-muted transition-colors flex items-center justify-between group"
              >
                <span className="truncate">{url}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">Совет: можно выбрать любую — все они дают доступ к сети Gonka.</p>
        </div>
      )
    },
    {
      q: "Как подключить кошелёк к Dashboard?",
      a: (
        <div className="space-y-3">
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>Откройте Dashboard по выбранному URL</li>
            <li>Нажмите "Connect Wallet" (правый верхний угол)</li>
            <li>Выберите Keplr</li>
            <li>Подтвердите добавление сети Gonka</li>
            <li className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-4 h-4" /> Готово
            </li>
          </ol>
          <p className="text-muted-foreground">Теперь вы можете скопировать адрес кошелька — это ваш GNK-адрес для получения наград.</p>
        </div>
      )
    }
  ];

  const items = language === 'ru' ? ruItems : t.safecompute.faq.items;

  return (
    <section id="faq-section" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-primary w-8 h-8 md:w-10 md:h-10" /> {t.safecompute.faq.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.safecompute.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-card border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-8">
                  {item.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
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
                    <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">
                      {item.a}
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
