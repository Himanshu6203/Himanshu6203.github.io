"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Database,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code2,
  chart: BarChart3,
  layers: Layers,
  database: Database,
  wrench: Wrench,
};

const groupAccents: Record<string, string> = {
  programming: "from-accent-500 to-violet-soft",
  analytics: "from-cyan-500 to-blue-600",
  libraries: "from-violet-500 to-fuchsia-500",
  database: "from-emerald-500 to-teal-500",
  tools: "from-amber-500 to-orange-500",
};

const barWidths = [75, 90, 70, 78, 72];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-soft/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for"
          highlight="business impact"
          description="From raw SQL extraction to executive Power BI storytelling — every skill is chosen to shorten the distance between data and decisions."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon];
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (gi % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-glow glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-500/10"
              >
                {/* Hover glow blob */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
                    groupAccents[group.id]
                  )}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                      groupAccents[group.id]
                    )}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-accent-400">
                    0{gi + 1}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{group.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + si * 0.06, duration: 0.35 }}
                      className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-accent-400/50 hover:bg-accent-500/10 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Proficiency bar */}
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between text-[10px] uppercase tracking-wider text-zinc-600">
                    <span>Core strength</span>
                    <span className="text-zinc-500">{barWidths[gi]}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${barWidths[gi]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        groupAccents[group.id]
                      )}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA tile */}
          <Reveal delay={0.2} className="h-full">
            <div className="card-glow relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-accent-600 via-violet-600 to-cyan-600 p-6 shadow-2xl shadow-accent-500/25">
              <div className="bg-grid absolute inset-0 opacity-30" />
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Always learning
                </p>
                <h3 className="font-display mt-3 text-xl font-bold leading-snug text-white">
                  Currently exploring Product Analytics & experimentation
                </h3>
              </div>
              <a
                href="#ai"
                className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/25"
              >
                Ask me about my stack →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
