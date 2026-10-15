import { Mail } from "lucide-react";
import { links } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

/** Only links with a value in content/site.ts are rendered. */
export function getSocialLinks() {
  return [
    links.github && { label: "GitHub", href: links.github, Icon: GithubIcon },
    links.linkedin && { label: "LinkedIn", href: links.linkedin, Icon: LinkedinIcon },
    links.email && { label: "Email", href: `mailto:${links.email}`, Icon: Mail },
  ].filter((item): item is Exclude<typeof item, "" | false> => Boolean(item));
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {getSocialLinks().map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              <Icon size={17} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
