"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    // Simulated send — swap with a real endpoint when available.
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-accent-600/15 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's turn data into"
          highlight="decisions together"
          description="Recruiting, collaborating, or just curious about the work — my inbox is open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* --------------------------- Info panel --------------------------- */}
          <Reveal direction="right">
            <div className="card-glow glass flex h-full flex-col gap-4 rounded-3xl p-7">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Direct lines to <span className="text-gradient">{profile.firstName}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Prefer email or socials? Pick whichever channel fits — all lead to the same
                  person.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-soft shadow-lg shadow-accent-500/25 transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-zinc-500">Email</span>
                    <span className="block truncate text-sm font-medium text-white">
                      {profile.email}
                    </span>
                  </span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
                    <GitHubIcon className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-zinc-500">GitHub</span>
                    <span className="block truncate text-sm font-medium text-white">
                      himanshukothariya
                    </span>
                  </span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:scale-110">
                    <LinkedInIcon className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-zinc-500">LinkedIn</span>
                    <span className="block truncate text-sm font-medium text-white">
                      /in/himanshu-singh-kothariya
                    </span>
                  </span>
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-110">
                    <Download className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-zinc-500">Resume</span>
                    <span className="block truncate text-sm font-medium text-white">
                      Download PDF
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-auto flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm text-zinc-400">
                <MapPin className="h-4 w-4 shrink-0 text-accent-300" />
                {profile.location} · Open to remote &amp; on-site roles
              </div>
            </div>
          </Reveal>

          {/* ------------------------------ Form ------------------------------ */}
          <Reveal direction="left" delay={0.1}>
            <div className="card-glow glass relative overflow-hidden rounded-3xl p-7 sm:p-8">
              <div className="bg-grid absolute inset-0 opacity-30" />
              <div className="relative">
                <AnimatePresence mode="wait">
                  {status === "sent" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="flex min-h-[380px] flex-col items-center justify-center gap-5 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-2xl shadow-emerald-500/40"
                      >
                        <CheckCircle2 className="h-10 w-10 text-white" />
                        <span className="absolute inset-0 rounded-full bg-emerald-400/50 animate-pulse-ring" />
                      </motion.div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          Message sent! 🎉
                        </h3>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
                          Thanks for reaching out — {profile.firstName} will get back to you within
                          24–48 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus("idle")}
                        className="rounded-full border border-white/12 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/30 hover:text-white"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-xs font-medium text-zinc-400">
                            Your name
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jane Recruiter"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-accent-400/60 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-xs font-medium text-zinc-400">
                            Work email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jane@company.com"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-accent-400/60 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="mb-2 block text-xs font-medium text-zinc-400">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="Data Analyst opportunity"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-accent-400/60 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-2 block text-xs font-medium text-zinc-400">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell me about the role, the data, the problem…"
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-accent-400/60 focus:outline-none"
                        />
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-xl border border-rose-400/25 bg-rose-400/10 px-4 py-2.5 text-xs text-rose-300"
                        >
                          {error}
                        </motion.p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 via-violet-soft to-cyan-soft bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent-500/30 transition-all duration-500 hover:bg-right disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "sending" ? (
                          <>
                            <motion.span
                              className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-center font-mono text-[10px] text-zinc-600">
                        This demo form simulates delivery — wire it to your email service of choice.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
