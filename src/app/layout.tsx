import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chad Zarett - Product Leader & Strategic Innovator",
  description: "Seasoned product management executive with 20+ years of experience driving innovation in telecommunications. Specializes in cross-platform product strategy, team leadership, and delivering user-centric solutions.",
  keywords: ["product management", "telecommunications", "leadership", "strategy", "innovation", "Comcast", "Xumo"],
  authors: [{ name: "Chad Zarett" }],
  creator: "Chad Zarett",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chadzarett.com",
    title: "Chad Zarett - Product Leader & Strategic Innovator",
    description: "Seasoned product management executive with 20+ years of experience driving innovation in telecommunications.",
    siteName: "Chad Zarett Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Zarett - Product Leader & Strategic Innovator",
    description: "Seasoned product management executive with 20+ years of experience driving innovation in telecommunications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
