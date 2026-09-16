import React from "react";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";
import { TECHGOGO_COURSES } from "@/data/coursesData";

export async function generateStaticParams() {
  const languages = ["en", "ka"];
  const params: Array<{ lang: string; slug: string }> = [];

  for (const lang of languages) {
    for (const course of TECHGOGO_COURSES) {
      if (course.slug) {
        params.push({ lang, slug: course.slug });
      }
    }
  }

  return params;
}

export default function CourseDetailPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const course = TECHGOGO_COURSES.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} lang={params.lang} />;
}
