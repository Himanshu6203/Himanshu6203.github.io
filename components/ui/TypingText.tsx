"use client";

import { useEffect, useRef, useState } from "react";

type TypingTextProps = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

/** Typewriter effect that cycles through a list of words. */
export default function TypingText({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 38,
  pause = 1800,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = deleting ? deletingSpeed : typingSpeed;
    let nextText = text;
    let nextDeleting = deleting;
    let nextIndex = wordIndex;

    if (!deleting && text === current) {
      // Pause at full word, then start deleting.
      timeout.current = setTimeout(() => setDeleting(true), pause);
      return () => {
        if (timeout.current) clearTimeout(timeout.current);
      };
    }

    if (deleting && text === "") {
      // Move to the next word.
      nextDeleting = false;
      nextIndex = (wordIndex + 1) % words.length;
      delay = 60;
    } else {
      nextText = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
    }

    timeout.current = setTimeout(() => {
      if (nextText !== text) setText(nextText);
      if (nextDeleting !== deleting) setDeleting(nextDeleting);
      if (nextIndex !== wordIndex) setWordIndex(nextIndex);
    }, delay);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="animate-caret ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-full bg-gradient-to-b from-accent-400 to-cyan-soft" />
    </span>
  );
}
