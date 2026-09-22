import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

/**
 * Cycles a word/phrase in place: each swaps in with a blur + slide, and the
 * inline box springs to the new word's width. Adapted from the 21st.dev
 * component to this project's stack (no Tailwind classes / path aliases).
 */
export default function AnimatedTextCycle({
  words,
  interval = 2600,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState<string | number>("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure the width of the current word to animate the container to it.
  useEffect(() => {
    if (measureRef.current) {
      const el = measureRef.current.children[currentIndex] as HTMLElement | undefined;
      if (el) setWidth(el.getBoundingClientRect().width);
    }
  }, [currentIndex, words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants: Variants = {
    hidden: { y: -18, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      y: 18,
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* Hidden measurement copies of every word */}
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          visibility: "hidden",
          opacity: 0,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {words.map((word, i) => (
          <span key={i} className={className} style={{ whiteSpace: "nowrap" }}>
            {word}
          </span>
        ))}
      </div>

      {/* Visible animated word */}
      <motion.span
        style={{ position: "relative", display: "inline-block" }}
        animate={{
          width,
          transition: { type: "spring", stiffness: 150, damping: 15, mass: 1.2 },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={className}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}
