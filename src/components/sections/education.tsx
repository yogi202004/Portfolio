import { Award, ChartColumn, Cloud, Code, Database, Sparkles } from "lucide-react";
import { certifications, education, type Certification } from "@/content/education";
import { Accent, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { EducationRoadmap } from "@/components/education-roadmap";

const topicIcons: Record<Certification["topic"], typeof Award> = {
  ai: Sparkles,
  code: Code,
  data: ChartColumn,
  database: Database,
  cloud: Cloud,
};

export function Education() {
  // Roadmap reads oldest → newest.
  const milestones = [...education].reverse();

  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title={
        <>
          Foundations in <Accent>AI &amp; data science.</Accent>
        </>
      }
    >
      <EducationRoadmap items={milestones} />

      <div className="mt-20">
        <Reveal className="mb-8 flex items-center gap-4">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-raised text-accent">
            <Award size={17} aria-hidden />
          </span>
          <h3 className="text-xl font-medium tracking-tight text-fg">Certifications</h3>
          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent" />
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {certifications.map((cert, i) => {
            const Icon = topicIcons[cert.topic];
            return (
              <li key={cert.name} className="last:col-span-2 lg:last:col-span-1">
                <Reveal delay={i * 0.06} y={20} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-4 sm:p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/35">
                    <div
                      aria-hidden
                      className="absolute -top-20 left-1/2 size-40 -translate-x-1/2 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative flex items-start justify-between">
                      <span className="grid size-11 place-items-center rounded-xl border border-accent/25 bg-gradient-to-br from-accent/20 to-accent/[0.03] text-accent">
                        <Icon size={19} aria-hidden />
                      </span>
                      <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="relative mt-5 text-sm leading-snug font-medium text-fg">{cert.name}</h4>
                    <p className="relative mt-1.5 text-xs text-muted">{cert.issuer}</p>
                    <div className="relative mt-auto flex items-center gap-2 border-t border-dashed border-line-strong pt-4 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase">
                      <span className="size-1.5 rounded-full bg-accent/70" />
                      Certificate
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
