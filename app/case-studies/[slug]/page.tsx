import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Bot,
  ChevronRight,
  ClipboardList,
  Database,
  FlaskConical,
  Gauge,
  Layers,
  Lightbulb,
  ListChecks,
  MessageSquareWarning,
  Rocket,
  Target,
  TrendingUp,
  Trophy,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { caseStudies, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

type CaseStudyProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Case Study`,
    description: study.subtitle,
  };
}

/* --------------------------- Report primitives --------------------------- */

function ReportSection({
  number,
  icon,
  title,
  intro,
  children,
  id,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  intro?: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal>
        <div className="mb-6 flex items-start gap-4">
          <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-soft text-lg font-bold text-white shadow-lg shadow-accent-500/25">
            {number}
          </span>
          <div>
            <div className="flex items-center gap-2.5">
              {icon}
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h2>
            </div>
            {intro && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">{intro}</p>}
          </div>
        </div>
      </Reveal>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <Reveal delay={0.08}>
      <div className="flex gap-3 rounded-2xl border border-accent-400/20 bg-accent-500/[0.06] p-5">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
        <p className="text-sm leading-relaxed text-zinc-300">
          <span className="font-semibold text-accent-300">Key finding — </span>
          {children}
        </p>
      </div>
    </Reveal>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900 shadow-xl shadow-black/30">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-ink-850 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">{title}</span>
          <span className="rounded-md bg-accent-500/15 px-2 py-0.5 font-mono text-[10px] text-accent-300">
            SQL
          </span>
        </div>
        <pre className="no-scrollbar overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-cyan-200/90">
          <code>{code}</code>
        </pre>
      </div>
    </Reveal>
  );
}

/* --------------------------------- Page ---------------------------------- */

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  const { sections } = study;
  const allSlugs = Object.keys(caseStudies);
  const currentIndex = allSlugs.indexOf(slug);
  const nextStudy = caseStudies[allSlugs[(currentIndex + 1) % allSlugs.length]];

  const reportNav = [
    { label: "Problem", href: "#problem", icon: MessageSquareWarning },
    { label: "Objectives", href: "#objectives", icon: Target },
    { label: "Dataset", href: "#dataset", icon: Database },
    { label: "SQL Analysis", href: "#sql", icon: ClipboardList },
    { label: "Python Analysis", href: "#python", icon: FlaskConical },
    { label: "Dashboard", href: "#dashboard", icon: Gauge },
    { label: "Insights", href: "#insights", icon: TrendingUp },
    { label: "Recommendations", href: "#recommendations", icon: ListChecks },
    { label: "Impact", href: "#impact", icon: Rocket },
    { label: "Lessons", href: "#lessons", icon: BookOpenCheck },
    { label: "Tech", href: "#tech", icon: Wrench },
    { label: "Architecture", href: "#architecture", icon: Layers },
  ];

  return (
    <div className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" />
        <div className="absolute -left-32 top-10 h-[380px] w-[380px] rounded-full bg-accent-600/20 blur-[140px]" />
        <div className="absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-cyan-soft/12 blur-[130px]" />
      </div>

      {/* ------------------------------ Header ------------------------------ */}
      <header className="mx-auto max-w-5xl px-6 pb-16 pt-32">
        <Reveal>
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur transition-all duration-300 hover:border-accent-400/50 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All case studies
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-300">
              Case Study {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] text-zinc-400">
              {study.duration}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] text-zinc-400">
              {study.role}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <h1 className="font-display mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {study.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-7 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-zinc-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      {/* --------------------------- In-page navigation --------------------------- */}
      <div className="sticky top-16 z-40 border-y border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
        <div className="no-scrollbar mx-auto flex max-w-5xl gap-1 overflow-x-auto px-6 py-3">
          {reportNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-400 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ------------------------------- Report ------------------------------- */}
      <main className="mx-auto max-w-5xl space-y-20 px-6 py-20">
        {/* 01 · Business Problem */}
        <ReportSection
          number="01"
          id="problem"
          icon={<MessageSquareWarning className="h-5 w-5 text-rose-300" />}
          title="Business Problem"
          intro="The context that started the engagement — stated the way the business felt it."
        >
          <div className="card-glow glass rounded-3xl p-6 sm:p-7">
            <div className="space-y-4">
              {sections.problem.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex gap-3.5">
                    <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-xs font-bold text-rose-300 ring-1 ring-rose-400/20">
                      P{i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-300">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </ReportSection>

        {/* 02 · Business Objectives */}
        <ReportSection
          number="02"
          id="objectives"
          icon={<Target className="h-5 w-5 text-emerald-300" />}
          title="Business Objectives"
          intro="What success looked like at the start — agreed with stakeholders before any analysis."
        >
          <div className="card-glow glass rounded-3xl p-6 sm:p-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sections.objectives.map((o, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.05]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-300">{o}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </ReportSection>

        {/* 03 · Dataset Overview */}
        <ReportSection
          number="03"
          id="dataset"
          icon={<Database className="h-5 w-5 text-cyan-300" />}
          title="Dataset Overview"
          intro="Every analysis stands on data. Here's what was used, its shape, and where it came from."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {sections.dataset.map((ds, i) => (
              <Reveal key={ds.name} delay={i * 0.08}>
                <div className="card-glow glass flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-cyan-300">{ds.name}</span>
                    <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                      {ds.rows}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-[11px] leading-relaxed text-zinc-500">
                    {ds.fields}
                  </p>
                  <div className="mt-3 border-t border-white/[0.06] pt-3">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600">Source</p>
                    <p className="mt-1 text-xs text-zinc-400">{ds.source}</p>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-500">{ds.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </ReportSection>

        {/* 04 · SQL Analysis */}
        <ReportSection
          number="04"
          id="sql"
          icon={<ClipboardList className="h-5 w-5 text-accent-300" />}
          title="SQL Analysis"
          intro="The extraction and transformation layer — real queries, real logic, and what each one revealed."
        >
          {sections.sqlAnalysis.map((item, i) => (
            <div key={item.title} className="space-y-4">
              <Reveal>
                <h3 className="flex items-center gap-2.5 text-sm font-semibold text-white">
                  <span className="font-mono text-xs text-accent-400">Q{i + 1}</span>
                  {item.title}
                </h3>
              </Reveal>
              <CodeBlock title={item.title.toLowerCase().replace(/\s+/g, "-")} code={item.query} />
              <Callout>{item.insight}</Callout>
            </div>
          ))}
        </ReportSection>

        {/* 05 · Python Analysis */}
        <ReportSection
          number="05"
          id="python"
          icon={<FlaskConical className="h-5 w-5 text-violet-300" />}
          title="Python Analysis"
          intro="Modeling and statistical depth on top of the SQL foundation."
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {sections.pythonAnalysis.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card-glow glass flex h-full flex-col rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <ol className="mt-4 flex-1 space-y-2.5">
                    {item.steps.map((step, si) => (
                      <li key={si} className="flex gap-2.5 text-xs leading-relaxed text-zinc-400">
                        <span className="font-mono mt-0.5 shrink-0 text-violet-400">
                          {si + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-500/[0.07] p-3.5 text-xs leading-relaxed text-zinc-300">
                    <span className="font-semibold text-violet-300">Outcome: </span>
                    {item.insight}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </ReportSection>

        {/* 06 · Dashboard */}
        <ReportSection
          number="06"
          id="dashboard"
          icon={<Gauge className="h-5 w-5 text-cyan-300" />}
          title="Dashboard"
          intro="How the findings were made visible — designed for a 30-second executive read and a full analyst deep-dive."
        >
          <Reveal>
            <div className="card-glow glass rounded-3xl p-6 sm:p-7">
              <p className="text-sm leading-relaxed text-zinc-300">{sections.dashboard.overview}</p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sections.dashboard.pages.map((page, i) => (
                  <div
                    key={page}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
                  >
                    <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-xs font-bold text-cyan-300 ring-1 ring-cyan-400/20">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-300">{page}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  <BarChart3 className="h-3.5 w-3.5 text-cyan-300" /> Key metrics tracked
                </p>
                <div className="flex flex-wrap gap-2">
                  {sections.dashboard.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-zinc-200"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </ReportSection>

        {/* 07 · Business Insights */}
        <ReportSection
          number="07"
          id="insights"
          icon={<TrendingUp className="h-5 w-5 text-amber-300" />}
          title="Business Insights"
          intro="The five findings that mattered most — each one traceable to the analysis above."
        >
          <div className="grid grid-cols-1 gap-3">
            {sections.insights.map((insight, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.05]">
                  <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-sm font-bold text-amber-300 ring-1 ring-amber-400/20 transition-all duration-300 group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-300">{insight}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </ReportSection>

        {/* 08 · Recommendations */}
        <ReportSection
          number="08"
          id="recommendations"
          icon={<ListChecks className="h-5 w-5 text-emerald-300" />}
          title="Recommendations"
          intro="Delivered to stakeholders in priority order, each tied to a measurable outcome."
        >
          <div className="card-glow glass rounded-3xl p-6 sm:p-7">
            <div className="space-y-3.5">
              {sections.recommendations.map((rec, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                    <span
                      className={cn(
                        "font-mono flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                        i === 0
                          ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30"
                          : "bg-white/[0.06] text-zinc-300 ring-1 ring-white/10"
                      )}
                    >
                      {i === 0 ? "★" : i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-300">{rec}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </ReportSection>

        {/* 09 · Business Impact */}
        <ReportSection
          number="09"
          id="impact"
          icon={<Rocket className="h-5 w-5 text-rose-300" />}
          title="Business Impact"
          intro="What changed after the work landed."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sections.impact.map((im, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="card-glow glass flex h-full items-start gap-3.5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
                  <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-rose-300" />
                  <p className="text-sm leading-relaxed text-zinc-300">{im}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </ReportSection>

        {/* 10 · Lessons Learned */}
        <ReportSection
          number="10"
          id="lessons"
          icon={<BookOpenCheck className="h-5 w-5 text-sky-300" />}
          title="Lessons Learned"
          intro="What this engagement taught me about doing analytics that actually ships."
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sections.lessons.map((lesson, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/15 ring-1 ring-sky-400/25">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-300">{lesson}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </ReportSection>

        {/* 11 · Technology Used */}
        <ReportSection
          number="11"
          id="tech"
          icon={<Wrench className="h-5 w-5 text-amber-300" />}
          title="Technology Used"
          intro="The exact stack behind this engagement."
        >
          <Reveal>
            <div className="card-glow glass rounded-3xl p-6 sm:p-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sections.tech.map((tech) => {
                  const [name, ...rest] = tech.split(" — ");
                  return (
                    <div
                      key={tech}
                      className="flex items-start gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-accent-400/30"
                    >
                      <span className="font-mono flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-xs font-bold text-accent-300 ring-1 ring-accent-400/20">
                        {name.slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{rest.join(" — ")}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </ReportSection>

        {/* 12 · Architecture Diagram */}
        <ReportSection
          number="12"
          id="architecture"
          icon={<Layers className="h-5 w-5 text-violet-300" />}
          title="Architecture Diagram"
          intro="How data flows from source systems to the final decision."
        >
          <Reveal>
            <div className="card-glow glass overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="bg-grid absolute inset-0 opacity-20" />
              <div className="relative flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
                {sections.architecture.map((node, i) => (
                  <div key={node.node} className="flex flex-1 flex-col items-stretch gap-2 lg:flex-row lg:items-center">
                    <div className="group flex-1 rounded-2xl border border-white/[0.08] bg-ink-900/80 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10">
                      <p className="font-mono text-xs font-bold text-accent-300">{node.node}</p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-500">{node.detail}</p>
                    </div>
                    {i < sections.architecture.length - 1 && (
                      <div className="flex items-center justify-center py-1 lg:px-0.5">
                        <ChevronRight className="hidden h-4 w-4 text-accent-400/60 lg:block" />
                        <ArrowDown className="h-4 w-4 text-accent-400/60 lg:hidden" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Data Sources → Analysis → Visualization → Decision
              </p>
            </div>
          </Reveal>
        </ReportSection>

        {/* ------------------------------ Footer CTA ------------------------------ */}
        <div className="card-glow rounded-3xl bg-gradient-to-br from-accent-600 via-violet-600 to-cyan-600 p-8 text-center sm:p-10">
          <div className="bg-grid absolute inset-0 rounded-3xl opacity-20" />
          <Reveal className="relative">
            <Bot className="mx-auto h-8 w-8 text-white/80" />
            <h2 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">
              Want to talk through this project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
              Ask Himanshu AI about it on the portfolio, read the next case study, or reach out
              directly — the data is always happy to explain itself.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#ai"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Bot className="h-4 w-4" /> Ask Himanshu AI
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                All case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Next case study */}
        <Reveal>
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.05]"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Next case study
              </p>
              <p className="font-display mt-1.5 text-lg font-semibold text-white group-hover:text-accent-300">
                {nextStudy.title}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-accent-500/20">
              <ArrowRight className="h-5 w-5 text-accent-300" />
            </span>
          </Link>
        </Reveal>
      </main>

      {/* Footer mini */}
      <footer className="border-t border-white/[0.06] py-8">
        <p className="text-center text-xs text-zinc-600">
          {study.title} · Case study by {profile.name} · Back to the{" "}
          <Link href="/" className="text-accent-300 transition-colors hover:text-white">
            portfolio
          </Link>
        </p>
      </footer>
    </div>
  );
}
