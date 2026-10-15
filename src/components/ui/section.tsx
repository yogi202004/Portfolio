import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
            <span className="text-subtle">{index}</span>
            <span aria-hidden className="h-px w-8 bg-accent/40" />
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-3xl font-medium tracking-tight text-balance text-fg sm:text-4xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal text-accent italic">{children}</span>;
}
