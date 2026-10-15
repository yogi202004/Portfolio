# Yogeshraja R — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Personalising

| What | Where |
| --- | --- |
| Name, role, headline, intro, SEO description, about text | `src/content/site.ts` |
| Email, LinkedIn, GitHub (empty string = hidden) | `links` in `src/content/site.ts` |
| Skills | `src/content/skills.ts` |
| Experience timeline | `src/content/experience.ts` |
| Project case studies and their links | `src/content/projects.ts` |
| Education and certifications | `src/content/education.ts` |
| Resume PDF | `public/resume.pdf` |
| Profile photo | `public/yogesh.png` |

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) when deploying so canonical URLs, Open Graph, sitemap and robots point at the right domain.
