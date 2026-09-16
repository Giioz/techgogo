"use client";

import React from "react";
import { Terminal, Users, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export const ValueProps: React.FC = () => {
  const { language, t } = useLanguage();
  const why = t.whyTechgogo;

  const icons = [Terminal, Users, Sparkles];
  const accents: Array<"orange" | "yellow" | "purple"> = ["orange", "yellow", "purple"];

  const cardTitleSize =
    language === "ka"
      ? "text-xl sm:text-[22px] leading-snug mb-3"
      : "text-2xl leading-snug mb-3";

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
      <SectionHeading
        badge={why.badge}
        badgeAccent="yellow"
        titlePart1={why.titlePart1}
        highlightedWord={why.highlightWord}
        highlightAccent="orange"
        titlePart2={why.titlePart2}
        subtitle={why.subtitle}
      />

      {/* ASYMMETRIC 3-COLUMN EDITORIAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {why.items.map((v, i) => {
          const Icon = icons[i] || Sparkles;
          const accent = accents[i] || "orange";

          const bgAccents = {
            orange: "hover:bg-[#FFF4F1]",
            yellow: "hover:bg-[#FFFCE8]",
            purple: "hover:bg-[#F8F3FE]",
          };
          const badgeAccents = {
            orange: "bg-orangeAccent/15 text-orangeAccent border-orangeAccent/30",
            yellow: "bg-yellowAccent/25 text-[#886200] border-yellowAccent/40",
            purple: "bg-purpleAccent/25 text-[#5B299D] border-purpleAccent/40",
          };

          return (
            <div
              key={i}
              className={`tactile-card bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between shadow-tactile-sm hover:shadow-tactile transition-all duration-200 ${
                bgAccents[accent]
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cream border-[1.5px] border-tech-black flex items-center justify-center shadow-tactile-sm">
                    <Icon className="w-6 h-6 text-tech-black" />
                  </div>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                      badgeAccents[accent]
                    }`}
                  >
                    {v.tag}
                  </span>
                </div>

                <h3 className={`font-display font-bold ${cardTitleSize} text-tech-black`}>
                  {v.title}
                </h3>

                <p className="text-xs sm:text-sm text-tech-muted font-medium leading-relaxed mb-6">
                  {v.description}
                </p>
              </div>

              <div className="pt-4 border-t border-tech-black/10 flex items-center justify-between text-xs font-bold text-tech-black">
                <span>{why.exploreMethodology}</span>
                <span className="text-base">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValueProps;
