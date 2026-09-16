"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  BookOpen,
  Monitor,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  UserCheck,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Course } from "@/types";
import { TECHGOGO_COURSES, getLocalizedCourse } from "@/data/coursesData";
import { useLanguage } from "@/context/LanguageContext";

interface CourseDetailClientProps {
  course: Course;
  lang: string;
}

export default function CourseDetailClient({ course: initialCourse, lang }: CourseDetailClientProps) {
  const { language } = useLanguage();
  const course = getLocalizedCourse(initialCourse, language);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    demographicStatus: "single-mother",
    motivation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const relatedCourses = TECHGOGO_COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const isKa = language === "ka";

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* COURSE HERO BANNER */}
      <PageHeader
        badge={course.badge || course.category}
        badgeAccent={course.categoryColor}
        titlePart1={course.title}
        subtitle={course.description}
        breadcrumbs={[
          { label: isKa ? "კურსები" : "Courses", href: `/${language}/courses` },
          { label: course.title },
        ]}
      >
        {/* KEY PARAMETERS BAR & PRIMARY ACTION */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
          {/* Lectures */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-tech-black/30 shadow-sm text-xs font-bold text-tech-black">
            <BookOpen className="w-4 h-4 text-orangeAccent" />
            <span>
              {course.lessons} {isKa ? "ლექცია" : "Lectures"}
            </span>
          </div>

          {/* Hours */}
          {course.totalHours && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-tech-black/30 shadow-sm text-xs font-bold text-tech-black">
              <Clock className="w-4 h-4 text-yellowAccent" />
              <span>
                {course.totalHours} {isKa ? "საათი" : "Total Hours"}
              </span>
            </div>
          )}

          {/* Format */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-tech-black/30 shadow-sm text-xs font-bold text-tech-black">
            <Monitor className="w-4 h-4 text-purpleAccent" />
            <span>
              {course.format === "Remote"
                ? isKa
                  ? "დისტანციური (Online)"
                  : "Remote Online"
                : isKa
                ? "ჰიბრიდული (Hybrid)"
                : "Hybrid"}
            </span>
          </div>

          {/* Price Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-tech-black text-cream-pure text-xs font-extrabold shadow-tactile-sm">
            <span>{isKa ? "ფასი:" : "Tuition:"}</span>
            <span className={course.isFree ? "text-yellowAccent" : "text-orangeAccent"}>
              {course.price}
            </span>
          </div>

          {/* Quick Scroll to Application Button */}
          <button
            onClick={() => {
              const el = document.getElementById("apply");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="tactile-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 ml-auto cursor-pointer"
          >
            <span>{isKa ? "განაცხადის შევსება" : "Apply for This Course"}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </PageHeader>

      {/* MAIN TWO-COLUMN BODY */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: CURRICULUM, OUTCOMES, AUDIENCE */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* 1. CURRICULUM MODULES */}
            {course.curriculum && (
              <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellowAccent/30 border border-tech-black text-xs font-bold text-tech-black mb-4">
                  <span>✦</span>
                  <span>{isKa ? "სასწავლო პროგრამა" : "Curriculum Modules"}</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-6">
                  {isKa ? "რას ისწავლით კურსზე?" : "What You'll Learn"}
                </h2>

                <div className="flex flex-col gap-4">
                  {course.curriculum.map((module) => (
                    <div
                      key={module.moduleNumber}
                      className="bg-white border-[1.5px] border-tech-black rounded-2xl p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-7 h-7 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center font-display font-black text-xs text-white">
                          {module.moduleNumber}
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg text-tech-black">
                          {module.title}
                        </h3>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-tech-black/80 pl-10 font-medium">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orangeAccent font-bold mt-0.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. COURSE OUTCOMES */}
            {course.outcomes && (
              <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orangeAccent/20 border border-tech-black text-xs font-bold text-tech-black mb-4">
                  <Award className="w-3.5 h-3.5 text-orangeAccent" />
                  <span>{isKa ? "პრაქტიკული შედეგები" : "Target Outcomes"}</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-6">
                  {isKa ? "რა შედეგს მიიღებთ?" : "What You Achieve"}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="bg-white border-[1.5px] border-tech-black rounded-2xl p-4 flex items-start gap-3 shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orangeAccent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-tech-black">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. TARGET AUDIENCE */}
            {course.targetAudience && (
              <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-8 shadow-tactile-sm">
                <h3 className="font-display font-bold text-lg sm:text-xl text-tech-black mb-4">
                  {isKa ? "ვისთვის არის ეს კურსი განკუთვნილი?" : "Who This Course is For"}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {course.targetAudience.map((aud, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-tech-black text-xs font-semibold text-tech-black shadow-sm"
                    >
                      ✓ {aud}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: INSTRUCTOR CARD & ENROLLMENT FORM */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-6">
            {/* INSTRUCTOR CARD */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 shadow-tactile-sm">
              <div className="text-[11px] font-bold text-tech-muted uppercase tracking-wider mb-4 pb-2 border-b border-tech-black/10">
                {isKa ? "ლექტორი & მენტორი" : "Instructor & Mentor"}
              </div>
              <div className="flex items-center gap-3.5 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl border-[1.5px] border-tech-black flex items-center justify-center font-display font-black text-lg text-white shadow-tactile-sm"
                  style={{ backgroundColor: course.instructor.avatarBg }}
                >
                  {course.instructor.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-tech-black">
                    {course.instructor.name}
                  </h4>
                  <p className="text-xs font-semibold text-tech-muted">
                    {course.instructor.role}
                  </p>
                </div>
              </div>
              {course.instructor.bio && (
                <p className="text-xs text-tech-black/80 font-medium leading-relaxed mt-2 pt-2 border-t border-tech-black/10">
                  {course.instructor.bio}
                </p>
              )}
            </div>

            {/* ADMISSION APPLICATION FORM */}
            <div
              id="apply"
              className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-7 shadow-tactile-sm relative scroll-mt-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orangeAccent/20 border border-tech-black text-xs font-bold text-tech-black mb-3">
                <Send className="w-3 h-3 text-orangeAccent" />
                <span>{isKa ? "მიღება ღიაა" : "Applications Open"}</span>
              </div>
              <h3 className="font-display font-black text-xl text-tech-black mb-1">
                {isKa ? "გამოაგზავნეთ განაცხადი" : "Enrollment Application"}
              </h3>
              <p className="text-xs text-tech-muted mb-5 font-medium">
                {isKa
                  ? "შეავსეთ ფორმა და ჩვენი გუნდი დაგიკავშირდებათ გასაუბრების დასანიშნად."
                  : "Submit your details and our admissions coordinator will schedule an interview."}
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-yellowAccent/30 border-[1.5px] border-tech-black rounded-2xl p-6 text-center shadow-tactile-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                    ✓
                  </div>
                  <h4 className="font-display font-bold text-lg text-tech-black mb-2">
                    {isKa ? "განაცხადი მიღებულია!" : "Application Received!"}
                  </h4>
                  <p className="text-xs text-tech-black/80 font-medium leading-relaxed">
                    {isKa
                      ? "მადლობა დაინტერესებისთვის. TechGogo-ს კოორდინატორი 24 საათში დაგიკავშირდებათ მითითებულ ნომერზე."
                      : "Thank you for applying. A TechGogo admissions lead will reach out within 24 hours."}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-left">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "სახელი, გვარი *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isKa ? "ანა ბერიძე" : "Jane Doe"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                    />
                  </div>

                  {/* Age & Phone Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ასაკი *" : "Age *"}
                      </label>
                      <input
                        type="number"
                        required
                        min="16"
                        max="80"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="24"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ტელეფონი *" : "Phone *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+995 5..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "ელ.ფოსტა *" : "Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anna@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                    />
                  </div>

                  {/* Demographic Status Selector */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "სოციალური / დემოგრაფიული სტატუსი" : "Demographic Status"}
                    </label>
                    <select
                      value={formData.demographicStatus}
                      onChange={(e) =>
                        setFormData({ ...formData, demographicStatus: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                    >
                      <option value="single-mother">
                        {isKa ? "მარტოხელა დედა" : "Single mother"}
                      </option>
                      <option value="1plus4">
                        {isKa ? "„1+4“ პროექტის მონაწილე" : "‘1+4’ Minority student"}
                      </option>
                      <option value="entrepreneur">
                        {isKa ? "მეწარმე ქალი" : "Female entrepreneur"}
                      </option>
                      <option value="other">{isKa ? "სხვა" : "Other"}</option>
                    </select>
                  </div>

                  {/* Motivation */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "რატომ აირჩიეთ ეს კურსი? (მაქს. 500 სიმბოლო)" : "Motivation Statement (max 500 chars)"}
                    </label>
                    <textarea
                      rows={3}
                      maxLength={500}
                      required
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      placeholder={
                        isKa
                          ? "მოკლედ დაწერეთ თქვენი მიზნისა და მოლოდინების შესახებ..."
                          : "Tell us about your learning goals..."
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="tactile-btn mt-2 w-full py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? (isKa ? "იგზავნება..." : "Sending...") : (isKa ? "განაცხადის გაგზავნა" : "Submit Application")}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* RELATED COURSES */}
        <div className="mt-16 pt-12 border-t border-tech-black/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orangeAccent">
                {isKa ? "ალტერნატიული მიმართულებები" : "Explore Tracks"}
              </span>
              <h3 className="font-display font-black text-2xl text-tech-black">
                {isKa ? "სხვა კურსები TechGogo-ში" : "Other Courses at TechGogo"}
              </h3>
            </div>
            <Link
              href={`/${language}/courses`}
              className="text-xs font-bold text-tech-black hover:text-orangeAccent transition-colors flex items-center gap-1"
            >
              <span>{isKa ? "ყველა კურსი" : "View All"}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
