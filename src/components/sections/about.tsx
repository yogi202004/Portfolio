import { BrainCircuit, Sparkles, TextSearch, Workflow } from "lucide-react";
import { about } from "@/content/site";
import { Accent, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { StaggerList } from "@/components/ui/stagger-list";

const icons: Record<string, typeof Sparkles> = {
  sparkles: Sparkles,
  workflow: Workflow,
  search: TextSearch,
  brain: BrainCircuit,
};

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          From AI &amp; data science to <Accent>production software.</Accent>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-lg leading-relaxed text-muted first:text-fg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ProfilePanel />
        </Reveal>
      </div>
    </Section>
  );
}

function ProfilePanel() {
  return (
    <section
      aria-label="AI engineering profile"
      className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface/70 shadow-2xl shadow-black/30"
    >
      <div aria-hidden className="absolute -top-24 -right-24 size-64 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <header className="relative flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-muted">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
          ai_engineering.profile
        </p>
        <ul className="flex gap-1.5" aria-label="Core areas">
          {["LLM", "RAG", "ML"].map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <ol className="relative space-y-1 p-3 sm:p-4">
        {about.profile.map((item, i) => {
          const Icon = icons[item.icon] ?? Sparkles;
          return (
            <li
              key={item.layer}
              className="group relative grid grid-cols-[auto_1fr] gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.025]"
            >
              {/* Connector to the next layer, with a pulse flowing down it in sequence */}
              {i < about.profile.length - 1 && (
                <span aria-hidden className="absolute top-12 -bottom-4 left-[30px] w-px overflow-hidden bg-line">
                  <span
                    className="animate-travel absolute left-0 h-12 w-px bg-gradient-to-b from-transparent via-accent to-transparent"
                    style={{ animationDelay: `${i * 1.07}s` }}
                  />
                </span>
              )}
              <span className="relative z-10 grid size-9 place-items-center rounded-lg border border-line-strong bg-raised text-accent transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                <Icon size={16} aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-subtle">0{i + 1}</span>
                  <h3 className="text-sm font-medium text-fg">{item.layer}</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.summary}</p>
                <StaggerList
                  items={item.concepts}
                  label={`${item.layer} concepts`}
                  className="mt-3 flex flex-wrap gap-1.5"
                  itemClassName="rounded-md border border-line bg-white/[0.02] px-2 py-0.5 font-mono text-[10.5px] text-fg/80"
                />
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
