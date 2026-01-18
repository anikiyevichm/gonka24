export const translations = {
  ru: {
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
            text: "Сеть выделяет <span class=\"text-white font-mono\">~323,000 GNK</span> в сутки на всех майнеров."
          },
          halving1: {
            title: "После 1-го Халвинга (Авг 2029)",
            text: "Выделяться будет уже <span class=\"text-white font-mono\">~161,500 GNK</span> в сутки."
          },
          halving2: {
            title: "После 2-го Халвинга (Авг 2033)",
            text: "Всего <span class=\"text-white font-mono\">~80,750 GNK</span> в сутки."
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
            a: "Мы предоставляем публичную ссылку на блокчейн для отслеживания баланса и начислений. Все прозрачно."
          },
          {
            q: "Что такое Management Fee?",
            a: "Комиссия за управление (администрирование, мониторинг, unjail, claim наград) поверх внесенной суммы."
          },
          {
            q: "Можно ли вывести деньги после аллокации?",
            a: "Нет, так как мощности арендуются под конкретный кейс. Возврат возможен только после окончания периода."
          },
          {
            q: "Когда обновляется статус платежа?",
            a: "В течение 1-2 часов после подтверждения. Если дольше — пишите в поддержку."
          },
          {
            q: "Что такое вестинг?",
            a: "Механизм постепенной разблокировки (1/180 в день) для стабильности экономики."
          },
          {
            q: "Как вывести токены?",
            a: "1. Вы отправляете запрос на вывод в нашем Telegram. 2. Мы переводим монеты на ваш кошелёк, указанный в запросе. 3. Перевод выполняется в течение 24 часов после получения заявки."
          },
          {
            q: "Как создать кошелёк?",
            a: "Рекомендуем Keplr Wallet с авторизацией через Google. Не теряйте доступы."
          },
          {
            q: "Как подключиться к Dashboard?",
            a: "Выберите любую ноду (например http://185.216.21.98:8000), нажмите Connect Wallet и выберите Keplr."
          }
        ]
      },
      final_cta: {
        title: "Начните майнинг уже сегодня",
        subtitle: "Прозрачные условия. Гибкие тарифы.",
        text: "Начните зарабатывать монеты GNK без сложных настроек.",
        button: "Начать майнинг"
      }
    }

  },
  en: {
    header: {
      nav: {
        about: "About GONKA",
        pricing: "Pricing",
        faq: "FAQ",
      },
      safecompute_nav: {
        about: "About",
        problem: "Solution",
        pricing: "Pricing",
        how_it_works: "How it works",
        economics: "Economics",
        faq: "FAQ",
      },
      cta: "Connect",
    },
    hero: {
      tag: "GONKA Mainnet is already live",
      title: "Rent NVIDIA H200 for Gonka",
      title_accent: "30% cheaper than cloud prices",
      description: "Gonka-optimized GPUs reduce mining costs to $1 per GNK. We offer a turnkey solution: setup, launch, and 24/7 support.",
      cta: "Start Mining",
      features: {
        ready: "Turnkey Solution",
        ready_desc: "Node connected to Mainnet",
        passive: "Passive Income",
        passive_desc: "Rewards in GNK tokens",
        warranty: "Warranty",
        warranty_desc: "Downtime compensation",
      },
    },
    about: {
      title: "What is",
      title_accent: "GONKA",
      title_suffix: "and why is it important?",
      description: "GONKA is a decentralized protocol for AI compute created by the Liberman brothers. Unlike classic mining that simply burns electricity, the GONKA network performs useful work.",
      cards: {
        useful: {
          title: "Useful Compute",
          desc: "Provides power for Artificial Intelligence (Inference) and model training.",
        },
        protocol: {
          title: "Unique Protocol",
          desc: "Transformer-Based Proof-of-Work: 99% of power goes to real AI tasks, and only 1% to network security.",
        },
      },
      why: {
        title: "Why now?",
        list: [
          "Mainnet launched just a few months ago. Difficulty is growing exponentially.",
          "Acute shortage of H100/A100 chips globally. GONKA allows monetizing this deficit.",
          "A chance to compete with tech giants (Google, OpenAI) in AI infrastructure.",
        ],
      },
    },
    pricing: {
      title: "Pricing & Terms",
      subtitle: "AI-cluster based on 8× NVIDIA H200 GPUs ready for mining",
      note: "The longer the rental — the lower the hourly price",
      plans: {
        short: {
          name: "Up to 1 month",
          price: "$8",
          period: "/ hour",
          features: ["Node weight: 2000+", "Uptime guarantee", "24/7 Support"],
          cta: "Select",
        },
        medium: {
          tag: "POPULAR",
          name: "Up to 2 months",
          price: "$6",
          period: "/ hour",
          features: ["Node weight: 2000+", "Maximum value", "Priority support"],
          cta: "Rent Node",
        },
        long: {
          name: "3 months and more",
          price: "$5",
          period: "/ hour",
          features: ["Node weight: 2000+", "Long-term contract", "Personal manager"],
          cta: "Select",
        },
      },
    },
    infrastructure: {
      title: "Infrastructure",
      title_accent: "Industrial Grade",
      subtitle: "Why renting a node from us is more profitable than building your own farm.",
      cards: {
        metal: {
          title: "Bare Metal Efficiency",
          desc: "We provide direct access to hardware without virtualization layers. Your node uses 100% of GPU resources. Home and cloud solutions (AWS, Azure) lose 15-20% of performance on hypervisor overhead.",
          highlight: "direct access to hardware",
          tag: "Maximum hashrate without losses"
        },
        scale: {
          title: "Economies of Scale",
          desc: "Profit is achieved through volume. We purchase equipment and electricity at wholesale industrial rates. Such prices are unavailable to a single miner.",
          highlight: "wholesale industrial rates",
          tag: "Cost-reduction up to 40%"
        }
      }
    },
    videos: {
      title: "Videos and",
      title_accent: "Interviews",
      items: [
        {
          title: "\"Open AI is a bubble!\" Revelations from Silicon Valley",
          quote: "«We are not creating new gold (like Bitcoin), we are creating fuel for the AI future. The AI compute market is valued in tens of trillions of dollars.»"
        },
        {
          title: "Gonka Protocol's David Liberman on Decentralized AI (Bitcoin.com)",
          quote: "«Centralized players amortize GPUs over 6 years, while in crypto innovation updates hardware every year. Decentralization always wins in speed (and cost).»"
        },
        {
          title: "Bitfury to invest $50M total in Liberman brothers' Gonka AI project",
          quote: "«GPU owners can rent them out via Gonka protocol to anyone needing compute power for AI projects.»"
        },
        {
          title: "Who Owns The Future Of Compute? The Quest To Make AI Open For All",
          quote: "«If AI is the new electricity, compute is the grid that powers it. Whoever controls the chips will control the innovation of the next decade.»"
        }
      ],
      read_article: "Read Article"
    },
    faq: {
      title: "FAQ",
      subtitle: "Frequently Asked Questions",
      items: [
        {
          q: "What is GONKA24.com?",
          a: "It is a service for renting ready-made GPU nodes for participation in the Gonka network, simplifying setup and rewards from mining and compute."
        },
        {
          q: "What is a “Gonka node” and why is it needed?",
          a: "A node is a server with a graphics processing unit (GPU) configured to work in the Gonka network. It participates in distributed computing and receives rewards for contributing to the network."
        },
        {
          q: "How are rewards calculated?",
          a: "We set up the node to your cold wallet and guarantee rewards. If your node receives no reward for an epoch, we refund the money. If node weight is below 2000 - price is adjusted proportionally."
        },
        {
          q: "What payment methods are accepted?",
          a: "You can pay for rent via: BTC (Bitcoin), USDT, USD/EUR."
        },
        {
          q: "How does node setup and launch work?",
          a: "After payment, we fully configure the server for your wallet and ensure its operation. You don't need technical knowledge — everything is done for you."
        },
        {
          q: "How long does it take to launch a node?",
          a: "After payment confirmation, setup is usually fast — we will contact you to clarify wallet details."
        }
      ]
    },
    resources: {
      title: "Useful Resources",
      subtitle: "Learn more about Gonka Network and decentralized computing",
      items: {
        whitepaper: { title: "Whitepaper", desc: "Technical documentation of Gonka Network protocol", action: "Read" },
        tokenomics: { title: "GNK Tokenomics", desc: "Economic model and token distribution", action: "Read" },
        twitter: { title: "X (Twitter)", desc: "Follow Gonka news and updates", action: "Open" },
        discord: { title: "Discord Community", desc: "Join the global community of enthusiasts", action: "Join" }
      }
    },
    cta_section: {
      how_it_works: {
        title: "How it works",
        steps: [
          { title: "You leave a request", desc: "Fill out a simple form" },
          { title: "We set up the node", desc: "To your wallet" },
          { title: "You receive rewards", desc: "In GNK tokens" }
        ]
      },
      title: "Participate in creating",
      title_accent: "next-gen dex AI-infrastructure",
      subtitle: "Open. Scalable. Independent.",
      button: "Start Mining"
    },
    footer: {
      rights: "© 2026 SafeCompute. All rights reserved.",
      payment: "Payment: 1-month prepayment. Details will be provided.",
      contact_text: "If you have any questions — write to",
      contact_link_text: "our manager",
      manager_link: "https://t.me/lina_semash",
      community_text: "Join our",
      community_link_text: "Telegram chat group",
      community_link: "https://t.me/+40Xsw5RML45mOGEx"
    },
    safecompute: {
      hero: {
        tag: "GONKA Mainnet is already live",
        title: "Mine GNK from $250",
        title_accent: "turnkey",
        description: "Become part of the decentralized AI revolution. We handle hardware setup and servers — you get mined GNK coins.",
        cta: "Start Mining",
        features: {
          ready: "Top GPUs",
          ready_desc: "H100/H200 Mining",
          passive: "Turnkey",
          passive_desc: "We handle tech",
          warranty: "Economy",
          warranty_desc: "Mining at optimal market prices",
        },
      },
      about_custom: {
        title: "What is",
        title_accent: "Gonka Network?",
        description: "Gonka is a decentralized network for AI compute. Unlike standard cryptocurrencies, mining here provides real utility: training neural networks and inference.",
        facts: [
          {
            title: "Giant Investments",
            desc: "Bitfury (Bitcoin mining legend) invested over $50M, along with funds that supported OpenAI and Solana."
          },
          {
            title: "Founders",
            desc: "The Liberman brothers (ex-Snapchat directors), creators of \"unicorns\"."
          },
          {
            title: "Technology",
            desc: "Next-gen Proof-of-Work. Network power is already equivalent to thousands of H100 GPUs."
          },
          {
            title: "Scarcity",
            desc: "Total supply of 1 billion tokens, Bitcoin-like halving model (rewards decrease)."
          }
        ]
      },
      problem_solution: {
        title: "The Problem vs ",
        title_accent: "Our Solution",
        problem: {
          title: "Mining Yourself",
          items: [
            "Requires powerful GPUs (H100/H200) costing $2,000 - $30,000.",
            "Complex setup: Linux, Docker, key management.",
            "Risk of downtime and slashing penalties.",
          ]
        },
        solution: {
          title: "Mining with Us (Turnkey)",
          items: [
            "Affordable entry: Start from just $250. We pool capital for power.",
            "No tech needed: We manage nodes, update software, and monitor 24/7.",
            "Guaranteed uptime: Professional administration.",
          ]
        }
      },
      pricing: {
        title: "Flexible Terms for Investors",
        subtitle: "The higher the deposit, the better the terms",
        note: "Management Fee decreases with volume",
        plans: {
          short: {
            name: "Compute Light Pool",
            price: "$2,000",
            period: "/ month (fee included)",
            features: [
              "1× NVIDIA H100",
              "$2.40 / hour (for 30 days)",
              "Management fee: 20%",
              "Approx. node weight - 300",
              "Min entry from $250"
            ],
            cta: "Select Plan",
          },
          medium: {
            tag: "RECOMMENDED",
            name: "Compute Pro Pool",
            price: "$5,500",
            period: "/ month (fee included)",
            features: [
              "2× NVIDIA H200",
              "$7 / hour (for 30 days)",
              "Management fee: 10%",
              "Approx. node weight - 1500",
              "Min entry from $500"
            ],
            cta: "Select Plan",
          },
          long: {
            name: "Compute Premium Pool",
            price: "from $10,000+",
            period: "/ month",
            features: [
              "∞ NVIDIA H200 (scalable to task)",
              "Hourly price: calculated individually",
              "Management fee: 5%",
              "Direct wallet setup"
            ],
            cta: "Contact Us",
          },
        },
      },
      how_it_works: {
        title: "How it Works",
        subtitle: "Technical part in simple words",
        steps: [
          { title: "Deposit", desc: "You deposit USDT/USDC (TRC20)." },
          { title: "Launch", desc: "We allocate funds to buy/rent GPU shares in clusters." },
          { title: "Epochs", desc: "Hardware performs inference tasks and earns rewards." },
          { title: "Distribution", desc: "Rewards minus fee are credited to your wallet monthly (180 days vesting)." }
        ]
      },
      fomo: {
        title: "Bitcoin for AI Era",
        subtitle: "Only Just Beginning",
        text: "Network launched in August 2025. We are in the early 'Grace Period' where rewards are maximal.",
        grace_period: "Grace Period",
        today: "Today",
        disclaimer: "* The graph is a visual illustration of the change in individual mining rewards over time.",
        chart: {
          start: "Start (2025)",
          halving1: "Halving 1 (Aug 2029)",
          halving2: "Halving 2 (Aug 2033)",
          daily_reward_potential: "Daily Reward Potential",
          daily_reward: "Daily Reward",
          reward: "Reward",
          month: "Month"
        },
        epochs: {
          now: {
            title: "Now (2025–2029)",
            text: "Network allocates <span class=\"text-white font-mono\">~323,000 GNK</span> per day to all miners."
          },
          halving1: {
            title: "After 1st Halving (Aug 2029)",
            text: "Allocation drops to <span class=\"text-white font-mono\">~161,500 GNK</span> per day."
          },
          halving2: {
            title: "After 2nd Halving (Aug 2033)",
            text: "Allocation drops to <span class=\"text-white font-mono\">~80,750 GNK</span> per day."
          }
        }
      },
      tokenomics_section: {
        title: "Transparent Tokenomics",
        description: "Mining is built on the project's public tokenomics.\nAll rules for emission, distribution, and coin usage are fixed and open.",
        link_text: "Read project tokenomics",
        link_url: "https://gonka.ai/tokenomics.pdf"
      },
      faq: {
        title: "FAQ",
        subtitle: "Frequently Asked Questions",
        items: [
          {
            q: "What guarantees do you provide?",
            a: "We provide a public blockchain link where you can track balance and accrued GNK at any time. All operations are transparent."
          },
          {
            q: "What is Management Fee?",
            a: "It's a commission for infrastructure management (admin, monitoring, unjail, claiming rewards, support) deducted from the top."
          },
          {
            q: "Can I withdraw funds after allocation?",
            a: "No. Once allocated to compute power, refunds are not possible until the mining period ends as hardware is rented for specific cases."
          },
          {
            q: "When is payment status updated?",
            a: "Automatically within 1-2 hours after blockchain confirmation. If longer, contact Telegram support."
          },
          {
            q: "What is vesting?",
            a: "Gradual unlocking of earned tokens (1/180 daily) to ensure economic stability and prevent dumping."
          },
          {
            q: "How to withdraw tokens?",
            a: "1. You send a withdrawal request in our Telegram. 2. We transfer coins to your wallet specified in the request. 3. Transfer is executed within 24 hours after receiving the request."
          },
          {
            q: "How to create a Gonka Network wallet?",
            a: "We recommend Keplr Wallet with Google auth. Never share your private key."
          },
          {
            q: "How to connect to decentralized Dashboard?",
            a: "Choose any node (e.g., http://185.216.21.98:8000), click 'Connect Wallet', and select Keplr."
          }
        ]
      },
      final_cta: {
        title: "Start mining today",
        subtitle: "Transparent conditions. Flexible plans.",
        text: "Start earning GNK coins without complex setups.",
        button: "Start Mining"
      }
    }
  },
  es: {
    header: {
      nav: {
        about: "Sobre GONKA",
        pricing: "Precios",
        faq: "FAQ",
      },
      safecompute_nav: {
        about: "Sobre nosotros",
        problem: "Solución",
        pricing: "Precios",
        how_it_works: "Cómo funciona",
        economics: "Economía",
        faq: "FAQ",
      },
      cta: "Conectar",
    },
    hero: {
      tag: "GONKA Mainnet ya está activa",
      title: "Alquile NVIDIA H200 para Gonka",
      title_accent: "30% más barato que en la nube",
      description: "Las GPU optimizadas para Gonka reducen los costos de minería a $1 por GNK. Ofrecemos una solución llave en mano: configuración, lanzamiento y soporte 24/7.",
      cta: "Empezar a minar",
      features: {
        ready: "Solución llave en mano",
        ready_desc: "Nodo conectado a Mainnet",
        passive: "Ingresos pasivos",
        passive_desc: "Recompensas en tokens GNK",
        warranty: "Garantía",
        warranty_desc: "Compensación por inactividad",
      },
    },
    about: {
      title: "¿Qué es",
      title_accent: "GONKA",
      title_suffix: "y por qué es importante?",
      description: "GONKA es un protocolo descentralizado para cómputo de IA creado por los hermanos Liberman. A diferencia de la minería clásica que simplemente quema electricidad, la red GONKA realiza un trabajo útil.",
      cards: {
        useful: {
          title: "Cómputo Útil",
          desc: "Proporciona potencia para Inteligencia Artificial (Inferencia) y entrenamiento de modelos.",
        },
        protocol: {
          title: "Protocolo Único",
          desc: "Proof-of-Work basado en Transformadores: 99% de la potencia va a tareas reales de IA, y solo 1% a la seguridad de la red.",
        },
      },
      why: {
        title: "¿Por qué ahora?",
        list: [
          "Mainnet lanzada hace solo unos meses. La dificultad crece exponencialmente.",
          "Escasez aguda de chips H100/A100 a nivel mundial. GONKA permite monetizar este déficit.",
          "Una oportunidad para competir con gigantes tecnológicos (Google, OpenAI) en infraestructura de IA.",
        ],
      },
    },
    pricing: {
      title: "Precios y Condiciones",
      subtitle: "Clúster de IA basado en 8× GPU NVIDIA H200 listo para minar",
      note: "Cuanto más largo el alquiler, menor el precio por hora",
      plans: {
        short: {
          name: "Hasta 1 mes",
          price: "$8",
          period: "/ hora",
          features: ["Peso del nodo: 2000+", "Garantía de uptime", "Soporte 24/7"],
          cta: "Seleccionar",
        },
        medium: {
          tag: "POPULAR",
          name: "Hasta 2 meses",
          price: "$6",
          period: "/ hora",
          features: ["Peso del nodo: 2000+", "Máximo beneficio", "Soporte prioritario"],
          cta: "Alquilar Nodo",
        },
        long: {
          name: "3 meses o más",
          price: "$5",
          period: "/ hora",
          features: ["Peso del nodo: 2000+", "Contrato a largo plazo", "Gerente personal"],
          cta: "Seleccionar",
        },
      },
    },
    infrastructure: {
      title: "Infraestructura",
      title_accent: "Grado Industrial",
      subtitle: "Por qué alquilar un nodo con nosotros es más rentable que construir tu propia granja.",
      cards: {
        metal: {
          title: "Eficiencia Bare Metal",
          desc: "Proporcionamos acceso directo al hardware sin capas de virtualización. Su nodo utiliza el 100% de los recursos de la GPU. Las soluciones domésticas y en la nube (AWS, Azure) pierden 15-20% de rendimiento en overhead de hipervisores.",
          highlight: "acceso directo al hardware",
          tag: "Tasa de hash máxima sin pérdidas"
        },
        scale: {
          title: "Economía de Escala",
          desc: "El beneficio se logra a través del volumen. Compramos equipos y electricidad a tarifas industriales mayoristas. Tales precios no están disponibles para un minero individual.",
          highlight: "tarifas industriales mayoristas",
          tag: "Reducción de costos hasta 40%"
        }
      }
    },
    videos: {
      title: "Videos y",
      title_accent: "Entrevistas",
      items: [
        {
          title: "\"¡Open AI es una burbuja!\" Revelaciones de Silicon Valley",
          quote: "«No estamos creando nuevo oro (como Bitcoin), estamos creando combustible para el futuro de la IA. El mercado de cómputo de IA está valorado en decenas de billones de dólares.»"
        },
        {
          title: "David Liberman sobre IA Descentralizada (Bitcoin.com)",
          quote: "«Los jugadores centralizados amortizan las GPU en 6 años, mientras que en cripto la innovación actualiza el hardware cada año. La descentralización siempre gana en velocidad (y costo).»"
        },
        {
          title: "Bitfury invertirá $50M en total en el proyecto Gonka AI de los hermanos Liberman",
          quote: "«Los propietarios de GPU pueden alquilarlas a través del protocolo Gonka a cualquiera que necesite potencia de cómputo para proyectos de IA.»"
        },
        {
          title: "¿Quién posee el futuro del cómputo? La búsqueda para hacer la IA abierta para todos",
          quote: "«Si la IA es la nueva electricidad, el cómputo es la red que la alimenta. Quien controle los chips controlará la innovación de la próxima década.»"
        }
      ],
      read_article: "Leer Artículo"
    },
    faq: {
      title: "FAQ",
      subtitle: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Qué es GONKA24.com?",
          a: "Es un servicio para alquilar nodos GPU listos para usar y participar en la red Gonka, simplificando la configuración y las recompensas de minería y cómputo."
        },
        {
          q: "¿Qué es un “nodo Gonka” y por qué es necesario?",
          a: "Un nodo es un servidor con una unidad de procesamiento gráfico (GPU) configurado para trabajar en la red Gonka. Participa en la computación distribuida y recibe recompensas por contribuir a la red."
        },
        {
          q: "¿Cómo se calculan las recompensas?",
          a: "Configuramos el nodo a su billetera fría y garantizamos las recompensas. Si su nodo no recibe recompensa por una época, reembolsamos el dinero. Si el peso del nodo es inferior a 2000, el precio se ajusta proporcionalmente."
        },
        {
          q: "¿Qué métodos de pago se aceptan?",
          a: "Puede pagar el alquiler a través de: BTC (Bitcoin), USDT, USD/EUR."
        },
        {
          q: "¿Cómo funciona la configuración y el lanzamiento del nodo?",
          a: "Después del pago, configuramos completamente el servidor para su billetera y aseguramos su funcionamiento. No necesita conocimientos técnicos, todo se hace por usted."
        },
        {
          q: "¿Cuánto tiempo tarda en lanzarse un nodo?",
          a: "Después de la confirmación del pago, la configuración suele ser rápida; nos pondremos en contacto con usted para aclarar los detalles de la billetera."
        }
      ]
    },
    resources: {
      title: "Recursos Útiles",
      subtitle: "Aprenda más sobre Gonka Network y la computación descentralizada",
      items: {
        whitepaper: { title: "Whitepaper", desc: "Documentación técnica del protocolo Gonka Network", action: "Leer" },
        tokenomics: { title: "Tokenomics GNK", desc: "Modelo económico y distribución de tokens", action: "Leer" },
        twitter: { title: "X (Twitter)", desc: "Siga las noticias y actualizaciones de Gonka", action: "Abrir" },
        discord: { title: "Comunidad Discord", desc: "Únase a la comunidad global de entusiastas", action: "Unirse" }
      }
    },
    cta_section: {
      how_it_works: {
        title: "Cómo funciona",
        steps: [
          { title: "Deja una solicitud", desc: "Complete un formulario simple" },
          { title: "Configuramos el nodo", desc: "A su billetera" },
          { title: "Recibe recompensas", desc: "En tokens GNK" }
        ]
      },
      title: "Participe en la creación de",
      title_accent: "infraestructura IA dex de próxima generación",
      subtitle: "Abierta. Escalable. Independiente.",
      button: "Empezar a minar"
    },
    footer: {
      rights: "© 2026 GONKA Mining. Todos los derechos reservados.",
      payment: "Pago: Prepago de 1 mes. Se proporcionarán detalles.",
      contact_text: "Si tiene alguna pregunta — escriba a",
      contact_link_text: "nuestro gerente",
      manager_link: "https://t.me/lina_semash",
      community_text: "Únase a nuestro",
      community_link_text: "grupo de chat en Telegram",
      community_link: "https://t.me/+40Xsw5RML45mOGEx"
    },
    safecompute: {
      hero: {
        tag: "GONKA Mainnet ya está activa",
        title: "Mine GNK desde $250",
        title_accent: "llave en mano",
        description: "Forme parte de la revolución de la IA descentralizada. Nos encargamos de la configuración del hardware y los servidores: usted obtiene monedas GNK minadas.",
        cta: "Empezar a minar",
        features: {
          ready: "Mejores GPUs",
          ready_desc: "Minería H100/H200",
          passive: "Llave en mano",
          passive_desc: "Manejamos la tecnología",
          warranty: "Economía",
          warranty_desc: "Minería a precios óptimos del mercado",
        },
      },
      about_custom: {
        title: "¿Qué es",
        title_accent: "Gonka Network?",
        description: "Gonka es una red descentralizada para cómputo de IA. A diferencia de las criptomonedas estándar, la minería aquí proporciona una utilidad real: entrenamiento de redes neuronales e inferencia.",
        facts: [
          {
            title: "Inversiones Gigantes",
            desc: "Bitfury (leyenda de la minería de Bitcoin) invirtió más de $50M, junto con fondos que apoyaron a OpenAI y Solana."
          },
          {
            title: "Fundadores",
            desc: "Los hermanos Liberman (ex-directores de Snapchat), creadores de \"unicornios\"."
          },
          {
            title: "Tecnología",
            desc: "Proof-of-Work de próxima generación. La potencia de la red ya es equivalente a miles de GPU H100."
          },
          {
            title: "Escasez",
            desc: "Suministro total de 1.000 millones de tokens, modelo de halving tipo Bitcoin (las recompensas disminuyen)."
          }
        ]
      },
      problem_solution: {
        title: "El Problema vs ",
        title_accent: "Nuestra Solución",
        problem: {
          title: "Minería por su cuenta",
          items: [
            "Requiere potentes GPU (H100/H200) que cuestan $2,000 - $30,000.",
            "Configuración compleja: Linux, Docker, gestión de claves.",
            "Riesgo de tiempo de inactividad y multas (slashing).",
          ]
        },
        solution: {
          title: "Minería con Nosotros",
          items: [
            "Entrada asequible: Comience desde solo $250. Agrupamos capital para potencia.",
            "Sin tecnología necesaria: Gestionamos nodos, actualizamos software y monitoreamos 24/7.",
            "Garantía de uptime: Administración profesional.",
          ]
        }
      },
      pricing: {
        title: "Condiciones Flexibles para Inversores",
        subtitle: "Cuanto mayor sea el depósito, mejores serán las condiciones",
        note: "La tarifa de gestión disminuye con el volumen",
        plans: {
          short: {
            name: "Compute Basic",
            price: "$250",
            period: "entrada mín",
            features: ["Fee de Gestión: 30%", "Ideal para probar hipótesis", "Intro al proyecto"],
            cta: "Seleccionar Plan",
          },
          medium: {
            tag: "RECOMENDADO",
            name: "Compute +",
            price: "$1,000",
            period: "entrada mín",
            features: ["Fee de Gestión: 20%", "10% Beneficio", "Elección Óptima"],
            cta: "Seleccionar Plan",
          },
          long: {
            name: "Compute Premium Pool",
            price: "desde $10,000+",
            period: "/ mes",
            features: [
              "∞ NVIDIA H200 (escalable según tarea)",
              "Precio por hora: calculado individualmente",
              "Fee de gestión: 5%",
              "Configuración directa de billetera"
            ],
            cta: "Contáctenos",
          },
        },
      },
      how_it_works: {
        title: "Cómo funciona",
        subtitle: "Parte técnica en palabras simples",
        steps: [
          { title: "Depósito", desc: "Usted deposita USDT/USDC (TRC20)." },
          { title: "Lanzamiento", desc: "Asignamos fondos para comprar/alquilar acciones de GPU en clústeres." },
          { title: "Épocas", desc: "El hardware realiza tareas de inferencia y gana recompensas." },
          { title: "Distribución", desc: "Las recompensas menos la tarifa se acreditan a su billetera mensualmente (180 días de vesting)." }
        ]
      },
      fomo: {
        title: "Bitcoin para la Era de la IA",
        subtitle: "Apenas comenzando",
        text: "La red se lanzó en agosto de 2025. Estamos en el temprano 'Grace Period' donde las recompensas son máximas.",
        grace_period: "Grace Period",
        today: "Hoy",
        disclaimer: "* El gráfico es una ilustración visual del cambio en las recompensas mineras individuales a lo largo del tiempo.",
        chart: {
          start: "Inicio (2025)",
          halving1: "Halving 1 (Ago 2029)",
          halving2: "Halving 2 (Ago 2033)",
          daily_reward_potential: "Potencial de Recompensa Diaria",
          daily_reward: "Recompensa Diaria",
          reward: "Recompensa",
          month: "Mes"
        },
        epochs: {
          now: {
            title: "Ahora (2025–2029)",
            text: "La red asigna <span class=\"text-white font-mono\">~323,000 GNK</span> por día a todos los mineros."
          },
          halving1: {
            title: "Después del 1er Halving (Ago 2029)",
            text: "La asignación cae a <span class=\"text-white font-mono\">~161,500 GNK</span> por día."
          },
          halving2: {
            title: "Después del 2do Halving (Ago 2033)",
            text: "La asignación cae a <span class=\"text-white font-mono\">~80,750 GNK</span> por día."
          }
        }
      },
      tokenomics_section: {
        title: "Tokenomics Transparente",
        description: "La minería se basa en la tokenomics pública del proyecto.\nTodas las reglas de emisión, distribución y uso de monedas son fijas y abiertas.",
        link_text: "Leer tokenomics del proyecto",
        link_url: "https://gonka.ai/tokenomics.pdf"
      },
      faq: {
        title: "FAQ",
        subtitle: "Preguntas Frecuentes",
        items: [
          {
            q: "¿Qué garantías ofrecen?",
            a: "Proporcionamos un enlace público de blockchain donde puede rastrear el saldo y los GNK acumulados en cualquier momento. Todas las operaciones son transparentes."
          },
          {
            q: "¿Qué es el Management Fee?",
            a: "Es una comisión por la gestión de infraestructura (administración, monitoreo, unjail, reclamo de recompensas, soporte) deducida del total."
          },
          {
            q: "¿Puedo retirar fondos después de la asignación?",
            a: "No. Una vez asignados a la potencia de cómputo, los reembolsos no son posibles hasta que finalice el período de minería, ya que el hardware se alquila para casos específicos."
          },
          {
            q: "¿Cuándo se actualiza el estado del pago?",
            a: "Automáticamente dentro de 1-2 horas después de la confirmación de blockchain. Si tarda más, contacte al soporte en Telegram."
          },
          {
            q: "¿Qué es el vesting?",
            a: "Desbloqueo gradual de tokens ganados (1/180 diarios) para garantizar la estabilidad económica y prevenir dumping."
          },
          {
            q: "¿Cómo retirar tokens?",
            a: "1. Envía una solicitud de retiro en nuestro Telegram. 2. Transferimos las monedas a su billetera especificada en la solicitud. 3. La transferencia se ejecuta dentro de las 24 horas posteriores a la recepción de la solicitud."
          },
          {
            q: "¿Cómo crear una billetera Gonka Network?",
            a: "Recomendamos Keplr Wallet con autenticación de Google. Nunca comparta su clave privada."
          },
          {
            q: "¿Cómo conectarse al Dashboard descentralizado?",
            a: "Elija cualquier nodo (por ejemplo, http://185.216.21.98:8000), haga clic en 'Connect Wallet' y seleccione Keplr."
          }
        ]
      },
      final_cta: {
        title: "Empiece a minar hoy",
        subtitle: "Condiciones transparentes. Planes flexibles.",
        text: "Empiece a ganar monedas GNK sin configuraciones complejas.",
        button: "Empezar a minar"
      }
    }
  },
  de: {
    header: {
      nav: {
        about: "Über GONKA",
        pricing: "Preise",
        faq: "FAQ",
      },
      safecompute_nav: {
        about: "Über uns",
        problem: "Lösung",
        pricing: "Preise",
        how_it_works: "Wie es funktioniert",
        economics: "Ökonomie",
        faq: "FAQ",
      },
      cta: "Verbinden",
    },
    hero: {
      tag: "GONKA Mainnet ist bereits live",
      title: "NVIDIA H200 für Gonka mieten",
      title_accent: "30% günstiger als Cloud-Preise",
      description: "Gonka-optimierte GPUs senken die Mining-Kosten auf 1 $ pro GNK. Wir bieten eine schlüsselfertige Lösung: Einrichtung, Start und 24/7-Support.",
      cta: "Mining starten",
      features: {
        ready: "Schlüsselfertige Lösung",
        ready_desc: "Node mit Mainnet verbunden",
        passive: "Passives Einkommen",
        passive_desc: "Belohnungen in GNK-Token",
        warranty: "Garantie",
        warranty_desc: "Ausfallentschädigung",
      },
    },
    about: {
      title: "Was ist",
      title_accent: "GONKA",
      title_suffix: "und warum ist es wichtig?",
      description: "GONKA ist ein dezentrales Protokoll für KI-Berechnungen, erstellt von den Liberman-Brüdern. Im Gegensatz zum klassischen Mining, das einfach Strom verbraucht, leistet das GONKA-Netzwerk nützliche Arbeit.",
      cards: {
        useful: {
          title: "Nützliche Berechnungen",
          desc: "Bietet Leistung für Künstliche Intelligenz (Inferenz) und Modelltraining.",
        },
        protocol: {
          title: "Einzigartiges Protokoll",
          desc: "Transformer-Based Proof-of-Work: 99% der Leistung fließen in reale KI-Aufgaben und nur 1% in die Netzwerksicherheit.",
        },
      },
      why: {
        title: "Warum jetzt?",
        list: [
          "Mainnet erst vor wenigen Monaten gestartet. Die Schwierigkeit wächst exponentiell.",
          "Akuter Mangel an H100/A100-Chips weltweit. GONKA ermöglicht die Monetarisierung dieses Defizits.",
          "Eine Chance, mit Technologiegiganten (Google, OpenAI) in der KI-Infrastruktur zu konkurrieren.",
        ],
      },
    },
    pricing: {
      title: "Preise und Bedingungen",
      subtitle: "KI-Cluster basierend auf 8× NVIDIA H200 GPUs bereit zum Mining",
      note: "Je länger die Miete, desto niedriger der stündliche Preis",
      plans: {
        short: {
          name: "Bis zu 1 Monat",
          price: "$8",
          period: "/ Stunde",
          features: ["Node-Gewicht: 2000+", "Uptime-Garantie", "24/7 Support"],
          cta: "Auswählen",
        },
        medium: {
          tag: "BELIEBT",
          name: "Bis zu 2 Monate",
          price: "$6",
          period: "/ Stunde",
          features: ["Node-Gewicht: 2000+", "Maximaler Nutzen", "Priorisierter Support"],
          cta: "Node mieten",
        },
        long: {
          name: "3 Monate und mehr",
          price: "$5",
          period: "/ Stunde",
          features: ["Node-Gewicht: 2000+", "Langfristiger Vertrag", "Persönlicher Manager"],
          cta: "Auswählen",
        },
      },
    },
    infrastructure: {
      title: "Infrastruktur",
      title_accent: "Industriestandard",
      subtitle: "Warum das Mieten eines Nodes bei uns rentabler ist als der Bau einer eigenen Farm.",
      cards: {
        metal: {
          title: "Bare Metal Effizienz",
          desc: "Wir bieten direkten Zugriff auf Hardware ohne Virtualisierungsschichten. Ihr Node nutzt 100% der GPU-Ressourcen. Heim- und Cloud-Lösungen (AWS, Azure) verlieren 15-20% Leistung durch Hypervisor-Overhead.",
          highlight: "direkter Zugriff auf Hardware",
          tag: "Maximale Hashrate ohne Verluste"
        },
        scale: {
          title: "Skaleneffekte",
          desc: "Profit wird durch Volumen erzielt. Wir kaufen Ausrüstung und Strom zu industriellen Großhandelspreisen. Solche Preise sind für einen einzelnen Miner nicht verfügbar.",
          highlight: "industrielle Großhandelspreise",
          tag: "Kostenreduzierung bis zu 40%"
        }
      }
    },
    videos: {
      title: "Videos und",
      title_accent: "Interviews",
      items: [
        {
          title: "\"Open AI ist eine Blase!\" Enthüllungen aus dem Silicon Valley",
          quote: "«Wir schaffen kein neues Gold (wie Bitcoin), wir schaffen Treibstoff für die KI-Zukunft. Der Markt für KI-Berechnungen wird auf Dutzende Billionen Dollar geschätzt.»"
        },
        {
          title: "David Liberman über dezentrale KI (Bitcoin.com)",
          quote: "«Zentralisierte Akteure schreiben GPUs über 6 Jahre ab, während in Krypto Innovationen die Hardware jedes Jahr aktualisieren. Dezentralisierung gewinnt immer bei Geschwindigkeit (und Kosten).»"
        },
        {
          title: "Bitfury investiert insgesamt 50 Mio. $ in das Gonka KI-Projekt der Liberman-Brüder",
          quote: "«GPU-Besitzer können diese über das Gonka-Protokoll an jeden vermieten, der Rechenleistung für KI-Projekte benötigt.»"
        },
        {
          title: "Wem gehört die Zukunft der Berechnungen? Das Streben, KI für alle offen zu machen",
          quote: "«Wenn KI die neue Elektrizität ist, sind Berechnungen das Netz, das sie antreibt. Wer die Chips kontrolliert, wird die Innovation des nächsten Jahrzehnts kontrollieren.»"
        }
      ],
      read_article: "Artikel lesen"
    },
    faq: {
      title: "FAQ",
      subtitle: "Häufig gestellte Fragen",
      items: [
        {
          q: "Was ist GONKA24.com?",
          a: "Es ist ein Service zur Miete von fertigen GPU-Nodes für die Teilnahme am Gonka-Netzwerk, der die Einrichtung und Belohnungen aus Mining und Berechnungen vereinfacht."
        },
        {
          q: "Was ist ein “Gonka-Node” und warum wird er benötigt?",
          a: "Ein Node ist ein Server mit einem Grafikprozessor (GPU), der für die Arbeit im Gonka-Netzwerk konfiguriert ist. Er nimmt an verteilten Berechnungen teil und erhält Belohnungen für den Beitrag zum Netzwerk."
        },
        {
          q: "Wie werden Belohnungen berechnet?",
          a: "Wir konfigurieren den Node auf Ihre Cold Wallet und garantieren Belohnungen. Wenn Ihr Node keine Belohnung für eine Epoche erhält, erstatten wir das Geld. Wenn das Node-Gewicht unter 2000 liegt, wird der Preis proportional angepasst."
        },
        {
          q: "Welche Zahlungsmethoden werden akzeptiert?",
          a: "Sie können die Miete bezahlen per: BTC (Bitcoin), USDT, USD/EUR."
        },
        {
          q: "Wie funktioniert die Einrichtung und der Start des Nodes?",
          a: "Nach der Zahlung konfigurieren wir den Server vollständig für Ihre Wallet und stellen seinen Betrieb sicher. Sie benötigen keine technischen Kenntnisse – alles wird für Sie erledigt."
        },
        {
          q: "Wie lange dauert es, einen Node zu starten?",
          a: "Nach Bestätigung der Zahlung erfolgt die Einrichtung in der Regel schnell – wir werden uns mit Ihnen in Verbindung setzen, um Details zur Wallet zu klären."
        }
      ]
    },
    resources: {
      title: "Nützliche Ressourcen",
      subtitle: "Erfahren Sie mehr über das Gonka Network und dezentrale Berechnungen",
      items: {
        whitepaper: { title: "Whitepaper", desc: "Technische Dokumentation des Gonka Network Protokolls", action: "Lesen" },
        tokenomics: { title: "GNK Tokenomics", desc: "Wirtschaftsmodell und Token-Verteilung", action: "Lesen" },
        twitter: { title: "X (Twitter)", desc: "Folgen Sie Gonka Nachrichten und Updates", action: "Öffnen" },
        discord: { title: "Discord Community", desc: "Treten Sie der globalen Gemeinschaft von Enthusiasten bei", action: "Beitreten" }
      }
    },
    cta_section: {
      how_it_works: {
        title: "Wie es funktioniert",
        steps: [
          { title: "Sie hinterlassen eine Anfrage", desc: "Füllen Sie ein einfaches Formular aus" },
          { title: "Wir richten den Node ein", desc: "Auf Ihre Wallet" },
          { title: "Sie erhalten Belohnungen", desc: "In GNK-Token" }
        ]
      },
      title: "Beteiligen Sie sich am Aufbau",
      title_accent: "der dex KI-Infrastruktur der nächsten Generation",
      subtitle: "Offen. Skalierbar. Unabhängig.",
      button: "Mining starten"
    },
    footer: {
      rights: "© 2026 GONKA Mining. Alle Rechte vorbehalten.",
      payment: "Zahlung: 1 Monat Vorauszahlung. Details werden bereitgestellt.",
      contact_text: "Wenn Sie Fragen haben — schreiben Sie an",
      contact_link_text: "unseren Manager",
      manager_link: "https://t.me/lina_semash",
      community_text: "Treten Sie unserer",
      community_link_text: "Telegram-Chatgruppe bei",
      community_link: "https://t.me/+40Xsw5RML45mOGEx"
    },
    safecompute: {
      hero: {
        tag: "GONKA Mainnet ist bereits live",
        title: "GNK minen ab 250 $",
        title_accent: "schlüsselfertig",
        description: "Werden Sie Teil der dezentralen KI-Revolution. Wir kümmern uns um Hardware-Einrichtung und Server – Sie erhalten geschürfte GNK-Münzen.",
        cta: "Mining starten",
        features: {
          ready: "Top GPUs",
          ready_desc: "H100/H200 Mining",
          passive: "Schlüsselfertig",
          passive_desc: "Wir managen die Technik",
          warranty: "Wirtschaftlichkeit",
          warranty_desc: "Mining zu optimalen Marktpreisen",
        },
      },
      about_custom: {
        title: "Was ist",
        title_accent: "Gonka Network?",
        description: "Gonka ist ein dezentrales Netzwerk für KI-Berechnungen. Im Gegensatz zu Standard-Kryptowährungen bietet Mining hier einen echten Nutzen: Training neuronaler Netze und Inferenz.",
        facts: [
          {
            title: "Gigantische Investitionen",
            desc: "Bitfury (Bitcoin-Mining-Legende) investierte über 50 Mio. $, zusammen mit Fonds, die OpenAI und Solana unterstützten."
          },
          {
            title: "Gründer",
            desc: "Die Liberman-Brüder (Ex-Snapchat-Direktoren), Schöpfer von \"Einhörnern\"."
          },
          {
            title: "Technologie",
            desc: "Proof-of-Work der nächsten Generation. Die Netzwerkleistung entspricht bereits Tausenden von H100-GPUs."
          },
          {
            title: "Knappheit",
            desc: "Gesamtangebot von 1 Milliarde Token, Bitcoin-ähnliches Halving-Modell (Belohnungen sinken)."
          }
        ]
      },
      problem_solution: {
        title: "Das Problem vs ",
        title_accent: "Unsere Lösung",
        problem: {
          title: "Selbst minen",
          items: [
            "Erfordert leistungsstarke GPUs (H100/H200) im Wert von 2.000 $ - 30.000 $.",
            "Komplexe Einrichtung: Linux, Docker, Schlüsselverwaltung.",
            "Risiko von Ausfallzeiten und Strafen (Slashing).",
          ]
        },
        solution: {
          title: "Mining mit uns",
          items: [
            "Erschwinglicher Einstieg: Starten Sie ab nur 250 $. Wir bündeln Kapital für Leistung.",
            "Keine Technik nötig: Wir verwalten Nodes, aktualisieren Software und überwachen 24/7.",
            "Uptime-Garantie: Professionelle Administration.",
          ]
        }
      },
      pricing: {
        title: "Flexible Bedingungen für Investoren",
        subtitle: "Je höher die Einzahlung, desto besser die Konditionen",
        note: "Die Managementgebühr sinkt mit dem Volumen",
        plans: {
          short: {
            name: "Compute Basic",
            price: "$250",
            period: "Min. Einstieg",
            features: ["Managementgebühr: 30%", "Ideal zum Testen von Hypothesen", "Einführung in das Projekt"],
            cta: "Plan wählen",
          },
          medium: {
            tag: "EMPFOHLEN",
            name: "Compute +",
            price: "$1.000",
            period: "Min. Einstieg",
            features: ["Managementgebühr: 20%", "10% Vorteil", "Optimale Wahl"],
            cta: "Plan wählen",
          },
          long: {
            name: "Compute Premium Pool",
            price: "ab $10.000+",
            period: "/ Monat",
            features: [
              "∞ NVIDIA H200 (skalierbar nach Bedarf)",
              "Stundenpreis: individuell berechnet",
              "Managementgebühr: 5%",
              "Direkte Wallet-Einrichtung"
            ],
            cta: "Kontaktieren Sie uns",
          },
        },
      },
      how_it_works: {
        title: "Wie es funktioniert",
        subtitle: "Technischer Teil in einfachen Worten",
        steps: [
          { title: "Einzahlung", desc: "Sie zahlen USDT/USDC (TRC20) ein." },
          { title: "Start", desc: "Wir weisen Mittel zu, um GPU-Anteile in Clustern zu kaufen/mieten." },
          { title: "Epochen", desc: "Hardware führt Inferenzaufgaben aus und verdient Belohnungen." },
          { title: "Verteilung", desc: "Belohnungen abzüglich Gebühr werden monatlich Ihrer Wallet gutgeschrieben (180 Tage Vesting)." }
        ]
      },
      fomo: {
        title: "Bitcoin für die KI-Ära",
        subtitle: "Gerade erst am Anfang",
        text: "Netzwerkstart im August 2025. Wir befinden uns in der frühen 'Grace Period', in der die Belohnungen maximal sind.",
        grace_period: "Grace Period",
        today: "Heute",
        disclaimer: "* Die Grafik ist eine visuelle Darstellung der Änderung der individuellen Mining-Belohnungen im Laufe der Zeit.",
        chart: {
          start: "Start (2025)",
          halving1: "Halving 1 (Aug 2029)",
          halving2: "Halving 2 (Aug 2033)",
          daily_reward_potential: "Tägliches Belohnungspotenzial",
          daily_reward: "Tägliche Belohnung",
          reward: "Belohnung",
          month: "Monat"
        },
        epochs: {
          now: {
            title: "Jetzt (2025–2029)",
            text: "Das Netzwerk weist <span class=\"text-white font-mono\">~323.000 GNK</span> pro Tag an alle Miner zu."
          },
          halving1: {
            title: "Nach 1. Halving (Aug 2029)",
            text: "Zuteilung sinkt auf <span class=\"text-white font-mono\">~161.500 GNK</span> pro Tag."
          },
          halving2: {
            title: "Nach 2. Halving (Aug 2033)",
            text: "Zuteilung sinkt auf <span class=\"text-white font-mono\">~80.750 GNK</span> pro Tag."
          }
        }
      },
      tokenomics_section: {
        title: "Transparente Tokenomics",
        description: "Mining basiert auf der öffentlichen Tokenomics des Projekts.\nAlle Regeln für Emission, Verteilung und Verwendung von Münzen sind fest und offen.",
        link_text: "Projekt-Tokenomics lesen",
        link_url: "https://gonka.ai/tokenomics.pdf"
      },
      faq: {
        title: "FAQ",
        subtitle: "Häufig gestellte Fragen",
        items: [
          {
            q: "Welche Garantien bieten Sie?",
            a: "Wir bieten einen öffentlichen Blockchain-Link, über den Sie Guthaben und angesammelte GNK jederzeit verfolgen können. Alle Operationen sind transparent."
          },
          {
            q: "Was ist die Management Fee?",
            a: "Es ist eine Provision für das Infrastrukturmanagement (Admin, Monitoring, Unjail, Claim von Belohnungen, Support), die vom Gesamtbetrag abgezogen wird."
          },
          {
            q: "Kann ich Geld nach der Zuweisung abheben?",
            a: "Nein. Nach der Zuweisung zu Rechenleistung sind Rückerstattungen erst nach Ende des Mining-Zeitraums möglich, da Hardware für bestimmte Fälle gemietet wird."
          },
          {
            q: "Wann wird der Zahlungsstatus aktualisiert?",
            a: "Automatisch innerhalb von 1-2 Stunden nach Blockchain-Bestätigung. Wenn es länger dauert, kontaktieren Sie den Telegram-Support."
          },
          {
            q: "Was ist Vesting?",
            a: "Allmähliche Freigabe verdienter Token (1/180 täglich), um wirtschaftliche Stabilität zu gewährleisten und Dumping zu verhindern."
          },
          {
            q: "Wie hebe ich Token ab?",
            a: "1. Sie senden eine Auszahlungsanfrage in unserem Telegram. 2. Wir überweisen Münzen an die in der Anfrage angegebene Wallet. 3. Die Überweisung erfolgt innerhalb von 24 Stunden nach Erhalt der Anfrage."
          },
          {
            q: "Wie erstelle ich eine Gonka Network Wallet?",
            a: "Wir empfehlen Keplr Wallet mit Google-Authentifizierung. Teilen Sie niemals Ihren privaten Schlüssel."
          },
          {
            q: "Wie verbinde ich mich mit dem dezentralen Dashboard?",
            a: "Wählen Sie einen beliebigen Node (z.B. http://185.216.21.98:8000), klicken Sie auf 'Wallet verbinden' und wählen Sie Keplr."
          }
        ]
      },
      final_cta: {
        title: "Starten Sie heute mit Mining",
        subtitle: "Transparente Bedingungen. Flexible Pläne.",
        text: "Verdienen Sie GNK-Münzen ohne komplexe Einrichtung.",
        button: "Mining starten"
      }
    }
  },
  zh: {
    header: {
      nav: {
        about: "关于 GONKA",
        pricing: "定价",
        faq: "常见问题",
      },
      safecompute_nav: {
        about: "关于我们",
        problem: "解决方案",
        pricing: "定价",
        how_it_works: "工作原理",
        economics: "经济模型",
        faq: "常见问题",
      },
      cta: "连接",
    },
    hero: {
      tag: "GONKA 主网已上线",
      title: "租赁 NVIDIA H200 用于 Gonka",
      title_accent: "比云端价格便宜 30%",
      description: "Gonka 优化的 GPU 将挖矿成本降低至每 GNK 1 美元。我们提供一站式解决方案：设置、启动和 24/7 支持。",
      cta: "开始挖矿",
      features: {
        ready: "一站式解决方案",
        ready_desc: "节点已连接到主网",
        passive: "被动收入",
        passive_desc: "GNK 代币奖励",
        warranty: "保修",
        warranty_desc: "停机补偿",
      },
    },
    about: {
      title: "什么是",
      title_accent: "GONKA",
      title_suffix: "为什么它很重要？",
      description: "GONKA 是由 Liberman 兄弟创建的去中心化 AI 计算协议。与仅仅燃烧电力的传统挖矿不同，GONKA 网络执行有用的工作。",
      cards: {
        useful: {
          title: "有用计算",
          desc: "为人工智能（推理）和模型训练提供算力。",
        },
        protocol: {
          title: "独特协议",
          desc: "基于 Transformer 的工作量证明：99% 的算力用于实际 AI 任务，仅 1% 用于网络安全。",
        },
      },
      why: {
        title: "为什么是现在？",
        list: [
          "主网仅在几个月前上线。难度呈指数级增长。",
          "全球 H100/A100 芯片严重短缺。GONKA 允许将此赤字货币化。",
          "有机会在 AI 基础设施方面与科技巨头（谷歌、OpenAI）竞争。",
        ],
      },
    },
    pricing: {
      title: "价格与条款",
      subtitle: "基于 8× NVIDIA H200 GPU 的 AI 集群，准备挖矿",
      note: "租赁时间越长，每小时价格越低",
      plans: {
        short: {
          name: "最长 1 个月",
          price: "$8",
          period: "/ 小时",
          features: ["节点权重：2000+", "正常运行时间保证", "24/7 支持"],
          cta: "选择",
        },
        medium: {
          tag: "热门",
          name: "最长 2 个月",
          price: "$6",
          period: "/ 小时",
          features: ["节点权重：2000+", "最大利益", "优先支持"],
          cta: "租赁节点",
        },
        long: {
          name: "3 个月及以上",
          price: "$5",
          period: "/ 小时",
          features: ["节点权重：2000+", "长期合同", "个人经理"],
          cta: "选择",
        },
      },
    },
    infrastructure: {
      title: "基础设施",
      title_accent: "工业级",
      subtitle: "为什么从我们这里租赁节点比建立自己的矿场更有利。",
      cards: {
        metal: {
          title: "裸机效率",
          desc: "我们提供直接硬件访问，没有虚拟化层。您的节点使用 100% 的 GPU 资源。家庭和云解决方案（AWS、Azure）因虚拟机管理程序开销而损失 15-20% 的性能。",
          highlight: "直接硬件访问",
          tag: "无损失的最大哈希率"
        },
        scale: {
          title: "规模经济",
          desc: "利润通过数量实现。我们以工业批发价格购买设备和电力。个人矿工无法获得此类价格。",
          highlight: "工业批发价格",
          tag: "成本降低高达 40%"
        }
      }
    },
    videos: {
      title: "视频和",
      title_accent: "访谈",
      items: [
        {
          title: "“Open AI 是一个泡沫！”来自硅谷的启示",
          quote: "«我们不是在创造新的黄金（像比特币），我们是在为 AI 的未来创造燃料。AI 计算市场估值数十万亿美元。»"
        },
        {
          title: "David Liberman 谈去中心化 AI (Bitcoin.com)",
          quote: "«中心化参与者将 GPU 摊销 6 年，而在加密领域，创新每年都会更新硬件。去中心化在速度（和成本）上总是获胜。»"
        },
        {
          title: "Bitfury 将向 Liberman 兄弟的 Gonka AI 项目总共投资 5000 万美元",
          quote: "«GPU 所有者可以通过 Gonka 协议将其出租给任何需要 AI 项目算力的人。»"
        },
        {
          title: "谁拥有计算的未来？让 AI 对所有人开放的追求",
          quote: "«如果 AI 是新电力，那么计算就是为其供电的电网。谁控制了芯片，谁就将控制未来十年的创新。»"
        }
      ],
      read_article: "阅读文章"
    },
    faq: {
      title: "常见问题",
      subtitle: "常见问题解答",
      items: [
        {
          q: "什么是 GONKA24.com？",
          a: "这是一个租赁现有 GPU 节点以参与 Gonka 网络的服务，简化了设置以及从挖矿和计算中获得奖励的过程。"
        },
        {
          q: "什么是“Gonka 节点”，为什么需要它？",
          a: "节点是配置为在 Gonka 网络中工作的带有图形处理单元 (GPU) 的服务器。它参与分布式计算并因对网络的贡献而获得奖励。"
        },
        {
          q: "奖励是如何计算的？",
          a: "我们将节点配置到您的冷钱包并保证奖励。如果您的节点在一个时期内没有收到奖励，我们将退款。如果节点权重低于 2000，价格将按比例调整。"
        },
        {
          q: "接受哪些付款方式？",
          a: "您可以通过以下方式支付租金：BTC (比特币)、USDT、USD/EUR。"
        },
        {
          q: "节点的设置和启动是如何进行的？",
          a: "付款后，我们将为您的钱包完全配置服务器并确保其运行。您不需要任何技术知识——一切都为您完成。"
        },
        {
          q: "启动一个节点需要多长时间？",
          a: "确认付款后，设置通常很快——我们将与您联系以确钱包详细信息。"
        }
      ]
    },
    resources: {
      title: "有用资源",
      subtitle: "了解更多关于 Gonka Network 和去中心化计算的信息",
      items: {
        whitepaper: { title: "白皮书", desc: "Gonka Network 协议技术文档", action: "阅读" },
        tokenomics: { title: "GNK 代币经济学", desc: "经济模型和代币分配", action: "阅读" },
        twitter: { title: "X (Twitter)", desc: "关注 Gonka 新闻和更新", action: "打开" },
        discord: { title: "Discord 社区", desc: "加入全球爱好者社区", action: "加入" }
      }
    },
    cta_section: {
      how_it_works: {
        title: "如何运作",
        steps: [
          { title: "您留下申请", desc: "填写简单的表格" },
          { title: "我们设置节点", desc: "到您的钱包" },
          { title: "您获得奖励", desc: "以 GNK 代币形式" }
        ]
      },
      title: "参与创建",
      title_accent: "下一代去中心化 AI 基础设施",
      subtitle: "开放。可扩展。独立。",
      button: "开始挖矿"
    },
    footer: {
      rights: "© 2026 GONKA Mining. 保留所有权利。",
      payment: "付款：预付 1 个月。将提供详细信息。",
      contact_text: "如果您有任何问题 — 请写信给",
      contact_link_text: "我们的经理",
      manager_link: "https://t.me/lina_semash",
      community_text: "加入我们的",
      community_link_text: "Telegram 聊天群",
      community_link: "https://t.me/+40Xsw5RML45mOGEx"
    },
    safecompute: {
      hero: {
        tag: "GONKA 主网已上线",
        title: "250 美元起挖掘 GNK",
        title_accent: "一站式",
        description: "成为去中心化 AI 革命的一部分。我们处理硬件设置和服务器——您获得挖掘出的 GNK 硬币。",
        cta: "开始挖矿",
        features: {
          ready: "顶级 GPU",
          ready_desc: "H100/H200 挖矿",
          passive: "一站式",
          passive_desc: "我们管理技术",
          warranty: "经济",
          warranty_desc: "以最佳市场价格挖矿",
        },
      },
      about_custom: {
        title: "什么是",
        title_accent: "Gonka Network？",
        description: "Gonka 是一个去中心化的 AI 计算网络。与标准加密货币不同，这里的挖矿提供了真正的效用：训练神经网络和推理。",
        facts: [
          {
            title: "巨额投资",
            desc: "Bitfury（比特币挖矿传奇）投资超过 5000 万美元，以及支持 OpenAI 和 Solana 的基金。"
          },
          {
            title: "创始人",
            desc: "Liberman 兄弟（前 Snapchat 董事），“独角兽”的创造者。"
          },
          {
            title: "技术",
            desc: "下一代工作量证明。网络算力已相当于数千个 H100 GPU。"
          },
          {
            title: "稀缺性",
            desc: "代币总量 10 亿，类似比特币的减半模型（奖励减少）。"
          }
        ]
      },
      problem_solution: {
        title: "问题 vs ",
        title_accent: "我们的解决方案",
        problem: {
          title: "自己挖矿",
          items: [
            "需要强大的 GPU (H100/H200)，成本 2,000 - 30,000 美元。",
            "设置复杂：Linux, Docker, 密钥管理。",
            "停机和罚款 (slashing) 风险。",
          ]
        },
        solution: {
          title: "与我们一起挖矿",
          items: [
            "低门槛：仅需 250 美元起。我们汇集资金以获得算力。",
            "无需技术：我们全天候管理节点，更新软件并进行监控。",
            "正常运行时间保证：专业管理。",
          ]
        }
      },
      pricing: {
        title: "投资者的灵活条款",
        subtitle: "存款越高，条款越好",
        note: "管理费随数量减少",
        plans: {
          short: {
            name: "基础计算",
            price: "$250",
            period: "最低",
            features: ["管理费：30%", "适合假设测试", "项目介绍"],
            cta: "选择计划",
          },
          medium: {
            tag: "推荐",
            name: "计算 +",
            price: "$1,000",
            period: "最低",
            features: ["管理费：20%", "10% 收益", "最佳选择"],
            cta: "选择计划",
          },
          long: {
            name: "高级计算池",
            price: "$10,000 起",
            period: "/ 月",
            features: [
              "∞ NVIDIA H200 (按需扩展)",
              "每小时价格：单独计算",
              "管理费：5%",
              "直接钱包设置"
            ],
            cta: "联系我们",
          },
        },
      },
      how_it_works: {
        title: "如何运作",
        subtitle: "用简单的语言解释技术部分",
        steps: [
          { title: "存款", desc: "您存入 USDT/USDC (TRC20)。" },
          { title: "启动", desc: "我们分配资金购买/租赁集群中的 GPU 份额。" },
          { title: "时期", desc: "硬件执行推理任务并获得奖励。" },
          { title: "分配", desc: "扣除费用后的奖励每月记入您的钱包（180 天归属期）。" }
        ]
      },
      fomo: {
        title: "AI 时代的比特币",
        subtitle: "才刚刚开始",
        text: "网络于 2025 年 8 月启动。我们正处于奖励最大的早期“宽限期”。",
        grace_period: "宽限期",
        today: "今天",
        disclaimer: "* 该图表是个人挖矿奖励随时间变化的直观说明。",
        chart: {
          start: "开始 (2025)",
          halving1: "第一次减半 (2029年8月)",
          halving2: "第二次减半 (2033年8月)",
          daily_reward_potential: "每日奖励潜力",
          daily_reward: "每日奖励",
          reward: "奖励",
          month: "月"
        },
        epochs: {
          now: {
            title: "现在 (2025–2029)",
            text: "网络每天向所有矿工分配 <span class=\"text-white font-mono\">~323,000 GNK</span>。"
          },
          halving1: {
            title: "第一次减半后 (2029年8月)",
            text: "分配降至每天 <span class=\"text-white font-mono\">~161,500 GNK</span>。"
          },
          halving2: {
            title: "第二次减半后 (2033年8月)",
            text: "分配降至每天 <span class=\"text-white font-mono\">~80,750 GNK</span>。"
          }
        }
      },
      tokenomics_section: {
        title: "透明的代币经济学",
        description: "挖矿建立在项目的公开代币经济学之上。\n所有代币发行、分配和使用的规则都是固定和公开的。",
        link_text: "阅读项目代币经济学",
        link_url: "https://gonka.ai/tokenomics.pdf"
      },
      faq: {
        title: "常见问题",
        subtitle: "常见问题解答",
        items: [
          {
            q: "你们提供什么保证？",
            a: "我们提供公开的区块链链接，您可以随时跟踪余额和累计的 GNK。所有操作都是透明的。"
          },
          {
            q: "什么是管理费？",
            a: "这是用于基础设施管理（管理、监控、unjail、领取奖励、支持）的佣金，从总额中扣除。"
          },
          {
            q: "分配后我可以提取资金吗？",
            a: "不行。一旦分配给算力，直到挖矿期结束才能退款，因为硬件是针对特定情况租赁的。"
          },
          {
            q: "付款状态何时更新？",
            a: "区块链确认后 1-2 小时内自动更新。如果时间较长，请联系 Telegram 支持。"
          },
          {
            q: "什么是归属期？",
            a: "逐步解锁获得的代币（每天 1/180），以确保经济稳定并防止抛售。"
          },
          {
            q: "如何提取代币？",
            a: "1. 您在我们的 Telegram 中发送提款请求。 2. 我们将硬币转入您请求中指定的钱包。 3. 转账将在收到请求后 24 小时内执行。"
          },
          {
            q: "如何创建 Gonka Network 钱包？",
            a: "我们推荐使用带有 Google 身份验证的 Keplr 钱包。切勿分享您的私钥。"
          },
          {
            q: "如何连接到去中心化仪表板？",
            a: "选择任何节点（例如 http://185.216.21.98:8000），点击“连接钱包”并选择 Keplr。"
          }
        ]
      },
      final_cta: {
        title: "立即开始挖矿",
        subtitle: "透明的条件。灵活的计划。",
        text: "无需复杂设置即可开始赚取 GNK 硬币。",
        button: "开始挖矿"
      }
    }
  },
  ar: {
    header: {
      nav: {
        about: "عن GONKA",
        pricing: "الأسعار",
        faq: "الأسئلة الشائعة",
      },
      safecompute_nav: {
        about: "عن الشبكة",
        problem: "الحل",
        pricing: "الأسعار",
        how_it_works: "كيف يعمل",
        economics: "الاقتصاد",
        faq: "الأسئلة الشائعة",
      },
      cta: "اتصل",
    },
    hero: {
      tag: "شبكة GONKA الرئيسية نشطة الآن",
      title: "استأجر NVIDIA H200 لـ Gonka",
      title_accent: "أرخص بـ 30% من الأسعار السحابية",
      description: "وحدات GPU المحسنة لـ Gonka تقلل تكاليف التعدين إلى 1 دولار لكل GNK. نحن نقدم حلاً جاهزًا: الإعداد، الإطلاق، والدعم 24/7.",
      cta: "ابدأ التعدين",
      features: {
        ready: "حل جاهز",
        ready_desc: "عقدة متصلة بالشبكة الرئيسية",
        passive: "دخل سلبي",
        passive_desc: "مكافآت برموز GNK",
        warranty: "ضمان",
        warranty_desc: "تعويض عن وقت التوقف",
      },
    },
    about: {
      title: "ما هي",
      title_accent: "GONKA",
      title_suffix: "ولماذا هي مهمة؟",
      description: "GONKA هو بروتوكول لامركزي لحوسبة الذكاء الاصطناعي تم إنشاؤه بواسطة الأخوين ليبرمان. على عكس التعدين الكلاسيكي الذي يحرق الكهرباء ببساطة، تقوم شبكة GONKA بعمل مفيد.",
      cards: {
        useful: {
          title: "حوسبة مفيدة",
          desc: "توفر الطاقة للذكاء الاصطناعي (الاستدلال) وتدريب النماذج.",
        },
        protocol: {
          title: "بروتوكول فريد",
          desc: "إثبات العمل القائم على المحولات: 99% من الطاقة تذهب لمهام الذكاء الاصطناعي الحقيقية، و 1% فقط لأمان الشبكة.",
        },
      },
      why: {
        title: "لماذا الآن؟",
        list: [
          "تم إطلاق الشبكة الرئيسية منذ بضعة أشهر فقط. الصعوبة تنمو بشكل كبير.",
          "نقص حاد في شرائح H100/A100 عالميًا. تسمح GONKA بالاستفادة من هذا النقص.",
          "فرصة لمنافسة عمالقة التكنولوجيا (Google, OpenAI) في البنية التحتية للذكاء الاصطناعي.",
        ],
      },
    },
    pricing: {
      title: "التسعير والشروط",
      subtitle: "مجموعة الذكاء الاصطناعي تعتمد على 8× NVIDIA H200 GPU جاهزة للتعدين",
      note: "كلما طالت فترة الإيجار — انخفض السعر في الساعة",
      plans: {
        short: {
          name: "حتى شهر واحد",
          price: "$8",
          period: "/ ساعة",
          features: ["وزن العقدة: 2000+", "ضمان الجهوزية", "دعم 24/7"],
          cta: "اختر",
        },
        medium: {
          tag: "شائع",
          name: "حتى شهرين",
          price: "$6",
          period: "/ ساعة",
          features: ["وزن العقدة: 2000+", "أقصى قيمة", "دعم ذو أولوية"],
          cta: "استأجر عقدة",
        },
        long: {
          name: "3 أشهر وأكثر",
          price: "$5",
          period: "/ ساعة",
          features: ["وزن العقدة: 2000+", "عقد طويل الأجل", "مدير شخصي"],
          cta: "اختر",
        },
      },
    },
    infrastructure: {
      title: "بنية تحتية",
      title_accent: "من الدرجة الصناعية",
      subtitle: "لماذا استئجار عقدة منا أكثر ربحية من بناء مزرعتك الخاصة.",
      cards: {
        metal: {
          title: "كفاءة Bare Metal",
          desc: "نحن نوفر وصولاً مباشراً للأجهزة دون طبقات افتراضية. تستخدم عقدتك 100% من موارد GPU. الحلول المنزلية والسحابية (AWS, Azure) تفقد 15-20% من الأداء بسبب الحمل الزائد لبرامج إدارة الأجهزة الافتراضية.",
          highlight: "وصول مباشر للأجهزة",
          tag: "أقصى معدل تجزئة بدون خسائر"
        },
        scale: {
          title: "وفورات الحجم",
          desc: "تتحقق الأرباح من خلال الحجم. نحن نشتري المعدات والكهرباء بأسعار صناعية بالجملة. مثل هذه الأسعار غير متاحة للمعدن الفردي.",
          highlight: "أسعار صناعية بالجملة",
          tag: "تخفيض التكلفة حتى 40%"
        }
      }
    },
    videos: {
      title: "فيديو و",
      title_accent: "مقابلات",
      items: [
        {
          title: "«Open AI هي فقاعة»! اكتشافات من وادي السيليكون",
          quote: "«نحن لا ننشئ ذهبًا جديدًا (مثل بيتكوين)، نحن ننشئ وقودًا لمستقبل الذكاء الاصطناعي. يقدر سوق حوسبة الذكاء الاصطناعي بعشرات التريليونات من الدولارات.»"
        },
        {
          title: "ديفيد ليبرمان متحدثاً عن كوينتيليغراف (Bitcoin.com)",
          quote: "«اللاعبون المركزيون يستهلكون وحدات GPU على مدار 6 سنوات، بينما في عالم الكريبتو يجدد الابتكار الأجهزة كل عام. اللامركزية تفوز دائمًا في السرعة (والتكلفة).»"
        },
        {
          title: "Bitfury تستثمر ما مجموعه 50 مليون دولار في مشروع Gonka AI للأخوين ليبرمان",
          quote: "«يمكن لمالكي GPU تأجيرها عبر بروتوكول Gonka لأي شخص يحتاج إلى طاقة حوسبة لمشاريع الذكاء الاصطناعي.»"
        },
        {
          title: "من يملك مستقبل الحوسبة؟ السعي لجعل الذكاء الاصطناعي مفتوحاً للجميع",
          quote: "«إذا كان الذكاء الاصطناعي هو الكهرباء الجديدة، فإن الحوسبة هي الشبكة التي تغذيه. من يتحكم في الرقائق سيتحكم في ابتكار العقد القادم.»"
        }
      ],
      read_article: "اقرأ المقال"
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على الأسئلة المتكررة",
      items: [
        {
          q: "ما هو GONKA24.com؟",
          a: "هو خدمة لتأجير عقد GPU جاهزة للمشاركة في شبكة Gonka، مما يبسط الإعداد والحصول على المكافآت من التعدين والحوسبة."
        },
        {
          q: "ما هي “عقدة Gonka” ولماذا هي مطلوبة؟",
          a: "العقدة هي خادم مزود بوحدة معالجة رسومات (GPU) تم تكوينه للعمل في شبكة Gonka. يشارك في الحوسبة الموزعة ويحصل على مكافآت للمساهمة في الشبكة."
        },
        {
          q: "كيف يتم حساب المكافآت؟",
          a: "نقوم بإعداد العقدة على محفظتك الباردة ونضمن المكافأة. إذا لم تتلق عقدتك أي مكافأة عن الحقبة، نقوم بإعادة المال. إذا كان وزن العقدة أقل من 2000 - يتم تعديل السعر بشكل متناسب."
        },
        {
          q: "ما هي طرق الدفع المقبولة؟",
          a: "يمكنك دفع الإيجار عبر: BTC (Bitcoin)، USDT، USD/EUR."
        },
        {
          q: "كيف يتم إعداد وإطلاق العقدة؟",
          a: "بعد الدفع، نقوم بتكوين الخادم بالكامل لمحفظتك وضمان تشغيله. لا تحتاج إلى معرفة تقنية — يتم كل شيء من أجلك."
        },
        {
          q: "كم من الوقت يستغرق إطلاق العقدة؟",
          a: "بعد تأكيد الدفع، يكون الإعداد عادةً سريعًا — سنتصل بك لتوضيح تفاصيل المحفظة."
        }
      ]
    },
    resources: {
      title: "مصادر مفيدة",
      subtitle: "تعرف على المزيد حول شبكة Gonka والحوسبة اللامركزية",
      items: {
        whitepaper: { title: "الورقة البيضاء", desc: "الوثائق الفنية لبروتوكول شبكة Gonka", action: "قراءة" },
        tokenomics: { title: "اقتصاديات GNK", desc: "النموذج الاقتصادي وتوزيع الرموز", action: "قراءة" },
        twitter: { title: "X (Twitter)", desc: "تابع أخبار وتحديثات Gonka", action: "فتح" },
        discord: { title: "مجتمع Discord", desc: "انضم إلى المجتمع العالمي للمتحمسين", action: "انضمام" }
      }
    },
    cta_section: {
      how_it_works: {
        title: "كيف يعمل",
        steps: [
          { title: "أنت تترك طلباً", desc: "املأ نموذجاً بسيطاً" },
          { title: "نحن نجهز العقدة", desc: "على محفظتك" },
          { title: "أنت تتلقى المكافآت", desc: "برموز GNK" }
        ]
      },
      title: "شارك في إنشاء",
      title_accent: "الجيل القادم من البنية التحتية للذكاء الاصطناعي اللامركزي",
      subtitle: "مفتوحة. قابلة للتوسع. مستقلة.",
      button: "ابدأ التعدين"
    },
    footer: {
      rights: "© 2026 SafeCompute. جميع الحقوق محفوظة.",
      payment: "الدفع: دفع مقدم لمدة شهر. سيتم توفير التفاصيل.",
      contact_text: "إذا كان لديك أي أسئلة — اكتب إلى",
      contact_link_text: "مديرنا",
      manager_link: "https://t.me/lina_semash",
      community_text: "انضم إلى",
      community_link_text: "مجموعة الدردشة على Telegram",
      community_link: "https://t.me/+40Xsw5RML45mOGEx"
    },
    safecompute: {
      hero: {
        tag: "شبكة GONKA الرئيسية نشطة الآن",
        title: "عدّن GNK بتكلفة تبدأ من 250$",
        title_accent: "حل جاهز",
        description: "كن جزءاً من ثورة الذكاء الاصطناعي اللامركزي. نحن نتولى إعداد الأجهزة والخوادم — وأنت تحصل على عملات GNK المُعدنة.",
        cta: "ابدأ التعدين",
        features: {
          ready: "أفضل وحدات GPU",
          ready_desc: "تعدين H100/H200",
          passive: "جاهز للاستخدام",
          passive_desc: "نحن نتولى التقنية",
          warranty: "توفير",
          warranty_desc: "تعدين بأفضل أسعار السوق",
        },
      },
      about_custom: {
        title: "ما هي",
        title_accent: "شبكة Gonka؟",
        description: "Gonka هي شبكة لامركزية لحوسبة الذكاء الاصطناعي. على عكس العملات المشفرة القياسية، يوفر التعدين هنا فائدة حقيقية: تدريب الشبكات العصبية والاستدلال.",
        facts: [
          {
            title: "استثمارات ضخمة",
            desc: "استثمرت Bitfury (أسطورة تعدين البيتكوين) أكثر من 50 مليون دولار، إلى جانب الصناديق التي دعمت OpenAI و Solana."
          },
          {
            title: "المؤسسون",
            desc: "الأخوان ليبرمان (مدراء سابقون في Snapchat)، ومبدعو شركات 'يونيكورن'."
          },
          {
            title: "التكنولوجيا",
            desc: "الجيل القادم من إثبات العمل. قوة الشبكة تعادل بالفعل الآلاف من وحدات H100 GPU."
          },
          {
            title: "الندرة",
            desc: "إجمالي المعروض مليار رمز، ونموذج التنصيف مثل البيتكوين (انخفاض المكافآت)."
          }
        ]
      },
      problem_solution: {
        title: "المشكلة مقابل ",
        title_accent: "حلنا",
        problem: {
          title: "التعدين بنفسك",
          items: [
            "يتطلب وحدات GPU قوية (H100/H200) تكلف 2,000$ - 30,000$.",
            "إعداد معقد: Linux, Docker, إدارة المفاتيح.",
            "خطر التوقف وعقوبات التخفيض (slashing).",
          ]
        },
        solution: {
          title: "التعدين معنا (حل جاهز)",
          items: [
            "دخول ميسور: ابدأ من 250$ فقط. نجمع رأس المال للطاقة.",
            "لا حاجة للتقنية: نحن ندير العقد، ونحدث البرامج، ونراقب 24/7.",
            "ضمان وقت التشغيل: إدارة احترافية.",
          ]
        }
      },
      pricing: {
        title: "شروط مرنة للمستثمرين",
        subtitle: "كلما زاد الإيداع، كانت الشروط أفضل",
        note: "رسوم الإدارة تنخفض مع الحجم",
        plans: {
          short: {
            name: "Compute Basic",
            price: "$250",
            period: "الحد الأدنى",
            features: ["رسوم الإدارة: 30%", "مثالي لاختبار الفرضية", "مقدمة للمشروع"],
            cta: "اختر الخطة",
          },
          medium: {
            tag: "موصى به",
            name: "Compute +",
            price: "$1,000",
            period: "الحد الأدنى",
            features: ["رسوم الإدارة: 20%", "فائدة 10%", "الخيار الأمثل"],
            cta: "اختر الخطة",
          },
          long: {
            name: "Compute Premium Pool",
            price: "من $10,000+",
            period: "/ شهر",
            features: [
              "∞ NVIDIA H200 (قابلة للتوسع حسب المهمة)",
              "سعر الساعة: يحسب بشكل فردي",
              "رسوم الإدارة: 5%",
              "إعداد مباشر للمحفظة"
            ],
            cta: "اتصل بنا",
          },
        },
      },
      how_it_works: {
        title: "كيف يعمل",
        subtitle: "الجزء الفني بكلمات بسيطة",
        steps: [
          { title: "الإيداع", desc: "تقوم بإيداع USDT/USDC (TRC20)." },
          { title: "الإطلاق", desc: "نخصص الأموال لشراء/استئجار حصص GPU في المجموعات." },
          { title: "الحقب (Epochs)", desc: "تقوم الأجهزة بمهام الاستدلال وتكسب المكافآت." },
          { title: "التوزيع", desc: "يتم إضافة المكافآت ناقص الرسوم إلى محفظتك شهريًا (180 يومًا فترة استحقاق)." }
        ]
      },
      fomo: {
        title: "بيتكوين لعصر الذكاء الاصطناعي",
        subtitle: "البداية فقط",
        text: "تم إطلاق الشبكة في أغسطس 2025. نحن في 'فترة السماح' المبكرة حيث تكون المكافآت في أقصاها.",
        grace_period: "فترة السماح",
        today: "اليوم",
        disclaimer: "* الرسم البياني هو توضيح مرئي للتغير في مكافآت التعدين الفردية بمرور الوقت.",
        chart: {
          start: "البداية (2025)",
          halving1: "التنصيف الأول (أغسطس 2029)",
          halving2: "التنصيف الثاني (أغسطس 2033)",
          daily_reward_potential: "إمكانية المكافأة اليومية",
          daily_reward: "المكافأة اليومية",
          reward: "المكافأة",
          month: "الشهر"
        },
        epochs: {
          now: {
            title: "الآن (2025–2029)",
            text: "تخصص الشبكة <span class=\"text-white font-mono\">~323,000 GNK</span> يوميًا لجميع المعدنين."
          },
          halving1: {
            title: "بعد التنصيف الأول (أغسطس 2029)",
            text: "ينخفض التخصيص إلى <span class=\"text-white font-mono\">~161,500 GNK</span> يوميًا."
          },
          halving2: {
            title: "بعد التنصيف الثاني (أغسطس 2033)",
            text: "ينخفض التخصيص إلى <span class=\"text-white font-mono\">~80,750 GNK</span> يوميًا."
          }
        }
      },
      tokenomics_section: {
        title: "اقتصاديات رمزية شفافة",
        description: "يعتمد التعدين على الاقتصاديات الرمزية العامة للمشروع.\nجميع قواعد الإصدار والتوزيع واستخدام العملات ثابتة ومفتوحة.",
        link_text: "اقرأ اقتصاديات المشروع",
        link_url: "https://gonka.ai/tokenomics.pdf"
      },
      faq: {
        title: "الأسئلة الشائعة",
        subtitle: "إجابات على الأسئلة المتكررة",
        items: [
          {
            q: "ما هي الضمانات التي تقدمونها؟",
            a: "نحن نقدم رابط blockchain عام حيث يمكنك تتبع الرصيد و GNK المتراكمة في أي وقت. جميع العمليات شفافة."
          },
          {
            q: "ما هي رسوم الإدارة؟",
            a: "إنها عمولة لإدارة البنية التحتية (الإدارة، المراقبة، unjail، المطالبة بالمكافآت، الدعم) يتم خصمها من الأعلى."
          },
          {
            q: "هل يمكنني سحب الأموال بعد التخصيص؟",
            a: "لا. بمجرد التخصيص لقوة الحوسبة، لا يمكن استرداد الأموال حتى تنتهي فترة التعدين حيث يتم استئجار الأجهزة لحالات محددة."
          },
          {
            q: "متى يتم تحديث حالة الدفع؟",
            a: "تلقائيًا في غضون 1-2 ساعة بعد تأكيد blockchain. إذا استغرق الأمر وقتًا أطول، اتصل بدعم Telegram."
          },
          {
            q: "ما هو الاستحقاق (Vesting)؟",
            a: "فتح تدريجي للرموز المكتسبة (1/180 يوميًا) لضمان الاستقرار الاقتصادي ومنع الإغراق."
          },
          {
            q: "كيف أسحب الرموز؟",
            a: "1. ترسل طلب سحب في Telegram الخاص بنا. 2. نقوم بتحويل العملات إلى محفظتك المحددة في الطلب. 3. يتم تنفيذ التحويل في غضون 24 ساعة بعد تلقي الطلب."
          },
          {
            q: "كيفية إنشاء محفظة شبكة Gonka؟",
            a: "نوصي بمحفظة Keplr مع مصادقة Google. لا تشارك مفتاحك الخاص أبدًا."
          },
          {
            q: "كيفية الاتصال بلوحة التحكم اللامركزية؟",
            a: "اختر أي عقدة (على سبيل المثال، http://185.216.21.98:8000)، انقر فوق 'Connect Wallet'، واختار Keplr."
          }
        ]
      },
      final_cta: {
        title: "ابدأ التعدين اليوم",
        subtitle: "شروط شفافة. خطط مرنة.",
        text: "ابدأ في كسب عملات GNK دون إعدادات معقدة.",
        button: "ابدأ التعدين"
      }
    }
  },
};

export type Language = 'ru' | 'en' | 'es' | 'de' | 'zh' | 'ar';
export type Translation = typeof translations.ru;
