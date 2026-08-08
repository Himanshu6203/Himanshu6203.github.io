"use client";

import { motion } from "framer-motion";
import { Filter, Gauge, Maximize2, Search } from "lucide-react";
import type { Dashboard } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ------------------------- SVG chart primitives ------------------------- */

function LineChart({ gradientId, className }: { gradientId: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 110" className={cn("h-full w-full", className)} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`${gradientId}-line`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id={`${gradientId}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 88 L30 74 L58 80 L86 52 L114 60 L142 34 L170 44 L198 20 L226 28 L258 8"
        fill="none"
        stroke={`url(#${gradientId}-line)`}
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 88 L30 74 L58 80 L86 52 L114 60 L142 34 L170 44 L198 20 L226 28 L258 8 L258 110 L0 110 Z"
        fill={`url(#${gradientId}-area)`}
      />
      <circle cx="258" cy="8" r="3.5" fill="#22d3ee" />
    </svg>
  );
}

function BarChart({ className }: { className?: string }) {
  const bars = [38, 62, 48, 78, 55, 88, 68, 96, 72, 58, 84, 66];
  return (
    <svg viewBox="0 0 260 110" className={cn("h-full w-full", className)} preserveAspectRatio="none">
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 21 + 3}
          y={110 - h}
          width="13"
          height={h}
          rx="3"
          initial={{ height: 0, y: 110 }}
          whileInView={{ height: h, y: 110 - h }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          fill={i % 4 === 3 ? "#22d3ee" : "#818cf8"}
          opacity={i % 4 === 3 ? 1 : 0.75}
        />
      ))}
    </svg>
  );
}

function AreaChart({ gradientId, className }: { gradientId: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 110" className={cn("h-full w-full", className)} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`${gradientId}-area2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 92 C30 84 45 58 75 64 C105 70 120 36 150 40 C180 44 200 22 230 24 L260 18 L260 110 L0 110 Z"
        fill={`url(#${gradientId}-area2)`}
      />
      <path
        d="M0 92 C30 84 45 58 75 64 C105 70 120 36 150 40 C180 44 200 22 230 24 L260 18"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function DonutChart({ className }: { className?: string }) {
  const segments = [
    { pct: 45, color: "#818cf8" },
    { pct: 25, color: "#c084fc" },
    { pct: 18, color: "#22d3ee" },
    { pct: 12, color: "#34d399" },
  ];
  let offset = 0;
  const r = 40;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 110 110" className={cn("h-full w-full", className)}>
      <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="12" />
      {segments.map((seg, i) => {
        const dash = (seg.pct / 100) * c;
        const el = (
          <motion.circle
            key={i}
            cx="55"
            cy="55"
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c - dash}`}
            strokeDashoffset={-offset}
            transform="rotate(-90 55 55)"
            initial={{ strokeDasharray: `0 ${c}` }}
            whileInView={{ strokeDasharray: `${dash} ${c - dash}` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        );
        offset += dash;
        return el;
      })}
      <text
        x="55"
        y="52"
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
        fontWeight="700"
        fontFamily="var(--font-display)"
      >
        61%
      </text>
      <text x="55" y="66" textAnchor="middle" fill="#71717a" fontSize="8">
        top 20%
      </text>
    </svg>
  );
}

/* ------------------------------ Component ------------------------------ */

export default function DashboardPreview({
  dashboard,
  className,
  onExpand,
}: {
  dashboard: Dashboard;
  className?: string;
  onExpand?: () => void;
}) {
  const chart =
    dashboard.chart === "line" ? (
      <LineChart gradientId={dashboard.id} />
    ) : dashboard.chart === "bar" ? (
      <BarChart />
    ) : dashboard.chart === "area" ? (
      <AreaChart gradientId={dashboard.id} />
    ) : (
      <DonutChart />
    );
   if (dashboard.image) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-2xl",
        className
      )}
      onClick={onExpand}
    >
      <img
        src={dashboard.image}
        alt={dashboard.title}
        className="block w-full h-auto"
      />
    </div>
  );
}

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900 shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-accent-500/15",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-ink-850 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
          <Gauge className="h-3 w-3" /> Power BI · {dashboard.title}
        </span>
        <button
          onClick={onExpand}
          aria-label="Expand dashboard"
          className="flex h-6 w-6 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.05] bg-ink-900/80 px-4 py-2">
        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
          <Filter className="h-3 w-3" />
          <span>{dashboard.filters}</span>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-white/[0.04] px-2 py-1 text-[10px] text-zinc-500 ring-1 ring-white/[0.06]">
          <Search className="h-3 w-3" /> Last 12 months
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-2.5 p-4 sm:grid-cols-4">
        {dashboard.kpis.map((kpi, i) => (
          <motion.div
            key={kpi}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
          >
            <span className="block h-1 w-8 rounded-full bg-gradient-to-r from-accent-400 to-cyan-soft opacity-70" />
            <span className="mt-1.5 block truncate font-mono text-[11px] font-semibold text-white">
              {kpi}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-2.5 px-4 pb-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:col-span-2">
          <p className="mb-2 text-[10px] uppercase tracking-wider text-zinc-500">
            Performance trend
          </p>
          <div className="h-28">{chart}</div>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="mb-2 text-[10px] uppercase tracking-wider text-zinc-500">
            Revenue share
          </p>
          <div className="mx-auto h-28 w-28">
            <DonutChart />
          </div>
        </div>
      </div>

      {/* Legend + accent line */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-3 text-[10px] text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-400" /> Segment A
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-violet-soft" /> Segment B
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-soft" /> Segment C
          </span>
        </div>
        <span
          className={cn(
            "h-1.5 w-16 rounded-full bg-gradient-to-r opacity-80",
            dashboard.accent
          )}
        />
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 backdrop-blur-0 transition-all duration-500 group-hover:bg-ink-950/50 group-hover:opacity-100 group-hover:backdrop-blur-sm">
        <span className="flex -translate-y-2 items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-violet-soft px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-accent-500/30 transition-transform duration-500 group-hover:translate-y-0">
          <Maximize2 className="h-4 w-4" /> Open fullscreen
        </span>
      </div>
    </div>
  );
}
