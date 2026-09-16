"use client";

import React from "react";
import Link from "next/link";
import { Star, Clock, BookOpen, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Course } from "@/types";
import { getLocalizedCourse } from "@/data/coursesData";
import CourseIllustration from "./CourseIllustration";
import { useLanguage } from "@/context/LanguageContext";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course: rawCourse, index = 0 }) => {
  const { language, t } = useLanguage();
  const course = getLocalizedCourse(rawCourse, language);
  const tr = t.courses[course.id];

  const categoryBadgeStyles = {
    orange: "bg-orangeAccent/15 text-[#D43719] border-orangeAccent/30",
    yellow: "bg-yellowAccent/25 text-[#7E5700] border-yellowAccent/40",
    purple: "bg-purpleAccent/25 text-[#54219A] border-purpleAccent/40",
  };

  const title = tr?.title || course.title;
  const category = tr?.category || course.category;
  const instructorRole = tr?.instructorRole || course.instructor.role;
  const duration = tr?.duration || course.duration;
  const badge = tr?.badge || course.badge;

  const slugMap: Record<string, string> = {
    "course-1": "ai-tools",
    "course-2": "digital-marketing",
    "course-3": "graphic-design",
    "course-4": "graphic-design-cohort-2",
    "course-5": "ui-ux",
    "course-6": "tech-recruiting",
  };
  const courseSlug = course.slug || slugMap[course.id] || course.id;

  const titleSizeClass =
    language === "ka"
      ? "text-lg sm:text-[21px] leading-[1.32] mb-3"
      : "text-xl sm:text-2xl leading-snug mb-3";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, scale: 1.012 }}
      className="tactile-card group bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-5 sm:p-6 flex flex-col justify-between shadow-tactile-sm hover:shadow-tactile-lg transition-all duration-200 relative overflow-hidden cursor-default"
    >
      {/* TOP BADGE (IF PRESENT) */}
      {badge && (
        <div className="absolute top-8 right-8 z-10">
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tech-black text-cream-pure text-[11px] font-bold tracking-wider uppercase border border-tech-black shadow-tactile-sm"
          >
            <span>✦</span>
            <span>{badge}</span>
          </motion.span>
        </div>
      )}

      <div>
        {/* GRAPHIC ILLUSTRATION */}
        <div className="mb-5 overflow-hidden rounded-2xl">
          <CourseIllustration
            type={course.illustrationType}
            categoryColor={course.categoryColor}
          />
        </div>

        {/* CATEGORY LABEL */}
        <div className="mb-2.5">
          <span
            className={`inline-block px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wide border ${
              categoryBadgeStyles[course.categoryColor]
            }`}
          >
            {category}
          </span>
        </div>

        {/* COURSE TITLE */}
        <Link href={`/${language}/courses/${courseSlug}`} className="block">
          <h3 className={`font-display font-bold ${titleSizeClass} text-tech-black tracking-tight group-hover:text-orangeAccent transition-colors`}>
            {title}
          </h3>
        </Link>

        {/* SHORT METADATA (Duration, Lessons, Rating) */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-tech-muted mb-4 pb-4 border-b border-tech-black/10">
          <div className="flex items-center gap-1 text-tech-black">
            <Star className="w-3.5 h-3.5 fill-yellowAccent text-[#C99E25]" />
            <span className="font-bold">{course.rating}</span>
            <span className="text-tech-muted">({course.reviewsCount})</span>
          </div>
          <span className="text-tech-black/30">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-tech-muted" />
            <span>{duration}</span>
          </div>
          <span className="text-tech-black/30">•</span>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-tech-muted" />
            <span>{course.lessons} {t.coursesSection.lessonsSuffix}</span>
          </div>
        </div>

        {/* INSTRUCTOR ROW */}
        <div className="flex items-center gap-3 mb-5">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-9 h-9 rounded-xl border-[1.5px] border-tech-black flex items-center justify-center font-display font-extrabold text-xs text-tech-black shadow-tactile-sm flex-shrink-0 cursor-default"
            style={{ backgroundColor: course.instructor.avatarBg }}
          >
            {course.instructor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </motion.div>
          <div>
            <p className="text-xs font-bold text-tech-black leading-tight">
              {course.instructor.name}
            </p>
            <p className="text-[11px] font-medium text-tech-muted leading-tight mt-0.5">
              {instructorRole}
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION & PRICE ROW */}
      <div className="pt-4 border-t border-tech-black/10 flex items-center justify-between mt-auto">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display font-extrabold text-2xl text-tech-black">
            {course.price}
          </span>
          {course.originalPrice && (
            <span className="text-xs font-semibold text-tech-muted line-through">
              {course.originalPrice}
            </span>
          )}
        </div>

        <Link href={`/${language}/courses/${courseSlug}`}>
          <motion.span
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="tactile-btn inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-full bg-cream border-[1.5px] border-tech-black font-bold text-xs text-tech-black shadow-tactile-sm hover:bg-orangeAccent hover:shadow-tactile group-hover:bg-orangeAccent transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{t.coursesSection.enrollNow}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
