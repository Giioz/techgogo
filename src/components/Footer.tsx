"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const f = t.footer;
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const bannerTitleSize =
    language === "ka"
      ? "text-2xl sm:text-4xl md:text-5xl leading-[1.2]"
      : "text-3xl sm:text-5xl md:text-6xl leading-[1.05]";

  const bannerSubtitleSize =
    language === "ka"
      ? "text-xs sm:text-base text-tech-black/80 max-w-xl mx-auto mb-7 sm:mb-8 font-medium leading-relaxed"
      : "text-sm sm:text-lg text-tech-black/80 max-w-xl mx-auto mb-7 sm:mb-8 font-medium leading-relaxed";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
      {/* 1. EDITORIAL COHORT ENROLLMENT BANNER (PRIMARY CONVERSION SECTION) */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-yellowAccent border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-7 sm:p-14 mb-8 shadow-tactile relative overflow-hidden text-center"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cream-pure text-tech-black text-xs font-bold uppercase tracking-wider border border-tech-black mb-4 sm:mb-5 shadow-tactile-sm"
          >
            <Sparkles className="w-3.5 h-3.5 fill-orangeAccent stroke-tech-black" />
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

          {/* Quick Email Enrollment Input */}
          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream-pure border-[1.5px] border-tech-black text-xs sm:text-sm font-bold text-tech-black shadow-tactile-sm">
              <CheckCircle2 className="w-4 h-4 text-orangeAccent" />
              <span>{language === "ka" ? "მადლობა! შეტყობინება მიღებულია." : "Thank you! We'll keep you updated."}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={f.emailPlaceholder}
                className="w-full sm:w-72 px-5 py-3.5 rounded-full bg-white border-[1.5px] border-tech-black text-xs sm:text-sm text-tech-black placeholder:text-tech-muted focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-tactile-sm transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="tactile-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <span>{f.bannerCta}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>
            </form>
          )}

          <p className="text-[11px] sm:text-xs text-tech-muted mt-4 font-semibold">
            {f.bannerNote}
          </p>
        </div>
      </motion.div>

      {/* 2. FOOTER LINKS & BRAND ATTRIBUTION */}
      <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-tech-black/10">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <Link href={`/${language}`} className="flex items-center gap-2.5 mb-3 group w-fit">
              <motion.div
                whileHover={{ rotate: 12 }}
                className="w-8 h-8 rounded-xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center cursor-pointer shadow-tactile-sm"
              >
                <span className="font-display font-black text-sm text-white">G</span>
              </motion.div>
              <span className="font-display font-extrabold text-2xl text-tech-black">
                Tech<span className="text-orangeAccent">Gogo</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-tech-muted max-w-xs leading-relaxed font-medium mb-3">
              {language === "ka"
                ? "სოციალური საწარმო ქვემო ქართლში. რეგიონული ციფრული სკოლა და კრეატიული სარეკლამო სააგენტო."
                : "Social enterprise in Kvemo Kartli. Regional digital academy and creative advertising agency."}
            </p>
            <p className="text-[11px] text-tech-muted/80">
              {language === "ka"
                ? "ა(ა)იპი „ვი2თექ ჯორჯია“ • ს/კ 400343561"
                : "NNLE 'We2Tech Georgia' • ID 400343561"}
            </p>
          </div>

          {/* Column 1: Courses */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {language === "ka" ? "კურსები" : "Courses"}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li>
                <Link href={`/${language}/courses/ai-tools`} className="hover:text-tech-black transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href={`/${language}/courses/digital-marketing`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "მარკეტინგი" : "Marketing"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/courses/graphic-design`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "დიზაინი" : "Design"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/courses/ui-ux`} className="hover:text-tech-black transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href={`/${language}/courses`} className="text-orangeAccent hover:underline font-bold">
                  {language === "ka" ? "ყველა კურსი →" : "All Courses →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {language === "ka" ? "სერვისები" : "Services"}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li>
                <Link href={`/${language}/services/graphic-design`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "გრაფიკული დიზაინი" : "Graphic Design"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/services/digital-marketing`} className="hover:text-tech-black transition-colors">
                  SMM & Marketing
                </Link>
              </li>
              <li>
                <Link href={`/${language}/services/paid-ads`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "სარეკლამო კამპანია" : "Paid Ads"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/services/print-materials`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "ბეჭდური მასალა" : "Print & Merch"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/services`} className="text-orangeAccent hover:underline font-bold">
                  {language === "ka" ? "სააგენტო →" : "Agency Hub →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {language === "ka" ? "ორგანიზაცია" : "Organization"}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-tech-muted">
              <li>
                <Link href={`/${language}/about`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "ჩვენ შესახებ" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/news`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "სიახლეები & კვლევები" : "News & Research"}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/donate`} className="hover:text-tech-black transition-colors inline-flex items-center gap-1 text-orangeAccent font-bold">
                  <Heart className="w-3 h-3 fill-orangeAccent" />
                  <span>{language === "ka" ? "დონაცია" : "Donate"}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${language}/contact`} className="hover:text-tech-black transition-colors">
                  {language === "ka" ? "კონტაქტი" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-tech-black mb-3">
              {language === "ka" ? "კონტაქტი" : "Contact"}
            </h4>
            <div className="space-y-2 text-xs text-tech-muted">
              <p className="font-medium">
                {language === "ka" ? "მარნეული, გიორგაძის ქ. # 1" : "Marneuli, Giorgadze St. #1"}
              </p>
              <p>
                <a href="tel:+995577137111" className="font-bold text-tech-black hover:text-orangeAccent transition-colors">
                  +995 577 137 111
                </a>
              </p>
              <p>
                <a href="mailto:info@techgogo.ge" className="font-semibold text-tech-black hover:text-orangeAccent transition-colors">
                  info@techgogo.ge
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-tech-muted">
          <div>
            © {new Date().getFullYear()} TechGogo (
            {language === "ka" ? "ა(ა)იპი „ვი2თექ ჯორჯია“" : "NNLE 'We2Tech Georgia'"}
            ). {f.rights}
          </div>
          <div className="flex items-center gap-5">
            <Link href={`/${language}/privacy`} className="hover:text-tech-black transition-colors">
              {language === "ka" ? "კონფიდენციალურობა" : "Privacy Policy"}
            </Link>
            <span>•</span>
            <Link href={`/${language}/contact`} className="hover:text-tech-black transition-colors">
              {language === "ka" ? "კონტაქტი" : "Contact"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
