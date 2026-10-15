"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Wraps the experience list and draws its vertical line as you scroll through it. */
export function TimelineTrack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <ol ref={ref} className="relative space-y-16">
      <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line sm:left-[11px]" />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { scaleY }}
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-accent via-accent/60 to-accent/10 sm:left-[11px]"
      />
      {children}
    </ol>
  );
}
