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
  metadataBase: new URL("https://chadzarett.com"),
  title: "Chad Zarett | Product leader who builds with AI",
  description: "Director of Product for Xumo Play at Comcast with 20+ years shipping products used by millions across connected TV, mobile, and web. I also design and build AI products and agents.",
  keywords: ["product management", "product leadership", "AI", "AI agents", "Claude Code", "streaming", "Comcast", "Xumo"],
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
    title: "Chad Zarett | Product leader who builds with AI",
    description: "Director of Product with 20+ years shipping products used by millions. I also design and build AI products and agents.",
    siteName: "Chad Zarett Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Chad Zarett | Product leader who builds with AI",
    description: "Director of Product with 20+ years shipping products used by millions. I also design and build AI products and agents.",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply the saved/system theme before first paint to avoid a light-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
