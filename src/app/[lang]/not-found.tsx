"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();
  const isKa = language === "ka";

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black flex flex-col justify-between">
      <CustomCursor />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-8">
        <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl lg:rounded-[36px] overflow-hidden shadow-tactile-sm">
          <Navbar />

          <div className="px-5 sm:px-10 py-16 sm:py-24 text-center max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-yellowAccent border-[1.5px] border-tech-black flex items-center justify-center font-display font-black text-3xl text-tech-black mx-auto mb-6 shadow-tactile">
              404
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl text-tech-black mb-3">
              {isKa ? "გვერდი ვერ მოიძებნა" : "Page Not Found"}
            </h1>

            <p className="text-sm text-tech-muted font-medium leading-relaxed mb-8">
              {isKa
                ? "თქვენ მიერ მოთხოვნილი გვერდი არ არსებობს ან გადაადგილდა. დაბრუნდით მთავარ გვერდზე."
                : "The page you are looking for doesn't exist or has moved. Head back to the homepage."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/${language}`}
                className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5"
              >
                <Home className="w-4 h-4" />
                <span>{isKa ? "დაბრუნდი მთავარზე" : "Return to Homepage"}</span>
              </Link>
              <Link
                href={`/${language}/courses`}
                className="tactile-btn inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-tech-black font-bold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile-sm"
              >
                <span>{isKa ? "კურსების კატალოგი" : "View Courses"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
