import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted so the build never depends on fonts.gstatic.com.
// Archivo and Anton are the closest grotesques to the IBM Peru mark:
// flat terminals, squared counters, one thick stem per stroke.
const bodyFont = localFont({
  src: "../fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-body",
});

const displayFont = localFont({
  src: "../fonts/anton.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} | ${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
