import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Alegreya_Sans, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const bodyFont = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-body",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
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
