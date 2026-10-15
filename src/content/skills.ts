export type SkillGroup = {
  title: string;
  description: string;
  icon: "layout" | "server" | "database" | "bot" | "plug" | "shield" | "code";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces and product dashboards.",
    icon: "layout",
    skills: ["Next.js (App Router)", "React", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    description: "Service development and API design.",
    icon: "server",
    skills: ["NestJS", "Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Data & Security",
    description: "Multi-tenant data modelling with security built in.",
    icon: "database",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Database migrations",
      "Row Level Security",
      "Auth",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "AI & Agents",
    description: "LLM-powered agents and retrieval pipelines.",
    icon: "bot",
    skills: [
      "LangGraph",
      "LangChain",
      "Agentic AI systems",
      "RAG pipelines",
      "Chat & voice agents",
      "ML integration",
    ],
  },

  {
    title: "Testing & Delivery",
    description: "Keeping production dependable.",
    icon: "shield",
    skills: ["Vitest", "Playwright", "CI workflows", "Git & GitHub", "Vercel"],
  },
  {
    title: "Languages & Foundations",
    description: "The fundamentals underneath it all.",
    icon: "code",
    skills: [
      "Python",
      "Data Structures & Algorithms",
      "OOP",
    ],
  },
];
