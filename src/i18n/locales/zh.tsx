import React from "react";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export const zh = {
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
          text: "网络每天向所有矿工分配 <span class=\"text-primary font-mono\">~323,000 GNK</span>。"
        },
        halving1: {
          title: "第一次减半后 (2029年8月)",
          text: "分配降至每天 <span class=\"text-primary font-mono\">~161,500 GNK</span>。"
        },
        halving2: {
          title: "第二次减半后 (2033年8月)",
          text: "分配降至每天 <span class=\"text-primary font-mono\">~80,750 GNK</span>。"
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
          a: (
            <div className="space-y-3">
              <p>我们提供公开的区块链链接，您可以随时跟踪：</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>余额，</li>
                <li>累计的 GNK，</li>
              </ul>
              <p>所有操作都是透明的，并且可以在区块链上验证。</p>
            </div>
          )
        },
        {
          q: "什么是管理费？",
          a: (
            <div className="space-y-3">
              <p>管理费是我们从您存入的金额之外扣除的基础设施管理佣金。</p>
              <p>费用包括：</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>节点管理，</li>
                <li>正常运行时间监控，</li>
                <li>节点解禁 (unjail)，</li>
                <li>领取奖励，</li>
                <li>技术支持。</li>
              </ul>
            </div>
          )
        },
        {
          q: "分配算力后我可以提取资金吗？",
          a: (
            <div className="space-y-3">
              <p className="font-bold text-red-400">不行。</p>
              <p>如果资金已分配给算力，则在挖矿期结束之前无法退款。</p>
              <p>这是因为硬件是针对特定情况租赁和固定的。</p>
            </div>
          )
        },
        {
          q: "付款状态何时更新？",
          a: (
            <div className="space-y-3">
              <p>付款状态会在区块链确认后 1-2 小时内自动更新。</p>
              <p>如果超过 2 小时状态未更新 — 请联系我们的 Telegram 支持。</p>
            </div>
          )
        },
        {
          q: "什么是归属期 (Vesting)，为什么需要它？",
          a: (
            <div className="space-y-3">
              <p>归属期是一种逐步解锁已赚取代币的机制，在 Gonka Network 中用于：</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>经济稳定，</li>
                <li>防止投机，</li>
                <li>防止大幅抛售。</li>
              </ul>
            </div>
          )
        },
        {
          q: "归属期如何运作？",
          a: (
            <div className="space-y-3">
              <p>每天解锁前一天赚取金额的 1/180。</p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="font-semibold mb-2 text-primary">示例：</p>
                <ul className="space-y-2 text-sm">
                  <li>今天矿池赚取了 <span className="text-foreground font-semibold">180 GNK</span></li>
                  <li>明天解锁 <span className="text-foreground font-semibold">1 GNK</span></li>
                  <li>后天 — 再解锁 <span className="text-foreground font-semibold">1 GNK</span></li>
                </ul>
                <p className="mt-3 text-sm italic opacity-80">
                  如果明天矿池再次赚取 180 GNK，那么后天将解锁 2 GNK
                  (第一天的 1 GNK + 第二天的 1 GNK)
                </p>
              </div>
            </div>
          )
        },
        {
          q: "如何提取代币？",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>您在我们的 Telegram 中发送提款请求</li>
                <li>我们将硬币转入您请求中指定的钱包</li>
                <li>转账将在收到请求后 24 小时内执行</li>
              </ol>
            </div>
          )
        },
        {
          q: "如何创建 Gonka Network 钱包？",
          a: (
            <div className="space-y-4">
              <p>我们建议使用带有 Google 授权的 <span className="text-foreground font-semibold">Keplr 钱包</span>。</p>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">重要：</span>
                </div>
                <ul className="space-y-1 text-sm text-red-600/80">
                  <li>切勿将您的私钥分享给第三方</li>
                  <li>将您的私钥保存在安全的地方</li>
                  <li>如果您无法访问 Gmail — 只能通过私钥恢复</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          q: "创建 Keplr 钱包的分步说明",
          a: (
            <div className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>前往 Keplr 官方网站并点击 "Get Keplr Wallet"</li>
                <li>选择适合您浏览器的扩展程序 (Chrome, Firefox, Edge, Brave)</li>
                <li>安装扩展程序</li>
                <li>点击 "Create a new wallet"</li>
                <li>选择 "Connect with Google"</li>
              </ol>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-yellow-500">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">重要：</span>
                </div>
                <p className="text-sm text-yellow-700/80 mb-2">不要选择助记词选项。</p>
                <p className="text-sm text-yellow-700/80">
                  没有 Google 授权，您将无法通过桥接进行交易 — 该平台需要 Google 授权。
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>完成钱包设置</li>
                <li>保存您的私钥</li>
                <li>选择 Cosmos Hub 和 Gonka 网络</li>
              </ul>
            </div>
          )
        },
        {
          q: "如何连接到去中心化 Gonka 仪表板？",
          a: (
            <div className="space-y-4">
              <p>从列表中选择任意节点（所有节点都是等效的）：</p>
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
              <p className="text-sm text-muted-foreground italic">提示：您可以选择任意一个 — 它们都提供对 Gonka 网络的访问。</p>
            </div>
          )
        },
        {
          q: "如何将钱包连接到仪表板？",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>在选定的 URL 打开仪表板</li>
                <li>点击 "Connect Wallet"（右上角）</li>
                <li>选择 Keplr</li>
                <li>确认添加 Gonka 网络</li>
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" /> 完成
                </li>
              </ol>
              <p className="text-muted-foreground">现在您可以复制您的钱包地址 — 这是您接收奖励的 GNK 地址。</p>
            </div>
          )
        }
      ]
    },
    final_cta: {
      title: "立即开始挖矿",
      subtitle: "透明的条件。灵活的计划。",
      text: "无需复杂设置即可开始赚取 GNK 硬币。",
      button: "开始挖矿"
    }
  },
  calculator: {
    title: "GNK 收益计算器",
    subtitle: "选择矿池并输入投资金额",
    pools: {
      light: {
        name: "Compute Light",
        badge: "权重 300"
      },
      pro: {
        name: "Compute Pro",
        badge: "权重 1500"
      },
      premium: {
        name: "Compute Premium",
        badge: "权重 ∞"
      }
    },
    info: {
      min_deposit: "最低存款:",
      max_deposit: "最高存款:",
      node_weight: "节点权重:",
      management_fee: "管理费:",
      base_yield: "基础收益 (1 节点):",
      yield_per_day: "GNK/天"
    },
    input: {
      label: "每月投资金额 ($)",
      placeholder: "输入金额",
      error: {
        min: "{name} 的最低金额为 ${min}",
        max: "{name} 的最高金额为 ${max}"
      }
    },
    results: {
      daily: "每日 GNK",
      monthly: "每月 GNK",
      tooltip: "这些是近似数字。数值会根据网络主机有很大差异。"
    }
  }
};
