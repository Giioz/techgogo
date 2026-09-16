"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface SectionHeadingProps {
  badge?: string;
  badgeAccent?: "orange" | "yellow" | "purple";
  titlePart1: string;
  highlightedWord?: string;
  highlightAccent?: "orange" | "yellow" | "purple";
  titlePart2?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeAccent = "yellow",
  titlePart1,
  highlightedWord,
  highlightAccent = "orange",
  titlePart2,
  subtitle,
  align = "left",
}) => {
  const { language } = useLanguage();

  const badgeStyles = {
    orange: "bg-orangeAccent/15 text-orangeAccent border-orangeAccent/40",
    yellow: "bg-yellowAccent/25 text-[#8A6400] border-yellowAccent/40",
    purple: "bg-purpleAccent/25 text-[#5B299D] border-purpleAccent/40",
  };

  const highlightStyles = {
    orange: "text-orangeAccent",
    yellow: "text-[#DCA00B]",
    purple: "text-purpleAccent",
  };

  const titleSizeClass =
    language === "ka"
      ? "text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.18]"
      : "text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08]";

  const subtitleSizeClass =
    language === "ka"
      ? "mt-3 text-sm sm:text-base text-tech-muted leading-relaxed font-medium"
      : "mt-3.5 text-base sm:text-lg text-tech-muted leading-relaxed font-medium";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 sm:mb-12 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, type: "spring", stiffness: 400, damping: 20 }}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wide uppercase mb-3.5 ${badgeStyles[badgeAccent]}`}
        >
          <span>✦</span>
          <span>{badge}</span>
        </motion.div>
      )}

      <h2 className={`font-display font-bold ${titleSizeClass} tracking-tight text-tech-black`}>
        {titlePart1}{" "}
        {highlightedWord && (
          <span className={`${highlightStyles[highlightAccent]} relative inline-block`}>
            {highlightedWord}
          </span>
        )}{" "}
        {titlePart2}
      </h2>

      {subtitle && (
        <p className={subtitleSizeClass}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
