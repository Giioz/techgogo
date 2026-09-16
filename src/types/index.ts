export interface Instructor {
  name: string;
  role: string;
  avatarBg: string;
  bio?: string;
}

export interface Course {
  id: string;
  slug?: string;
  title: string;
  category: string;
  categoryColor: "orange" | "yellow" | "purple";
  instructor: Instructor;
  duration: string;
  lessons: number;
  totalHours?: number;
  format?: "Remote" | "Hybrid" | "დისტანციური" | "ჰიბრიდული";
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewsCount: number;
  price: string;
  isFree?: boolean;
  originalPrice?: string;
  badge?: string;
  accentBg: string;
  illustrationType: "code" | "design" | "ai" | "cloud" | "data" | "mobile";
  description: string;
  curriculum?: Array<{
    moduleNumber: number;
    title: string;
    topics: string[];
  }>;
  outcomes?: string[];
  targetAudience?: string[];
}

export interface Subject {
  id: string;
  name: string;
  iconName: string;
  coursesCount: number;
  accent: "orange" | "yellow" | "purple";
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
  accent: "orange" | "yellow" | "purple";
  note: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  accent: "orange" | "yellow" | "purple";
  deliverables: string[];
  checklistItems: string[];
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  clientImpact: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryAccent: "orange" | "yellow" | "purple";
  readTime: string;
  excerpt: string;
  content: string[];
  isFeatured?: boolean;
  citationUrl?: string;
  citationSource?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  accent: "orange" | "yellow" | "purple";
  tag: string;
}

export interface StudentStory {
  id: string;
  name: string;
  age: number;
  location: string;
  role: string;
  course: string;
  quote: string;
  fullStory: string;
  accent: "orange" | "yellow" | "purple";
}

export interface DonationBacker {
  id: string;
  name: string;
  amount: number;
  date: string;
  comment?: string;
}
