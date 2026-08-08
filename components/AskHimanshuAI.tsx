"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, CornerDownLeft, SendHorizonal, Sparkles, User } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { aiKnowledge, aiSuggestedQuestions } from "@/lib/data";

type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

const fallback =
  "That's beyond my knowledge base, but I'm happy to talk about it — reach out via the contact section below and Himanshu will get back to you. Meanwhile, try one of the suggested questions!";

function getAnswer(input: string): string {
  const query = input.toLowerCase();

  let best: { answer: string; score: number } | null = null;

  for (const entry of aiKnowledge) {
    let score = 0;

    for (const keyword of entry.keywords) {
      const keywordLower = keyword.toLowerCase();

      if (query.includes(keywordLower)) {
        score += keywordLower.length;

        // Give extra weight to exact phrase matches
        if (query === keywordLower) {
          score += 10;
        }
      }
    }

    if (score > 0 && (!best || score > best.score)) {
      best = {
        answer: entry.answer,
        score,
      };
    }
  }

  return best?.answer ?? fallback;
}

export default function AskHimanshuAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "ai",
      text: "Hi, I'm Himanshu's AI portfolio assistant. Ask me anything about his skills, projects, or experience — or pick a suggestion below.",
    },
  ]);
  const idRef = useRef(1);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setInput("");
    setMessages((m) => [...m, { id: idRef.current++, role: "user", text: trimmed }]);
    setTyping(true);
    const reply = getAnswer(trimmed);
    setTimeout(() => {
      setMessages((m) => [...m, { id: idRef.current++, role: "ai", text: reply }]);
      setTyping(false);
    }, 1100);
  };

  return (
    <section id="ai" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-accent-600/15 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-soft/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Ask Himanshu AI"
          title="Got a question?"
          highlight="Just ask."
          description="Ask about my projects, technical skills, experience, or approach to solving business problems."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-glow glass-strong overflow-hidden rounded-3xl shadow-2xl shadow-black/50"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.03] px-5 py-4">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-soft shadow-lg shadow-accent-500/30">
              <Bot className="h-5 w-5 text-white" />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                Himanshu AI <Sparkles className="h-3.5 w-3.5 text-accent-300" />
              </p>
              <p className="text-xs text-zinc-500">Portfolio knowledge base · replies instantly</p>
            </div>
            <span className="hidden rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 sm:inline-block">
              Online
            </span>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex h-[380px] flex-col gap-4 overflow-y-auto px-5 py-6 sm:h-[420px]"
          >
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-end gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "ai" && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-soft">
                    <Bot className="h-4 w-4 text-white" />
                  </span>
                )}
                <div
                  className={
                    msg.role === "user"
                      ? "max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-r from-accent-500 to-violet-soft px-4 py-3 text-sm leading-relaxed text-white shadow-lg shadow-accent-500/20"
                      : "max-w-[85%] rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-zinc-200"
                  }
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <User className="h-4 w-4 text-zinc-300" />
                  </span>
                )}
              </motion.div>
            ))}

            {/* Typing indicator */}
            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-end gap-2.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-soft">
                    <Bot className="h-4 w-4 text-white" />
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.04] px-4 py-3.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-accent-300"
                        animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suggested questions */}
          <div className="border-t border-white/[0.06] px-5 py-4">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {aiSuggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  disabled={typing}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:bg-accent-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors focus-within:border-accent-400/50"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
            }}
            placeholder="Ask about projects, skills, experience…"
            className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
            aria-label="Ask Himanshu AI a question"
          />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-violet-soft text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {typing ? (
                  <CornerDownLeft className="h-4 w-4" />
                ) : (
                  <SendHorizonal className="h-4 w-4" />
                )}
              </button>
            </form>
            <p className="mt-2.5 text-center font-mono text-[10px] text-zinc-600">
              Trained on Himanshu&apos;s public portfolio data · not a real LLM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
