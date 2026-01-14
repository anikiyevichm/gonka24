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
      rights: "© 2025 GONKA Mining. All rights reserved.",
      payment: "Оплата: Предоплата за 1 месяц. Реквизиты будут предоставлены.",
    },
    safecompute: {
      hero: {
        tag: "Сеть GONKA Mainnet уже запущена",
        title: "Майните GNK от 200$",
        title_accent: "под ключ",
        description: "Станьте частью революции децентрализованного ИИ. Мы берем на себя настройку оборудования и серверов - вы получаете добытые токены GNK.",
        cta: "Начать майнинг",
        features: {
          ready: "Топовые GPU",
          ready_desc: "H100/A100 Майнинг",
          passive: "Под ключ",
          passive_desc: "Тех. обслуживание",
          warranty: "Поддержка",
          warranty_desc: "24 часа",
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
            "Требуются мощные GPU (H100, 4090) от $2000 до $30000.",
            "Сложная настройка: Linux, Docker, управление ключами.",
            "Риск простоя и штрафов (слэшинга).",
          ]
        },
        solution: {
          title: "Майнинг с нами (Под ключ)",
          items: [
            "Доступный вход: Старт всего от 200$. Объединяем капитал.",
            "Никакой техники: Мы управляем нодами 24/7.",
            "Гарантия работы: Профессиональное администрирование.",
          ]
        }
      },
      pricing: {
        title: "Гибкие условия для инвесторов",
        subtitle: "Чем выше депозит, тем выгоднее",
        note: "Management Fee снижается с объемом",
        plans: {
          short: {
            name: "Сompute basic",
            price: "$200",
            period: "вход",
            features: ["Management Fee: 30%", "Идеально для теста", "Знакомство с проектом"],
            cta: "Выбрать тариф",
          },
          medium: {
            tag: "Рекомендуемый",
            name: "Сompute +",
            price: "$1 000",
            period: "вход",
            features: ["Management Fee: 20%", "Выгода 10%", "Оптимальный выбор"],
            cta: "Выбрать тариф",
          },
          long: {
            name: "Сompute Pro",
            price: "$10 000",
            period: "вход",
            features: ["Management Fee: 17%", "Максимальная доходность", "Персональная поддержка"],
            cta: "Выбрать тариф",
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
            a: "Привяжите кошелек в профиле и отправьте запрос. Вывод в течение 24 часов."
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
      rights: "© 2025 GONKA Mining. All rights reserved.",
      payment: "Payment: 1-month prepayment. Details will be provided.",
    },
    safecompute: {
      hero: {
        tag: "GONKA Mainnet is already live",
        title: "Mine GNK from $200",
        title_accent: "turnkey",
        description: "Become part of the decentralized AI revolution. We handle hardware setup and servers — you get mined GNK tokens.",
        cta: "Start Mining",
        features: {
          ready: "Top GPUs",
          ready_desc: "H100/A100 Mining",
          passive: "Turnkey",
          passive_desc: "We handle tech",
          warranty: "Support",
          warranty_desc: "24/7 Assistance",
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
            "Requires powerful GPUs (H100, 4090) costing $2,000 - $30,000.",
            "Complex setup: Linux, Docker, key management.",
            "Risk of downtime and slashing penalties.",
          ]
        },
        solution: {
          title: "Mining with Us (Turnkey)",
          items: [
            "Affordable entry: Start from just $200. We pool capital for power.",
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
            name: "Compute Basic",
            price: "$200",
            period: "min entry",
            features: ["Management Fee: 30%", "Ideal for hypothesis testing", "Intro to project"],
            cta: "Select Plan",
          },
          medium: {
            tag: "RECOMMENDED",
            name: "Compute +",
            price: "$1,000",
            period: "min entry",
            features: ["Management Fee: 20%", "10% lower fee than Basic", "Optimal value"],
            cta: "Select Plan",
          },
          long: {
            name: "Compute Pro",
            price: "$10,000",
            period: "min entry",
            features: ["Management Fee: 17%", "Maximum Yield", "Personal Support"],
            cta: "Select Plan",
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
            a: "Link your GNK wallet in profile, request withdrawal, and receive tokens within 24 hours."
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
      }
    }
  },
};

export type Language = 'ru' | 'en';
export type Translation = typeof translations.ru;
