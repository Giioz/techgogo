"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Palette,
  Megaphone,
  TrendingUp,
  Printer,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Send,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { TECHGOGO_SERVICES } from "@/data/servicesData";
import { PARTNER_LOGOS } from "@/data/aboutData";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();
  const isKa = language === "ka";

  // Multi-step RFP Form state
  const [rfpStep, setRfpStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(["graphic-design"]);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([]);
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    websiteOrSocial: "",
    projectBudget: "medium",
  });
  const [contactInfo, setContactInfo] = useState({
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "graphic-design":
        return <Palette className="w-5 h-5 text-purpleAccent" />;
      case "digital-marketing":
        return <Megaphone className="w-5 h-5 text-yellowAccent" />;
      case "paid-ads":
        return <TrendingUp className="w-5 h-5 text-orangeAccent" />;
      case "print-materials":
      default:
        return <Printer className="w-5 h-5 text-orangeAccent" />;
    }
  };

  const handleToggleService = (slug: string) => {
    if (selectedServices.includes(slug)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== slug));
      }
    } else {
      setSelectedServices([...selectedServices, slug]);
    }
  };

  const handleToggleDeliverable = (item: string) => {
    if (selectedDeliverables.includes(item)) {
      setSelectedDeliverables(selectedDeliverables.filter((d) => d !== item));
    } else {
      setSelectedDeliverables([...selectedDeliverables, item]);
    }
  };

  const handleSubmitRfp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* EDITORIAL AGENCY HERO */}
      <PageHeader
        badge={isKa ? "კრეატიული სააგენტო & სოციალური საწარმო" : "Creative Agency & Social Enterprise"}
        badgeAccent="orange"
        titlePart1={isKa ? "სარეკლამო სააგენტო" : "Creative Agency"}
        highlightedWord="TechGOGO"
        highlightAccent="orange"
        titlePart2={isKa ? "— ჩვენ ვიცით როგორ!" : "— High-Impact Solutions"}
        subtitle={
          isKa
            ? "პროფესიონალური მარკეტინგული, დიზაინისა და ბეჭდური მომსახურება ბიზნესებისთვის. თითოეული შეკვეთის შემოსავალი უშუალოდ ასაქმებს რეგიონში გადამზადებულ ქალებს."
            : "Professional branding, performance advertising, and merchandise for businesses. 100% of agency revenue sustains regional female employment."
        }
        breadcrumbs={[{ label: isKa ? "სერვისები" : "Services" }]}
      >
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={() => {
              const el = document.getElementById("rfp");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 cursor-pointer"
          >
            <span>{isKa ? "მოითხოვეთ სერვისი (RFP)" : "Request Agency RFP"}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          <a
            href="tel:+995577137111"
            className="tactile-btn inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-tech-black font-bold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile-sm"
          >
            <span>+995 577 137 111</span>
          </a>
        </div>
      </PageHeader>

      {/* CORE 4 SERVICES MATRIX */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellowAccent/30 border border-tech-black text-xs font-bold text-tech-black mb-3">
            <span>✦</span>
            <span>{isKa ? "რას გთავაზობთ?" : "Core Capabilities"}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-tech-black tracking-tight">
            {isKa ? "ჩვენი სერვისები ბიზნესისთვის" : "Our Services for Businesses"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TECHGOGO_SERVICES.map((s) => (
            <div
              key={s.id}
              className="tactile-card bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-7 sm:p-8 flex flex-col justify-between shadow-tactile-sm hover:shadow-tactile-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-tech-black flex items-center justify-center shadow-sm">
                    {getServiceIcon(s.slug)}
                  </div>
                  <span className="text-[11px] font-bold text-tech-muted uppercase tracking-wider">
                    Agency Retainer
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-tech-black mb-2.5">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-tech-black/80 font-medium leading-relaxed mb-6">
                  {s.shortDesc}
                </p>

                <div className="mb-6 pt-4 border-t border-tech-black/10">
                  <div className="text-[11px] font-bold text-tech-muted uppercase tracking-wider mb-2.5">
                    {isKa ? "ძირითადი მიწოდებები:" : "Key Deliverables:"}
                  </div>
                  <ul className="space-y-1.5 text-xs font-semibold text-tech-black">
                    {s.deliverables.slice(0, 3).map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orangeAccent font-bold">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-tech-black/10 flex items-center justify-between">
                <span className="text-xs font-bold text-tech-muted">
                  {isKa ? "სრული მხარდაჭერით" : "Full Production"}
                </span>
                <Link
                  href={`/${language}/services/${s.slug}`}
                  className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs border-[1.5px] border-tech-black shadow-tactile-sm hover:shadow-tactile"
                >
                  <span>{isKa ? "სრულად წაკითხვა" : "View Service"}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK (4 PROCESS STEPS) */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-8 sm:p-14 shadow-tactile-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purpleAccent/20 border border-tech-black text-xs font-bold text-tech-black mb-3">
              <span>✦</span>
              <span>{isKa ? "სამუშაო პროცესი" : "Workflow"}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-tech-black">
              {isKa ? "როგორ ვმუშაობთ თქვენთან ერთად" : "How We Deliver Results"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                titleKa: "გვითხარით რა გჭირდებათ",
                titleEn: "Tell Us What You Need",
                descKa: "შეავსეთ მოთხოვნის ფორმა ან დაგვიკავშირდით ბრიფინგისთვის.",
                descEn: "Share your business goals, project scope, and deadlines.",
              },
              {
                step: 2,
                titleKa: "სტრატეგია და დაგეგმვა",
                titleEn: "Strategy & Planning",
                descKa: "ვადგენთ ზუსტ კალენდარს, ვიზუალურ კონცეფციასა და ბიუჯეტს.",
                descEn: "We develop exact creative directions, milestones, and deliverables.",
              },
              {
                step: 3,
                titleKa: "შექმნა და დამუშავება",
                titleEn: "Create & Refine",
                descKa: "ჩვენი დიზაინერები და მარკეტერები ამზადებენ მასალებს.",
                descEn: "Talented specialists craft deliverables under senior lead guidance.",
              },
              {
                step: 4,
                titleKa: "ჩაბარება & გაშვება",
                titleEn: "Deliver & Launch",
                descKa: "საბოლოო ფაილების გადაცემა, კამპანიის გაშვება და ანალიტიკა.",
                descEn: "Handover of vector and print files, campaign live launch, and KPI reporting.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="bg-cream border-[1.5px] border-tech-black rounded-2xl p-6 relative shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center font-display font-black text-sm text-white mb-4 shadow-tactile-sm">
                  {p.step}
                </div>
                <h4 className="font-display font-bold text-base text-tech-black mb-2">
                  {isKa ? p.titleKa : p.titleEn}
                </h4>
                <p className="text-xs text-tech-black/75 font-medium leading-relaxed">
                  {isKa ? p.descKa : p.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT & PARTNER TRUST STRIP */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-tech-muted uppercase tracking-wider">
            {isKa ? "ორგანიზაციები და ბრენდები, რომლებიც გვენდობიან" : "Trusted by Organizations & Enterprise Partners"}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {PARTNER_LOGOS.map((p, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full bg-cream border border-tech-black/30 text-xs font-bold text-tech-black shadow-sm"
            >
              {p.name}
            </div>
          ))}
        </div>
      </section>

      {/* MULTI-STEP INTERACTIVE B2B RFP FORM */}
      <section id="rfp" className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-12 scroll-mt-6">
        <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-6 sm:p-12 shadow-tactile">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orangeAccent text-tech-black text-xs font-bold uppercase tracking-wider border border-tech-black mb-3 shadow-tactile-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B RFP Request</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-2">
              {isKa ? "გამოაგზავნეთ სერვისის მოთხოვნა" : "Request Agency Proposal"}
            </h3>
            <p className="text-xs sm:text-sm text-tech-muted font-medium">
              {isKa
                ? "შეარჩიეთ თქვენთვის სასურველი მიმართულება და ჩვენი გაყიდვების გუნდი მოგიმზადებთ ინდივიდუალურ შეთავაზებას."
                : "Select the capabilities you need and our team will prepare a custom commercial proposal."}
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full border-[1.5px] border-tech-black flex items-center justify-center text-xs font-extrabold transition-all ${
                    rfpStep === step
                      ? "bg-orangeAccent text-tech-black shadow-tactile-sm scale-110"
                      : rfpStep > step
                      ? "bg-tech-black text-cream-pure"
                      : "bg-white text-tech-muted"
                  }`}
                >
                  {rfpStep > step ? "✓" : step}
                </div>
                {step < 4 && <div className="w-6 sm:w-10 h-0.5 bg-tech-black/20" />}
              </div>
            ))}
          </div>

          {isSubmitted ? (
            <div className="bg-white border-[1.5px] border-tech-black rounded-3xl p-8 text-center shadow-tactile-sm">
              <div className="w-14 h-14 rounded-2xl bg-orangeAccent border border-tech-black flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                ✓
              </div>
              <h4 className="font-display font-black text-2xl text-tech-black mb-2">
                {isKa ? "მოთხოვნა წარმატებით გაიგზავნა!" : "Proposal Request Received!"}
              </h4>
              <p className="text-xs sm:text-sm text-tech-muted max-w-md mx-auto mb-6 font-medium">
                {isKa
                  ? "მადლობა! TechGogo-ს სააგენტოს მენეჯერი 24 საათში დაგიკავშირდებათ კომერციული წინადადებით."
                  : "Thank you for reaching out. A TechGogo account manager will deliver an itemized estimate within 24 hours."}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setRfpStep(1);
                }}
                className="tactile-btn px-6 py-2.5 rounded-full bg-cream border-[1.5px] border-tech-black text-xs font-bold text-tech-black shadow-tactile-sm"
              >
                {isKa ? "ახალი მოთხოვნის გაგზავნა" : "Submit Another Request"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitRfp} className="space-y-6">
              {/* STEP 1: WHAT DO YOU NEED? */}
              {rfpStep === 1 && (
                <div>
                  <h4 className="font-display font-bold text-lg text-tech-black mb-4">
                    {isKa ? "ნაბიჯი 1: რომელი სერვისები გაინტერესებთ?" : "Step 1: What services do you need?"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TECHGOGO_SERVICES.map((s) => {
                      const isSelected = selectedServices.includes(s.slug);
                      return (
                        <div
                          key={s.slug}
                          onClick={() => handleToggleService(s.slug)}
                          className={`p-4 rounded-2xl border-[1.5px] border-tech-black cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? "bg-yellowAccent/30 shadow-tactile-sm"
                              : "bg-white hover:bg-cream-muted"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {getServiceIcon(s.slug)}
                            <span className="text-xs sm:text-sm font-bold text-tech-black">
                              {s.title}
                            </span>
                          </div>
                          <span
                            className={`w-5 h-5 rounded-full border border-tech-black flex items-center justify-center text-xs font-bold ${
                              isSelected ? "bg-tech-black text-white" : "bg-white"
                            }`}
                          >
                            {isSelected ? "✓" : ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setRfpStep(2)}
                      className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs border-[1.5px] border-tech-black shadow-tactile"
                    >
                      <span>{isKa ? "შემდეგი: მიწოდებები →" : "Next: Deliverables →"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: SPECIFIC DELIVERABLES */}
              {rfpStep === 2 && (
                <div>
                  <h4 className="font-display font-bold text-lg text-tech-black mb-4">
                    {isKa ? "ნაბიჯი 2: რა კონკრეტული შედეგები გჭირდებათ?" : "Step 2: Specific deliverables needed"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {TECHGOGO_SERVICES.filter((s) => selectedServices.includes(s.slug))
                      .flatMap((s) => s.checklistItems)
                      .map((item, idx) => {
                        const isChecked = selectedDeliverables.includes(item);
                        return (
                          <div
                            key={idx}
                            onClick={() => handleToggleDeliverable(item)}
                            className={`p-3 rounded-xl border border-tech-black/40 text-xs font-semibold cursor-pointer flex items-center justify-between transition-all ${
                              isChecked
                                ? "bg-tech-black text-cream-pure"
                                : "bg-white text-tech-black hover:bg-cream-muted"
                            }`}
                          >
                            <span>{item}</span>
                            <span>{isChecked ? "✓" : "+"}</span>
                          </div>
                        );
                      })}
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setRfpStep(1)}
                      className="text-xs font-bold text-tech-muted hover:text-tech-black"
                    >
                      {isKa ? "← უკან" : "← Back"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setRfpStep(3)}
                      className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs border-[1.5px] border-tech-black shadow-tactile"
                    >
                      <span>{isKa ? "შემდეგი: კომპანია →" : "Next: Company →"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: COMPANY DETAILS */}
              {rfpStep === 3 && (
                <div>
                  <h4 className="font-display font-bold text-lg text-tech-black mb-4">
                    {isKa ? "ნაბიჯი 3: გვიამბეთ თქვენი კომპანიის შესახებ" : "Step 3: Tell us about your organization"}
                  </h4>
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "კომპანიის / ორგანიზაციის დასახელება *" : "Company Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={companyInfo.companyName}
                        onChange={(e) =>
                          setCompanyInfo({ ...companyInfo, companyName: e.target.value })
                        }
                        placeholder={isKa ? "შპს მაგალითი" : "Acme Corp"}
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ვებგვერდი ან სოციალური ქსელი" : "Website or Social Link"}
                      </label>
                      <input
                        type="text"
                        value={companyInfo.websiteOrSocial}
                        onChange={(e) =>
                          setCompanyInfo({ ...companyInfo, websiteOrSocial: e.target.value })
                        }
                        placeholder="https://..."
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setRfpStep(2)}
                      className="text-xs font-bold text-tech-muted hover:text-tech-black"
                    >
                      {isKa ? "← უკან" : "← Back"}
                    </button>
                    <button
                      type="button"
                      disabled={!companyInfo.companyName}
                      onClick={() => setRfpStep(4)}
                      className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs border-[1.5px] border-tech-black shadow-tactile disabled:opacity-50"
                    >
                      <span>{isKa ? "შემდეგი: საკონტაქტო →" : "Next: Contact Info →"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMIT */}
              {rfpStep === 4 && (
                <div>
                  <h4 className="font-display font-bold text-lg text-tech-black mb-4">
                    {isKa ? "ნაბიჯი 4: საკონტაქტო მონაცემები" : "Step 4: Contact Details"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "საკონტაქტო პირი *" : "Contact Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={contactInfo.contactName}
                        onChange={(e) =>
                          setContactInfo({ ...contactInfo, contactName: e.target.value })
                        }
                        placeholder={isKa ? "გიორგი ბერიძე" : "John Smith"}
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ტელეფონი *" : "Phone *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactInfo.phone}
                        onChange={(e) =>
                          setContactInfo({ ...contactInfo, phone: e.target.value })
                        }
                        placeholder="+995 5..."
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="mb-3.5">
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "ელ.ფოსტა *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, email: e.target.value })
                      }
                      placeholder="giorgi@company.ge"
                      className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "დამატებითი კომენტარი ან მოთხოვნა" : "Additional Project Notes"}
                    </label>
                    <textarea
                      rows={2}
                      value={contactInfo.message}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, message: e.target.value })
                      }
                      placeholder={isKa ? "დამატებითი დეტალები..." : "Project details..."}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setRfpStep(3)}
                      className="text-xs font-bold text-tech-muted hover:text-tech-black"
                    >
                      {isKa ? "← უკან" : "← Back"}
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !contactInfo.contactName || !contactInfo.email}
                      className="tactile-btn inline-flex items-center gap-2 px-7 py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{isSubmitting ? (isKa ? "იგზავნება..." : "Submitting...") : (isKa ? "მოთხოვნის გაგზავნა" : "Send RFP Request")}</span>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
