"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="earned my stripes"
          description="Internships and leadership roles where data met real business pressure."
        />

        <div className="relative">
          {/* Timeline spine */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-[22px] top-2 w-px origin-top bg-gradient-to-b from-accent-400 via-violet-soft/50 to-transparent sm:left-1/2"
          />

          {experiences.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <div key={exp.role} className="relative mb-12 last:mb-0 sm:grid sm:grid-cols-2 sm:gap-10">
                {/* Node */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
                  className="absolute left-[22px] top-10 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center sm:left-1/2"
                >
                  <span className="absolute h-6 w-6 rounded-full bg-accent-500/30 animate-pulse-ring" />
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-cyan-soft shadow-lg shadow-accent-500/40">
                    <span className="h-1 w-1 rounded-full bg-white" />
                  </span>
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, x: left ? -48 : 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-12 sm:ml-0 ${left ? "sm:col-start-1" : "sm:col-start-2"}`}
                >
                  <div className="card-glow glass group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-300">
                        <Briefcase className="h-3 w-3" /> {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-zinc-400">
                        <CalendarDays className="h-3 w-3" /> {exp.period}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-400">
                      <Building2 className="h-3.5 w-3.5 text-accent-300" />
                      {exp.company}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.points.map((point, pi) => (
                        <li key={pi} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-400 to-cyan-soft" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-300 ring-1 ring-white/[0.07] transition-colors hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Empty grid cell for alternating layout */}
                <div className={left ? "sm:col-start-2" : "sm:col-start-1"} />
              </div>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <p className="text-center text-sm text-zinc-500">
            ...and always open to the next challenge where data drives decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
