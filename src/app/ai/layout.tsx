import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development - Chad Zarett",
  description:
    "Hands-on AI development experience: agentic coding tools, AI models, and shipped applications — from prototypes to production-ready products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chadzarett.com/ai",
    title: "AI Development - Chad Zarett",
    description:
      "Hands-on AI development experience: agentic coding tools, AI models, and shipped applications.",
    siteName: "Chad Zarett Portfolio",
  },
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children;
}
