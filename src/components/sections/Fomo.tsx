import React from "react";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from "recharts";

interface FomoProps {
  content?: {
    title: string;
    subtitle: string;
    text: string;
    grace_period?: string;
    today?: string;
    disclaimer?: string;
    chart?: {
      start: string;
      halving1: string;
      halving2: string;
      daily_reward_potential: string;
      daily_reward: string;
      reward: string;
      month: string;
    };
    epochs?: {
      now: { title: string; text: string };
      halving1: { title: string; text: string };
      halving2: { title: string; text: string };
    };
  };
}

const rawData = [
  // ЭПОХА 1: "Золотое время" (Сейчас)
  { epoch: 1, time: "Мес 1", reward: 100.0 },
  { epoch: 1, time: "Мес 2", reward: 96.5 },
  { epoch: 1, time: "Мес 4", reward: 93.2 },
  { epoch: 1, time: "Мес 6", reward: 90.0 },
  { epoch: 1, time: "Мес 8", reward: 87.0 },
  { epoch: 1, time: "Мес 10", reward: 84.1 },
  { epoch: 1, time: "Мес 12", reward: 81.3 },
  { epoch: 1, time: "Мес 14", reward: 78.6 },
  { epoch: 1, time: "Мес 16", reward: 76.0 },
  { epoch: 1, time: "Мес 18", reward: 73.5 },
  { epoch: 1, time: "Мес 20", reward: 71.1 },
  { epoch: 1, time: "Мес 22", reward: 68.8 },
  { epoch: 1, time: "Мес 24", reward: 66.6 },
  { epoch: 1, time: "Мес 26", reward: 64.5 },
  { epoch: 1, time: "Мес 28", reward: 62.4 },
  { epoch: 1, time: "Мес 30", reward: 60.5 },
  { epoch: 1, time: "Мес 32", reward: 58.6 },
  { epoch: 1, time: "Мес 34", reward: 56.8 },
  { epoch: 1, time: "Мес 36", reward: 55.0 },
  { epoch: 1, time: "Мес 38", reward: 53.3 },
  { epoch: 1, time: "Мес 40", reward: 51.7 },
  { epoch: 1, time: "Мес 42", reward: 50.1 },
  { epoch: 1, time: "Мес 44", reward: 48.6 },
  { epoch: 1, time: "Мес 46", reward: 47.2 },
  { epoch: 1, time: "Мес 48", reward: 45.8 },

  // ЭПОХА 2: Первый Халвинг
  { epoch: 2, time: "Мес 49", reward: 22.9 },
  { epoch: 2, time: "Мес 50", reward: 22.5 },
  { epoch: 2, time: "Мес 52", reward: 22.0 },
  { epoch: 2, time: "Мес 54", reward: 21.6 },
  { epoch: 2, time: "Мес 56", reward: 21.1 },
  { epoch: 2, time: "Мес 58", reward: 20.7 },
  { epoch: 2, time: "Мес 60", reward: 20.3 },
  { epoch: 2, time: "Мес 62", reward: 19.9 },
  { epoch: 2, time: "Мес 64", reward: 19.5 },
  { epoch: 2, time: "Мес 66", reward: 19.1 },
  { epoch: 2, time: "Мес 68", reward: 18.7 },
  { epoch: 2, time: "Мес 70", reward: 18.3 },
  { epoch: 2, time: "Мес 72", reward: 17.9 },
  { epoch: 2, time: "Мес 74", reward: 17.6 },
  { epoch: 2, time: "Мес 76", reward: 17.2 },
  { epoch: 2, time: "Мес 78", reward: 16.9 },
  { epoch: 2, time: "Мес 80", reward: 16.5 },
  { epoch: 2, time: "Мес 82", reward: 16.2 },
  { epoch: 2, time: "Мес 84", reward: 15.9 },
  { epoch: 2, time: "Мес 86", reward: 15.6 },
  { epoch: 2, time: "Мес 88", reward: 15.3 },
  { epoch: 2, time: "Мес 90", reward: 15.0 },
  { epoch: 2, time: "Мес 92", reward: 14.7 },
  { epoch: 2, time: "Мес 94", reward: 14.4 },
  { epoch: 2, time: "Мес 96", reward: 14.1 },

  // ЭПОХА 3: Второй Халвинг
  { epoch: 3, time: "Мес 97", reward: 7.05 },
  { epoch: 3, time: "Мес 98", reward: 6.98 },
  { epoch: 3, time: "Мес 100", reward: 6.90 },
  { epoch: 3, time: "Мес 102", reward: 6.83 },
  { epoch: 3, time: "Мес 104", reward: 6.75 },
  { epoch: 3, time: "Мес 106", reward: 6.68 },
  { epoch: 3, time: "Мес 108", reward: 6.61 },
  { epoch: 3, time: "Мес 110", reward: 6.54 },
  { epoch: 3, time: "Мес 112", reward: 6.47 },
  { epoch: 3, time: "Мес 114", reward: 6.40 },
  { epoch: 3, time: "Мес 116", reward: 6.33 },
  { epoch: 3, time: "Мес 118", reward: 6.26 },
  { epoch: 3, time: "Мес 120", reward: 6.19 },
  { epoch: 3, time: "Мес 122", reward: 6.12 },
  { epoch: 3, time: "Мес 124", reward: 6.05 },
  { epoch: 3, time: "Мес 126", reward: 5.99 },
  { epoch: 3, time: "Мес 128", reward: 5.92 },
  { epoch: 3, time: "Мес 130", reward: 5.86 },
  { epoch: 3, time: "Мес 132", reward: 5.79 },
  { epoch: 3, time: "Мес 134", reward: 5.73 },
  { epoch: 3, time: "Мес 136", reward: 5.66 },
  { epoch: 3, time: "Мес 138", reward: 5.60 },
  { epoch: 3, time: "Мес 140", reward: 5.54 },
  { epoch: 3, time: "Мес 142", reward: 5.48 },
  { epoch: 3, time: "Мес 144", reward: 5.42 },
];

