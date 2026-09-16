export interface Instructor {
  name: string;
  role: string;
  avatarBg: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  categoryColor: "orange" | "yellow" | "purple";
  instructor: Instructor;
  duration: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewsCount: number;
  price: string;
  originalPrice?: string;
  badge?: string;
  accentBg: string;
  illustrationType: "code" | "design" | "ai" | "cloud" | "data" | "mobile";
  description: string;
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
