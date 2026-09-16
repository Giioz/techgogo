export interface Instructor {
  name: string;
  nameEn?: string;
  role: string;
  roleEn?: string;
  avatarBg: string;
  bio?: string;
  bioEn?: string;
}

export interface Course {
  id: string;
  slug?: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  categoryColor: "orange" | "yellow" | "purple";
  instructor: Instructor;
  duration: string;
  durationEn?: string;
  lessons: number;
  totalHours?: number;
  format?: "Remote" | "Hybrid" | "დისტანციური" | "ჰიბრიდული";
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewsCount: number;
  price: string;
  priceEn?: string;
  isFree?: boolean;
  originalPrice?: string;
  originalPriceEn?: string;
  badge?: string;
  badgeEn?: string;
  accentBg: string;
  illustrationType: "code" | "design" | "ai" | "cloud" | "data" | "mobile";
  description: string;
  descriptionEn?: string;
  url?: string;
  whatYouWillLearn?: string[];
  whatYouWillLearnEn?: string[];
  curriculum?: Array<{
    moduleNumber: number;
    title: string;
    titleEn?: string;
    topics: string[];
    topicsEn?: string[];
  }>;
  outcomes?: string[];
  outcomesEn?: string[];
  targetAudience?: string[];
  targetAudienceEn?: string[];
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
  url?: string;
  title: string;
  titleEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  fullDesc: string;
  fullDescEn?: string;
  accent: "orange" | "yellow" | "purple";
  deliverables: string[];
  deliverablesEn?: string[];
  checklistItems: string[];
  checklistItemsEn?: string[];
  processSteps: Array<{
    step: number;
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
  }>;
  clientImpact: string;
  clientImpactEn?: string;
}

export interface Article {
  id: string;
  slug: string;
  slugAliases?: string[];
  url?: string;
  title: string;
  titleEn?: string;
  date: string;
  category: string;
  categoryEn?: string;
  categoryAccent?: "orange" | "yellow" | "purple";
  readTime: string;
  readTimeEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string[];
  contentEn?: string[];
  isFeatured?: boolean;
  citationUrl?: string;
  citationSource?: string;
  citationSourceEn?: string;
  externalCitations?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  nameEn?: string;
  role: string;
  roleEn?: string;
  bio: string;
  bioEn?: string;
  accent: "orange" | "yellow" | "purple";
  tag: string;
  tagEn?: string;
}

export interface StudentStory {
  id: string;
  name: string;
  nameEn?: string;
  age: number;
  location: string;
  locationEn?: string;
  role: string;
  roleEn?: string;
  course: string;
  courseEn?: string;
  quote: string;
  quoteEn?: string;
  fullStory: string;
  fullStoryEn?: string;
  accent: "orange" | "yellow" | "purple";
}

export interface DonationBacker {
  id: string;
  name: string;
  nameEn?: string;
  amount: number;
  date: string;
  comment?: string;
  commentEn?: string;
}
