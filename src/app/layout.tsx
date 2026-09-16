import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechGogo — Find the Right Course for You | იპოვე შენი კურსი",
  description:
    "Modern technology education platform. Build practical skills with courses designed around your goals. თანამედროვე ტექნოლოგიური განათლება.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Fonts: Fredoka for Latin Display, Noto Sans Georgian for Georgian, Plus Jakarta Sans for Latin UI */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Noto+Sans+Georgian:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-lavender font-sans text-tech-black antialiased">
        {children}
      </body>
    </html>
  );
}
