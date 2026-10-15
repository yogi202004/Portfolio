"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, MapPin, School } from "lucide-react";
import type { EducationItem } from "@/content/education";

/** Chronological roadmap of milestones, joined by a line that draws as you scroll. */
export function EducationRoadmap({ items }: { items: EducationItem[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const last = items.length - 1;

  return (
    <ol ref={ref} className="relative grid gap-8 lg:grid-cols-3 lg:gap-6">
      {/* Track: vertical on mobile, horizontal on desktop */}
      <span aria-hidden className="absolute top-9 bottom-5 left-5 w-px bg-line lg:hidden" />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { scaleY: progress }}
        className="absolute top-9 bottom-5 left-5 w-px origin-top bg-gradient-to-b from-accent/30 via-accent to-accent lg:hidden"
      />
      <span aria-hidden className="absolute top-5 right-[calc((100%_-_3rem)/3_-_1.25rem)] left-5 hidden h-px bg-line lg:block" />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { scaleX: progress }}
        className="absolute top-5 right-[calc((100%_-_3rem)/3_-_1.25rem)] left-5 hidden h-px origin-left bg-gradient-to-r from-accent/30 via-accent to-accent lg:block"
      />

      {items.map((item, i) => {
        const current = i === last;
        const Icon = current ? GraduationCap : School;
        return (
          <motion.li
            key={item.degree}
            // The card drives its score bar via variants, so the bar animates whenever the card does.
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 } },
            }}
            className="relative grid grid-cols-[auto_1fr] gap-5 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-6"
          >
            {/* Milestone node */}
            <div className="flex items-start gap-3 pt-4 lg:items-center lg:pt-0">
              <span
                className={`relative z-10 grid size-10 place-items-center rounded-full border ${
                  current
                    ? "border-accent/60 bg-accent text-canvas shadow-[0_0_24px_rgb(79_209_161/0.35)]"
                    : "border-line-strong bg-raised text-accent"
                }`}
              >
                <Icon size={17} aria-hidden />
              </span>
              <span className="relative z-10 hidden bg-canvas px-2 font-mono text-xs tracking-wider text-accent lg:inline">
                {item.period}
              </span>
            </div>

            <div
              className={`group relative h-full overflow-hidden rounded-2xl border p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 sm:p-6 ${
                current ? "border-accent/30 bg-accent/[0.04]" : "border-line bg-surface/60 hover:border-line-strong"
              }`}
            >
              {current && (
                <div aria-hidden className="absolute -top-16 -right-16 size-40 rounded-full bg-accent/10 blur-2xl" />
              )}
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                    0{i + 1} · {item.stage}
                  </span>
                  <span className="font-mono text-xs text-accent lg:hidden">{item.period}</span>
                </div>
                <h3 className="mt-3 font-medium text-balance text-fg">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                {item.location && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-subtle">
                    <MapPin size={12} aria-hidden /> {item.location}
                  </p>
                )}

                {/* Score bar */}
                <div className="mt-5">
                  <div className="mb-2 flex items-baseline justify-between font-mono text-[11px]">
                    <span className="text-subtle uppercase">Score</span>
                    <span className="text-fg">{item.score}</span>
                  </div>
                  <div
                    className="h-1 overflow-hidden rounded-full bg-white/[0.06]"
                    role="img"
                    aria-label={`Score: ${item.score}`}
                  >
                    <motion.div
                      className="h-full origin-left rounded-full bg-gradient-to-r from-accent-deep to-accent"
                      style={{ width: `${item.progress}%` }}
                      variants={{
                        hidden: { scaleX: reduce ? 1 : 0 },
                        show: { scaleX: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.15 } },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
