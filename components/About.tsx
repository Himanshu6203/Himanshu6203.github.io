"use client";

import { Compass, GraduationCap, LineChart, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutStats, profile } from "@/lib/data";

const journey = [
  {
    step: "01",
    title: "The curiosity spark",
    text: "While studying ECE at IIIT Naya Raipur, I kept asking 'why' behind every pattern — and realized data had the answers.",
  },
  {
    step: "02",
    title: "The analytics toolkit",
    text: "I taught myself SQL, Python, and Power BI by solving real business problems — from campus competitions to startup pitches.",
  },
  {
    step: "03",
    title: "The decision mindset",
    text: "Today I approach every dataset as a business decision waiting to be made — measuring, segmenting, and recommending with evidence.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="The analyst behind"
          highlight="the decisions"
          description="A quick, honest look at who I am, why I do analytics, and where I'm headed."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* ------------------------- Narrative ------------------------ */}
          <div className="space-y-6">
            <Reveal direction="right">
              <div className="glass card-glow rounded-3xl p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-cyan-soft shadow-lg shadow-accent-500/25">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-300">
                      Professional Introduction
                    </p>
                    <p className="mt-2 leading-relaxed text-zinc-300">
                      I&apos;m <span className="font-medium text-white">{profile.name}</span> — a
                      data-driven problem solver with a background in engineering and a passion for
                      business. I take messy, disconnected data and turn it into{" "}
                      <span className="text-gradient font-medium">clear, confident decisions</span>:
                      segments that matter, dashboards people actually use, and recommendations with
                      numbers behind them.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.08}>
              <div className="glass card-glow rounded-3xl p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25">
                    <Compass className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                      Career Objective
                    </p>
                    <p className="mt-2 leading-relaxed text-zinc-300">
                      To grow into a <span className="text-white">Product Analyst</span> by delivering
                      analytics that directly shape product and business strategy. I want to sit where
                      data meets decisions — quantifying user behavior, guiding roadmaps, and proving
                      impact — while continuously sharpening my craft in statistics, experimentation,
                      and storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.14}>
              <div className="glass card-glow rounded-3xl p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-soft">
                      Education
                    </p>
                    <p className="mt-2 font-medium text-white">{profile.education.degree}</p>
                    <p className="text-sm text-zinc-400">{profile.education.institution}</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                      Engineering taught me structured problem-solving, statistical thinking, and how
                      to learn complex systems fast — the same muscles analytics demands every day.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* --------------------- Stats + journey ---------------------- */}
          <div className="space-y-6">
            <Reveal direction="left">
              <div className="grid grid-cols-2 gap-3">
                {aboutStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="card-glow glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-[11px] uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                    <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-soft transition-all duration-1000"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="glass card-glow rounded-3xl p-7">
                <div className="mb-5 flex items-center gap-2.5">
                  <LineChart className="h-4 w-4 text-accent-300" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-300">
                    Journey into Analytics
                  </p>
                </div>
                <div className="relative space-y-6">
                  <span className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-accent-400 via-violet-soft/60 to-cyan-soft/40" />
                  {journey.map((item) => (
                    <div key={item.step} className="relative flex gap-4 pl-0">
                      <span className="relative z-10 mt-1 flex h-[11px] w-[11px] shrink-0 items-center justify-center">
                        <span className="absolute h-[11px] w-[11px] rounded-full bg-gradient-to-br from-accent-400 to-cyan-soft" />
                        <span className="absolute h-[11px] w-[11px] animate-ping rounded-full bg-accent-400/40" />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] text-accent-400">{item.step}</p>
                        <p className="mt-0.5 text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
