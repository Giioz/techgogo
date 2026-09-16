"use client";

import React from "react";
import { Sparkles, BrainCircuit, Code2, Palette, Cloud, Database } from "lucide-react";
import { SUBJECTS } from "@/data/subjects";
import { useLanguage } from "@/context/LanguageContext";

interface SubjectPillsProps {
  selectedSubject: string;
  onSelectSubject: (id: string) => void;
}

export const SubjectPills: React.FC<SubjectPillsProps> = ({
  selectedSubject,
  onSelectSubject,
}) => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-4 h-4" />;
      case "Code2":
        return <Code2 className="w-4 h-4" />;
      case "Palette":
        return <Palette className="w-4 h-4" />;
      case "Cloud":
        return <Cloud className="w-4 h-4" />;
      case "Database":
        return <Database className="w-4 h-4" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar select-none">
      {SUBJECTS.map((subject) => {
        const isSelected = selectedSubject === subject.id;
        const translatedSubject = t.subjects.find((s) => s.id === subject.id);
        const displayName = translatedSubject ? translatedSubject.name : subject.name;

        return (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject.id)}
            className={`tactile-btn flex-shrink-0 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full border-[1.5px] border-tech-black font-semibold text-xs sm:text-sm transition-all duration-150 ${
              isSelected
                ? "bg-tech-black text-cream-pure shadow-tactile"
                : "bg-cream text-tech-black hover:bg-white shadow-tactile-sm"
            }`}
          >
            <span
              className={
                isSelected
                  ? "text-yellowAccent"
                  : subject.accent === "orange"
                  ? "text-orangeAccent"
                  : subject.accent === "yellow"
                  ? "text-[#DCA00B]"
                  : "text-purpleAccent"
              }
            >
              {getIcon(subject.iconName)}
            </span>
            <span>{displayName}</span>
            <span
              className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                isSelected
                  ? "bg-white/20 text-cream-pure"
                  : "bg-tech-black/5 text-tech-muted"
              }`}
            >
              {subject.coursesCount}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SubjectPills;
