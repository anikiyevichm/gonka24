import React from "react";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export const ru = {
  header: {
    nav: {
      about: "О GONKA",
      pricing: "Тарифы",
      faq: "FAQ",
    },
    safecompute_nav: {
      about: "О сети",
      problem: "Решение",
      pricing: "Тарифы",
      how_it_works: "Как это работает",
      economics: "Экономика",
      faq: "FAQ",
    },
    cta: "Подключиться",
  },
  hero: {
    tag: "Сеть GONKA Mainnet уже запущена",
    title: "Арендуйте NVIDIA H200 для Gonka",
    title_accent: "на 30% дешевле облачных цен",
    description: "Оптимизированные под Gonka GPU снижают стоимость майнинга до $1 за GNK. Мы предлагаем решение \"под ключ\": настройка, запуск и поддержка 24/7.",
    cta: "Начать майнинг",
    features: {
      ready: "Готовое решение",
      ready_desc: "Нода подключена к Mainnet",
      passive: "Пассивный доход",
      passive_desc: "Начисления в токенах GNK",
      warranty: "Гарантия",
      warranty_desc: "Компенсация при простое",
    },
  },
  about: {
    title: "Что такое",
    title_accent: "GONKA",
    title_suffix: "и почему это важно?",
    description: "GONKA — это децентрализованный протокол для AI-вычислений, созданный братьями Либерманами. В отличие от классического майнинга, который просто сжигает электричество, сеть GONKA выполняет полезную работу.",
    cards: {
      useful: {
        title: "Полезные вычисления",
        desc: "Предоставляет мощности для работы искусственного интеллекта (Inference) и тренировки моделей.",
      },
      protocol: {
        title: "Уникальный протокол",
        desc: "Transformer-Based Proof-of-Work: 99% мощности идет на реальные задачи AI, и только 1% на защиту сети.",
      },
    },
    why: {
      title: "Почему сейчас?",
      list: [
        "Сеть Mainnet запущена всего несколько месяцев назад. Сложность растет экспоненциально.",
        "Острый дефицит чипов H100/A100 в мире. GONKA позволяет монетизировать дефицит.",
        "Шанс посоревноваться с техногигантами (Google, OpenAI) в инфраструктуре AI.",
      ],
    },
  },
  pricing: {
    title: "Стоимость и условия",
    subtitle: "AI-кластер на базе 8× NVIDIA H200 GPU готовый к майнингу",
    note: "Чем дольше аренда — тем ниже цена за час",
    plans: {
      short: {
        name: "До 1 месяца",
        price: "$8",
        period: "/ час",
        features: ["Вес ноды: 2000+", "Гарантия аптайма", "Поддержка 24/7"],
        cta: "Выбрать",
      },
      medium: {
        tag: "POPULAR",
        name: "До 2 месяцев",
        price: "$6",
        period: "/ час",
        features: ["Вес ноды: 2000+", "Максимальная выгода", "Приоритетная поддержка"],
        cta: "Арендовать Ноду",
      },
      long: {
        name: "3 месяца и более",
        price: "$5",
        period: "/ час",
        features: ["Вес ноды: 2000+", "Долгосрочный контракт", "Персональный менеджер"],
        cta: "Выбрать",
      },
    },
  },
  infrastructure: {
    title: "Инфраструктура",
    title_accent: "Промышленного Уровня",
    subtitle: "Почему аренда ноды у нас выгоднее, чем сборка собственной фермы.",
    cards: {
      metal: {
        title: "Bare Metal Эффективность",
        desc: "Мы предоставляем прямой доступ к железу без слоев виртуализации. Ваша нода использует 100% ресурсов GPU. Домашние и облачные решения (AWS, Azure) теряют 15-20% производительности на оверхед гипервизоров.",
        highlight: "прямой доступ к железу",
        tag: "Максимальный хешрейт без потерь"
      },
      scale: {
        title: "Эффект Масштаба",
        desc: "Выгода достигается за счет объема. Мы закупаем оборудование и электроэнергию по оптовым промышленным тарифам. Одиночному майнеру такие цены недоступны.",
        highlight: "оптовым промышленным тарифам",
        tag: "Cost-reduction до 40%"
      }
    }
  },
  videos: {
    title: "Видео и",
    title_accent: "Интервью",
    items: [
      {
        title: "«Open AI — это пузырь»! Откровения из Кремниевой долины",
        quote: "«Мы не создаем новое золото (как Биткоин), мы создаем топливо для AI будущего. Рынок AI-вычислений оценивается в десятки триллионов долларов.»"
      },
      {
        title: "David Liberman on Decentralized AI (Bitcoin.com)",
        quote: "«Централизованные игроки амортизируют GPU по 6 лет, а в крипте инновации обновляют железо каждый год. Децентрализация всегда выигрывает в скорости (и стоимости).»"
      },
      {
        title: "Bitfury вложит в общей сложности $50 млн в проект Gonka AI братьев Либерманов",
        quote: "«Владельцы GPU с помощью протокола Gonka могут сдавать их в аренду всем, кто нуждается в вычислительных мощностях для ИИ-проектов.»"
      },
      {
        title: "Кто владеет будущим вычислений? Стремление сделать ИИ открытым для всех",
        quote: "«Если ИИ — это новое электричество, то вычислительные мощности — это электросеть, питающая его. Тот, кто контролирует чипы, будет контролировать инновации следующего десятилетия.»"
      }
    ],
    read_article: "Читать статью"
  },
  faq: {
    title: "FAQ",
    subtitle: "Часто задаваемые вопросы",
    items: [
      {
        q: "Что такое GONKA24.com?",
        a: "Это сервис по аренде готовых GPU-нод для участия в сети Gonka, который упрощает настройку и получение вознаграждений от майнинга и вычислений."
      },
      {
        q: "Что такое “нода Gonka” и зачем она нужна?",
        a: "Нода - это сервер с графическим процессором (GPU), настроенный для работы в сети Gonka. Он участвует в распределённых вычислениях и получает вознаграждения за вклад в сеть."
      },
      {
        q: "Как рассчитываются вознаграждения?",
        a: "Мы настраиваем ноду на ваш холодный кошелёк и гарантируем вознаграждение. Если ваша нода не получает награду за эпоху, мы возвращаем деньги. Если вес ноды ниже 2000 - цена корректируется пропорционально."
      },
      {
        q: "Какие способы оплаты принимаются?",
        a: "Вы можете оплатить аренду через: BTC (Bitcoin), USDT, USD/EUR."
      },
      {
        q: "Как происходит настройка и запуск ноды?",
        a: "После оплаты мы полностью настраиваем сервер под ваш кошелёк и обеспечиваем его работу. Вам не нужно иметь технических знаний — всё делается за вас."
      },
      {
        q: "Сколько времени занимает запуск ноды?",
        a: "После подтверждения оплаты настройка обычно выполняется быстро - при этом мы свяжемся с вами для уточнения кошелька и деталей."
      }
    ]
  },
  resources: {
    title: "Полезные ресурсы",
    subtitle: "Узнайте больше о Gonka Network и децентрализованных вычислениях",
    items: {
      whitepaper: { title: "Whitepaper", desc: "Техническая документация протокола Gonka Network", action: "Читать" },
      tokenomics: { title: "Токеномика GNK", desc: "Экономическая модель и распределение токенов", action: "Читать" },
      twitter: { title: "X (Twitter)", desc: "Следите за новостями и обновлениями Gonka", action: "Открыть" },
      discord: { title: "Discord сообщество", desc: "Присоединяйтесь к глобальному сообществу энтузиастов", action: "Присоединиться" }
    }
  },
  cta_section: {
    how_it_works: {
      title: "Как это работает",
      steps: [
        { title: "Вы оставляете заявку", desc: "Заполните простую форму" },
        { title: "Мы настраиваем ноду", desc: "Под ваш кошелёк" },
        { title: "Вы получаете награды", desc: "В токенах GNK" }
      ]
    },
    title: "Участвуйте в создании",
    title_accent: "dex AI-инфраструктуры нового поколения",
    subtitle: "Открытой. Масштабируемой. Независимой.",
    button: "Начать майнинг"
  },
  footer: {
    rights: "© 2026 SafeCompute. All rights reserved.",
    payment: "Оплата: Предоплата за 1 месяц. Реквизиты будут предоставлены.",
    contact_text: "Если у Вас возникли вопросы — напишите",
    contact_link_text: "нашему менеджеру",
    manager_link: "https://t.me/lina_semash",
    community_text: "Вступайте в нашу",
    community_link_text: "чат-группу Telegram",
    community_link: "https://t.me/+40Xsw5RML45mOGEx"
  },
  safecompute: {
    hero: {
      tag: "Сеть GONKA Mainnet уже запущена",
      title: "Майните GNK от 250$",
      title_accent: "под ключ",
      description: "Станьте частью революции децентрализованного ИИ. Мы берем на себя настройку оборудования и серверов - вы получаете добытые монеты GNK.",
      cta: "Начать майнинг",
      features: {
        ready: "Топовые GPU",
        ready_desc: "H100/H200 Майнинг",
        passive: "Под ключ",
        passive_desc: "Тех. обслуживание",
        warranty: "Экономия",
        warranty_desc: "Майнинг по оптимальным рыночным ценам",
      },
    },
    about_custom: {
      title: "Что такое",
      title_accent: "Gonka Network?",
      description: "Gonka — это децентрализованная сеть для вычислений искусственного интеллекта (AI Compute). В отличие от обычных криптовалют, здесь майнинг обеспечивает реальную пользу: обучение нейросетей и инференс (работу ИИ).",
      facts: [
        {
          title: "Инвестиции гигантов",
          desc: "В проект инвестировал Bitfury (легенда майнинга биткоина) — более $50 млн, а также фонды, поддерживавшие OpenAI и Solana."
        },
        {
          title: "Основатели",
          desc: "Братья Либерманы (экс-директора Snapchat), создатели \"единорогов\"."
        },
        {
          title: "Технология",
          desc: "Proof-of-Work нового поколения. Мощность сети уже эквивалентна тысячам видеокарт H100."
        },
        {
          title: "Дефицит",
          desc: "Всего 1 млрд токенов, модель халвинга (уменьшения награды) как у Биткоина."
        }
      ]
    },
    problem_solution: {
      title: "Проблема vs ",
      title_accent: "Решение",
      problem: {
        title: "Самостоятельный майнинг",
        items: [
          "Требуются мощные GPU (H100/H200) от $2000 до $30000.",
          "Сложная настройка: Linux, Docker, управление ключами.",
          "Риск простоя и штрафов (слэшинга).",
        ]
      },
      solution: {
        title: "Майнинг с нами (Под ключ)",
        items: [
          "Доступный вход: Старт всего от 250$. Объединяем капитал.",
          "Никакой техники: Мы управляем нодами 24/7.",
          "Гарантия работы: Профессиональное администрирование.",
        ]
      },
    },
    pricing: {
      title: "Гибкие условия для инвесторов",
      subtitle: "Чем выше депозит, тем выгоднее",
      note: "Management Fee снижается с объемом",
      plans: {
        short: {
          name: "Compute Light Pool",
          price: "$2,000",
          period: "/ месяц (fee включен)",
          features: [
            "1× NVIDIA H100",
            "$2.40 / час (на 30 дней)",
            "Management fee: 20%",
            "Примерный вес всей ноды - 300",
            "Мин взнос от 250$"
          ],
          cta: "Выбрать тариф",
        },
        medium: {
          tag: "Рекомендуемый",
          name: "Compute Pro Pool",
          price: "$5,500",
          period: "/ месяц (fee включен)",
          features: [
            "2× NVIDIA H200",
            "$7 / час (на 30 дней)",
            "Management fee: 10%",
            "Примерный вес всей ноды - 1500",
            "Мин взнос от 500$"
          ],
          cta: "Выбрать тариф",
        },
        long: {
          name: "Compute Premium Pool",
          price: "от $10,000+",
          period: "/ месяц",
          features: [
            "∞ NVIDIA H200 (масштабирование под задачу)",
            "Почасовая цена: рассчитывается индивидуально",
            "Management fee: 5%",
            "Настройка под кошелек напрямую"
          ],
          cta: "Связаться с нами",
        },
      },
    },
    how_it_works: {
      title: "Как это работает",
      subtitle: "Техническая часть простыми словами",
      steps: [
        { title: "Пополнение", desc: "Вы вносите депозит (USDT/USDC TRC20)." },
        { title: "Запуск мощностей", desc: "Мы аллоцируем средства на покупку/аренду долей GPU." },
        { title: "Эпохи (Майнинг)", desc: "Оборудование выполняет задачи и получает вознаграждение." },
        { title: "Распределение", desc: "Награда за вычетом Fee начисляется раз в месяц (180 дней вестинг)." }
      ]
    },
    fomo: {
      title: "Эра Биткоина для ИИ",
      subtitle: "Только начинается",
      text: "Сеть запущена в августе 2025. Сейчас 'Grace Period' — награды максимальны.",
      grace_period: "Grace Period",
      today: "Сегодня",
      disclaimer: "* График является визуальной иллюстрацией изменения награды за майнинг во времени.",
      chart: {
        start: "Старт (2025)",
        halving1: "Халвинг 1 (Авг 2029)",
        halving2: "Халвинг 2 (Авг 2033)",
        daily_reward_potential: "Потенциал дневной награды",
        daily_reward: "Дневная Награда",
        reward: "Награда",
        month: "Месяц"
      },
      epochs: {
        now: {
          title: "Сейчас (2025–2029)",
          text: "Сеть выделяет <span class=\"text-primary font-mono\">~323,000 GNK</span> в сутки на всех майнеров."
        },
        halving1: {
          title: "После 1-го Халвинга (Авг 2029)",
          text: "Выделяться будет уже <span class=\"text-primary font-mono\">~161,500 GNK</span> в сутки."
        },
        halving2: {
          title: "После 2-го Халвинга (Авг 2033)",
          text: "Всего <span class=\"text-primary font-mono\">~80,750 GNK</span> в сутки."
        }
      }
    },
    tokenomics_section: {
      title: "Прозрачная токеномика",
      description: "Майнинг построен на публичной токеномике проекта.\nВсе правила эмиссии, распределения и использования монет зафиксированы и открыты.",
      link_text: "Ознакомиться с токеномикой проекта",
      link_url: "https://gonka.ai/tokenomics.pdf"
    },
    faq: {
      title: "FAQ",
      subtitle: "Часто задаваемые вопросы",
      items: [
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
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Вы отправляете запрос на вывод в нашем Telegram</li>
                <li>Мы переводим монеты на ваш кошелёк, указанный в запросе</li>
                <li>Перевод выполняется в течение 24 часов после получения заявки</li>
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
      ]
    },
    final_cta: {
      title: "Начните майнинг уже сегодня",
      subtitle: "Прозрачные условия. Гибкие тарифы.",
      text: "Начните зарабатывать монеты GNK без сложных настроек.",
      button: "Начать майнинг"
    }
  },
  calculator: {
    title: "Калькулятор доходности GNK",
    subtitle: "Выберите пул и введите сумму инвестиций",
    pools: {
      light: {
        name: "Compute Light",
        badge: "Вес для старта 300"
      },
      pro: {
        name: "Compute Pro",
        badge: "Вес для старта 1500",
        discount_badge: "-10%"
      },
      premium: {
        name: "Compute Premium",
        badge: "Вес ∞",
        discount_badge: "-15%"
      }
    },
    info: {
      min_deposit: "Мин. взнос:",
      max_deposit: "Макс. взнос:",
      node_weight: "Ваша доля веса:",
      management_fee: "Management Fee:",
      yield_per_day: "GNK/день"
    },
    input: {
      label: "Сумма взноса в месяц ($)",
      placeholder: "Введите сумму",
      error: {
        min: "Минимальная сумма для {name} составляет {min}",
        max: "Максимальная сумма для {name} составляет {max}"
      }
    },
    results: {
      daily: "GNK в день",
      monthly: "GNK в месяц",
      tooltip: "Это примерные цифры. Значения могут значительно меняться исходя от хостов сети.",
      disclaimer: "Расчеты приблизительны. Основаны на весе сети {weight} и награде {reward} GNK на момент {date}."
    }
  }
};
