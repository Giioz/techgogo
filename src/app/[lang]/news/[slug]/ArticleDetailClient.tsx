"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, ExternalLink, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Article } from "@/types";
import { TECHGOGO_ARTICLES, getLocalizedArticle } from "@/data/articlesData";
import { useLanguage } from "@/context/LanguageContext";

interface ArticleDetailClientProps {
  article: Article;
  lang: string;
}

export default function ArticleDetailClient({ article: initialArticle, lang }: ArticleDetailClientProps) {
  const { language } = useLanguage();
  const isKa = language === "ka";
  const article = getLocalizedArticle(initialArticle, language);
  const [copied, setCopied] = useState(false);

  const relatedArticles = TECHGOGO_ARTICLES.filter((a) => a.slug !== article.slug)
    .slice(0, 3)
    .map((a) => getLocalizedArticle(a, language));

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="min-h-screen bg-lavender relative overflow-x-hidden selection:bg-yellowAccent selection:text-tech-black">
      <CustomCursor />

      {/* ARTICLE EDITORIAL HEADER */}
      <PageHeader
        badge={article.category}
        badgeAccent={article.categoryAccent}
        titlePart1={article.title}
        breadcrumbs={[
          { label: isKa ? "სიახლეები" : "News", href: `/${language}/news` },
          { label: article.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-tech-muted mt-4 pb-2 border-b border-tech-black/10">
          <div className="flex items-center gap-1.5 text-tech-black">
            <Calendar className="w-4 h-4 text-orangeAccent" />
            <span>{article.date}</span>
          </div>
          <span className="text-tech-black/30">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-tech-muted" />
            <span>{article.readTime}</span>
          </div>
          <span className="text-tech-black/30">•</span>
          <span className="text-tech-black font-bold">TechGogo Editorial</span>
        </div>
      </PageHeader>

      {/* ARTICLE BODY (COMFORTABLE NARROW READING COLUMN) */}
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-cream-pure border-[1.5px] border-tech-black rounded-3xl sm:rounded-4xl p-7 sm:p-14 shadow-tactile-sm">
          {/* Article Excerpt */}
          <div className="bg-yellowAccent/20 border-l-4 border-orangeAccent rounded-r-2xl p-5 mb-8">
            <p className="text-base sm:text-lg font-bold text-tech-black leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-tech-black/85 leading-relaxed font-medium">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* External Citation Box */}
          {article.citationUrl && (
            <div className="mt-10 pt-6 border-t border-tech-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-cream p-4 rounded-2xl border border-tech-black/20">
              <div className="text-xs">
                <span className="text-tech-muted block">{isKa ? "წყარო და პუბლიკაცია:" : "Source & Reference:"}</span>
                <span className="font-bold text-tech-black">{article.citationSource || article.citationUrl}</span>
              </div>
              <a
                href={article.citationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-tech-black text-xs font-bold text-tech-black shadow-sm hover:bg-cream-muted transition-colors w-fit"
              >
                <span>{isKa ? "ორიგინალი წყარო" : "View Source"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Share & Back Controls */}
          <div className="mt-8 pt-6 border-t border-tech-black/10 flex items-center justify-between">
            <Link
              href={`/${language}/news`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-tech-black hover:text-orangeAccent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isKa ? "ყველა სიახლე" : "Back to All Articles"}</span>
            </Link>

            <button
              onClick={handleCopyLink}
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-tech-black text-xs font-bold text-tech-black shadow-sm hover:bg-cream-muted transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-orangeAccent" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (isKa ? "ბმული კოპირებულია!" : "Link Copied!") : (isKa ? "გაზიარება" : "Share Article")}</span>
            </button>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        <div className="mt-14 pt-8 border-t border-tech-black/10">
          <h3 className="font-display font-black text-2xl text-tech-black mb-6">
            {isKa ? "სხვა სიახლეები" : "Related Articles"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/${language}/news/${rel.slug}`}
                className="tactile-card bg-cream border-[1.5px] border-tech-black rounded-2xl p-5 shadow-sm hover:shadow-tactile transition-all group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-orangeAccent block mb-1.5">
                  {rel.category}
                </span>
                <h4 className="font-display font-bold text-sm text-tech-black group-hover:text-orangeAccent transition-colors mb-2 line-clamp-2">
                  {rel.title}
                </h4>
                <span className="text-[11px] text-tech-muted font-semibold">
                  {rel.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
