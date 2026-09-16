import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { TECHGOGO_SERVICES } from "@/data/servicesData";

export async function generateStaticParams() {
  const languages = ["en", "ka"];
  const params: Array<{ lang: string; slug: string }> = [];

  for (const lang of languages) {
    for (const service of TECHGOGO_SERVICES) {
      params.push({ lang, slug: service.slug });
    }
  }

  return params;
}

export default function ServiceDetailPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const service = TECHGOGO_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} lang={params.lang} />;
}
