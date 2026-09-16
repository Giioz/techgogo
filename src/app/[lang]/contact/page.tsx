"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const isKa = language === "ka";

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* EDITORIAL HERO */}
      <PageHeader
        badge={isKa ? "დაგვიკავშირდით" : "Get In Touch"}
        badgeAccent="yellow"
        titlePart1={isKa ? "კონტაქტი &" : "Contact &"}
        highlightedWord={isKa ? "თანამშრომლობა" : "Partnership"}
        highlightAccent="orange"
        titlePart2={isKa ? "TechGogo-სთან" : "with TechGogo"}
        subtitle={
          isKa
            ? "გაქვთ შეკითხვა კურსებზე, გსურთ სააგენტოს სერვისების შეკვეთა ან პარტნიორობა? ჩვენი გუნდი მზად არის დაგეხმაროთ."
            : "Have a question about our academy, agency services, or strategic partnership? We are here to connect."
        }
        breadcrumbs={[{ label: isKa ? "კონტაქტი" : "Contact" }]}
      />

      <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Phone Card */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 shadow-tactile-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orangeAccent border border-tech-black flex items-center justify-center text-white shrink-0 shadow-tactile-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-tech-muted uppercase tracking-wider block mb-1">
                  {isKa ? "ტელეფონი" : "Phone Call"}
                </span>
                <a
                  href="tel:+995577137111"
                  className="font-display font-extrabold text-lg text-tech-black hover:text-orangeAccent transition-colors block"
                >
                  +995 577 137 111
                </a>
                <span className="text-xs text-tech-muted font-medium">
                  {isKa ? "ორშაბათი - პარასკევი, 10:00 - 19:00" : "Mon - Fri, 10:00 - 19:00"}
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 shadow-tactile-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellowAccent border border-tech-black flex items-center justify-center text-tech-black shrink-0 shadow-tactile-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-tech-muted uppercase tracking-wider block mb-1">
                  {isKa ? "ელ.ფოსტა" : "Email Inquiries"}
                </span>
                <a
                  href="mailto:info@techgogo.ge"
                  className="font-display font-extrabold text-lg text-tech-black hover:text-orangeAccent transition-colors block"
                >
                  info@techgogo.ge
                </a>
                <span className="text-xs text-tech-muted font-medium">
                  {isKa ? "პასუხი 24 საათის განმავლობაში" : "24-hour response window"}
                </span>
              </div>
            </div>

            {/* Physical Location Card */}
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl p-6 shadow-tactile-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purpleAccent border border-tech-black flex items-center justify-center text-white shrink-0 shadow-tactile-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-tech-muted uppercase tracking-wider block mb-1">
                  {isKa ? "ადგილმდებარეობა" : "Physical Hub"}
                </span>
                <p className="font-display font-bold text-base text-tech-black mb-1">
                  {isKa ? "მარნეული, გიორგაძის ქ. # 1" : "Marneuli, Giorgadze St. #1"}
                </p>
                <p className="text-xs text-tech-muted font-medium">
                  {isKa ? "ქვემო ქართლი, საქართველო" : "Kvemo Kartli, Georgia"}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl p-6 shadow-tactile-sm">
              <span className="text-xs font-bold text-tech-muted uppercase tracking-wider block mb-3">
                {isKa ? "სოციალური არხები" : "Official Channels"}
              </span>
              <div className="flex flex-wrap gap-2">
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-white border border-tech-black text-xs font-bold text-tech-black shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-cream border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-6 sm:p-10 shadow-tactile">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellowAccent text-tech-black text-xs font-bold uppercase tracking-wider border border-tech-black mb-3 shadow-tactile-sm">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isKa ? "მოგვწერეთ წერილი" : "Send a Message"}</span>
              </div>
              <h3 className="font-display font-black text-2xl text-tech-black mb-2">
                {isKa ? "გამოგვიგზავნეთ წერილი" : "Drop Us a Note"}
              </h3>
              <p className="text-xs sm:text-sm text-tech-muted font-medium mb-6">
                {isKa
                  ? "შეავსეთ ფორმა და ჩვენი გუნდი დაუყოვნებლივ დაგიკავშირდებათ."
                  : "Fill out the fields below and we'll route your note to the right team."}
              </p>

              {isSubmitted ? (
                <div className="bg-white border-[1.5px] border-tech-black rounded-2xl p-8 text-center shadow-tactile-sm">
                  <div className="w-12 h-12 rounded-xl bg-orangeAccent border border-tech-black flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-display font-black text-2xl text-tech-black mb-2">
                    {isKa ? "წერილი გაგზავნილია!" : "Message Delivered!"}
                  </h4>
                  <p className="text-xs sm:text-sm text-tech-muted font-medium mb-6">
                    {isKa
                      ? "მადლობა დაკავშირებისთვის. მალე გიპასუხებთ მითითებულ ელ.ფოსტაზე."
                      : "Thank you for reaching out. We will get back to you shortly."}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", subject: "", email: "", phone: "", message: "" });
                    }}
                    className="tactile-btn px-6 py-2.5 rounded-full bg-cream border-[1.5px] border-tech-black text-xs font-bold text-tech-black shadow-tactile-sm"
                  >
                    {isKa ? "ახალი შეტყობინება" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "თქვენი სახელი *" : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isKa ? "მარიამი" : "Alex"}
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "თემა / მიმართულება" : "Subject"}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={isKa ? "კურსები, სერვისი, პარტნიორობა" : "Courses, Agency, Partnership"}
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ელ.ფოსტა *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.ge"
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-tech-black mb-1">
                        {isKa ? "ტელეფონი" : "Phone"}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+995 5..."
                        className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-tech-black mb-1">
                      {isKa ? "შეტყობინება *" : "Message *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isKa ? "როგორ შეგვიძლია დაგეხმაროთ?..." : "How can we help?..."}
                      className="w-full px-4 py-3 rounded-xl bg-white border-[1.5px] border-tech-black text-xs text-tech-black focus:outline-none focus:ring-2 focus:ring-orangeAccent shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="tactile-btn w-full py-3.5 rounded-full bg-orangeAccent text-tech-black font-extrabold text-sm border-[1.5px] border-tech-black shadow-tactile hover:shadow-tactile-lg active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? (isKa ? "იგზავნება..." : "Sending...") : (isKa ? "წერილის გაგზავნა" : "Send Inquiry")}</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
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
