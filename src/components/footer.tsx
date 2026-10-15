import { ArrowUp } from "lucide-react";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-sm text-fg">
            © {site.copyrightYear} {site.name}
          </p>
          <p className="mt-1 text-xs text-subtle">Built with Next.js, Tailwind CSS and Framer Motion.</p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <a
            href="#top"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg"
          >
            <ArrowUp size={16} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
