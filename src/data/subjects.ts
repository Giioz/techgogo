import { Subject } from "@/types";

export const SUBJECTS: Subject[] = [
  {
    id: "all",
    name: "All Subjects",
    iconName: "Sparkles",
    coursesCount: 124,
    accent: "orange",
    description: "Browse our complete catalog of industry-focused courses.",
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    iconName: "BrainCircuit",
    coursesCount: 28,
    accent: "orange",
    description: "Build LLM applications, multimodal systems, and neural networks from first principles.",
  },
  {
    id: "fullstack",
    name: "Full-Stack Development",
    iconName: "Code2",
    coursesCount: 36,
    accent: "yellow",
    description: "Modern web architecture with React, Next.js, Node, Go, and real-time systems.",
  },
  {
    id: "design",
    name: "UI/UX & Product Design",
    iconName: "Palette",
    coursesCount: 22,
    accent: "purple",
    description: "Design systems, typography, micro-interactions, and user research methodologies.",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    iconName: "Cloud",
    coursesCount: 19,
    accent: "orange",
    description: "Containerization, Kubernetes, CI/CD pipelines, and infrastructure as code.",
  },
  {
    id: "data",
    name: "Data Engineering",
    iconName: "Database",
    coursesCount: 19,
    accent: "yellow",
    description: "Streaming pipelines, data warehousing, dbt, SQL mastery, and distributed query engines.",
  },
];
