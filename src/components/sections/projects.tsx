import { projects } from "@/content/projects";
import { Accent, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Projects"
      title={
        <>
          Selected <Accent>case studies.</Accent>
        </>
      }
      intro="The Challenges, the Engineering, the Impact, and what I owned. Open any card for the full case study."
    >
      <div className="flex flex-col gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
