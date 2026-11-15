export type ProjectStatus = "live" | "private-beta" | "coming-soon";

export type Project = {
  name: string;
  description: string;
  /**
   * Site URL. Leave undefined only when the product itself is not online yet.
   * A gated app still gets a URL so the card can link to it.
   */
  url?: string;
  /**
   * Badge on the card. Omit to infer it: a URL means Live, no URL means Coming soon.
   * Use private-beta when the app works but is behind a login.
   */
  status?: ProjectStatus;
  /** Optional screenshot in /public, e.g. "/projects/my-app.png" (16:10 works best). */
  image?: string;
  /** Tools and models used, shown as small badges. */
  stack: string[];
};

/**
 * Side projects shown on the home page.
 *
 * Replace a placeholder with a real project: set the name, a one or two
 * sentence description, the `url`, `status` when it is not simply live, and the stack.
 * Add or remove entries freely; the grid adapts.
 */
export const projects: Project[] = [
  {
    name: "CodeWithMe.ai",
    description:
      "A curated directory of AI coding tools for developers who want a shortlist, not another listicle. A homegrown CMS uses Claude and Gemini to draft and publish the articles, pages, and images.",
    url: "https://codewithme.ai",
    image: "/projects/codewithme.png",
    stack: ["Next.js", "Claude", "Gemini", "Supabase"],
  },
  {
    name: "Tab Zero",
    description:
      "A private inbox for people who keep too many browser tabs open. Paste a link and Tab Zero saves it instantly, then uses AI to add a summary, category, and tags so the idea stays searchable without a folder system.",
    url: "https://www.tabzero.xyz",
    status: "private-beta",
    image: "/projects/tabzero.png",
    stack: ["Next.js", "Convex", "OpenAI", "Clerk"],
  },
  {
    name: "Frami.App",
    description:
      "App Store and Google Play screenshots for developers who would rather ship than open a design tool. Drop in raw screens and Frami drafts the layouts, headlines, and device frames, then exports a ready-to-upload ZIP.",
    url: "https://www.frami.app",
    image: "/projects/frami-hero.png",
    stack: ["React", "Gemini", "Vercel"],
  },
];
