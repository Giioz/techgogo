import React from "react";
import { notFound } from "next/navigation";
import ArticleDetailClient from "./ArticleDetailClient";
import { TECHGOGO_ARTICLES } from "@/data/articlesData";

export async function generateStaticParams() {
  const languages = ["en", "ka"];
  const params: Array<{ lang: string; slug: string }> = [];

  for (const lang of languages) {
    for (const article of TECHGOGO_ARTICLES) {
      params.push({ lang, slug: article.slug });
    }
  }

  return params;
}

export default function ArticleDetailPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const article = TECHGOGO_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} lang={params.lang} />;
}
