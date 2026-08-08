"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass-strong mx-4 shadow-2xl shadow-black/40 sm:mx-6 lg:mx-auto" : "mx-4 lg:mx-auto"
          )}
        >
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 via-violet-soft to-cyan-soft text-sm font-bold text-white shadow-lg shadow-accent-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              HK
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold text-white">
                Himanshu <span className="text-gradient">Kothariya</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Data · Business Analyst
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                  active === link.href.slice(1)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#ai"
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-violet-soft px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:shadow-accent-500/45 hover:brightness-110 sm:inline-flex"
            >
              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Ask Himanshu AI
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition-colors hover:bg-white/[0.1] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] flex flex-col bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="bg-grid bg-grid-fade absolute inset-0 opacity-40" />
            <div className="relative flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-bold text-white">
                H<span className="text-gradient">K</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition-colors hover:bg-white/[0.1]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display border-b border-white/5 py-4 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white"
                >
                  <span className="mr-3 font-mono text-xs text-accent-400">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#ai"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-500 to-violet-soft px-6 py-4 text-base font-semibold text-white shadow-xl shadow-accent-500/30"
              >
                <Sparkles className="h-5 w-5" />
                Ask Himanshu AI
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
