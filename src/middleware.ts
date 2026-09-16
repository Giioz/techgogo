import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ka"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Determine preferred locale
  // 1. Check NEXT_LOCALE cookie
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (savedLocale && locales.includes(savedLocale)) {
    request.nextUrl.pathname = `/${savedLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage.toLowerCase().includes("ka") ? "ka" : defaultLocale;

  request.nextUrl.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Match all paths except internal Next.js paths, API routes, and static files with extensions
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
