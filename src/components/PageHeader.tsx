"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useLanguage } from "@/context/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  badgeAccent?: "orange" | "yellow" | "purple";
  titlePart1: string;
  highlightedWord?: string;
  highlightAccent?: "orange" | "yellow" | "purple";
  titlePart2?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeAccent = "yellow",
  titlePart1,
  highlightedWord,
  highlightAccent = "orange",
  titlePart2,
  subtitle,
  breadcrumbs,
  children,
}) => {
  const { language } = useLanguage();

  const badgeStyles = {
    orange: "bg-orangeAccent/15 text-orangeAccent border-orangeAccent/40",
    yellow: "bg-yellowAccent/30 text-[#8A6400] border-yellowAccent/50",
    purple: "bg-purpleAccent/25 text-[#5B299D] border-purpleAccent/40",
  };

  const highlightStyles = {
    orange: "text-orangeAccent",
    yellow: "text-[#DCA00B]",
    purple: "text-purpleAccent",
  };

  const titleSizeClass =
    language === "ka"
      ? "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.14]"
      : "text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.04]";

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-8">
      {/* SIGNATURE ROUNDED CREAM PANEL (IDENTICAL CONTAINER TO HOMEPAGE HERO) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl lg:rounded-[36px] overflow-hidden relative shadow-tactile-sm"
      >
        {/* INTEGRATED NAVBAR */}
        <Navbar />

        {/* HEADER CONTENT */}
        <div className="px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-8 sm:pb-12">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-tech-muted flex-wrap">
              <Link
                href={`/${language}`}
                className="hover:text-tech-black transition-colors"
              >
                {language === "ka" ? "მთავარი" : "Home"}
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <span className="opacity-40">/</span>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-tech-black transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-tech-black font-bold truncate max-w-[240px]">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Eyebrow Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[1.5px] border-tech-black w-fit mb-4 sm:mb-5 shadow-tactile-sm ${badgeStyles[badgeAccent]}`}
            >
              <span className="text-xs">✦</span>
              <span className="text-xs font-bold tracking-wider uppercase text-tech-black">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Large Headline */}
          <h1 className={`font-display font-black tracking-tight text-tech-black ${titleSizeClass} max-w-4xl`}>
            {titlePart1}{" "}
            {highlightedWord && (
              <span className={`${highlightStyles[highlightAccent]} relative inline-block`}>
                {highlightedWord}
              </span>
            )}{" "}
            {titlePart2}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-tech-black/80 font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Optional children (e.g. parameter badges, filter pills, actions) */}
          {children && <div className="mt-6 sm:mt-8">{children}</div>}
        </div>
      </motion.div>
    </div>
  );
};

export default PageHeader;
