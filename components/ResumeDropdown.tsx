"use client";

import { useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const resumes = [
  {
    title: "Data Analyst",
    file: "/resume/Data_Analyst_Resume.pdf",
    description: "SQL • Python • Power BI • Excel",
  },
  {
    title: "Business Analyst",
    file: "/resume/Business_Analyst_Resume.pdf",
    description: "BRD • SQL • Dashboard",
  },
  {
    title: "Product Analyst",
    file: "/resume/Product_Analyst_Resume.pdf",
    description: "Product Metrics • SQL",
  },
  {
    title: "Product Manager",
    file: "/resume/Product_Manager_Resume.pdf",
    description: "Roadmaps • Strategy",
  },
];

export default function ResumeDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur transition-all duration-300 hover:border-accent-400/60 hover:bg-white/[0.08]"
      >
        Download Resume
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-3 w-80 rounded-2xl border border-white/10 bg-zinc-900 p-3 shadow-2xl z-50"
          >
            {resumes.map((resume) => (
              <a
                key={resume.title}
                href={resume.file}
                download
                className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/5"
              >
                <FileText className="mt-1 h-5 w-5 text-cyan-400" />

                <div>
                  <p className="font-semibold text-white">
                    {resume.title}
                  </p>

                  <p className="text-sm text-zinc-400">
                    {resume.description}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}