"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Briefcase,
  Download,
  Mail,
  Sparkles,
  Timer,
  UserCheck,
  X,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import {
  achievements,
  profile,
  projects,
  recruiterSummary,
  skillGroups,
  whyHirePoints,
} from "@/lib/data";

export default function RecruiterMode() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 18 }}
        onClick={() => setOpen(true)}
        className="group fixed bottom-6 right-6 z-[85] flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 via-violet-soft to-cyan-soft p-[1.5px] shadow-2xl shadow-accent-500/40 transition-transform duration-300 hover:scale-105"
        aria-label="Open Recruiter Mode"
      >
        <span className="relative flex items-center gap-2.5 rounded-full bg-ink-900/95 py-3 pl-4 pr-5 backdrop-blur transition-colors duration-300 group-hover:bg-ink-850">
          <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
          </span>
          <Sparkles className="h-5 w-5 text-accent-300 transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-sm font-semibold text-white">Recruiter Mode</span>
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[96] flex items-end justify-center bg-ink-950/80 backdrop-blur-md sm:items-center sm:p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="no-scrollbar relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900/95 backdrop-blur-2xl sm:rounded-3xl"
            >
              {/* Header */}
              <div className="relative overflow-hidden rounded-t-3xl border-b border-white/[0.07] p-6 sm:p-8">
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-500/25 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-cyan-soft/15 blur-3xl" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 transition-colors hover:bg-white/[0.12] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="relative">
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent-300">
                    <UserCheck className="h-3.5 w-3.5" /> Recruiter Mode · On
                  </p>
                  <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
                    Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
                  </h2>
                  <p className="mt-1.5 text-sm text-zinc-400">
                    {profile.roles.join(" · ")} · {profile.education.short}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={profile.resumeUrl}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-violet-soft px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-all duration-300 hover:brightness-110"
                    >
                      <Download className="h-4 w-4" /> Download Resume
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      <GitHubIcon className="h-4 w-4" /> GitHub
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      <LinkedInIcon className="h-4 w-4" /> LinkedIn
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      <Mail className="h-4 w-4" /> Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                {/* 30-second summary */}
                <div className="flex gap-3 rounded-2xl border border-accent-400/20 bg-accent-500/[0.06] p-5">
                  <Timer className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-300">
                      30-Second Profile
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{recruiterSummary}</p>
                  </div>
                </div>

                {/* Why hire me */}
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    <BadgeCheck className="h-4 w-4 text-emerald-400" /> Why Hire Me
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {whyHirePoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3.5 text-sm text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-400 to-cyan-soft" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top skills */}
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    <Sparkles className="h-4 w-4 text-accent-300" /> Top Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skillGroups
                      .flatMap((g) => g.skills)
                      .filter((s) => ["Python", "SQL", "Power BI", "Excel", "Pandas", "MySQL", "Statistics"].includes(s))
                      .map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-200"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Top projects */}
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    <Briefcase className="h-4 w-4 text-cyan-300" /> Top Projects
                  </p>
                  <div className="space-y-2">
                    {projects.slice(0, 3).map((project) => (
                      <a
                        key={project.slug}
                        href={`/case-studies/${project.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-accent-400/40 hover:bg-white/[0.06]"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">
                            {project.title}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-zinc-500">
                            {project.stack.join(" · ")}
                          </p>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent-300">
                          Read →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    <Award className="h-4 w-4 text-amber-400" /> Business Achievements
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {achievements.map((ach) => (
                      <div
                        key={ach.title}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3.5"
                      >
                        <p className="text-sm font-semibold text-white">{ach.title}</p>
                        <p className="mt-0.5 text-xs text-amber-300/90">{ach.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="pt-2 text-center text-xs text-zinc-600">
                  Want to talk?{" "}
                  <a
                    href={`mailto:${profile.email}?subject=Opportunity for Himanshu Singh Kothariya`}
                    className="font-semibold text-accent-300 transition-colors hover:text-white"
                  >
                    {profile.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
