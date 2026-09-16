"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, Building2, Send, Heart } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Service } from "@/types";
import { TECHGOGO_SERVICES } from "@/data/servicesData";
import { PARTNER_LOGOS } from "@/data/aboutData";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceDetailClientProps {
  service: Service;
  lang: string;
}

export default function ServiceDetailClient({ service, lang }: ServiceDetailClientProps) {
  const { language } = useLanguage();
  const isKa = language === "ka";

  const [contactData, setContactData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const relatedServices = TECHGOGO_SERVICES.filter((s) => s.slug !== service.slug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* SERVICE HERO */}
      <PageHeader
        badge={isKa ? "სააგენტოს სერვისი" : "Agency Service"}
        badgeAccent={service.accent}
        titlePart1={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: isKa ? "სერვისები" : "Services", href: `/${language}/services` },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={() => {
              const el = document.getElementById("order");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="tactile-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 cursor-pointer"
          >
            <span>{isKa ? "შეკვეთის გაფორმება" : "Inquire About This Service"}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </PageHeader>

      {/* SERVICE BODY */}
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: DESCRIPTION, DELIVERABLES, PROCESS */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Full Overview */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellowAccent/30 border border-tech-black text-xs font-bold text-tech-black mb-4">
                <span>✦</span>
                <span>{isKa ? "სერვისის მიმოხილვა" : "Overview & Scope"}</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-4">
                {isKa ? "რას მოიცავს მომსახურება?" : "What We Provide"}
              </h2>
              <p className="text-sm sm:text-base text-tech-black/85 leading-relaxed font-medium mb-6">
                {service.fullDesc}
              </p>

              {/* Social Impact Callout */}
              <div className="bg-yellowAccent/25 border-[1.5px] border-tech-black rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                <Heart className="w-5 h-5 text-orangeAccent shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-semibold text-tech-black leading-relaxed">
                  {service.clientImpact}
                </p>
              </div>
            </div>

            {/* Granular Deliverables Checklist */}
            <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
              <h3 className="font-display font-black text-xl sm:text-2xl text-tech-black mb-6">
                {isKa ? "სრული მიწოდების ჩამონათვალი" : "Deliverables Checklist"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border-[1.5px] border-tech-black shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orangeAccent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-tech-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Process */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
              <h3 className="font-display font-black text-xl sm:text-2xl text-tech-black mb-6">
                {isKa ? "შესრულების ეტაპები" : "Process & Milestones"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white border-[1.5px] border-tech-black rounded-2xl p-5 shadow-sm"
                  >
                    <span className="w-7 h-7 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center font-display font-bold text-xs text-white mb-3">
                      {step.step}
                    </span>
                    <h4 className="font-display font-bold text-base text-tech-black mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-tech-muted font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: QUICK INQUIRY FORM */}
          <div className="lg:col-span-4 sticky top-6">
            <div
              id="order"
              className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-8 shadow-tactile scroll-mt-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orangeAccent text-tech-black text-xs font-bold uppercase tracking-wider border border-tech-black mb-3 shadow-tactile-sm">
                <Send className="w-3.5 h-3.5" />
                <span>Direct RFP</span>
              </div>
              <h3 className="font-display font-black text-xl text-tech-black mb-1">
                {isKa ? "შეუკვეთეთ სერვისი" : "Inquire for Service"}
              </h3>
              <p className="text-xs text-tech-muted mb-5 font-medium">
                {isKa
                  ? "გამოაგზავნეთ შეტყობინება და ჩვენი გუნდი დაგიკავშირდებათ დეტალების დასაზუსტებლად."
                  : "Send your project parameters and an account lead will contact you within 24 hours."}
              </p>

              {isSubmitted ? (
                <div className="bg-yellowAccent/30 border-[1.5px] border-tech-black rounded-2xl p-6 text-center shadow-tactile-sm">
                  <div className="w-12 h-12 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                    ✓
                  </div>
                  <h4 className="font-display font-bold text-lg text-tech-black mb-2">
                    {isKa ? "შეტყობინება მიღებულია!" : "Request Received!"}
                  </h4>
                  <p className="text-xs text-tech-black/80 font-medium leading-relaxed">
                    {isKa
                      ? "მადლობა! სააგენტოს გუნდი დაგიკავშირდებათ კომერციული წინადადებით."
                      : "Thank you! We'll get back to you shortly with a project proposal."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "საკონტაქტო პირი *" : "Contact Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder={isKa ? "გიორგი ბერიძე" : "John Doe"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "კომპანიის დასახელება" : "Company Name"}
                    </label>
                    <input
                      type="text"
                      value={contactData.company}
                      onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                      placeholder={isKa ? "კომპანია / სტარტაპი" : "Company / Organization"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ტელეფონი *" : "Phone *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="+995 5..."
                        className="w-full px-3 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ელ.ფოსტა *" : "Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="info@..."
                        className="w-full px-3 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "პროექტის მოკლე აღწერა" : "Project Description"}
                    </label>
                    <textarea
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder={isKa ? "რა ვადებში გსურთ მიღება, რა მიზანი გაქვთ..." : "Target deadlines and scope..."}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="tactile-btn w-full py-3 rounded-full bg-orangeAccent text-tech-black font-extrabold text-xs sm:text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? (isKa ? "იგზავნება..." : "Sending...") : (isKa ? "შეკვეთის გაგზავნა" : "Send Inquiry")}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* RELATED SERVICES ROW */}
        <div className="mt-16 pt-12 border-t border-tech-black/10">
          <h3 className="font-display font-black text-2xl text-tech-black mb-6">
            {isKa ? "სააგენტოს სხვა სერვისები" : "Other Agency Capabilities"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={`/${language}/services/${s.slug}`}
                className="tactile-card bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 shadow-tactile-sm hover:shadow-tactile transition-all group block"
              >
                <h4 className="font-display font-bold text-lg text-tech-black group-hover:text-orangeAccent transition-colors mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-tech-muted font-medium line-clamp-2 mb-4">
                  {s.shortDesc}
                </p>
                <span className="text-xs font-bold text-orangeAccent inline-flex items-center gap-1">
                  <span>{isKa ? "დეტალურად" : "Explore"}</span>
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
