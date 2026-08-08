"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Branded loading screen — shows once per session, then fades out. */
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("hk-loading-seen");
    if (seen) {
      const t = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(t);
    }
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 22 + 8;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("hk-loading-seen", "1");
        }, 350);
      }
      setProgress(Math.min(100, Math.round(p)));
    }, 160);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink-950"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" />
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-3"
          >
            <div className="font-display relative text-4xl font-bold tracking-tight text-white">
              H<span className="text-gradient">K</span>
            </div>
            <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-500 via-violet-soft to-cyan-soft"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              Loading insights {progress}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
