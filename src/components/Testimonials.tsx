"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const test = t.testimonials;

  const initials = ["TA", "CD", "KS"];
  const accents: Array<"orange" | "purple" | "yellow"> = ["orange", "purple", "yellow"];

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
      <SectionHeading
        badge={test.badge}
        badgeAccent="orange"
        titlePart1={test.titlePart1}
        highlightedWord={test.storiesWord}
        highlightAccent="yellow"
        titlePart2={test.titlePart2}
        subtitle={test.subtitle}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {test.items.map((rev, idx) => {
          const avatarBgs = {
            orange: "bg-[#FF5A3D]",
            purple: "bg-[#BD94F4]",
            yellow: "bg-[#FDCC42]",
          };
          const accent = accents[idx] || "orange";

          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="tactile-card group bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-tactile-sm hover:shadow-tactile-lg transition-all cursor-default"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellowAccent text-[#C99E25] transition-transform group-hover:scale-110"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base font-medium text-tech-black leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-tech-black/10 flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className={`w-10 h-10 rounded-2xl border-[1.5px] border-tech-black flex items-center justify-center font-display font-extrabold text-xs text-tech-black shadow-tactile-sm ${
                    avatarBgs[accent]
                  }`}
                >
                  {initials[idx]}
                </motion.div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-tech-black leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] font-medium text-tech-muted leading-tight mt-0.5">
                    {rev.role}
                  </p>
                  <span className="text-[10px] font-semibold text-orangeAccent">
                    {rev.course}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Testimonials;
