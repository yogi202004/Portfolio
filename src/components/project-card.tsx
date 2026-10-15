"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      onPointerMove={onPointerMove}
      className={`spotlight relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface/60 transition-colors ${
        open ? "border-line-strong" : "border-line hover:border-line-strong"
      }`}
    >
      {project.featured && (
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      )}

      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">{project.category}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight text-fg sm:text-[1.75rem]">{project.title}</h3>
            <p className="mt-2 text-muted">{project.tagline}</p>
          </div>
          <span aria-hidden className="font-serif text-5xl leading-none text-white/[0.07] italic">
            0{index + 1}
          </span>
        </div>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-fg/80">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors hover:border-accent/50"
          >
            {open ? "Hide case study" : "Read case study"}
            <ChevronDown size={15} aria-hidden className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label} <ArrowUpRight size={14} aria-hidden />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="grid gap-6 border-t border-line p-6 sm:p-8 md:grid-cols-3">
              <CaseBlock label="Problem">
                <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
              </CaseBlock>
              <CaseBlock label="Approach">
                <BulletList items={project.approach} />
              </CaseBlock>
              <CaseBlock label="My contribution">
                <BulletList items={project.contribution} />
              </CaseBlock>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function CaseBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">{label}</h4>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}
