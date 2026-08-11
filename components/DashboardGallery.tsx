"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DashboardPreview from "@/components/DashboardPreview";
import { dashboards } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All Dashboards" },
  { id: "customer-lifetime-value", label: "CLV & Retention" },
  { id: "customer-behavior-dashboard", label: "Customer Behavior" },
  { id: "amazon-sales-dashboard", label: "Amazon Sales" },
];

export default function DashboardGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      activeFilter === "all"
        ? dashboards
        : dashboards.filter((d) => d.projectSlug === activeFilter),
    [activeFilter]
  );

  const expandedDashboard =
    dashboards.find((d) => d.id === expanded) ?? null;

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-cyan-soft/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Dashboard Gallery"
          title="Dashboards built for"
          highlight="real decisions"
          description="Interactive Power BI workbooks — every dashboard starts with a business question and ends with a decision-ready view."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeFilter === filter.id
                  ? "text-white"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
              )}
            >
              {activeFilter === filter.id && (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-violet-soft shadow-lg shadow-accent-500/25"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              )}

              <span className="relative">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((dashboard) => (
              <motion.div
                layout
                key={dashboard.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Dashboard Preview */}
                <DashboardPreview
                  dashboard={dashboard}
                  onExpand={() => setExpanded(dashboard.id)}
                />

                {/* Dashboard Information */}
                <div className="mt-4 flex items-start justify-between gap-3 px-1">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {dashboard.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {dashboard.description}
                    </p>
                  </div>

                  <a
                    href={`/case-studies/${dashboard.projectSlug}`}
                    className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-accent-300 transition-colors hover:text-white"
                  >
                    Case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================================================================
          FULLSCREEN DASHBOARD MODAL
          ================================================================ */}

      <AnimatePresence>
        {expandedDashboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[96] overflow-y-auto bg-ink-950/95 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setExpanded(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{ duration: 0.3 }}
              className="mx-auto w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-300">
                    {expandedDashboard.project}
                  </p>

                  <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                    {expandedDashboard.title}
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    {expandedDashboard.description}
                  </p>
                </div>

                <button
                  onClick={() => setExpanded(null)}
                  aria-label="Close dashboard"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* ==========================================================
                  CLV DASHBOARD — THREE PAGES
                  ========================================================== */}

              {expandedDashboard.projectSlug ===
              "customer-lifetime-value" ? (
                <div className="space-y-8">

                  {/* PAGE 01 */}
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-300">
                        Page 01
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Executive Summary
                      </h3>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
                      <img
                        src="/dashboard/clv/executive-summary.png"
                        alt="CLV Executive Summary Dashboard"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>

                  {/* PAGE 02 */}
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-300">
                        Page 02
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Customer Value & Segmentation
                      </h3>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
                      <img
                        src="/dashboard/clv/customer-value-segmentation.png"
                        alt="Customer Value and Segmentation Dashboard"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>

                  {/* PAGE 03 */}
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-300">
                        Page 03
                      </span>

                      <h3 className="text-lg font-semibold text-white">
                        Churn & Retention Analysis
                      </h3>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
                      <img
                        src="/dashboard/clv/churn-analysis.png"
                        alt="Customer Churn Analysis Dashboard"
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>

                </div>
              ) : (
                /* ==========================================================
                   OTHER DASHBOARDS
                   ========================================================== */

                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
                  <DashboardPreview dashboard={expandedDashboard} />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}