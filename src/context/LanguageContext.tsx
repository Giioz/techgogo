"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { translations, TranslationData } from "@/data/translations";

export type Language = "en" | "ka";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLanguage?: Language;
}> = ({ children, initialLanguage = "en" }) => {
  const params = useParams();
  const routeLang = (params?.lang as Language) === "ka" ? "ka" : "en";
  const [language, setLanguageState] = useState<Language>(routeLang || initialLanguage);

  // Sync with route params on direct load / external navigation
  useEffect(() => {
    if (params?.lang === "en" || params?.lang === "ka") {
      setLanguageState(params.lang as Language);
      document.documentElement.lang = params.lang;
    }
  }, [params?.lang]);

  // Handle browser back and forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      const match = pathname.match(/^\/(en|ka)($|\/)/);
      if (match && (match[1] === "en" || match[1] === "ka")) {
        const targetLang = match[1] as Language;
        setLanguageState(targetLang);
        document.documentElement.lang = targetLang;
        document.cookie = `NEXT_LOCALE=${targetLang}; path=/; max-age=31536000; SameSite=Lax`;
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;

    const executeUpdate = () => {
      setLanguageState(newLang);
      document.documentElement.lang = newLang;
      document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("techgogo_lang", newLang);
      }

      // Seamlessly update browser URL and history without unmounting the React tree
      if (typeof window !== "undefined") {
        const pathname = window.location.pathname;
        const hash = window.location.hash;
        const segments = pathname.split("/");
        if (segments[1] === "en" || segments[1] === "ka") {
          segments[1] = newLang;
          const newPath = segments.join("/") + hash;
          window.history.pushState({ lang: newLang }, "", newPath);
        } else {
          window.history.pushState({ lang: newLang }, "", `/${newLang}${pathname}${hash}`);
        }
      }
    };

    // Use native View Transitions API if supported for an ultra-smooth, flicker-free cross-fade
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(executeUpdate);
    } else {
      executeUpdate();
    }
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ka" ? "lang-ka" : ""}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
