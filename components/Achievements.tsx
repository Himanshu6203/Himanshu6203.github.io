"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Users, Zap, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements, type Achievement } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<Achievement["icon"], LucideIcon> = {
  trophy: Trophy,
  flame: Flame,
  zap: Zap,
  users: Users,
};

const accents: Record<Achievement["icon"], string> = {
  trophy: "from-amber-400 to-orange-500",
  flame: "from-rose-500 to-red-600",
  zap: "from-accent-500 to-violet-soft",
  users: "from-cyan-500 to-blue-600",
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof of"
          highlight="execution"
          description="Competitions won, stages survived, and teams led — the moments that shaped how I work."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((ach, i) => {
            const Icon = icons[ach.icon];
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-glow glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-500/10 sm:p-7"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25",
                    accents[ach.icon]
                  )}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className={cn(
                      "flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br p-3.5 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                      accents[ach.icon]
                    )}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-accent-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-5">
                  <h3 className="font-display text-lg font-semibold text-white">{ach.title}</h3>
                  <span
                    className={cn(
                      "mt-1.5 inline-block rounded-full bg-gradient-to-r bg-clip-text text-sm font-semibold text-transparent",
                      accents[ach.icon]
                    )}
                  >
                    {ach.subtitle}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{ach.description}</p>
                </div>

                <div className="relative mt-5 h-0.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("h-full rounded-full bg-gradient-to-r", accents[ach.icon])}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
