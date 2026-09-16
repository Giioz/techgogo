"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const routeLang = (params?.lang as Language) === "ka" ? "ka" : "en";
  const [language, setLanguageState] = useState<Language>(routeLang || initialLanguage);

  useEffect(() => {
    if (params?.lang === "en" || params?.lang === "ka") {
      setLanguageState(params.lang as Language);
      document.documentElement.lang = params.lang;
    }
  }, [params?.lang]);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);

    // Save cookie for middleware detection on future visits to /
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("techgogo_lang", newLang);
    }
    document.documentElement.lang = newLang;

    // Navigate to the localized route
    if (pathname) {
      const segments = pathname.split("/");
      if (segments[1] === "en" || segments[1] === "ka") {
        segments[1] = newLang;
        const newPath = segments.join("/");
        router.push(newPath || `/${newLang}`);
      } else {
        router.push(`/${newLang}${pathname}`);
      }
    } else {
      router.push(`/${newLang}`);
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
