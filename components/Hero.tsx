"use client";

import ResumeDropdown from "@/components/ResumeDropdown";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Database,
  Download,
  FileText,
  FolderKanban,
  Sparkles,
  Target,
  Briefcase,
  BarChart,
  LineChart,
  Boxes,
  X,
} from "lucide-react";
import TypingText from "@/components/ui/TypingText";
import CountUp from "@/components/ui/CountUp";
import { heroKpis, profile } from "@/lib/data";

const kpiIcons = {
  project: FolderKanban,
  dashboard: BarChart3,
  query: Database,
  case: FileText,
};

const resumes = [
  {
    title: "Data Analyst",
    icon: BarChart,
    file: "/resume/Data_Analyst_Resume.pdf",
    desc: "SQL • Python • Power BI • Excel",
  },
  {
    title: "Business Analyst",
    icon: Briefcase,
    file: "/resume/Business_Analyst_Resume.pdf",
    desc: "BRD • SQL • Dashboard • Stakeholder Management",
  },
  {
    title: "Product Analyst",
    icon: LineChart,
    file: "/resume/Product_Analyst_Resume.pdf",
    desc: "Product Metrics • SQL • A/B Testing",
  },
  {
    title: "Product Manager",
    icon: Boxes,
    file: "/resume/Product_Manager_Resume.pdf",
    desc: "Roadmaps • Product Strategy • User Stories",
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const yFloat = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const [showResumeModal, setShowResumeModal] = useState(false);
  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36"
    >
      {/* Background layers */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <div className="bg-grid bg-grid-fade absolute inset-0 animate-grid-pan opacity-70" />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent-600/25 blur-[140px] animate-blob" />
        <div className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-soft/15 blur-[140px] animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-violet-soft/15 blur-[140px] animate-blob [animation-delay:-12s]" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ------------------------- Left: copy ------------------------ */}
        <motion.div style={{ opacity }} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-1.5 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Building Analytics That{" "}
            <span className="text-gradient-animate">Drive Business Decisions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-zinc-400"
          >
            <span className="text-zinc-500">{"//"}</span>
            <TypingText words={profile.typingRoles} className="text-gradient font-semibold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 via-violet-soft to-cyan-soft bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent-500/30 transition-all duration-500 hover:bg-right hover:shadow-accent-500/50"
            >
              <FolderKanban className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6" />
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur transition-all duration-300 hover:border-accent-400/60 hover:bg-white/[0.08] hover:text-white"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              View Resumes
            </button>
            {/* <button
            onClick={() => alert("Working!")}
            className="group inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-7 py-3.5 text-sm font-semibold text-accent-300 transition-all hover:bg-accent-500/20"
            >
              Choose Resume
            </button> */}
            <a
              href="#ai"
              className="group inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-sm font-semibold text-accent-300 transition-colors duration-300 hover:text-white"
            >
              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Ask My AI Assistant
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex items-center gap-2 text-xs text-zinc-500"
          >
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono">
              {profile.education.short}
            </span>
          </motion.p>
        </motion.div>

        {/* ----------------------- Right: KPI card --------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: yFloat }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Floating accent card behind */}
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-500/20 via-transparent to-cyan-soft/20 blur-2xl" />

          <div className="card-glow glass relative overflow-hidden rounded-3xl p-6 shadow-2xl shadow-black/50 sm:p-8">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-300">
                      Analytics · Portfolio Snapshot
                </p>

                  <h3 className="font-display mt-1 text-lg font-semibold text-white">
                      Turning Data Into Decisions
                  </h3>
              </div>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-soft shadow-lg shadow-accent-500/30">
                <BarChart3 className="h-5 w-5 text-white" />
                <span className="absolute inset-0 rounded-2xl bg-accent-500/60 animate-pulse-ring" />
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {heroKpis.map((kpi, i) => {
                const Icon = kpiIcons[kpi.icon];
                return (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + i * 0.1, duration: 0.5 }}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-accent-300 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                        {kpi.label}
                      </span>
                    </div>
                    <p className="font-display mt-2 text-3xl font-bold text-white">
                      <CountUp value={kpi.value} suffix={kpi.suffix} />
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="relative mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
  <p className="text-[10px] uppercase tracking-wider text-zinc-500">
    Core Stack
  </p>

  <div className="mt-2 flex flex-wrap gap-2">
    {["SQL", "Python", "Power BI", "Excel"].map((tech) => (
      <span
        key={tech}
        className="rounded-lg border border-accent-400/20 bg-accent-500/[0.06] px-2.5 py-1 font-mono text-[11px] text-accent-200 transition-all duration-300 hover:border-accent-400/50 hover:bg-accent-500/10"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

            <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15">
                <Target className="h-4 w-4 text-cyan-300" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                  Current Focus
                </p>
                <p className="truncate text-sm font-medium text-cyan-200">
                  {profile.currentFocus}
                </p>
              </div>
              <motion.span
                className="ml-auto h-2 w-2 shrink-0 rounded-full bg-cyan-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            className="glass absolute -left-8 top-8 hidden items-center gap-2 rounded-2xl px-4 py-2.5 shadow-xl shadow-black/40 animate-float sm:flex"
          >
            <span className="font-mono text-xs font-semibold text-emerald-300">SQL</span>
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            <span className="text-xs text-zinc-400">100+ queries</span>
          </motion.div>
          <motion.div
            className="glass absolute -right-6 bottom-24 hidden items-center gap-2 rounded-2xl px-4 py-2.5 shadow-xl shadow-black/40 animate-float-slow sm:flex"
          >
            <BarChart3 className="h-4 w-4 text-violet-300" />
            <span className="text-xs font-medium text-zinc-200">Power BI</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#stats"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
      {showResumeModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={() => setShowResumeModal(false)}
  >
    <div
      className="w-[90%] max-w-lg rounded-2xl border border-white/10 bg-zinc-900 p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="mb-2 text-2xl font-bold text-white">
        Choose Resume
      </h2>

      <p className="mb-6 text-sm text-zinc-400">
        Select the resume that best matches the role you're applying for.
      </p>

      <div className="space-y-3">

        <a
          href="/resume/Data_Analyst_Resume.pdf"
          download
          className="block rounded-xl border border-white/10 p-4 hover:bg-white/5"
        >
          <h3 className="font-semibold text-white">Data Analyst</h3>
          <p className="text-sm text-zinc-400">
            SQL • Python • Power BI • Excel
          </p>
        </a>

        <a
          href="/resume/Business_Analyst_Resume.pdf"
          download
          className="block rounded-xl border border-white/10 p-4 hover:bg-white/5"
        >
          <h3 className="font-semibold text-white">Business Analyst</h3>
          <p className="text-sm text-zinc-400">
            BRD • SQL • Dashboard • Stakeholder Management
          </p>
        </a>

        <a
          href="/resume/Product_Analyst_Resume.pdf"
          download
          className="block rounded-xl border border-white/10 p-4 hover:bg-white/5"
        >
          <h3 className="font-semibold text-white">Product Analyst</h3>
          <p className="text-sm text-zinc-400">
            Product Metrics • SQL • A/B Testing
          </p>
        </a>

        <a
          href="/resume/Product_Manager_Resume.pdf"
          download
          className="block rounded-xl border border-white/10 p-4 hover:bg-white/5"
        >
          <h3 className="font-semibold text-white">Product Manager</h3>
          <p className="text-sm text-zinc-400">
            Product Strategy • Roadmaps • User Stories
          </p>
        </a>

      </div>

      <button
        onClick={() => setShowResumeModal(false)}
        className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-zinc-200"
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
}
