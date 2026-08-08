"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ExternalLink,
  LineChart,
  PieChart,
  Rocket,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { caseStudies, projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const chartIcons = [LineChart, PieChart, BarChart3, Rocket];

function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const Icon = chartIcons[projects.indexOf(project) % chartIcons.length];
  const bars = [34, 58, 42, 76, 52, 88, 64, 96];
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[170px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br",
        project.accent,
        className
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Floating chart bars */}
      <div className="relative flex items-end gap-1.5 opacity-90">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h * 1.15}px` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="w-3 rounded-t-md bg-white/75 sm:w-3.5"
          />
        ))}
      </div>

      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/30 backdrop-blur">
        <Icon className="h-5 w-5 text-white" />
      </div>

      {project.startup && (
        <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          Startup
        </span>
      )}

      <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
        {project.tagline}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "card-glow glass group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-500/10",
        index === 0 && "lg:col-span-2 lg:flex-row"
      )}
    >
      <div className={cn(index === 0 && "lg:w-[46%]")}>
        <ProjectVisual project={project} className={cn(
      "min-h-[220px] rounded-none rounded-t-3xl",
      index === 0 && "lg:min-h-full lg:rounded-none lg:rounded-l-3xl"
     )} />
      </div>
      

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-300">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
              ★ Featured
            </span>
          )}
        </div>

        <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-accent-300 sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-200 transition-all duration-300 hover:border-accent-400/50 hover:text-white"
            >
              <GitHubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          <a
            href={project.links.caseStudy}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-200 transition-all duration-300 hover:border-accent-400/50 hover:text-white"
          >
            <BookOpen className="h-3.5 w-3.5" /> Case Study
          </a>
          {project.links.live && (
            <a
              href={project.links.live}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-500 to-violet-soft px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:brightness-110"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Dashboard
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/3 h-[380px] w-[380px] rounded-full bg-accent-600/15 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Analytics that changed"
          highlight="business decisions"
          description="Four engagements, each ending with a recommendation — not just a chart. Every project has a full consulting-style case study."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* CLV Dashboard Showcase */}
<div className="mt-16">
  <Reveal>
    <div className="mb-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-300">
        Live Dashboard Showcase
      </p>

      <h3 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">
        Customer Lifetime Value & Retention Strategy
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
        Three interactive dashboards built to analyze customer retention,
        customer value, segmentation, and business performance.
      </p>
    </div>
  </Reveal>

  <div className="space-y-8">

    {/* Executive Summary */}
    <Reveal>
      <div className="glass overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="p-5 sm:p-6">
          <h4 className="text-lg font-semibold text-white">
            01 · Executive Summary
          </h4>
          <p className="mt-1 text-sm text-zinc-500">
            Business performance and customer overview
          </p>
        </div>

        <img
          src="/dashboard/clv/executive-summary.png"
          alt="Customer Lifetime Value Executive Summary Dashboard"
          className="w-full border-t border-white/[0.07]"
        />
      </div>
    </Reveal>

    {/* Churn Analysis */}
    <Reveal>
      <div className="glass overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="p-5 sm:p-6">
          <h4 className="text-lg font-semibold text-white">
            02 · Customer Churn Analysis
          </h4>
          <p className="mt-1 text-sm text-zinc-500">
            Identifying customer attrition patterns and retention opportunities
          </p>
        </div>

        <img
          src="/dashboard/clv/churn-analysis.png"
          alt="Customer Churn Analysis Dashboard"
          className="w-full border-t border-white/[0.07]"
        />
      </div>
    </Reveal>

    {/* Customer Value */}
    <Reveal>
      <div className="glass overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="p-5 sm:p-6">
          <h4 className="text-lg font-semibold text-white">
            03 · Customer Value & Segmentation
          </h4>
          <p className="mt-1 text-sm text-zinc-500">
            RFM segmentation, customer value and revenue contribution
          </p>
        </div>

        <img
          src="/dashboard/clv/customer-value-segmentation.png"
          alt="Customer Value and Segmentation Dashboard"
          className="w-full border-t border-white/[0.07]"
        />
      </div>
    </Reveal>

  </div>
</div>

        {/* ------------------------- Case studies strip ------------------------ */}
        <div id="case-studies" className="mt-24 scroll-mt-28">
          <Reveal>
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-300">
                  Project Case Studies
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Deep-dive, consulting-style reports
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                Every engagement is documented end-to-end: business problem, methodology, SQL &
                Python analysis, dashboard design, insights, and recommendations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Object.values(caseStudies).map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.07}>
                <a
                  href={`/case-studies/${cs.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/[0.05]"
                >
                  <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500/20 to-cyan-soft/20 font-bold text-accent-300 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:from-accent-500 group-hover:to-cyan-soft group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-white">
                      {cs.title}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-zinc-500">
                      {cs.subtitle}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-300" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