const data = rawData.map((d) => ({
  ...d,
  month: parseInt(d.time.split(" ")[1]) || 0,
}));

const PulsatingDot = (props: any) => {
  const { cx, cy } = props;
  return (
    <svg x={cx - 10} y={cy - 10} width={20} height={20} viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="#39ff14" opacity="0.4">
        <animate
          attributeName="r"
          from="5"
          to="10"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.8"
          to="0"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="10" cy="10" r="4" fill="#39ff14" />
    </svg>
  );
};

export const Fomo = ({ content }: FomoProps) => {
  const { t } = useLanguage();
  // @ts-ignore
  const c = content || t.safecompute?.fomo;

  if (!c) return null;

  return (
    <section id="economics" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-lg">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold mb-6">
            <TrendingUp className="w-5 h-5" />
            <span>{c.grace_period || "Grace Period"}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            {c.title}
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            {c.subtitle}
          </p>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            {c.text}
          </p>

          {/* Recharts Visualization */}
          <div className="h-64 md:h-80 w-full mt-12 bg-muted/30 rounded-xl border border-border p-4 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorReward" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#39ff14" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#39ff14" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0,0,0,0.05)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  type="number"
                  domain={[1, 144]}
                  ticks={[1, 49, 97]}
                  tickFormatter={(val) =>
                    val === 1
                      ? c.chart?.start || "Start"
                      : val === 49
                        ? c.chart?.halving1 || "Halving 1"
                        : val === 97
                          ? c.chart?.halving2 || "Halving 2"
                          : ""
                  }
                  stroke="rgba(0,0,0,0.3)"
                  tick={{ fill: "rgba(0,0,0,0.5)", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  hide={false}
                  width={40}
                  tick={false}
                  axisLine={false}
                  label={{
                    value: c.chart?.daily_reward_potential || "Daily Reward Potential",
                    angle: -90,
                    position: "insideLeft",
                    fill: "rgba(0,0,0,0.4)",
                    fontSize: 12,
                    dy: 60,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    color: "#000"
                  }}
                  itemStyle={{ color: "#39ff14" }}
                  formatter={(value: number | undefined) => [
                    `${(value || 0).toFixed(1)}%`,
                    c.chart?.daily_reward || "Daily Reward",
                  ]}
                  labelFormatter={(label) => `${c.chart?.month || "Month"} ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="reward"
                  stroke="#39ff14"
                  fillOpacity={1}
                  fill="url(#colorReward)"
                  strokeWidth={2}
                  activeDot={{ r: 6, fill: "#fff" }}
                />
                {/* Visual marker "Today" roughly at Month 5 */}
                <ReferenceDot
                  x={5}
                  y={91.5}
                  shape={PulsatingDot}
                  // @ts-ignore
                  isFront={true}
                  // @ts-ignore
                  ifOverflow="extendDomain"
                >
                  <Label
                    value={c.today || "Today"}
                    position="top"
                    offset={10}
                    fill="#39ff14"
                    fontSize={12}
                    fontWeight="bold"
                    style={{ filter: "drop-shadow(0 0 5px #39ff14)" }}
                  />
                </ReferenceDot>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 text-left max-w-3xl mx-auto space-y-4 text-sm text-muted-foreground">
            <p className="italic text-center text-muted-foreground/80 mb-4">
              {c.disclaimer}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
              <div>
                <h4 className="text-[#39ff14] font-bold mb-1">
                  {c.epochs?.now?.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: c.epochs?.now?.text || "" }} />
              </div>
              <div>
                <h4 className="text-primary font-bold mb-1">
                  {c.epochs?.halving1?.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: c.epochs?.halving1?.text || "" }} />
              </div>
              <div>
                <h4 className="text-primary/70 font-bold mb-1">
                  {c.epochs?.halving2?.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: c.epochs?.halving2?.text || "" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
