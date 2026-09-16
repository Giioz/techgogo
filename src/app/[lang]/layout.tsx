import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider, Language } from "@/context/LanguageContext";
import "../globals.css";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ka" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const isKa = params.lang === "ka";
  return {
    title: isKa
      ? "TechGogo — იპოვე შენი კურსი | თანამედროვე ტექნოლოგიური განათლება"
      : "TechGogo — Find the Right Course for You | Online Education",
    description: isKa
      ? "თანამედროვე ტექნოლოგიური განათლების პლატფორმა. განივითარე პრაქტიკული უნარები შენს მიზნებზე მორგებული კურსებით."
      : "Modern technology education platform. Build practical skills with courses designed around your goals.",
    keywords: [
      "online education",
      "technology courses",
      "programming",
      "UI/UX design",
      "AI",
      "cloud engineering",
      "ონლაინ განათლება",
      "კურსები",
      "პროგრამირება",
    ],
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: "/en",
        ka: "/ka",
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (params.lang !== "en" && params.lang !== "ka") {
    notFound();
  }

  const lang = params.lang as Language;

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Noto+Sans+Georgian:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-lavender font-sans text-tech-black antialiased">
        <LanguageProvider initialLanguage={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
