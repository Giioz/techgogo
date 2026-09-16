"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SubjectPills from "@/components/SubjectPills";
import CourseCard from "@/components/CourseCard";
import ValueProps from "@/components/ValueProps";
import LearningPreview from "@/components/LearningPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { COURSES } from "@/data/courses";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const { language, t } = useLanguage();

  // Prevent browser scroll restoration jitter on refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      if (!window.location.hash && window.scrollY < 80) {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  const filteredCourses = COURSES.filter((course) => {
    if (selectedSubject === "all") return true;
    if (selectedSubject === "ai-ml") return course.category.includes("AI") || course.category.includes("ხელოვნური");
    if (selectedSubject === "fullstack") return course.category.includes("Full-Stack");
    if (selectedSubject === "design") return course.category.includes("Design") || course.category.includes("დიზაინ");
    if (selectedSubject === "cloud") return course.category.includes("Cloud");
    if (selectedSubject === "data") return course.category.includes("Data") || course.category.includes("მონაცემთა");
    return true;
  });

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      {/* BESPOKE NEO-BRUTALIST CUSTOM CURSOR */}
      <CustomCursor />

      {/* 1. HERO SECTION (CONTAINING NAVBAR, HEADLINE, EDITORIAL ILLUSTRATION, STATS) */}
      <Hero />

      {/* 2. FEATURED COURSES CATALOG SECTION */}
      <section id="courses" className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            badge={t.coursesSection.badge}
            badgeAccent="orange"
            titlePart1={t.coursesSection.titlePart1}
            highlightedWord={t.coursesSection.coursesWord}
            highlightAccent="orange"
            titlePart2={t.coursesSection.titlePart2}
            subtitle={t.coursesSection.subtitle}
          />

          <Link
            href={`/${language}/courses`}
            className="group hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border-[1.5px] border-tech-black text-xs font-bold text-tech-black shadow-tactile-sm hover:shadow-tactile transition-all mb-8 cursor-pointer"
          >
            <span>{t.coursesSection.viewAll}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* SUBJECT FILTER PILLS */}
        <div id="subjects" className="mb-8">
          <SubjectPills
            selectedSubject={selectedSubject}
            onSelectSubject={(id) => setSelectedSubject(id)}
          />
        </div>

        {/* DISTINCTIVE COURSE CARDS GRID WITH STAGGERED INDEX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course, idx) => (
            <CourseCard key={course.id} course={course} index={idx} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href={`/${language}/courses`}
            className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream border-[1.5px] border-tech-black text-xs font-bold text-tech-black shadow-tactile-sm"
          >
            <span>{t.coursesSection.viewAll}</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 3. VALUE PROPOSITIONS (WHY TECHGOGO) */}
      <ValueProps />

      {/* 4. CALMER LEARNING EXPERIENCE PREVIEW */}
      <LearningPreview />

      {/* 5. TESTIMONIALS & LEARNER STORIES */}
      <Testimonials />

      {/* 6. BOTTOM CTA BANNER & EDITORIAL FOOTER */}
      <Footer />
    </main>
  );
}
