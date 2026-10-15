export type FocusArea = {
  title: string;
  points: string[];
  tags: string[];
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  focusAreas?: FocusArea[];
  points?: string[];
};

export const roles: Role[] = [
  {
    company: "Nano Nino",
    title: "Full Stack AI Engineer",
    period: "Jun 2026 – Present",
    location: "Coimbatore, Tamil Nadu",
    current: true,
    summary:
      "Building full-stack features across a multi-tenant AI platform built on Next.js, NestJS, Supabase and LangGraph.",
    focusAreas: [
      {
        title: "Platform & agent features",
        points: [
          "Build features spanning dashboards, chat and voice agents, bookings and internal admin tools.",
          "Work on LangGraph and LangChain agent integrations inside the product.",
        ],
        tags: ["Next.js", "NestJS", "LangGraph", "LangChain"],
      },
      {
        title: "Integrations & booking workflows",
        points: [
          "Own demo and vertical workstreams, along with integrations for Stripe, Shopify, Calendly, Google Calendar and Wix.",
          "Build booking workflows and webhook-driven integrations with third-party services.",
        ],
        tags: ["Webhooks", "Stripe", "Shopify", "Calendly", "Google Calendar", "Wix"],
      },
      {
        title: "Security, reliability & testing",
        points: [
          "Strengthen platform security and reliability with RLS policies, signed asset URLs and fail-open chat handling.",
          "Led schema and data cleanup migrations on Supabase / PostgreSQL.",
          "Add automated test coverage with Vitest and Playwright, and harden CI workflows.",
        ],
        tags: ["Supabase", "PostgreSQL", "RLS", "Vitest", "Playwright", "CI"],
      },
    ],
  },
  {
    company: "EY Global Delivery Services & AICTE",
    title: "Full Stack Developer Intern",
    period: "May 2025",
    location: "Remote",
    summary: "Internship focused on full-stack web development with the MERN stack.",
    points: [
      "Developed a MERN stack web application using MongoDB, Express.js, React and Node.js.",
      "Implemented CRUD operations and secure user authentication.",
      "Built a responsive UI that works across devices.",
    ],
  },
];
