import React from "react";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export const en = {
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
            "Min entry from $2,000"
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
          text: "Network allocates <span class=\"text-primary font-mono\">~323,000 GNK</span> per day to all miners."
        },
        halving1: {
          title: "After 1st Halving (Aug 2029)",
          text: "Allocation drops to <span class=\"text-primary font-mono\">~161,500 GNK</span> per day."
        },
        halving2: {
          title: "After 2nd Halving (Aug 2033)",
          text: "Allocation drops to <span class=\"text-primary font-mono\">~80,750 GNK</span> per day."
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
          a: (
            <div className="space-y-3">
              <p>We provide a public blockchain link where you can track at any time:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>balance,</li>
                <li>accrued GNK,</li>
              </ul>
              <p>All operations are transparent and verifiable on the blockchain.</p>
            </div>
          )
        },
        {
          q: "What is Management Fee?",
          a: (
            <div className="space-y-3">
              <p>Management Fee is a commission for infrastructure management that we deduct on top of the amount you deposited.</p>
              <p>The fee includes:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>node administration,</li>
                <li>uptime monitoring,</li>
                <li>node unjail,</li>
                <li>claiming rewards,</li>
                <li>technical support.</li>
              </ul>
            </div>
          )
        },
        {
          q: "Can I withdraw funds after allocation to compute power?",
          a: (
            <div className="space-y-3">
              <p className="font-bold text-red-400">No.</p>
              <p>If funds are already allocated to compute power, refunds are not possible until the mining period ends.</p>
              <p>This is because hardware is rented and fixed for a specific case.</p>
            </div>
          )
        },
        {
          q: "When is payment status updated?",
          a: (
            <div className="space-y-3">
              <p>Payment status is updated automatically within 1–2 hours after blockchain confirmation.</p>
              <p>If more than 2 hours have passed and status hasn't updated — write to our support in Telegram.</p>
            </div>
          )
        },
        {
          q: "What is vesting and why is it needed?",
          a: (
            <div className="space-y-3">
              <p>Vesting is a mechanism of gradual unlocking of earned tokens, used in Gonka Network for:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>economic stability,</li>
                <li>protection against speculation,</li>
                <li>prevention of sharp sell-offs.</li>
              </ul>
            </div>
          )
        },
        {
          q: "How does vesting work?",
          a: (
            <div className="space-y-3">
              <p>Every day 1/180 of the amount earned the previous day is unlocked.</p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="font-semibold mb-2 text-primary">Example:</p>
                <ul className="space-y-2 text-sm">
                  <li>Today the pool earned <span className="text-foreground font-semibold">180 GNK</span></li>
                  <li>Tomorrow <span className="text-foreground font-semibold">1 GNK</span> is unlocked</li>
                  <li>Day after tomorrow — another <span className="text-foreground font-semibold">1 GNK</span></li>
                </ul>
                <p className="mt-3 text-sm italic opacity-80">
                  If tomorrow the pool earns 180 GNK again, then the day after tomorrow 2 GNK will be unlocked
                  (1 GNK for the first day + 1 GNK for the second)
                </p>
              </div>
            </div>
          )
        },
        {
          q: "How to withdraw tokens?",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>You send a withdrawal request in our Telegram</li>
                <li>We transfer coins to your wallet specified in the request</li>
                <li>The transfer is executed within 24 hours after receiving the request</li>
              </ol>
            </div>
          )
        },
        {
          q: "How to create a Gonka Network wallet?",
          a: (
            <div className="space-y-4">
              <p>We recommend using <span className="text-foreground font-semibold">Keplr Wallet</span> with Google authorization.</p>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">Important:</span>
                </div>
                <ul className="space-y-1 text-sm text-red-600/80">
                  <li>Never share your private key with third parties</li>
                  <li>Keep your private key in a safe place</li>
                  <li>If you lose access to Gmail — recovery is only possible via private key</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          q: "Step-by-step instructions for creating a Keplr wallet",
          a: (
            <div className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Go to the official Keplr website and click "Get Keplr Wallet"</li>
                <li>Choose the extension for your browser (Chrome, Firefox, Edge, Brave)</li>
                <li>Install the extension</li>
                <li>Click "Create a new wallet"</li>
                <li>Select "Connect with Google"</li>
              </ol>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-yellow-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">Important:</span>
                </div>
                <p className="text-sm text-yellow-700/80 mb-2">Do not choose the mnemonic phrase option.</p>
                <p className="text-sm text-yellow-700/80">
                  Without Google authorization you won't be able to transact via bridge — the platform requires Google authorization.
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Finish wallet setup</li>
                <li>Save your private key</li>
                <li>Select Cosmos Hub and Gonka networks</li>
              </ul>
            </div>
          )
        },
        {
          q: "How to connect to the decentralized Gonka Dashboard?",
          a: (
            <div className="space-y-4">
              <p>Choose any node from the list (all are equivalent):</p>
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
              <p className="text-sm text-muted-foreground italic">Tip: you can choose any — they all provide access to the Gonka network.</p>
            </div>
          )
        },
        {
          q: "How to connect wallet to Dashboard?",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Open Dashboard at the selected URL</li>
                <li>Click "Connect Wallet" (top right corner)</li>
                <li>Select Keplr</li>
                <li>Confirm adding Gonka network</li>
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" /> Done
                </li>
              </ol>
              <p className="text-muted-foreground">Now you can copy your wallet address — this is your GNK address for receiving rewards.</p>
            </div>
          )
        }
      ]
    },
    final_cta: {
      title: "Start mining today",
      subtitle: "Transparent conditions. Flexible plans.",
      text: "Start earning GNK coins without complex setups.",
      button: "Start Mining"
    }
  },
  calculator: {
    title: "GNK Yield Calculator",
    subtitle: "Select a pool and enter investment amount",
    pools: {
      light: {
        name: "Compute Light",
        badge: "Start Weight 300"
      },
      pro: {
        name: "Compute Pro",
        badge: "Start Weight 1500",
        discount_badge: "-10%"
      },
      premium: {
        name: "Compute Premium",
        badge: "Weight ∞",
        discount_badge: "-15%"
      }
    },
    info: {
      min_deposit: "Min deposit:",
      max_deposit: "Max deposit:",
      node_weight: "Your share:",
      management_fee: "Management Fee:",
      yield_per_day: "GNK/day"
    },
    input: {
      label: "Monthly investment amount ($)",
      placeholder: "Enter amount",
      error: {
        min: "Minimum amount for {name} is {min}",
        max: "Maximum amount for {name} is {max}"
      }
    },
    results: {
      daily: "GNK per day",
      monthly: "GNK per month",
      tooltip: "These are approximate figures. Values differ significantly based on network hosts.",
      disclaimer: "Calculations are approximate. Based on network weight {weight} and reward {reward} GNK on {date}."
    }
  }
};
