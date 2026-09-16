"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Sparkles, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { TECHGOGO_COURSES } from "@/data/coursesData";
import { useLanguage } from "@/context/LanguageContext";

export default function CoursesPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", labelKa: "ყველა მიმართულება", labelEn: "All Categories" },
    { id: "ai", labelKa: "AI & Tools", labelEn: "AI & Tools" },
    { id: "marketing", labelKa: "მარკეტინგი & SMM", labelEn: "Marketing & SMM" },
    { id: "design", labelKa: "გრაფიკული დიზაინი", labelEn: "Graphic Design" },
    { id: "ui-ux", labelKa: "UI/UX დიზაინი", labelEn: "UI/UX Design" },
    { id: "recruiting", labelKa: "ტექ რეკრუტინგი", labelEn: "Tech Recruiting" },
  ];

  const priceFilters = [
    { id: "all", labelKa: "ყველა ფასი", labelEn: "All Prices" },
    { id: "free", labelKa: "უფასო (დონორით)", labelEn: "Free (Funded)" },
    { id: "paid", labelKa: "კომერციული", labelEn: "Commercial" },
  ];

  const formatFilters = [
    { id: "all", labelKa: "ყველა ფორმატი", labelEn: "All Formats" },
    { id: "remote", labelKa: "დისტანციური", labelEn: "Remote" },
    { id: "hybrid", labelKa: "ჰიბრიდული", labelEn: "Hybrid" },
  ];

  const filteredCourses = useMemo(() => {
    return TECHGOGO_COURSES.filter((course) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.description.toLowerCase().includes(q);
        const matchesCat = course.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat) return false;
      }

      // Category filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "ai" && !course.category.includes("AI")) return false;
        if (selectedCategory === "marketing" && !course.category.includes("Marketing")) return false;
        if (selectedCategory === "design" && !course.category.includes("Graphic Design")) return false;
        if (selectedCategory === "ui-ux" && !course.category.includes("UI/UX")) return false;
        if (selectedCategory === "recruiting" && !course.category.includes("Recruiting")) return false;
      }

      // Price filter
      if (selectedPrice === "free" && !course.isFree) return false;
      if (selectedPrice === "paid" && course.isFree) return false;

      // Format filter
      if (selectedFormat === "remote" && course.format !== "Remote") return false;
      if (selectedFormat === "hybrid" && course.format !== "Hybrid") return false;

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPrice, selectedFormat]);

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* COMPACT EDITORIAL HERO */}
      <PageHeader
        badge={language === "ka" ? "აკადემიის კატალოგი" : "Academy Catalog"}
        badgeAccent="yellow"
        titlePart1={language === "ka" ? "იპოვე შენი" : "Find Your"}
        highlightedWord={language === "ka" ? "კურსი" : "Course"}
        highlightAccent="orange"
        titlePart2={language === "ka" ? "და დაიწყე ახალი პროფესია" : "and Master Practical Skills"}
        subtitle={
          language === "ka"
            ? "TechGogo ეხმარება ქალებსა და ახალგაზრდებს მოთხოვნადი ციფრული პროფესიების დაუფლებასა და რეალურ კომერციულ პროექტებში დასაქმებაში."
            : "TechGogo empowers regional women and youth to develop practical technology skills and step directly into paid industry projects."
        }
        breadcrumbs={[{ label: language === "ka" ? "კურსები" : "Courses" }]}
      >
        {/* SEARCH BAR EMBEDDED IN HERO */}
        <div className="relative max-w-xl">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-tech-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === "ka"
                ? "მოძებნე კურსი (AI, SMM, დიზაინი, HR)..."
                : "Search courses (AI, SMM, Design, Recruiting)..."
            }
            className="w-full pl-12 pr-5 py-3.5 rounded-full bg-white border-[1.5px] border-tech-black text-sm text-tech-black placeholder:text-tech-muted focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-tactile-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-tech-muted hover:text-tech-black"
            >
              ✕
            </button>
          )}
        </div>
      </PageHeader>

      {/* COURSE DISCOVERY / FILTER AREA */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
        <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-5 sm:p-7 shadow-tactile-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-tech-black/10">
            <div className="flex items-center gap-2 font-bold text-sm text-tech-black">
              <Filter className="w-4 h-4 text-orangeAccent" />
              <span>{language === "ka" ? "ფილტრაცია" : "Filters"}</span>
              <span className="text-xs text-tech-muted font-normal">
                ({filteredCourses.length} {language === "ka" ? "კურსი" : "courses"})
              </span>
            </div>

            {/* Quick Price & Format Toggle Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              {/* Price Filter */}
              <div className="flex items-center p-0.5 rounded-full bg-cream-muted border border-tech-black/40">
                {priceFilters.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPrice(p.id)}
                    className={`px-3 py-1 rounded-full transition-all ${
                      selectedPrice === p.id
                        ? "bg-tech-black text-cream-pure shadow-sm"
                        : "text-tech-muted hover:text-tech-black"
                    }`}
                  >
                    {language === "ka" ? p.labelKa : p.labelEn}
                  </button>
                ))}
              </div>

              {/* Format Filter */}
              <div className="flex items-center p-0.5 rounded-full bg-cream-muted border border-tech-black/40">
                {formatFilters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFormat(f.id)}
                    className={`px-3 py-1 rounded-full transition-all ${
                      selectedFormat === f.id
                        ? "bg-tech-black text-cream-pure shadow-sm"
                        : "text-tech-muted hover:text-tech-black"
                    }`}
                  >
                    {language === "ka" ? f.labelKa : f.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Pills Row */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
            {categories.map((c) => {
              const isSelected = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border-[1.5px] border-tech-black whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-tech-black text-cream-pure shadow-tactile-sm"
                      : "bg-white text-tech-black hover:bg-cream-muted shadow-sm"
                  }`}
                >
                  {language === "ka" ? c.labelKa : c.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* COURSES GRID */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-10 sm:p-16 text-center shadow-tactile-sm">
            <div className="w-16 h-16 rounded-2xl bg-yellowAccent/40 border-[1.5px] border-tech-black flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✦
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-tech-black mb-2">
              {language === "ka" ? "კურსი ვერ მოიძებნა" : "No Courses Found"}
            </h3>
            <p className="text-sm text-tech-muted max-w-md mx-auto mb-6 font-medium">
              {language === "ka"
                ? "მითითებული ფილტრებით შედეგი არ არის. სცადეთ ძიების პარამეტრების გასუფთავება."
                : "No courses matched your current filter criteria. Try clearing your filters."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedPrice("all");
                setSelectedFormat("all");
                setSearchQuery("");
              }}
              className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orangeAccent text-tech-black font-bold text-xs border-[1.5px] border-tech-black shadow-tactile-sm"
            >
              <span>{language === "ka" ? "ფილტრების გასუფთავება" : "Clear All Filters"}</span>
            </button>
          </div>
        )}

        {/* SUPPORTING SCHOLARSHIP & DONOR IMPACT BANNER */}
        <div className="mt-12 bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellowAccent/30 border border-tech-black text-xs font-bold text-tech-black mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orangeAccent" />
              <span>{language === "ka" ? "100% დაფინანსებული კურსები" : "Donor-Funded Tracks"}</span>
            </div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-tech-black mb-2">
              {language === "ka"
                ? "გსურთ მხარი დაუჭიროთ ქალთა განათლებას?"
                : "Want to Support Female Education in Tech?"}
            </h3>
            <p className="text-xs sm:text-sm text-tech-muted leading-relaxed font-medium">
              {language === "ka"
                ? "ევროკავშირისა და CSRDG-ის მხარდაჭერით ჩვენი კურსების უმეტესობა უფასოა რეგიონში მცხოვრები ქალებისთვის. თქვენი დონაცია კიდევ უფრო მეტ სტიპენდიას აფინანსებს."
                : "Thanks to the EU and CSRDG, most of our tracks are tuition-free for regional women. Community contributions expand laptops, internet stipends, and admission slots."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`/${language}/donate`}
              className="tactile-btn inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg"
            >
              <Heart className="w-4 h-4 fill-tech-black text-tech-black" />
              <span>{language === "ka" ? "გაიღე დონაცია" : "Support a Student"}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
