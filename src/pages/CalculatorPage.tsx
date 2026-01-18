import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/ui/Header';
import { Background3D } from '../components/ui/Background3D';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactModalProvider } from '../contexts/ContactModalContext';
import { Info } from 'lucide-react';

// Pool Configuration
const POOL_CONFIG = {
  1: {
    id: 1,
    min: 250,
    max: 2000,
    nodePrice: 2000,
    nodeDailyGNK: 24,
    weight: 300,
    fee: 20,
    key: 'light'
  },
  2: {
    id: 2,
    min: 500,
    max: 5500,
    nodePrice: 5500,
    nodeDailyGNK: 120,
    weight: 1500,
    fee: 10,
    key: 'pro'
  },
  3: {
    id: 3,
    min: 10000,
    max: Infinity,
    nodePrice: 10000,
    nodeDailyGNK: 229.09,
    weight: '∞',
    fee: 5,
    key: 'premium'
  },
} as const;

type PoolId = keyof typeof POOL_CONFIG;

export function CalculatorPage() {
  const { t } = useLanguage();
  const [selectedPool, setSelectedPool] = useState<PoolId>(2);
  const [investment, setInvestment] = useState<string>(''); // Keep as string for input handling

  const config = POOL_CONFIG[selectedPool];
  // @ts-ignore
  const calcT = t.calculator;

  // Derived calculations
  const { dailyGNK, monthlyGNK, errorMsg } = useMemo(() => {
    const amount = parseFloat(investment);
    const poolName = calcT.pools[config.key].name;

    if (!investment || isNaN(amount) || amount <= 0) {
      return { dailyGNK: '0.00', monthlyGNK: '0.00', errorMsg: '' };
    }

    if (amount < config.min) {
      const msg = calcT.input.error.min
        .replace('{name}', poolName)
        .replace('{min}', `$${config.min.toLocaleString()}`);
      return {
        dailyGNK: '0.00',
        monthlyGNK: '0.00',
        errorMsg: msg
      };
    }

    if (config.max !== Infinity && amount > config.max) {
      const msg = calcT.input.error.max
        .replace('{name}', poolName)
        .replace('{max}', `$${config.max.toLocaleString()}`);
      return {
        dailyGNK: '0.00',
        monthlyGNK: '0.00',
        errorMsg: msg
      };
    }

    const shareOfNode = amount / config.nodePrice;
    const daily = shareOfNode * config.nodeDailyGNK;
    const monthly = daily * 30;

    return {
      dailyGNK: daily.toFixed(2),
      monthlyGNK: monthly.toFixed(2),
      errorMsg: '',
    };
  }, [investment, config, calcT]);

  // @ts-ignore
  const nav = t.header.safecompute_nav;
  const navLinks = [
    { name: nav?.about || "About", href: "/gnk-mining-infrastructure#about" },
    { name: nav?.pricing || "Pricing", href: "/gnk-mining-infrastructure#pricing" },
    { name: nav?.faq || "FAQ", href: "/gnk-mining-infrastructure#faq-section" },
  ];

  return (
    <ContactModalProvider>
      <div className="min-h-screen font-sans selection:bg-emerald-500/30 relative text-foreground bg-gradient-to-br from-emerald-50/50 to-blue-50/50">
        <Background3D />

        <Header customLinks={navLinks} />

        <main className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              {calcT.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {calcT.subtitle}
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl shadow-xl w-full max-w-[550px] overflow-hidden"
          >

            {/* Pool Tabs */}
            <div className="flex p-2 m-5 bg-muted/60 rounded-2xl gap-1">
              {Object.values(POOL_CONFIG).map((pool) => (
                <button
                  key={pool.id}
                  onClick={() => setSelectedPool(pool.id as PoolId)}
                  className={`flex-1 py-3 px-2 rounded-xl transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden ${selectedPool === pool.id
                      ? 'bg-background shadow-sm ring-1 ring-black/5'
                      : 'hover:bg-background/50'
                    }`}
                >
                  <span
                    className={`text-sm font-semibold mb-1 transition-colors relative z-10 ${selectedPool === pool.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                  >
                    {/* @ts-ignore */}
                    {calcT.pools[pool.key].name}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium transition-colors relative z-10 ${selectedPool === pool.id
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted text-muted-foreground'
                      }`}
                  >
                    {/* @ts-ignore */}
                    {calcT.pools[pool.key].badge}
                  </span>
                </button>
              ))}
            </div>

            <div className="p-8 pt-2">
              {/* Info Section */}
              <div className="bg-secondary/50 rounded-2xl p-5 border border-border/50 mb-6 space-y-3">
                <InfoRow label={calcT.info.min_deposit} value={`$${config.min.toLocaleString()}`} />
                <InfoRow
                  label={calcT.info.max_deposit}
                  value={config.max === Infinity ? '∞' : `$${config.max.toLocaleString()}`}
                />
                <InfoRow label={calcT.info.node_weight} value={config.weight.toString()} />
                <InfoRow label={calcT.info.management_fee} value={`${config.fee}%`} />
                {selectedPool !== 3 && (
                  <InfoRow label={calcT.info.base_yield} value={`~${config.nodeDailyGNK} ${calcT.info.yield_per_day}`} />
                )}
              </div>

              {/* Input Section */}
              <div className="mb-8">
                <label htmlFor="investment" className="block text-foreground font-semibold mb-2">
                  {calcT.input.label}
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xl font-bold group-focus-within:text-emerald-500 transition-colors">
                    $
                  </span>
                  <input
                    type="number"
                    id="investment"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    placeholder={calcT.input.placeholder}
                    className={`w-full bg-background pl-10 pr-5 py-4 text-xl font-bold border-2 rounded-2xl outline-none transition-all duration-300 placeholder:text-muted-foreground/50 placeholder:font-normal ${errorMsg
                        ? 'border-destructive focus:border-destructive focus:ring-4 focus:ring-destructive/10'
                        : 'border-input focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10'
                      }`}
                  />
                </div>
                <div className="min-h-[24px] mt-2">
                  {errorMsg && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm font-medium flex items-center"
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Results */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg shadow-emerald-500/20">
                {/* Background glow effect */}
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-50 font-medium">{calcT.results.daily}</span>
                    <span className="text-2xl font-extrabold">{dailyGNK}</span>
                  </div>

                  <div className="h-px bg-white/20" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 group cursor-help">
                      <span className="text-emerald-50 font-medium">{calcT.results.monthly}</span>
                      <div className="relative">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold border border-white/30 group-hover:bg-white/40 group-hover:scale-110 transition-all">
                          <Info className="w-3 h-3" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 text-center leading-relaxed">
                          {calcT.results.tooltip}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                        </div>
                      </div>
                    </div>
                    <span className="text-3xl font-extrabold tracking-tight">{monthlyGNK}</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </ContactModalProvider>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-muted-foreground font-medium">{label}</span>
      <span className="text-foreground font-bold">{value}</span>
    </div>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border bg-card/80 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="space-y-1">
          <p className="text-muted-foreground/60 font-medium">{t.footer.rights}</p>
          <p className="text-xs text-muted-foreground/50">{t.footer.payment}</p>
        </div>

        <div className="flex flex-col gap-1 text-xs">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center">
            <p>
              {t.footer.contact_text}{' '}
              <a href={t.footer.manager_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all font-medium">
                {t.footer.contact_link_text}
              </a>
            </p>
            <span className="hidden sm:inline text-border">•</span>
            <p>
              {t.footer.community_text}{' '}
              <a href={t.footer.community_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all font-medium">
                {t.footer.community_link_text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
