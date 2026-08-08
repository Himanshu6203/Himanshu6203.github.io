"use client";

import { ArrowUp, Heart, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#top" className="font-display inline-flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 via-violet-soft to-cyan-soft text-sm text-white shadow-lg shadow-accent-500/25">
                HK
              </span>
              {profile.name}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              Turning raw data into business decisions — SQL, Python, Excel, and Power BI.
            </p>
          </div>

          {/* Quick links */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-500 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: profile.github, icon: GitHubIcon, label: "GitHub" },
              { href: profile.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-zinc-600">
            © {new Date().getFullYear()} {profile.name} · Crafted with
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
            and a lot of SQL
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-accent-400/50 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
