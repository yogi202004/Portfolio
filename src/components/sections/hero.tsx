"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { AgentGraph } from "@/components/agent-graph";
import { SocialLinks } from "@/components/ui/social-links";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

const stackTicker = ["Next.js", "NestJS", "Supabase", "PostgreSQL", "LangGraph", "LangChain", "TypeScript"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax: copy drifts up and fades, the portrait lags behind, the graph card floats faster.
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const p = <T,>(style: T) => (reduce ? undefined : style);

  return (
    <section ref={ref} id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div style={p({ y: textY, opacity: textOpacity })}>
          <motion.p
            {...fadeUp(0)}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-2 text-xs text-muted backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="animate-pulse-dot absolute inset-0 rounded-full bg-accent" />
            </span>
            <span>
              {site.role} at <span className="text-fg">{site.company}</span>
            </span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...fadeUp(0.08)}
            className="text-[2.6rem] leading-[1.05] font-medium tracking-tight text-balance text-fg sm:text-6xl lg:text-[4.25rem]"
          >
            {site.headline.lead}{" "}
            <span className="font-serif font-normal text-accent italic">{site.headline.accent}</span>{" "}
            {site.headline.tail}
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-canvas transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
            >
              <FileText size={16} aria-hidden />
              View resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm text-fg transition-colors hover:border-accent/50"
            >
              See my work
              <ArrowDown size={15} aria-hidden />
            </a>
            <SocialLinks className="ml-1" />
          </motion.div>

          <motion.p {...fadeUp(0.32)} className="mt-10 flex items-center gap-2 text-sm text-subtle">
            <MapPin size={14} aria-hidden /> {site.location}
          </motion.p>
        </motion.div>

        {/* Portrait with floating agent-graph card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          style={p({ y: photoY })}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/15 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[50%_30%] saturate-[0.9]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-right">
                <p className="text-lg font-medium text-fg">{site.name}</p>
                <p className="font-mono text-xs text-muted">
                  <span className="max-sm:hidden">{site.company} · </span>AI &amp; full-stack
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
            style={p({ y: cardY })}
            // Smaller on phones/tablets and kept in the jacket corner (no parallax there) so it never reaches the face.
            className="absolute -bottom-6 -left-3 w-36 max-lg:transform-none! sm:-left-6 sm:w-40 lg:-bottom-10 lg:-left-12 lg:w-64"
          >
            <AgentGraph />
          </motion.div>
        </motion.div>
      </div>

      {/* Stack ticker */}
      <div className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
          <span className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">Daily stack</span>
          {stackTicker.map((tech) => (
            <span key={tech} className="text-sm text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
