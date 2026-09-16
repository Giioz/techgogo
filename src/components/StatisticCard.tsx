"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface StatisticCardProps {
  number: string;
  label: string;
  accent: "orange" | "yellow" | "purple";
  tag?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  number,
  label,
  accent,
  tag,
}) => {
  const { language } = useLanguage();

  const accentStyles = {
    orange: {
      badge: "bg-orangeAccent/15 text-orangeAccent border-orangeAccent/30",
      dot: "bg-orangeAccent",
    },
    yellow: {
      badge: "bg-yellowAccent/20 text-[#8F6A00] border-yellowAccent/40",
      dot: "bg-yellowAccent",
    },
    purple: {
      badge: "bg-purpleAccent/25 text-[#5925A1] border-purpleAccent/40",
      dot: "bg-purpleAccent",
    },
  };

  const style = accentStyles[accent];

  const labelSizeClass =
    language === "ka"
      ? "text-[11.5px] sm:text-[13px] font-semibold text-tech-muted mt-1 leading-snug"
      : "text-xs sm:text-sm font-semibold text-tech-muted mt-1 leading-snug";

  const numberSizeClass =
    language === "ka"
      ? "text-3xl sm:text-[38px] lg:text-[40px]"
      : "text-3xl sm:text-4xl lg:text-[42px]";

  return (
    <div className="tactile-card group relative bg-cream border-[1.5px] border-tech-black rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-tactile-sm hover:shadow-tactile transition-all duration-200">
      {/* Small top row with accent indicator */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${style.dot} border border-tech-black/40`} />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-tech-muted">
            TechGogo Stat
          </span>
        </div>
        {tag && (
          <span className={`text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border ${style.badge}`}>
            {tag}
          </span>
        )}
      </div>

      {/* Main Stat Number */}
      <div className="my-1">
        <span className={`font-display font-bold ${numberSizeClass} tracking-tight text-tech-black leading-none block group-hover:translate-x-0.5 transition-transform duration-150`}>
          {number}
        </span>
      </div>

      {/* Label */}
      <p className={labelSizeClass}>
        {label}
      </p>
    </div>
  );
};

export default StatisticCard;
