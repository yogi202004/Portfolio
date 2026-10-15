export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured?: boolean;
  problem: string;
  approach: string[];
  stack: string[];
  contribution: string[];
  /** Only add real, working URLs here. Empty arrays render no links. */
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "talkrev",
    title: "TalkRev.ai",
    tagline: "A multi-tenant conversational AI agent for chat and voice.",
    category: "Agentic AI · Current work",
    featured: true,
    problem:
      "Many businesses need to share a single AI agent deployment across chat and voice, but each tenant's data must stay isolated, and the agent should not answer from retrieved content that isn't actually relevant.",
    approach: [
      "A LangGraph ReAct-style agent: a StateGraph with a chat node and a tool node, connected by conditional routing.",
      "Tenant isolation enforced from trusted run metadata, so one deployment can serve many tenants safely.",
      "A gap-aware RAG pipeline with parallel prefetch, relevance-threshold rejection and an agentic knowledge-base search tool.",
    ],
    stack: ["LangGraph", "LangChain", "TypeScript", "Next.js", "NestJS", "Supabase", "PostgreSQL"],
    contribution: [
      "Designed the agent graph and its chat / tool routing.",
      "Implemented the gap-aware retrieval pipeline that keeps the model from answering off irrelevant content.",
    ],
    links: [],
  },
  {
    slug: "er-overcrowding",
    title: "Emergency Room Overcrowding Prediction",
    tagline: "Predicting ER congestion from historical data.",
    category: "Healthcare analytics",
    problem:
      "Hospital staff need to see emergency room congestion coming early enough to manage patient flow, instead of reacting once the department is already overcrowded.",
    approach: [
      "Used historical data to predict emergency room congestion levels in real time.",
      "Built interactive dashboards for live patient monitoring.",
      "Added automated alerts for high-risk congestion periods.",
    ],
    stack: ["Python", "SQL", "Machine learning", "Data visualisation", "Dashboards"],
    contribution: [
      "Designed and deployed the analytics platform.",
      "Built the monitoring dashboards and alerting that give staff visibility into hospital capacity.",
    ],
    links: [],
  },
  {
    slug: "food-delivery",
    title: "Food Delivery Application",
    tagline: "A responsive, mobile-first multi-page web app.",
    category: "Frontend",
    problem:
      "A multi-page food delivery site needed to feel fast and easy to use on every screen size, especially on mobile.",
    approach: [
      "Applied mobile-first design principles across the application.",
      "Structured navigation and a clean visual layout for an intuitive flow.",
      "Optimised for fast page loads and smooth performance across devices.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive design"],
    contribution: [
      "Enhanced the application with a fully responsive interface.",
      "Focused on usability and accessibility across varying screen sizes.",
    ],
    links: [],
  },
];
