"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  GraduationCap,
  Briefcase,
  Heart,
  ArrowRight,
  Sparkles,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import {
  ABOUT_MISSION,
  STRATEGIC_PILLARS,
  TEAM_MEMBERS,
  STUDENT_STORIES,
  PARTNER_LOGOS,
} from "@/data/aboutData";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();
  const isKa = language === "ka";

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* EDITORIAL HERO */}
      <PageHeader
        badge={isKa ? "ჩვენ შესახებ" : "About TechGogo"}
        badgeAccent="yellow"
        titlePart1={isKa ? "სოციალური საწარმო" : "Social Enterprise for"}
        highlightedWord={isKa ? "ქალთა ეკონომიკური" : "Women's Economic"}
        highlightAccent="orange"
        titlePart2={isKa ? "გაძლიერებისთვის" : "Empowerment"}
        subtitle={isKa ? ABOUT_MISSION.leadKa : ABOUT_MISSION.leadEn}
        breadcrumbs={[{ label: isKa ? "ჩვენ შესახებ" : "About Us" }]}
      />

      {/* 1. WHO WE ARE & DUAL-MODEL EXPLANATION */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Card */}
          <div className="lg:col-span-6">
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-8 sm:p-12 shadow-tactile relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-orangeAccent border-[1.5px] border-tech-black flex items-center justify-center text-white font-display font-black text-xl mb-6 shadow-tactile-sm">
                G
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-4">
                {isKa ? "ვინ ვართ ჩვენ?" : "Who is TechGogo?"}
              </h3>
              <p className="text-sm sm:text-base text-tech-black/85 leading-relaxed font-medium mb-6">
                {isKa
                  ? "TechGogo არის ახლად დაფუძნებული ციფრული სოციალური საწარმო ქვემო ქართლში (მარნეული). ჩვენი მოდელი უნიკალურია: ჩვენ ვასწავლით ქალებს მოთხოვნად ციფრულ პროფესიებს და ამავდროულად ვქმნით სარეკლამო სააგენტოს, სადაც კურსდამთავრებულები ასრულებენ კომერციულ შეკვეთებს."
                  : "TechGogo is a newly established digital social enterprise in Kvemo Kartli (Marneuli). Our model is dual-pronged: a regional digital academy combined with a creative advertising agency where graduates deliver client work."}
              </p>
              <div className="pt-4 border-t border-tech-black/10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellowAccent/30 border border-tech-black">
                  {isKa ? "ციფრული სკოლა" : "Digital Academy"}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purpleAccent/25 border border-tech-black">
                  {isKa ? "სარეკლამო სააგენტო" : "Creative Agency"}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-orangeAccent/20 border border-tech-black">
                  {isKa ? "სოციალური გავლენა" : "Social Enterprise"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Core Stats & Recognition */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Grace Hopper Award Highlight */}
            <div className="bg-yellowAccent/30 border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-8 shadow-tactile-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center text-white">
                  <Award className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orangeAccent">
                    Winner 2023
                  </span>
                  <h4 className="font-display font-bold text-lg text-tech-black">
                    Grace Hopper Award — Special Mention
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-tech-black/80 font-medium leading-relaxed">
                {isKa
                  ? "TechGogo აღიარებულ იქნა გრეის ჰოპერის ყოველწლიურ დაჯილდოებაზე USAID-ის, UN Women-ისა და TBC Bank-ის მიერ რეგიონში ქალთა ტექნოლოგიური გაძლიერების გამორჩეული მოდელისთვის."
                  : "Recognized at the prestigious Grace Hopper Awards by USAID, UN Women, and TBC Bank for innovative regional female empowerment."}
              </p>
            </div>

            {/* EU & CSRDG Partnership Card */}
            <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-8 shadow-tactile-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purpleAccent border border-tech-black flex items-center justify-center text-white">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purpleAccent">
                    EU & CSRDG Project
                  </span>
                  <h4 className="font-display font-bold text-lg text-tech-black">
                    {isKa ? "უნარების გაძლიერება და დასაქმება" : "Skills & Employment Initiative"}
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-tech-black/80 font-medium leading-relaxed">
                {isKa
                  ? "პროექტი ხორციელდება ევროკავშირისა და CSRDG-ის მხარდაჭერით („უნარების გაძლიერება და ინოვაციური დასაქმება საქართველოს რეგიონული განვითარებისთვის“)."
                  : "Implemented with support from the European Union and CSRDG under the regional development and employment programme."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 5 STRATEGIC PILLARS (IMPACT FRAMEWORK) */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-8 sm:p-14 shadow-tactile">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orangeAccent text-tech-black text-xs font-bold uppercase tracking-wider border border-tech-black mb-3 shadow-tactile-sm">
              <span>✦</span>
              <span>{isKa ? "სტრატეგიული ხედვა" : "Strategic Framework"}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-tech-black">
              {isKa ? "როგორ ვქმნით გრძელვადიან გავლენას?" : "The 5 Pillars of Our Impact"}
            </h2>
            <p className="text-xs sm:text-sm text-tech-muted font-medium mt-2">
              {isKa
                ? "TechGogo-ს 5-საფეხურიანი ეკოსისტემა, რომელიც სწავლიდან პირდაპირ დასაქმებამდე მიდის."
                : "A connected 5-step pathway from accessible education to long-term economic independence."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {STRATEGIC_PILLARS.map((pillar) => (
              <div
                key={pillar.step}
                className="bg-white border-[1.5px] border-tech-black rounded-2xl p-5 flex flex-col justify-between shadow-sm relative group hover:shadow-tactile-sm transition-all"
              >
                <div>
                  <div
                    className={`w-8 h-8 rounded-xl border border-tech-black flex items-center justify-center font-display font-black text-xs mb-3.5 shadow-tactile-sm ${
                      pillar.accent === "orange"
                        ? "bg-orangeAccent text-white"
                        : pillar.accent === "yellow"
                        ? "bg-yellowAccent text-tech-black"
                        : "bg-purpleAccent text-white"
                    }`}
                  >
                    {pillar.step}
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-tech-black mb-2">
                    {isKa ? pillar.titleKa : pillar.titleEn}
                  </h4>
                  <p className="text-xs text-tech-black/75 font-medium leading-relaxed">
                    {isKa ? pillar.descKa : pillar.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & FACULTY SHOWCASE */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purpleAccent/20 border border-tech-black text-xs font-bold text-tech-black mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{isKa ? "გუნდი & ლექტორები" : "Leadership & Faculty"}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-tech-black">
            {isKa ? "ჩვენი გუნდი" : "Meet the TechGogo Team"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => {
            const name = isKa ? member.name : (member.nameEn || member.name);
            const role = isKa ? member.role : (member.roleEn || member.role);
            const bio = isKa ? member.bio : (member.bioEn || member.bio);
            const tag = isKa ? member.tag : (member.tagEn || member.tag);

            return (
              <div
                key={member.id}
                className="tactile-card bg-cream border-[1.5px] border-tech-black rounded-3xl p-7 flex flex-col justify-between shadow-tactile-sm hover:shadow-tactile transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl border-[1.5px] border-tech-black flex items-center justify-center font-display font-black text-xl text-white shadow-tactile-sm ${
                        member.accent === "orange"
                          ? "bg-orangeAccent"
                          : member.accent === "yellow"
                          ? "bg-yellowAccent text-tech-black"
                          : "bg-purpleAccent"
                      }`}
                    >
                      {name.charAt(0)}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-tech-black text-tech-black">
                      {tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-tech-black mb-1">
                    {name}
                  </h3>
                  <p className="text-xs font-bold text-orangeAccent mb-4">
                    {role}
                  </p>
                  <p className="text-xs sm:text-sm text-tech-black/80 font-medium leading-relaxed">
                    {bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. STUDENT STORIES (EDITORIAL VIGNETTES) */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-8 sm:p-14 shadow-tactile">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellowAccent/30 border border-tech-black text-xs font-bold text-tech-black mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orangeAccent" />
              <span>{isKa ? "ისტორიები & შედეგები" : "Graduate Stories"}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-tech-black">
              {isKa ? "რას ამბობენ ჩვენზე?" : "Voices of Our Students"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {STUDENT_STORIES.map((story) => {
              const name = isKa ? story.name : (story.nameEn || story.name);
              const location = isKa ? story.location : (story.locationEn || story.location);
              const quote = isKa ? story.quote : (story.quoteEn || story.quote);
              const fullStory = isKa ? story.fullStory : (story.fullStoryEn || story.fullStory);
              const course = isKa ? story.course : (story.courseEn || story.course);

              return (
                <div
                  key={story.id}
                  className="bg-cream border-[1.5px] border-tech-black rounded-2xl p-6 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold text-tech-black leading-relaxed italic mb-5">
                      {quote}
                    </p>
                    <p className="text-xs text-tech-muted font-medium leading-relaxed mb-6">
                      {fullStory}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-tech-black/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-tech-black block">{name}</span>
                      <span className="text-[11px] text-tech-muted">{location} • {story.age} {isKa ? "წ." : "yrs"}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-tech-black/40 text-[10px] font-bold text-tech-black">
                      {course}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DONOR & CORPORATE PARTNERS CAROUSEL */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-tech-muted uppercase tracking-wider">
            {isKa ? "დონორები და კორპორატიული პარტნიორები" : "Supported by Donors & Enterprise Partners"}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {PARTNER_LOGOS.map((p, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full bg-cream border-[1.5px] border-tech-black text-xs font-bold text-tech-black shadow-tactile-sm"
            >
              {p.name}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL ACTION */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-yellowAccent border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-8 sm:p-14 shadow-tactile max-w-3xl mx-auto">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-3">
            {isKa ? "გახდით ჩვენი პარტნიორი" : "Partner with TechGogo"}
          </h3>
          <p className="text-xs sm:text-sm text-tech-black/80 font-medium max-w-lg mx-auto mb-6">
            {isKa
              ? "შეუკვეთეთ სარეკლამო სერვისები, დაასაქმეთ კურსდამთავრებული ქალები ან გაიღეთ დონაცია რეგიონის გასაძლიერებლად."
              : "Hire our creative agency, recruit talented graduates, or support regional tech scholarships."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${language}/services`}
              className="tactile-btn px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile"
            >
              {isKa ? "სააგენტოს სერვისები" : "Explore Agency Services"}
            </Link>
            <Link
              href={`/${language}/donate`}
              className="tactile-btn px-6 py-3 rounded-full bg-white text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile"
            >
              {isKa ? "გაიღე დონაცია" : "Support a Student"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
