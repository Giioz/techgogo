"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Users, Laptop, Wifi, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { DONATION_CAMPAIGN, PARTNER_LOGOS } from "@/data/aboutData";
import { useLanguage } from "@/context/LanguageContext";

export default function DonatePage() {
  const { language } = useLanguage();
  const isKa = language === "ka";

  const predefinedAmounts = [25, 50, 100, 250];
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donorComment, setDonorComment] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [donationSuccess, setDonationSuccess] = useState<boolean>(false);

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  const progressPercent = Math.min(
    100,
    Math.round((DONATION_CAMPAIGN.raised / DONATION_CAMPAIGN.goal) * 100)
  );

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount <= 0) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDonationSuccess(true);
    }, 750);
  };

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* EDITORIAL DONATION HERO */}
      <PageHeader
        badge={isKa ? "სოლიდარობის ფონდი" : "Community Giving"}
        badgeAccent="orange"
        titlePart1={isKa ? "გაიღე დონაცია —" : "Support Women"}
        highlightedWord={isKa ? "გააძლიერე ქალები" : "in Tech"}
        highlightAccent="orange"
        titlePart2={isKa ? "ტექნოლოგიებში" : "Across Regions"}
        subtitle={isKa ? DONATION_CAMPAIGN.storyKa : DONATION_CAMPAIGN.storyEn}
        breadcrumbs={[{ label: isKa ? "დონაცია" : "Donate" }]}
      />

      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: CAMPAIGN STATS, PROGRESS & NARRATIVE */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* 1. CAMPAIGN PROGRESS CARD */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-6 sm:p-10 shadow-tactile-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-tech-muted uppercase tracking-wider">
                  {isKa ? "ფონდის კამპანია" : "Active Campaign"}
                </span>
                <span className="px-3 py-1 rounded-full bg-yellowAccent/40 border border-tech-black text-xs font-bold text-tech-black">
                  {isKa ? "მუდმივი ფონდი" : "Ongoing Fund"}
                </span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl text-tech-black mb-6">
                {isKa ? DONATION_CAMPAIGN.titleKa : DONATION_CAMPAIGN.titleEn}
              </h2>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-orangeAccent">
                      {DONATION_CAMPAIGN.raised.toLocaleString()} ₾
                    </span>
                    <span className="text-xs text-tech-muted font-bold">
                      / {DONATION_CAMPAIGN.goal.toLocaleString()} ₾ {isKa ? "მიზანი" : "Goal"}
                    </span>
                  </div>
                  <span className="font-display font-extrabold text-xl text-tech-black">
                    {progressPercent}%
                  </span>
                </div>

                <div className="w-full h-4 rounded-full bg-cream-muted border border-tech-black overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-orangeAccent transition-all duration-700"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Campaign Creator & Backer Count */}
              <div className="pt-4 border-t border-tech-black/10 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-tech-muted">
                <div>
                  <span>{isKa ? "ორგანიზატორი:" : "Organizer:"} </span>
                  <strong className="text-tech-black">{DONATION_CAMPAIGN.creator}</strong>
                </div>
                <div>
                  <span>{isKa ? "მხარდამჭერი:" : "Contributors:"} </span>
                  <strong className="text-tech-black">{DONATION_CAMPAIGN.backersCount} {isKa ? "დონორი" : "Backers"}</strong>
                </div>
              </div>
            </div>

            {/* 2. WHERE DO FUNDS GO? (IMPACT PILLARS) */}
            <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-10 shadow-tactile-sm">
              <h3 className="font-display font-black text-xl sm:text-2xl text-tech-black mb-6">
                {isKa ? "სად იხარჯება თქვენი დონაცია?" : "How Your Gift is Invested"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border-[1.5px] border-tech-black rounded-2xl p-4 shadow-sm">
                  <Laptop className="w-6 h-6 text-orangeAccent mb-2.5" />
                  <h4 className="font-bold text-sm text-tech-black mb-1">
                    {isKa ? "ლეპტოპები" : "Laptops & Hardware"}
                  </h4>
                  <p className="text-xs text-tech-muted leading-relaxed font-medium">
                    {isKa
                      ? "საჭირო ტექნიკა სოფლად მცხოვრები გოგონებისთვის."
                      : "Refurbished laptops for students with no home computer."}
                  </p>
                </div>
                <div className="bg-white border-[1.5px] border-tech-black rounded-2xl p-4 shadow-sm">
                  <Wifi className="w-6 h-6 text-yellowAccent mb-2.5" />
                  <h4 className="font-bold text-sm text-tech-black mb-1">
                    {isKa ? "ინტერნეტ-სუბსიდია" : "Internet Connectivity"}
                  </h4>
                  <p className="text-xs text-tech-muted leading-relaxed font-medium">
                    {isKa
                      ? "მაღალსიჩქარიანი ულიმიტო კავშირი ლექციებზე დასასწრებად."
                      : "LTE and home broadband stipends for remote learning."}
                  </p>
                </div>
                <div className="bg-white border-[1.5px] border-tech-black rounded-2xl p-4 shadow-sm">
                  <GraduationCap className="w-6 h-6 text-purpleAccent mb-2.5" />
                  <h4 className="font-bold text-sm text-tech-black mb-1">
                    {isKa ? "სტიპენდიები" : "Tuition Scholarships"}
                  </h4>
                  <p className="text-xs text-tech-muted leading-relaxed font-medium">
                    {isKa
                      ? "100%-ით დაფინანსებული ადგილები მარტოხელა დედებისთვის."
                      : "Full tuition coverage for single mothers & minorities."}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. TRANSPARENT PUBLIC BACKER LEDGER */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 sm:p-8 shadow-tactile-sm">
              <h3 className="font-display font-black text-xl text-tech-black mb-4">
                {isKa ? "ჩვენი დონორები (გამჭვირვალე რეესტრი)" : "Transparent Donor Ledger"}
              </h3>
              <div className="space-y-2.5">
                {DONATION_CAMPAIGN.ledger.map((backer) => (
                  <div
                    key={backer.id}
                    className="p-3.5 rounded-2xl bg-white border border-tech-black/30 flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-tech-black block">
                        {backer.name}
                      </span>
                      {backer.comment && (
                        <p className="text-[11px] text-tech-muted italic mt-0.5">
                          „{backer.comment}“
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-display font-extrabold text-sm sm:text-base text-orangeAccent">
                        {backer.amount} ₾
                      </span>
                      <span className="text-[10px] text-tech-muted block font-semibold">
                        {backer.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE DONATION FORM */}
          <div className="lg:col-span-5 sticky top-6">
            <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-6 sm:p-8 shadow-tactile">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orangeAccent text-tech-black text-xs font-bold uppercase tracking-wider border border-tech-black mb-3 shadow-tactile-sm">
                <Heart className="w-3.5 h-3.5 fill-tech-black text-tech-black" />
                <span>{isKa ? "გაიღე დონაცია" : "Make a Gift"}</span>
              </div>
              <h3 className="font-display font-black text-2xl text-tech-black mb-2">
                {isKa ? "აირჩიეთ თანხა" : "Select Donation Amount"}
              </h3>
              <p className="text-xs text-tech-muted mb-6 font-medium">
                {isKa
                  ? "თითოეული ლარი პირდაპირ აისახება სტუდენტების განათლებასა და ტექნიკაზე."
                  : "Every contribution directly empowers women through digital education."}
              </p>

              {donationSuccess ? (
                <div className="bg-yellowAccent/30 border-[1.5px] border-tech-black rounded-2xl p-6 text-center shadow-tactile-sm">
                  <div className="w-14 h-14 rounded-2xl bg-orangeAccent border border-tech-black flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold">
                    ♥
                  </div>
                  <h4 className="font-display font-black text-2xl text-tech-black mb-2">
                    {isKa ? "უდიდესი მადლობა!" : "Thank You for Your Support!"}
                  </h4>
                  <p className="text-xs sm:text-sm text-tech-black/85 font-semibold leading-relaxed mb-4">
                    {isKa
                      ? `თქვენ მიერ გაღებული ${activeAmount} ₾ წარმატებით დაფიქსირდა. თქვენი სახელი დაემატება დონორთა რეესტრს.`
                      : `Your gift of ${activeAmount} ₾ has been recorded. Your support makes a direct difference.`}
                  </p>
                  <button
                    onClick={() => {
                      setDonationSuccess(false);
                      setCustomAmount("");
                    }}
                    className="tactile-btn px-6 py-2.5 rounded-full bg-cream border-[1.5px] border-tech-black text-xs font-bold text-tech-black shadow-tactile-sm"
                  >
                    {isKa ? "ახალი დონაცია" : "Make Another Contribution"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="space-y-4">
                  {/* Preset Amount Buttons Grid */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-2">
                      {isKa ? "თანხა ლარში (₾)" : "Amount in GEL (₾)"}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {predefinedAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt);
                            setCustomAmount("");
                          }}
                          className={`py-2.5 rounded-2xl border-[1.5px] border-tech-black font-display font-extrabold text-sm transition-all ${
                            !customAmount && selectedAmount === amt
                              ? "bg-orangeAccent text-tech-black shadow-tactile-sm scale-105"
                              : "bg-white text-tech-black hover:bg-cream-muted"
                          }`}
                        >
                          {amt} ₾
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "ან შეიყვანეთ სასურველი თანხა (₾)" : "Or Enter Custom Amount (₾)"}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder={isKa ? "სხვა თანხა (მაგ. 500)" : "Custom amount (e.g. 500)"}
                        className="w-full px-4 py-3 rounded-2xl bg-white border-[1.5px] border-tech-black text-sm text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-extrabold text-sm text-tech-black">
                        ₾
                      </span>
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "თქვენი სახელი" : "Your Name"}
                    </label>
                    <input
                      type="text"
                      disabled={isAnonymous}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder={isAnonymous ? (isKa ? "ანონიმური მხარდამჭერი" : "Anonymous Donor") : (isKa ? "თქვენი სახელი და გვარი" : "Full Name")}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm disabled:bg-cream-muted"
                    />
                  </div>

                  {/* Anonymous Checkbox */}
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-tech-black">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded text-orangeAccent focus:ring-orangeAccent"
                    />
                    <span>{isKa ? "მსურს დავრჩე ანონიმური" : "Make this donation anonymous"}</span>
                  </label>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "გამამხნევებელი შეტყობინება სტუდენტებს (სურვილისამებრ)" : "Note of Encouragement (Optional)"}
                    </label>
                    <textarea
                      rows={2}
                      value={donorComment}
                      onChange={(e) => setDonorComment(e.target.value)}
                      placeholder={isKa ? "წარმატებები..." : "Keep building..."}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || activeAmount <= 0}
                    className="tactile-btn w-full py-3.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? (isKa ? "მუშავდება..." : "Processing...") : `${isKa ? "გაიღე" : "Donate"} ${activeAmount} ₾`}</span>
                    <Heart className="w-4 h-4 fill-tech-black text-tech-black" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-tech-muted font-medium pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-orangeAccent" />
                    <span>{isKa ? "უსაფრთხო გადახდა • ა(ა)იპი „ვი2თექ ჯორჯია“" : "Secure non-profit contribution"}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
