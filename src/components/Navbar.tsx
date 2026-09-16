"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "subjects", label: t.navbar.subjects, hasDropdown: true, targetId: "courses" },
    { id: "courses", label: t.navbar.courses, hasDropdown: true, targetId: "courses" },
    { id: "degrees", label: t.navbar.degrees, hasDropdown: false, targetId: "learning-preview" },
    { id: "business", label: t.navbar.business, hasDropdown: false, targetId: "value-props" },
  ];

  const navItemClass =
    language === "ka"
      ? "relative z-10 flex items-center gap-1.5 px-3.5 py-2 text-[13px] lg:text-sm font-semibold text-tech-black/90 hover:text-tech-black rounded-full transition-colors whitespace-nowrap select-none"
      : "relative z-10 flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-tech-black/90 hover:text-tech-black rounded-full transition-colors whitespace-nowrap select-none";

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-12 flex items-center justify-between relative z-30"
    >
      {/* LEFT: TECHGOGO WORDMARK & INTERACTIVE LOGO */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-decoration-none text-left cursor-pointer focus:outline-none"
          aria-label="TechGogo Home"
        >
          {/* Playful Geometric Neo-Brutalist Logo Icon */}
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, -6, 4, 0],
              scale: 1.08,
              boxShadow: "3px 3px 0px #111111",
              transition: { duration: 0.45, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.92, rotate: -4 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center shadow-tactile-sm"
          >
            <span className="font-display font-black text-lg text-cream-pure tracking-tighter">
              G
            </span>
          </motion.div>

          <div className="flex items-baseline">
            <span className="font-display font-extrabold text-2xl sm:text-[26px] tracking-tight text-tech-black">
              Tech<span className="text-orangeAccent">Gogo</span>
            </span>
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-tech-black ml-0.5 mb-1 inline-block"
            />
          </div>
        </button>
      </div>

      {/* CENTER: EDITORIAL NAVIGATION LINKS WITH SLIDING PILL (DESKTOP) */}
      <div
        className="hidden md:flex items-center gap-0.5 lg:gap-1 relative"
        onMouseLeave={() => setHoveredNav(null)}
      >
        {navItems.map((item) => {
          const isDropdownOpen = activeDropdown === item.id;
          const isHovered = hoveredNav === item.id;

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    setActiveDropdown(isDropdownOpen ? null : item.id);
                  } else {
                    handleSmoothScroll(item.targetId);
                  }
                }}
                onMouseEnter={() => setHoveredNav(item.id)}
                className={navItemClass}
                aria-expanded={item.hasDropdown ? isDropdownOpen : undefined}
              >
                {/* Floating Neo-Brutalist Indicator Pill on Hover */}
                {isHovered && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-tech-black/[0.06] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}

                <span>{item.label}</span>

                {item.hasDropdown && (
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </motion.div>
                )}
              </button>

              {/* TACTILE DROPDOWN POPOVER FOR SUBJECTS / COURSES */}
              <AnimatePresence>
                {item.hasDropdown && isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2.5 w-72 bg-cream-pure border-[1.5px] border-tech-black rounded-2xl p-2 shadow-tactile-md z-50 flex flex-col gap-1"
                  >
                    {item.id === "subjects" ? (
                      t.subjects.slice(1, 6).map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleSmoothScroll("courses")}
                          className="group/item flex items-start gap-2.5 p-2 rounded-xl text-left hover:bg-black/5 transition-colors"
                        >
                          <span className="w-5 h-5 rounded-md bg-yellowAccent/40 border border-tech-black/30 flex items-center justify-center text-[10px] shrink-0 mt-0.5 group-hover/item:rotate-6 transition-transform">
                            ✦
                          </span>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-tech-black">
                              {sub.name}
                            </span>
                            <span className="text-[11px] text-tech-muted leading-tight">
                              {sub.description}
                            </span>
                          </div>
                        </button>
                      ))
                    ) : (
                      <>
                        <button
                          onClick={() => handleSmoothScroll("courses")}
                          className="group/item flex items-center justify-between p-2 rounded-xl text-left hover:bg-black/5 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orangeAccent" />
                            <span className="text-xs font-bold text-tech-black">
                              {t.coursesSection.titlePart1} {t.coursesSection.coursesWord}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-tech-muted group-hover/item:translate-x-0.5 transition-transform" />
                        </button>
                        <button
                          onClick={() => handleSmoothScroll("learning-preview")}
                          className="group/item flex items-center justify-between p-2 rounded-xl text-left hover:bg-black/5 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purpleAccent" />
                            <span className="text-xs font-bold text-tech-black">
                              {t.learningPreview.badge}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-tech-muted group-hover/item:translate-x-0.5 transition-transform" />
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* RIGHT: LANGUAGE TOGGLE & ACTIONS */}
      <div className="hidden sm:flex items-center gap-2.5 lg:gap-4">
        {/* GEORGIAN / ENGLISH LANGUAGE SWITCHER WITH SLIDING PILL */}
        <div className="relative flex items-center p-0.5 rounded-full bg-cream-muted border-[1.5px] border-tech-black shadow-tactile-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`relative px-2.5 py-1 rounded-full text-xs font-bold transition-colors z-10 select-none ${
              language === "en"
                ? "text-cream-pure"
                : "text-tech-muted hover:text-tech-black"
            }`}
          >
            {language === "en" && (
              <motion.div
                layoutId="langPillDesktop"
                className="absolute inset-0 bg-tech-black rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            )}
            EN
          </button>
          <button
            onClick={() => setLanguage("ka")}
            className={`relative px-2.5 py-1 rounded-full text-xs font-bold transition-colors z-10 select-none ${
              language === "ka"
                ? "text-cream-pure"
                : "text-tech-muted hover:text-tech-black"
            }`}
          >
            {language === "ka" && (
              <motion.div
                layoutId="langPillDesktop"
                className="absolute inset-0 bg-tech-black rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            )}
            ქარ
          </button>
        </div>

        {/* SIGN UP LINK */}
        <motion.button
          onClick={() => handleSmoothScroll("footer")}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="text-xs sm:text-sm font-semibold text-tech-black/80 hover:text-tech-black px-2 py-2 transition-colors whitespace-nowrap cursor-pointer"
        >
          {t.navbar.signup}
        </motion.button>

        {/* LOG IN CTA BUTTON */}
        <motion.button
          onClick={() => handleSmoothScroll("footer")}
          whileHover={{
            scale: 1.04,
            y: -2,
            boxShadow: "3px 3px 0px #111111",
          }}
          whileTap={{
            scale: 0.96,
            y: 1,
            boxShadow: "1px 1px 0px #111111",
          }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className="tactile-btn inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-orangeAccent text-tech-black font-bold text-xs sm:text-sm tracking-wide border-[1.5px] border-tech-black shadow-tactile-sm cursor-pointer whitespace-nowrap group"
        >
          <span>{t.navbar.login}</span>
          <motion.span
            className="inline-block transition-transform group-hover:translate-x-0.5"
          >
            →
          </motion.span>
        </motion.button>
      </div>

      {/* MOBILE ACTIONS & HAMBURGER TOGGLE */}
      <div className="flex items-center gap-2 sm:hidden">
        {/* Mobile Language Switcher with Animated Pill */}
        <div className="relative flex items-center p-0.5 rounded-full bg-cream-muted border-[1.5px] border-tech-black shadow-tactile-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`relative px-2 py-0.5 rounded-full text-[11px] font-bold z-10 transition-colors ${
              language === "en" ? "text-cream-pure" : "text-tech-muted"
            }`}
          >
            {language === "en" && (
              <motion.div
                layoutId="langPillMobile"
                className="absolute inset-0 bg-tech-black rounded-full -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            )}
            EN
          </button>
          <button
            onClick={() => setLanguage("ka")}
            className={`relative px-2 py-0.5 rounded-full text-[11px] font-bold z-10 transition-colors ${
              language === "ka" ? "text-cream-pure" : "text-tech-muted"
            }`}
          >
            {language === "ka" && (
              <motion.div
                layoutId="langPillMobile"
                className="absolute inset-0 bg-tech-black rounded-full -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            )}
            ქარ
          </button>
        </div>

        {/* Tactile Hamburger Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl border-[1.5px] border-tech-black bg-cream shadow-tactile-sm focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-tech-black" />
            ) : (
              <Menu className="w-5 h-5 text-tech-black" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* MOBILE EXPANDED MENU WITH SPRING ANIMATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-5 shadow-tactile-lg z-50 flex flex-col gap-3"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSmoothScroll(item.targetId)}
                className="flex items-center justify-between py-2.5 border-b border-tech-black/10 text-base font-semibold text-tech-black text-left"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4 opacity-50 -rotate-90" />
              </motion.button>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSmoothScroll("footer")}
                className="w-full text-center py-2.5 rounded-full bg-orangeAccent text-tech-black font-bold text-sm border-[1.5px] border-tech-black shadow-tactile-sm"
              >
                {t.navbar.login}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSmoothScroll("footer")}
                className="w-full text-center py-2.5 rounded-full bg-white text-tech-black font-semibold text-sm border-[1.5px] border-tech-black"
              >
                {t.navbar.signup}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
