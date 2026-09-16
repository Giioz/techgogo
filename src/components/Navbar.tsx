"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.navbar.subjects, hasDropdown: true },
    { label: t.navbar.courses, hasDropdown: true },
    { label: t.navbar.degrees, hasDropdown: false },
    { label: t.navbar.business, hasDropdown: false },
  ];

  const navItemClass =
    language === "ka"
      ? "flex items-center gap-1 px-3 py-1.5 text-[13px] lg:text-sm font-semibold text-tech-black/90 hover:text-tech-black rounded-full hover:bg-black/5 transition-colors whitespace-nowrap"
      : "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-tech-black/90 hover:text-tech-black rounded-full hover:bg-black/5 transition-colors";

  return (
    <nav className="w-full pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-12 flex items-center justify-between relative z-30">
      {/* LEFT: TECHGOGO WORDMARK */}
      <div className="flex items-center gap-2.5">
        <a href="#" className="group flex items-center gap-2 text-decoration-none">
          {/* Playful Geometric Logo Icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center shadow-tactile-sm group-hover:rotate-6 transition-transform duration-200">
            <span className="font-display font-black text-lg text-cream-pure tracking-tighter">
              G
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-display font-extrabold text-2xl sm:text-[26px] tracking-tight text-tech-black">
              Tech<span className="text-orangeAccent">Gogo</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-tech-black ml-0.5 mb-1" />
          </div>
        </a>
      </div>

      {/* CENTER: EDITORIAL NAVIGATION LINKS (DESKTOP) */}
      <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={navItemClass}
          >
            <span>{item.label}</span>
            {item.hasDropdown && (
              <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200" />
            )}
          </button>
        ))}
      </div>

      {/* RIGHT: LANGUAGE TOGGLE & ACTIONS */}
      <div className="hidden sm:flex items-center gap-2.5 lg:gap-4">
        {/* GEORGIAN / ENGLISH LANGUAGE SWITCHER */}
        <div className="flex items-center p-0.5 rounded-full bg-cream-muted border-[1.5px] border-tech-black shadow-tactile-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
              language === "en"
                ? "bg-tech-black text-cream-pure shadow-sm"
                : "text-tech-muted hover:text-tech-black"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ka")}
            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
              language === "ka"
                ? "bg-tech-black text-cream-pure shadow-sm"
                : "text-tech-muted hover:text-tech-black"
            }`}
          >
            ქარ
          </button>
        </div>

        <a
          href="#signup"
          className="text-xs sm:text-sm font-semibold text-tech-black/80 hover:text-tech-black px-2 py-2 transition-colors whitespace-nowrap"
        >
          {t.navbar.signup}
        </a>

        <a
          href="#login"
          className="tactile-btn inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-orangeAccent text-tech-black font-bold text-xs sm:text-sm tracking-wide border-[1.5px] border-tech-black shadow-tactile-sm hover:shadow-tactile active:translate-y-0.5 whitespace-nowrap"
        >
          <span>{t.navbar.login}</span>
        </a>
      </div>

      {/* MOBILE ACTIONS & HAMBURGER TOGGLE */}
      <div className="flex items-center gap-2 sm:hidden">
        {/* Mobile Language Switcher */}
        <div className="flex items-center p-0.5 rounded-full bg-cream-muted border-[1.5px] border-tech-black shadow-tactile-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              language === "en" ? "bg-tech-black text-cream-pure" : "text-tech-muted"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ka")}
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              language === "ka" ? "bg-tech-black text-cream-pure" : "text-tech-muted"
            }`}
          >
            ქარ
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl border-[1.5px] border-tech-black bg-cream shadow-tactile-sm"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-tech-black" /> : <Menu className="w-5 h-5 text-tech-black" />}
        </button>
      </div>

      {/* MOBILE EXPANDED MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-cream border-[1.5px] border-tech-black rounded-3xl p-5 shadow-tactile-lg z-50 flex flex-col gap-3">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between py-2.5 border-b border-tech-black/10 text-base font-semibold text-tech-black"
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
            </div>
          ))}

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href="#login"
              className="w-full text-center py-2.5 rounded-full bg-orangeAccent text-tech-black font-bold text-sm border-[1.5px] border-tech-black shadow-tactile-sm"
            >
              {t.navbar.login}
            </a>
            <a
              href="#signup"
              className="w-full text-center py-2.5 rounded-full bg-white text-tech-black font-semibold text-sm border-[1.5px] border-tech-black"
            >
              {t.navbar.signup}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
