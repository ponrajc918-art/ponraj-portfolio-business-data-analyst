import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://ponrajc.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ponraj C — AI/ML Engineer & Data Analytics Developer",
    template: "%s — Ponraj C",
  },
  description:
    "Portfolio of Ponraj C, an AI/ML engineer and data analytics developer building financial prediction systems, predictive analytics, and scalable software with Python, Scikit-learn, and Power BI.",
  keywords: [
    "Ponraj C",
    "AI/ML Engineer",
    "Data Analytics Developer",
    "Python Developer",
    "website Developer",
    "Machine Learning Portfolio",
    "Scikit-learn",
    "FinDecide AI",
    "FinUD",
  ],
  authors: [{ name: "Ponraj C" }],
  creator: "Ponraj C",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Ponraj C — AI/ML Engineer & Data Analytics Developer",
    description:
      "Building intelligent systems, predictive analytics solutions, and scalable software that transform data into meaningful business decisions.",
    siteName: "Ponraj C",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ponraj C — AI/ML Engineer & Data Analytics Developer",
    description:
      "Building intelligent systems, predictive analytics solutions, and scalable software that transform data into meaningful business decisions.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-text font-sans antialiased selection:bg-gold/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
