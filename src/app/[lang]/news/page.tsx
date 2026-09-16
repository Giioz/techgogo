"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { TECHGOGO_ARTICLES } from "@/data/articlesData";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { language } = useLanguage();
  const isKa = language === "ka";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", labelKa: "ყველა სტატია", labelEn: "All Articles" },
    { id: "awards", labelKa: "ჯილდოები & აღიარება", labelEn: "Awards & Recognition" },
    { id: "enterprise", labelKa: "სოციალური საწარმო", labelEn: "Social Enterprise" },
    { id: "research", labelKa: "კვლევები", labelEn: "Research Papers" },
    { id: "stories", labelKa: "სტუდენტების ისტორიები", labelEn: "Student Stories" },
    { id: "impact", labelKa: "განათლება & გავლენა", labelEn: "Education & Impact" },
  ];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "all") return TECHGOGO_ARTICLES;
    if (selectedCategory === "awards") return TECHGOGO_ARTICLES.filter((a) => a.category.includes("Awards"));
    if (selectedCategory === "enterprise") return TECHGOGO_ARTICLES.filter((a) => a.category.includes("Social Enterprise"));
    if (selectedCategory === "research") return TECHGOGO_ARTICLES.filter((a) => a.category.includes("Research"));
    if (selectedCategory === "stories") return TECHGOGO_ARTICLES.filter((a) => a.category.includes("Stories"));
    if (selectedCategory === "impact") return TECHGOGO_ARTICLES.filter((a) => a.category.includes("Education"));
    return TECHGOGO_ARTICLES;
  }, [selectedCategory]);

  const featuredStory = TECHGOGO_ARTICLES.find((a) => a.isFeatured) || TECHGOGO_ARTICLES[0];
  const otherStories = filteredArticles.filter((a) => a.id !== featuredStory.id);

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* EDITORIAL PUBLICATION HERO */}
      <PageHeader
        badge={isKa ? "პრესა, კვლევები & სიახლეები" : "Press, Research & Publications"}
        badgeAccent="purple"
        titlePart1={isKa ? "სიახლეები &" : "News &"}
        highlightedWord={isKa ? "ანგარიშები" : "Research"}
        highlightAccent="yellow"
        titlePart2={isKa ? "რეგიონული ინოვაციების შესახებ" : "from TechGogo"}
        subtitle={
          isKa
            ? "წაიკითხეთ TechGogo-ს კვლევები, გრეის ჰოპერის ჯილდოს აღიარება, სტუდენტების ქეის-სტადები და საერთაშორისო პარტნიორობის შედეგები."
            : "Explore regional gender research, Grace Hopper Award coverage, graduate case studies, and social enterprise insights."
        }
        breadcrumbs={[{ label: isKa ? "სიახლეები" : "News" }]}
      />

      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* 1. FEATURED ARTICLE (LARGE EDITORIAL HERO CARD) */}
        {selectedCategory === "all" && featuredStory && (
          <div className="mb-12">
            <Link
              href={`/${language}/news/${featuredStory.slug}`}
              className="tactile-card bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-7 sm:p-12 shadow-tactile-sm hover:shadow-tactile-lg transition-all group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-yellowAccent border border-tech-black text-xs font-bold text-tech-black shadow-sm">
                      {featuredStory.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-tech-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredStory.date}</span>
                    </div>
                    <span className="text-tech-black/30">•</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-tech-muted">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredStory.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-tech-black group-hover:text-orangeAccent transition-colors mb-4 tracking-tight leading-tight">
                    {featuredStory.title}
                  </h2>
                  <p className="text-sm sm:text-base text-tech-black/80 font-medium leading-relaxed mb-6 max-w-2xl">
                    {featuredStory.excerpt}
                  </p>

                  <span className="tactile-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs border-[1.5px] border-tech-black shadow-tactile-sm group-hover:shadow-tactile">
                    <span>{isKa ? "სრულად წაკითხვა" : "Read Featured Article"}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>

                {/* Right Visual Badge */}
                <div className="lg:col-span-4 flex items-center justify-center">
                  <div className="w-full max-w-[260px] aspect-square rounded-3xl bg-yellowAccent/40 border-[1.5px] border-tech-black p-6 flex flex-col items-center justify-center text-center shadow-tactile-sm">
                    <div className="w-16 h-16 rounded-2xl bg-orangeAccent border border-tech-black flex items-center justify-center text-white text-3xl font-display font-black mb-3 shadow-tactile-sm">
                      ✦
                    </div>
                    <span className="font-display font-bold text-sm text-tech-black">
                      Special Mention
                    </span>
                    <span className="text-xs text-tech-muted font-medium mt-1">
                      Grace Hopper Award Winner 2023
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 2. CATEGORY TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold border-[1.5px] border-tech-black whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-tech-black text-cream-pure shadow-tactile-sm"
                    : "bg-cream text-tech-black hover:bg-white shadow-sm"
                }`}
              >
                {isKa ? cat.labelKa : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* 3. ARTICLES FEED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {(selectedCategory === "all" ? otherStories : filteredArticles).map((article) => (
            <Link
              key={article.id}
              href={`/${language}/news/${article.slug}`}
              className="tactile-card bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-tactile-sm hover:shadow-tactile transition-all group block"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={`px-3 py-0.5 rounded-full text-[11px] font-bold border ${
                      article.categoryAccent === "orange"
                        ? "bg-orangeAccent/15 text-orangeAccent border-orangeAccent/30"
                        : article.categoryAccent === "yellow"
                        ? "bg-yellowAccent/25 text-[#8A6400] border-yellowAccent/40"
                        : "bg-purpleAccent/25 text-[#5B299D] border-purpleAccent/40"
                    }`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-tech-muted">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-tech-black group-hover:text-orangeAccent transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-tech-black/75 font-medium leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-tech-black/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-tech-muted">
                  {article.date}
                </span>
                <span className="text-xs font-bold text-orangeAccent group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  <span>{isKa ? "წაკითხვა" : "Read"}</span>
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
