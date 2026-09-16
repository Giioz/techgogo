"use client";

import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const isKa = language === "ka";

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* LEGAL HEADER */}
      <PageHeader
        badge={isKa ? "სამართლებრივი ინფორმაცია" : "Legal Terms"}
        badgeAccent="purple"
        titlePart1={isKa ? "კონფიდენციალურობის" : "Privacy & Data"}
        highlightedWord={isKa ? "პოლიტიკა" : "Policy"}
        highlightAccent="orange"
        titlePart2={isKa ? "და წესები" : "Notice"}
        subtitle={
          isKa
            ? "ა(ა)იპი „ვი2თექ ჯორჯია“ (ს/კ 400343561) პერსონალური მონაცემების დაცვისა და დამუშავების წესები."
            : "Data processing policies for NNLE 'We2Tech Georgia' (Entity ID: 400343561)."
        }
        breadcrumbs={[{ label: isKa ? "კონფიდენციალურობა" : "Privacy Policy" }]}
      />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-7 sm:p-14 shadow-tactile-sm space-y-8 text-xs sm:text-sm text-tech-black/85 leading-relaxed font-medium">
          {/* Entity Box */}
          <div className="bg-white border-[1.5px] border-tech-black rounded-2xl p-5 shadow-sm">
            <h3 className="font-display font-bold text-base text-tech-black mb-2">
              {isKa ? "1. ოფიციალური იდენტიფიკაცია" : "1. Official Entity Details"}
            </h3>
            <ul className="space-y-1 text-xs text-tech-black/80 font-semibold">
              <li>• {isKa ? "იურიდიული პირი:" : "Legal Entity:"} ა(ა)იპი „ვი2თექ ჯორჯია“ (NNLE "We2Tech Georgia")</li>
              <li>• {isKa ? "საიდენტიფიკაციო კოდი:" : "Tax Identification Code:"} 400343561</li>
              <li>• {isKa ? "იურიდიული მისამართი:" : "Registered Address:"} ქ. თბილისი, რიონჰესის ქ. # 7ა</li>
              <li>• {isKa ? "საქმიანობის ცენტრი:" : "Operating Hub:"} მარნეული, გიორგაძის ქ. # 1</li>
              <li>• {isKa ? "საკონტაქტო ელ.ფოსტა:" : "Contact Email:"} info@techgogo.ge</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-tech-black mb-3">
              {isKa ? "2. მონაცემთა შეგროვების მიზნები" : "2. Purpose of Data Collection"}
            </h3>
            <p className="mb-3">
              {isKa
                ? "TechGogo აგროვებს და ამუშავებს პერსონალურ მონაცემებს შემდეგი მიზნებისთვის:"
                : "TechGogo collects and processes personal information for the following legitimate purposes:"}
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                {isKa
                  ? "საგანმანათლებლო კურსებზე რეგისტრაცია, აპლიკანტების შერჩევა და გასაუბრება."
                  : "Registration, screening, and admission interviews for educational courses."}
              </li>
              <li>
                {isKa
                  ? "დონაციების გამჭვირვალე აღრიცხვა და ანგარიშგება დონორებისთვის."
                  : "Transparent accounting, recording, and reporting for donor contributions."}
              </li>
              <li>
                {isKa
                  ? "სარეკლამო სააგენტოს B2B სერვისების შეკვეთების დამუშავება და კომერციული კომუნიკაცია."
                  : "Processing B2B service requests, commercial RFPs, and agency contracts."}
              </li>
              <li>
                {isKa
                  ? "ვებგვერდის ფუნქციონირებისა და მომხმარებლის გამოცდილების გაუმჯობესება."
                  : "Improving website functionality and user experience analytics."}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-tech-black mb-3">
              {isKa ? "3. მესამე პირებისთვის გადაცემის შეზღუდვა" : "3. Non-Disclosure & Third Parties"}
            </h3>
            <p>
              {isKa
                ? "თქვენი პერსონალური მონაცემები (სახელი, ელ.ფოსტა, ტელეფონის ნომერი, მოტივაციური წერილი) მკაცრად დაცულია და არ გადაეცემა მესამე პირებს თქვენი წინასწარი თანხმობის გარეშე, გარდა საქართველოს კანონმდებლობით პირდაპირ გათვალისწინებული შემთხვევებისა."
                : "Your personal data (name, email, phone number, demographic indicators, motivation letter) is strictly safeguarded. We do not sell, trade, or transfer data to third parties without prior informed consent, unless expressly required by Georgian law."}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-tech-black mb-3">
              {isKa ? "4. მონაცემთა შენახვა და უფლებები" : "4. Retention & User Rights"}
            </h3>
            <p className="mb-3">
              {isKa
                ? "თქვენ გაქვთ უფლება ნებისმიერ დროს მოითხოვოთ თქვენ შესახებ არსებული მონაცემების გაცნობა, შესწორება, დაბლოკვა ან წაშლა."
                : "You maintain the legal right to request access, correction, or permanent erasure of your personal records at any time."}
            </p>
            <p>
              {isKa
                ? "მონაცემებთან დაკავშირებული ნებისმიერი მოთხოვნისთვის დაგვიკავშირდით ელ.ფოსტაზე: "
                : "To exercise your privacy rights, please contact our data coordinator at: "}
              <a href="mailto:info@techgogo.ge" className="font-bold text-orangeAccent underline">
                info@techgogo.ge
              </a>
              .
            </p>
          </div>

          <div className="pt-4 border-t border-tech-black/10 text-xs text-tech-muted">
            {isKa ? "ბოლო განახლება: 2026 წლის მარტი" : "Last updated: March 2026"}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
