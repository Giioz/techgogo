"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import HeroIllustration from "./HeroIllustration";
import StatisticCard from "./StatisticCard";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const titleSizeClass =
    language === "ka"
      ? "text-3xl sm:text-5xl md:text-[54px] lg:text-[62px] leading-[1.12]"
      : "text-4xl sm:text-6xl md:text-[66px] lg:text-[72px] leading-[1.02]";

  const subtitleSizeClass =
    language === "ka"
      ? "text-sm sm:text-lg text-tech-black/80 font-medium max-w-xl leading-relaxed mb-7 sm:mb-9"
      : "text-base sm:text-xl text-tech-black/80 font-medium max-w-xl leading-relaxed mb-7 sm:mb-9";

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-8">
      {/* MAIN CREAM ROUNDED HERO PANEL AGAINST LAVENDER BACKGROUND */}
      <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl lg:rounded-[36px] overflow-hidden relative shadow-tactile-sm">
        {/* INTEGRATED NAVBAR */}
        <Navbar />

        {/* HERO MAIN BODY */}
        <div className="px-5 sm:px-10 lg:px-14 pt-4 sm:pt-8 pb-10 sm:pb-14">
          {/* ASYMMETRIC TWO-COLUMN COMPOSITION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* LEFT COLUMN: PRIMARY VISUAL ELEMENT (HEADLINE + ACTIONS) */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left z-10">
              {/* Playful Kicker / Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellowAccent/30 border-[1.5px] border-tech-black w-fit mb-4 sm:mb-6 shadow-tactile-sm">
                <span className="text-xs">✦</span>
                <span className="text-xs font-bold tracking-wider uppercase text-tech-black">
                  {t.hero.kicker}
                </span>
              </div>

              {/* OVERSIZED ROUNDED HEADLINE */}
              <h1 className={`font-display font-extrabold ${titleSizeClass} tracking-tight text-tech-black mb-5 sm:mb-7`}>
                {t.hero.titlePart1}
                <br />
                <span className="text-orangeAccent relative inline-block">
                  {t.hero.courseWord}
                  {/* Underline squiggle vector */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-orangeAccent/40 pointer-events-none"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C50 3 150 3 198 9"
                      stroke="#FF5A3D"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                {t.hero.titlePart2}
              </h1>

              {/* DESCRIPTION */}
              <p className={subtitleSizeClass}>
                {t.hero.subtitle}
              </p>

              {/* ACTION BUTTONS & SEARCH EXPLORER */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                {/* Primary CTA: Find a course (Orange) */}
                <a
                  href="#courses"
                  className="tactile-btn inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-orangeAccent text-tech-black font-extrabold text-sm sm:text-base tracking-wide border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-x-0.5 active:translate-y-0.5 transition-all"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                {/* Secondary Action: Explore courses → */}
                <a
                  href="#subjects"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-tech-black hover:text-orangeAccent transition-colors py-2 px-1"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>

              {/* Trust micro-row */}
              <div className="flex items-center gap-3 pt-2 border-t border-tech-black/10">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center text-xs font-bold text-tech-black">
                    ✦
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellowAccent border-[1.5px] border-tech-black flex items-center justify-center text-xs font-bold text-tech-black">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purpleAccent border-[1.5px] border-tech-black flex items-center justify-center text-xs font-bold text-tech-black">
                    ✓
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-tech-black/70">
                  {t.hero.trustText}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: LARGE EDITORIAL SVG ILLUSTRATION */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
              <HeroIllustration />
            </div>
          </div>

          {/* HERO STATISTICS: THREE SMALL EDITORIAL STATISTIC CARDS */}
          <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t-[1.5px] border-tech-black/15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
              <StatisticCard
                number={t.hero.stat1Number}
                label={t.hero.stat1Label}
                accent="purple"
                tag={t.hero.stat1Tag}
              />
              <StatisticCard
                number={t.hero.stat2Number}
                label={t.hero.stat2Label}
                accent="yellow"
                tag={t.hero.stat2Tag}
              />
              <StatisticCard
                number={t.hero.stat3Number}
                label={t.hero.stat3Label}
                accent="orange"
                tag={t.hero.stat3Tag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
