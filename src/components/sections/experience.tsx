import { Briefcase, MapPin } from "lucide-react";
import { roles } from "@/content/experience";
import { Accent, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { TimelineTrack } from "@/components/timeline-track";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title={
        <>
          Where I&apos;ve been <Accent>building.</Accent>
        </>
      }
    >
      <TimelineTrack>
        {roles.map((role) => (
          <li key={`${role.company}-${role.title}`} className="relative pl-10 sm:pl-14">
            <span
              aria-hidden
              className={`absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border sm:size-[23px] ${
                role.current ? "border-accent/60 bg-accent/15" : "border-line-strong bg-surface"
              }`}
            >
              <span className={`size-1.5 rounded-full sm:size-2 ${role.current ? "animate-pulse-dot bg-accent" : "bg-subtle"}`} />
            </span>

            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="font-mono text-xs tracking-wider text-accent">{role.period}</p>
                {role.current && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent uppercase">
                    Current
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-fg">{role.title}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase size={14} aria-hidden /> {role.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden /> {role.location}
                </span>
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{role.summary}</p>
            </Reveal>

            {role.focusAreas && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {role.focusAreas.map((area, i) => (
                  <Reveal key={area.title} delay={i * 0.08}>
                    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-line-strong">
                      <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">Focus 0{i + 1}</p>
                      <h4 className="mt-2 font-medium text-fg">{area.title}</h4>
                      <ul className="mt-4 flex-1 space-y-3">
                        {area.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/70" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                        {area.tags.map((tag) => (
                          <li key={tag} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-muted">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}

            {role.points && (
              <Reveal delay={0.05}>
                <ul className="mt-6 max-w-2xl space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </li>
        ))}
      </TimelineTrack>
    </Section>
  );
}
