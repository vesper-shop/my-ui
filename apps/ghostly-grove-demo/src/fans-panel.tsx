import { Card, Tooltip } from "@my-ui/ghostly-grove";
import { HandCoins, Heart, Medal, Search, UsersRound } from "lucide-react";
import {
  Area,
  AreaChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  type DotProps,
  XAxis,
  type XAxisTickContentProps,
  YAxis,
} from "recharts";
import { fanCurve, fanPeak, levels, stats } from "@/data/blogger";
import type { FansPanelProps, StyleWithVars } from "@/types";

const statIcons = [UsersRound, HandCoins, Heart];

function LevelTick({ x, y, index }: XAxisTickContentProps) {
  const level = levels[index];
  const style: StyleWithVars = { "--index": `${index}` };

  return (
    <g transform={`translate(${x},${y})`} className="fan-chart__level" style={style}>
      <circle cy="-8" r="4" className="fan-chart__level-dot" />
      <path d="M0 -26 l14 18 -14 18 -14 -18 Z" className="fan-chart__level-flash" />
      <text y="22" className="fan-chart__level-name">
        {level.name}
      </text>
      <text y="48" className="fan-chart__level-value">
        {level.threshold}
      </text>
    </g>
  );
}

function MedalDot({ cx, cy, fill }: DotProps) {
  return (
    <g transform={`translate(${cx},${cy})`} color={fill} className="fan-chart__medal">
      <circle r="26" className="fan-chart__medal-ring" />
      <Medal x={-15} y={-15} size={30} />
    </g>
  );
}

function PeakDot({ cx, cy }: DotProps) {
  return (
    <g transform={`translate(${cx},${cy})`} className="fan-chart__peak">
      <circle r="16" className="fan-chart__peak-glow" />
      <circle r="7" className="fan-chart__peak-dot" />
      <rect x="-60" y="-56" width="120" height="34" rx="10" className="fan-chart__peak-pill" />
      <text y="-32" className="fan-chart__peak-label">
        {stats[0].value}
      </text>
    </g>
  );
}

export function FansPanel({ onOpenPlan }: FansPanelProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-[30px]">
      <div className="grid grid-cols-3 gap-5">
        {stats.map((stat, index) => {
          const Icon = statIcons[index];
          return (
            <Tooltip.Root key={stat.label}>
              <Tooltip.Trigger
                render={<Card.Root />}
                className="flex h-[120px] cursor-default items-center gap-7 px-8 hover:border-glow hover:shadow-glow"
              >
                <span
                  data-tone={stat.tone}
                  className="text-glow drop-shadow-[0_0_10px_currentColor] data-[tone=gold]:text-label"
                >
                  <Icon size={52} strokeWidth={2.4} className="fill-current/25" />
                </span>
                <span className="h-14 border-l-2 border-dashed border-border" />
                <span className="flex flex-col gap-1">
                  <span
                    data-tone={stat.tone}
                    className="text-lg text-glow data-[tone=gold]:text-label"
                  >
                    {stat.label}
                  </span>
                  <span className="font-numeric text-[34px] leading-none tracking-wide text-value">
                    {stat.value}
                  </span>
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner side="bottom" align="start" sideOffset={10}>
                  <Tooltip.Popup>{stat.hint}</Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          );
        })}
      </div>
      <Card.Root className="flex min-h-0 flex-1 cursor-default flex-col p-0 hover:border-glow">
        <div className="flex items-center gap-3 px-6 pt-5 text-lg text-foreground">
          人气阶段
          <span className="font-numeric text-[30px] leading-none">Lv5</span>
          <button
            type="button"
            aria-label="查看博主计划"
            onClick={onOpenPlan}
            className="grid size-[26px] cursor-pointer place-items-center rounded-full bg-foreground text-surface transition-transform hover:scale-110"
          >
            <Search size={16} strokeWidth={3} />
          </button>
        </div>
        <ResponsiveContainer width="100%" height="100%" className="min-h-0 flex-1">
          <AreaChart
            data={fanCurve}
            margin={{ top: 80, right: 24, bottom: 10, left: 24 }}
            className="fan-chart"
          >
            <defs>
              <linearGradient id="fan-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--color-glow)" stopOpacity="0.28" />
                <stop offset="1" stopColor="var(--color-glow)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <XAxis
              type="number"
              dataKey="x"
              domain={[24, 1068]}
              ticks={levels.map((level) => level.x)}
              tick={LevelTick}
              tickLine={false}
              axisLine={{ className: "fan-chart__axis" }}
              height={90}
            />
            <YAxis hide domain={[0, 300]} />
            {levels.map((level) => (
              <ReferenceLine key={level.x} x={level.x} className="fan-chart__guide" />
            ))}
            {levels.map((level) => (
              <ReferenceLine key={level.x - 96} x={level.x - 96} className="fan-chart__grid" />
            ))}
            <Area
              type="monotone"
              dataKey="fans"
              stroke="var(--color-glow)"
              strokeWidth={4}
              fill="url(#fan-area)"
              animationDuration={1200}
            />
            {levels
              .filter((level) => level.hasMedal)
              .map((level) => (
                <ReferenceDot
                  key={level.x}
                  x={level.x}
                  y={64}
                  r={26}
                  fill={level.x === fanPeak.x ? "var(--color-label)" : "var(--color-avatar)"}
                  shape={MedalDot}
                />
              ))}
            <ReferenceLine
              segment={[
                { x: fanPeak.x, y: 0 },
                { x: fanPeak.x, y: fanPeak.fans },
              ]}
              className="fan-chart__peak-line"
            />
            <ReferenceDot x={fanPeak.x} y={fanPeak.fans} r={7} shape={PeakDot} />
          </AreaChart>
        </ResponsiveContainer>
      </Card.Root>
    </div>
  );
}
