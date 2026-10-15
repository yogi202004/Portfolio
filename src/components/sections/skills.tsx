import { Bot, Code2, Database, LayoutTemplate, Plug, Server, ShieldCheck } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/content/skills";
import { Accent, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { StaggerList } from "@/components/ui/stagger-list";

const icons: Record<SkillGroup["icon"], typeof Bot> = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  bot: Bot,
  plug: Plug,
  shield: ShieldCheck,
  code: Code2,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title={
        <>
          A toolkit for the <Accent>whole stack.</Accent>
        </>
      }
      intro="The tools I use to take a feature from database schema to agent logic to interface."
    >
      <div className="overflow-hidden rounded-3xl border border-line bg-surface/40">
        {/* Column labels (desktop) */}
        <div className="hidden grid-cols-[19rem_1fr] gap-10 border-b border-line px-8 py-3 font-mono text-[10px] tracking-[0.18em] text-subtle uppercase lg:grid">
          <span>Domain</span>
          <span>Tools &amp; concepts</span>
        </div>

        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={i * 0.04} y={16}>
              <div
                className={`group relative grid gap-4 px-5 py-6 transition-colors hover:bg-white/[0.02] sm:px-8 lg:grid-cols-[19rem_1fr] lg:items-center lg:gap-10 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                {/* Accent bar that slides in on hover */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-y-100"
                />

                <div className="flex items-center gap-4">
                  <span className="w-5 shrink-0 font-mono text-[11px] text-subtle">0{i + 1}</span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-raised text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-medium text-fg">{group.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{group.description}</p>
                  </div>
                </div>

                <StaggerList
                  items={group.skills}
                  label={`${group.title} skills`}
                  className="flex flex-wrap items-center gap-x-5 gap-y-2 pl-9 lg:pl-0"
                  itemClassName="flex items-center text-[15px] text-fg/70 transition-colors duration-300 group-hover:text-fg before:mr-2 before:size-1 before:rounded-full before:bg-accent/50"
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
