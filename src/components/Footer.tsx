"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const f = t.footer;

  const bannerTitleSize =
    language === "ka"
      ? "text-2xl sm:text-4xl lg:text-[44px] leading-[1.16]"
      : "text-3xl sm:text-5xl lg:text-6xl leading-[1.08]";

  const bannerSubtitleSize =
    language === "ka"
      ? "text-sm sm:text-base text-tech-muted font-medium max-w-xl mx-auto mb-8"
      : "text-base sm:text-lg text-tech-muted font-medium max-w-xl mx-auto mb-8";

  return (
    <footer className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-10 pt-6">
      {/* BIG EDITORIAL CTA BANNER WITH SCROLL ENTRANCE */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl lg:rounded-[36px] p-6 sm:p-12 lg:p-16 mb-8 relative overflow-hidden shadow-tactile-sm"
      >
        {/* Background decorative stars with twinkle keyframe */}
        <div className="absolute top-6 right-8 text-3xl text-orangeAccent animate-twinkle select-none pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-6 left-8 text-2xl text-purpleAccent animate-twinkle-delayed select-none pointer-events-none">
          ✦
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orangeAccent/15 border-[1.5px] border-tech-black text-xs font-bold text-orangeAccent tracking-wider uppercase mb-5"
          >
            <span>✦</span>
            <span>{f.cohortBannerBadge}</span>
          </motion.div>

          <h2 className={`font-display font-extrabold ${bannerTitleSize} text-tech-black tracking-tight mb-5`}>
            {f.bannerTitlePart1}{" "}
            <span className="text-orangeAccent">{f.bannerHighlightWord}</span>{" "}
            {f.bannerTitlePart2}
          </h2>

          <p className={bannerSubtitleSize}>
            {f.bannerSubtitle}
          </p>

          {/* Quick Email Enrollment Input with interactive button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={f.emailPlaceholder}
              className="w-full sm:w-72 px-5 py-3.5 rounded-full bg-white border-[1.5px] border-tech-black text-xs sm:text-sm text-tech-black placeholder:text-tech-muted focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-tactile-sm transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="tactile-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 whitespace-nowrap"
            >
              <span>{f.bannerCta}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>
          </div>

          <p className="text-[11px] sm:text-xs text-tech-muted mt-4 font-semibold">
            {f.bannerNote}
          </p>
        </div>
      </motion.div>

      {/* FOOTER LINKS & BRAND ATTRIBUTION */}
      <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-tech-black/10">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-3">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-8 h-8 rounded-xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center cursor-default"
              >
                <span className="font-display font-black text-sm text-white">G</span>
              </motion.div>
              <span className="font-display font-extrabold text-2xl text-tech-black">
                Tech<span className="text-orangeAccent">Gogo</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-tech-muted max-w-xs leading-relaxed font-medium">
              {f.brandDesc}
            </p>
          </div>

          {/* Column 1: Subjects */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {f.colSubjects}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li><a href="#ai" className="hover:text-tech-black transition-colors">{t.subjects[1]?.name || "AI & ML"}</a></li>
              <li><a href="#fullstack" className="hover:text-tech-black transition-colors">{t.subjects[2]?.name || "Full-Stack"}</a></li>
              <li><a href="#design" className="hover:text-tech-black transition-colors">{t.subjects[3]?.name || "UI/UX Design"}</a></li>
              <li><a href="#cloud" className="hover:text-tech-black transition-colors">{t.subjects[4]?.name || "Cloud & DevOps"}</a></li>
              <li><a href="#data" className="hover:text-tech-black transition-colors">{t.subjects[5]?.name || "Data Engineering"}</a></li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {f.colPlatform}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li><a href="#courses" className="hover:text-tech-black transition-colors">{t.navbar.courses}</a></li>
              <li><a href="#degrees" className="hover:text-tech-black transition-colors">{t.navbar.degrees}</a></li>
              <li><a href="#cohorts" className="hover:text-tech-black transition-colors">Cohorts</a></li>
              <li><a href="#mentors" className="hover:text-tech-black transition-colors">Mentors</a></li>
            </ul>
          </div>

          {/* Column 3: Teams */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {f.colTeams}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li><a href="#business" className="hover:text-tech-black transition-colors">{t.navbar.business}</a></li>
              <li><a href="#enterprise" className="hover:text-tech-black transition-colors">Enterprise</a></li>
              <li><a href="#case-studies" className="hover:text-tech-black transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {f.colCompany}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li><a href="#about" className="hover:text-tech-black transition-colors">About TechGogo</a></li>
              <li><a href="#manifesto" className="hover:text-tech-black transition-colors">Manifesto</a></li>
              <li><a href="#careers" className="hover:text-tech-black transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-tech-black transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-tech-muted">
          <div>
            © {new Date().getFullYear()} {f.rights}
          </div>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-tech-black transition-colors">{f.privacy}</a>
            <span>•</span>
            <a href="#terms" className="hover:text-tech-black transition-colors">{f.terms}</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-tech-black transition-colors">{f.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
