/**
 * Core profile details and links.
 * Edit this file to personalise the site — every section reads from here.
 */

export const site = {
  name: "Yogeshraja R",
  firstName: "Yogeshraja",
  initials: "YR",
  role: "Full Stack AI Engineer",
  company: "Nano Nino",
  location: "Coimbatore, Tamil Nadu, India",
  /** Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL in production. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  photo: "/yogesh.png",
  /** Path to the resume PDF in /public. Replace public/resume.pdf to update it. */
  resume: "/resume.pdf",
  copyrightYear: 2026,

  headline: {
    lead: "Building",
    accent: "agentic AI",
    tail: "products, end to end.",
  },
  intro:
    "I'm Yogeshraja, a Full Stack AI Engineer at Nano Nino. I build LLM-powered features across the whole stack: Next.js interfaces, NestJS services, Supabase data layers and LangGraph agents, backed by tests and CI so they hold up in production.",
  description:
    "Yogeshraja R is a Full Stack AI Engineer at Nano Nino, building agentic, LLM-powered products with Next.js, NestJS, Supabase, PostgreSQL, LangGraph and LangChain.",
  keywords: [
    "Yogeshraja R",
    "Full-Stack AI Engineer",
    "Next.js",
    "NestJS",
    "Supabase",
    "LangGraph",
    "LangChain",
    "TypeScript",
    "Coimbatore",
  ],
} as const;

/**
 * Contact and social links.
 * Leave a value as an empty string to hide it everywhere on the site,
 * so no broken or placeholder links are ever rendered.
 */
export const links = {
  email: "yogeshraja.r20@gmail.com",
  linkedin: "https://www.linkedin.com/in/yogeshnraja",
  github: "https://github.com/yogi202004",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I come from an Artificial Intelligence and Data Science background and now work where those ideas meet real software: shipping agentic, LLM-powered features that people actually use.",
    "At Nano Nino I work across a multi-tenant AI platform, from dashboards and admin tools to chat and voice agents, booking flows and third-party integrations. I like turning ambiguous product requirements into features that are clear to use and reliable to run.",
    "I care about the parts that make software trustworthy: tenant isolation and Row Level Security, careful database migrations, automated tests, and CI that catches problems before users do.",
  ],
  /** The "AI engineering profile" panel: layers of an AI system, from the model up to the data. */
  profile: [

    {
      layer: "Agent orchestration",
      icon: "workflow",
      summary: "Controlling how an agent reasons, acts and decides when to stop.",
      concepts: ["LangGraph", "LangChain", "ReAct loops", "State graphs", "Conditional routing"],
    },
    {
      layer: "Retrieval (RAG)",
      icon: "search",
      summary: "Feeding the model the right knowledge, and nothing irrelevant.",
      concepts: ["Knowledge bases", "Relevance filtering", "Agentic search", "Context grounding"],
    },
    {
      layer: "Machine learning & data",
      icon: "brain",
      summary: "Learning patterns from data and turning them into decisions.",
      concepts: ["Predictive modelling", "ML integration", "Python", "Data visualisation"],
    },
  ],
};
