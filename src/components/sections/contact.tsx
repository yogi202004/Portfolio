import { ArrowUpRight, Mail } from "lucide-react";
import { links } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { CopyEmail } from "@/components/copy-email";
import { getSocialLinks } from "@/components/ui/social-links";

export function Contact() {
  const socials = getSocialLinks().filter((s) => s.label !== "Email");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface/70 px-6 py-14 sm:px-14 sm:py-20">
            <div aria-hidden className="absolute -top-32 -right-32 size-96 rounded-full bg-accent/10 blur-3xl" />
            <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />

            <div className="relative max-w-2xl">
              <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
                <span className="text-subtle">06</span>
                <span aria-hidden className="h-px w-8 bg-accent/40" />
                Contact
              </p>
              <h2 id="contact-heading" className="text-4xl font-medium tracking-tight text-balance text-fg sm:text-5xl">
                Let&apos;s build something <span className="font-serif font-normal text-accent italic">reliable.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                I&apos;m open to conversations about full-stack and AI engineering roles. The quickest way to reach me is email.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {links.email && (
                  <>
                    <a
                      href={`mailto:${links.email}`}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-canvas transition-[filter] hover:brightness-110"
                    >
                      <Mail size={16} aria-hidden /> {links.email}
                    </a>
                    <CopyEmail email={links.email} />
                  </>
                )}
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                    >
                      <Icon size={16} /> {label}
                      <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
