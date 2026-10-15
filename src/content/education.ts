export type EducationItem = {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score: string;
  /** Score as a 0–100 value, used for the progress bar (CGPA 8.3 / 10 → 83). */
  progress: number;
  /** Short label shown on the roadmap node. */
  stage: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech - Artificial Intelligence and Data Science",
    institution: "Dhanalakshmi Srinivasan College of Engineering",
    location: "Coimbatore, Tamil Nadu",
    period: "2022 – 2026",
    score: "CGPA 8.3 / 10",
    progress: 83,
    stage: "Degree",
  },
  {
    degree: "Higher Secondary (HSLC)",
    institution: "Vivek Vidyalaya Matriculation",
    period: "2022",
    score: "90%",
    progress: 90,
    stage: "Higher secondary",
  },
  {
    degree: "Secondary (SSLC)",
    institution: "Genguswamy Naidu Matriculation",
    period: "2020",
    score: "83%",
    progress: 83,
    stage: "Secondary",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  topic: "data" | "database" | "ai" | "cloud" | "code";
};

export const certifications: Certification[] = [
  { name: "Elite Certification in Cloud Computing", issuer: "NPTEL", year: "2024", topic: "cloud" },
  { name: "Generative AI", issuer: "LinkedIn", year: "2024", topic: "ai" },
  { name: "Python for Data Science", issuer: "Great Learning", year: "2024", topic: "code" },
  { name: "Data Visualization", issuer: "Tata Consultancy Services", year: "2025", topic: "data" },
  { name: "MongoDB Basics for Students", issuer: "MongoDB", year: "2025", topic: "database" },

];
