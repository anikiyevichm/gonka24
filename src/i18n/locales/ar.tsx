import React from "react";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export const ar = {
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
          price: "$500",
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
          text: "تخصص الشبكة <span class=\"text-primary font-mono\">~323,000 GNK</span> يوميًا لجميع المعدنين."
        },
        halving1: {
          title: "بعد التنصيف الأول (أغسطس 2029)",
          text: "ينخفض التخصيص إلى <span class=\"text-primary font-mono\">~161,500 GNK</span> يوميًا."
        },
        halving2: {
          title: "بعد التنصيف الثاني (أغسطس 2033)",
          text: "ينخفض التخصيص إلى <span class=\"text-primary font-mono\">~80,750 GNK</span> يوميًا."
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
          a: (
            <div className="space-y-3">
              <p>نحن نقدم رابط blockchain عام حيث يمكنك تتبع المعلومات التالية في أي وقت:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mr-5">
                <li>الرصيد،</li>
                <li>GNK المتراكمة،</li>
              </ul>
              <p>جميع العمليات شفافة ويمكن التحقق منها على blockchain.</p>
            </div>
          )
        },
        {
          q: "ما هي رسوم الإدارة؟",
          a: (
            <div className="space-y-3">
              <p>رسوم الإدارة (Management Fee) هي عمولة لإدارة البنية التحتية نخصمها بالإضافة إلى المبلغ الذي أودعته.</p>
              <p>تشمل الرسوم:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mr-5">
                <li>إدارة العقد،</li>
                <li>مراقبة وقت التشغيل،</li>
                <li>إلغاء الحظر (unjail) للعقد،</li>
                <li>المطالبة بالمكافآت،</li>
                <li>الدعم الفني.</li>
              </ul>
            </div>
          )
        },
        {
          q: "هل يمكنني سحب الأموال بعد تخصيصها لقوة الحوسبة؟",
          a: (
            <div className="space-y-3">
              <p className="font-bold text-red-400">لا.</p>
              <p>إذا تم تخصيص الأموال بالفعل لقوة الحوسبة، فلا يمكن استرداد الأموال حتى تنتهي فترة التعدين.</p>
              <p>وذلك لأن الأجهزة يتم استئجارها وتثبيتها لحالة استخدام محددة.</p>
            </div>
          )
        },
        {
          q: "متى يتم تحديث حالة الدفع؟",
          a: (
            <div className="space-y-3">
              <p>يتم تحديث حالة الدفع تلقائيًا في غضون 1-2 ساعة بعد تأكيد blockchain.</p>
              <p>إذا مرت أكثر من ساعتين ولم يتم تحديث الحالة — يرجى الكتابة إلى دعمنا في Telegram.</p>
            </div>
          )
        },
        {
          q: "ما هو الاستحقاق (Vesting) ولماذا هو مطلوب؟",
          a: (
            <div className="space-y-3">
              <p>الاستحقاق (Vesting) هو آلية لفتح الرموز المكتسبة تدريجيًا، وتستخدم في شبكة Gonka من أجل:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mr-5">
                <li>الاستقرار الاقتصادي،</li>
                <li>الحماية من المضاربة،</li>
                <li>منع البيع الجماعي المفاجئ.</li>
              </ul>
            </div>
          )
        },
        {
          q: "كيف يعمل الاستحقاق (Vesting)؟",
          a: (
            <div className="space-y-3">
              <p>يتم فتح 1/180 من المبلغ المكتسب في اليوم السابق يوميًا.</p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="font-semibold mb-2 text-primary">مثال:</p>
                <ul className="space-y-2 text-sm mr-5">
                  <li>اليوم، كسب المجمع (pool) <span className="text-foreground font-semibold">180 GNK</span></li>
                  <li>غدًا سيتم فتح <span className="text-foreground font-semibold">1 GNK</span></li>
                  <li>بعد غد — سيتم فتح <span className="text-foreground font-semibold">1 GNK</span> آخر</li>
                </ul>
                <p className="mt-3 text-sm italic opacity-80">
                  إذا كسب المجمع غدًا 180 GNK مرة أخرى، فسيتم فتح 2 GNK بعد غد
                  (1 GNK لليوم الأول + 1 GNK لليوم الثاني)
                </p>
              </div>
            </div>
          )
        },
        {
          q: "كيف أسحب الرموز؟",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mr-5">
                <li>أرسل طلب سحب في Telegram الخاص بنا</li>
                <li>نحول العملات إلى محفظتك المحددة في الطلب</li>
                <li>يتم تنفيذ التحويل في غضون 24 ساعة من استلام الطلب</li>
              </ol>
            </div>
          )
        },
        {
          q: "كيفية إنشاء محفظة شبكة Gonka؟",
          a: (
            <div className="space-y-4">
              <p>نوصي بمحفظة <span className="text-foreground font-semibold">Keplr Wallet</span> مع مصادقة Google.</p>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">مهم:</span>
                </div>
                <ul className="space-y-1 text-sm text-red-600/80 mr-5">
                  <li>لا تشارك مفتاحك الخاص (Private Key) مع أطراف ثالثة أبدًا</li>
                  <li>احفظ مفتاحك الخاص في مكان آمن</li>
                  <li>إذا فقدت الوصول إلى Gmail — فالاستعادة ممكنة فقط من خلال المفتاح الخاص</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          q: "تعليمات خطوة بخطوة لإنشاء محفظة Keplr",
          a: (
            <div className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mr-5">
                <li>اذهب إلى موقع Keplr الرسمي وانقر على \"Get Keplr Wallet\"</li>
                <li>اختر الامتداد لمتصفحك (Chrome, Firefox, Edge, Brave)</li>
                <li>ثبّت الإضافة</li>
                <li>انقر على \"Create a new wallet\"</li>
                <li>اختر \"Connect with Google\"</li>
              </ol>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-yellow-500">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">مهم:</span>
                </div>
                <p className="text-sm text-yellow-700/80 mb-2">لا تختر خيار عبارة الاسترداد (mnemonic phrase).</p>
                <p className="text-sm text-yellow-700/80">
                  بدون مصادقة Google لن تتمكن من إجراء المعاملات عبر الجسر — المنصة تتطلب مصادقة Google.
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mr-5">
                <li>أكمل إعداد المحفظة</li>
                <li>احفظ مفتاحك الخاص</li>
                <li>اختر شبكتي Cosmos Hub و Gonka</li>
              </ul>
            </div>
          )
        },
        {
          q: "كيفية الاتصال بلوحة التحكم اللامركزية (Gonka Dashboard)؟",
          a: (
            <div className="space-y-4">
              <p>اختر أي عقدة من القائمة (جميعها متكافئة):</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono text-primary" dir="ltr">
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
              <p className="text-sm text-muted-foreground italic">نصيحة: يمكنك اختيار أي منها — جميعها تتيح الوصول إلى شبكة Gonka.</p>
            </div>
          )
        },
        {
          q: "كيفية توصيل المحفظة بلوحة التحكم؟",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mr-5">
                <li>افتح لوحة التحكم (Dashboard) على الرابط المختار</li>
                <li>انقر على \"Connect Wallet\" (الزاوية اليمنى العليا)</li>
                <li>اختر Keplr</li>
                <li>أكد إضافة شبكة Gonka</li>
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" /> تم
                </li>
              </ol>
              <p className="text-muted-foreground">الآن يمكنك نسخ عنوان محفظتك — هذا هو عنوان GNK الخاص بك لتلقي المكافآت.</p>
            </div>
          )
        }
      ]
    },
    final_cta: {
      title: "ابدأ التعدين اليوم",
      subtitle: "شروط شفافة. خطط مرنة.",
      text: "ابدأ في كسب عملات GNK دون إعدادات معقدة.",
      button: "ابدأ التعدين"
    }
  },
  calculator: {
    title: "حاسبة عائد GNK",
    subtitle: "اختر مجمعًا وأدخل مبلغ الاستثمار",
    pools: {
      light: {
        name: "Compute Light",
        badge: "وزن البدء 300"
      },
      pro: {
        name: "Compute Pro",
        badge: "وزن البدء 1500",
        discount_badge: "-10%"
      },
      premium: {
        name: "Compute Premium",
        badge: "الوزن ∞",
        discount_badge: "-15%"
      }
    },
    info: {
      min_deposit: "الحد الأدنى للإيداع:",
      max_deposit: "الحد الأقصى للإيداع:",
      node_weight: "وزنك:",
      management_fee: "رسوم الإدارة:",
      yield_per_day: "GNK/يوم"
    },
    input: {
      label: "مبلغ الاستثمار الشهري ($)",
      placeholder: "أدخل المبلغ",
      error: {
        min: "الحد الأدنى للمبلغ لـ {name} هو {min}",
        max: "الحد الأقصى للمبلغ لـ {name} هو {max}"
      }
    },
    results: {
      daily: "GNK في اليوم",
      monthly: "GNK في الشهر",
      tooltip: "هذه أرقام تقريبية. قد تختلف القيم بشكل كبير بناءً على مضيفي الشبكة.",
      disclaimer: "الحسابات تقريبية. بناءً على وزن الشبكة {weight} والمكافأة {reward} GNK في {date}."
    }
  }
};
