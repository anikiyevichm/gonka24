import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Info } from 'lucide-react';
import statsData from '../../data/stats.json';

// Pool Configuration
const POOL_CONFIG = {
  1: {
    id: 1,
    min: 250,
    max: 2000,
    nodePrice: 2000,
    weight: 300,
    fee: 20,
    key: 'light'
  },
  2: {
    id: 2,
    min: 500,
    max: 5500,
    nodePrice: 5500,
    weight: 1500,
    fee: 10,
    key: 'pro'
  },
  3: {
    id: 3,
    min: 10000,
    max: Infinity,
    nodePrice: 10000,
    weight: 3000,
    fee: 5,
    key: 'premium'
  },
} as const;

type PoolId = keyof typeof POOL_CONFIG;

export function CalculatorSection() {
  const { t } = useLanguage();
  const [selectedPool, setSelectedPool] = useState<PoolId>(2);
  const [investment, setInvestment] = useState<string>(''); // Keep as string for input handling

  const config = POOL_CONFIG[selectedPool];
  // @ts-ignore
  const calcT = t.calculator;

  // Derived calculations
  const { dailyGNK, monthlyGNK, errorMsg, userWeight } = useMemo(() => {
    const amount = parseFloat(investment);
    const poolName = calcT.pools[config.key].name;

    if (!investment || isNaN(amount) || amount <= 0) {
      return { dailyGNK: '0.00', monthlyGNK: '0.00', errorMsg: '', userWeight: 0 };
    }

    if (amount < config.min) {
      const msg = calcT.input.error.min
        .replace('{name}', poolName)
        .replace('{min}', `$${config.min.toLocaleString()}`);
      return {
        dailyGNK: '0.00',
        monthlyGNK: '0.00',
        errorMsg: msg,
        userWeight: 0
      };
    }

    if (config.max !== Infinity && amount > config.max) {
      const msg = calcT.input.error.max
        .replace('{name}', poolName)
        .replace('{max}', `$${config.max.toLocaleString()}`);
      return {
        dailyGNK: '0.00',
        monthlyGNK: '0.00',
        errorMsg: msg,
        userWeight: 0
      };
    }

    // Weight Calculation: Fixed 0.233 weight per 1 USD
    const calculatedWeight = amount * 0.233;

    const unitPrice = statsData.unit_price || 0;
    const epochsPerDay = 1;

    // Raw Daily GNK
    const rawDailyGNK = calculatedWeight * unitPrice * epochsPerDay;

    // Net Daily GNK (Deduct Fee)
    const netDailyGNK = rawDailyGNK * (1 - config.fee / 100);

    const monthly = netDailyGNK * 30;

    return {
      dailyGNK: netDailyGNK.toFixed(2),
      monthlyGNK: monthly.toFixed(2),
      errorMsg: '',
      userWeight: Math.floor(calculatedWeight) // Show integer for weight usually looks cleaner
    };
  }, [investment, config, calcT]);



  // Disclaimer formatting
  const disclaimerText = calcT.results.disclaimer
    ? calcT.results.disclaimer
      .replace('{weight}', statsData.total_compute_power?.toLocaleString() || 'N/A')
      .replace('{reward}', Math.round(statsData.previous_epoch_reward || 0).toLocaleString())
      .replace('{date}', statsData.last_updated ? new Date(statsData.last_updated).toLocaleDateString() : 'N/A')
    : "";

  return (
    <section id="calc" className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
          {calcT.title}
        </h2>
        <p className="text-muted-foreground text-lg">
          {calcT.subtitle}
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white border border-border/50 rounded-3xl shadow-xl w-full max-w-[550px] overflow-hidden"
      >

        {/* Pool Tabs */}
        <div className="flex p-2 m-5 bg-muted/60 rounded-2xl gap-1">
          {Object.values(POOL_CONFIG).map((pool) => (
            <button
              key={pool.id}
              onClick={() => setSelectedPool(pool.id as PoolId)}
              className={`flex-1 py-3 px-2 rounded-xl transition-all duration-300 flex flex-col items-center justify-center group relative ${selectedPool === pool.id
                ? 'bg-background shadow-sm ring-1 ring-black/5'
                : 'hover:bg-background/50'
                }`}
            >
              {/* @ts-ignore */}
              {calcT.pools[pool.key].price_badge && (
                <span className="absolute -top-1 -right-1 w-9 h-9 flex items-center justify-center text-[10px] bg-rose-500 text-white rounded-full font-bold shadow-md border-2 border-white z-20 transform rotate-12">
                  {/* @ts-ignore */}
                  {calcT.pools[pool.key].price_badge}
                </span>
              )}
              {/* @ts-ignore */}
              {calcT.pools[pool.key].discount_badge && (
                <span className={`absolute -top-1 -right-1 w-9 h-9 flex items-center justify-center text-[10px] rounded-full font-bold shadow-md border-2 border-white z-20 transform -rotate-12 ${pool.key === 'pro' ? 'bg-yellow-400 text-black/90' : 'bg-emerald-500 text-white'
                  }`}>
                  {/* @ts-ignore */}
                  {calcT.pools[pool.key].discount_badge}
                </span>
              )}

              <span
                className={`text-sm font-semibold mb-1 transition-colors relative z-10 mt-1 ${selectedPool === pool.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
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
            <InfoRow
              label={calcT.info.node_weight}
              value={userWeight > 0 ? userWeight.toLocaleString() : '-'}
            />
            <InfoRow label={calcT.info.management_fee} value={`${config.fee}%`} />
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

          {/* Disclaimer */}
          <div className="mt-4 text-[10px] text-muted-foreground/60 text-center leading-tight px-4">
            {disclaimerText}
          </div>

        </div>
      </motion.div>
    </section>
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
