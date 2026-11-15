export type ProjectStatus = "live" | "private-beta" | "waitlist" | "app-store-review" | "coming-soon";

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
   * Use waitlist when the page is up and collecting signups.
   * Use app-store-review when the app is submitted and waiting on Apple.
   */
  status?: ProjectStatus;
  /** Optional screenshot in /public, e.g. "/projects/my-app.png" (16:10 works best). */
  image?: string;
  /** Tools and models used, shown as small pills under the description. */
  stack: string[];
};

/**
 * AI Lab projects shown on the home page.
 *
 * Replace a placeholder with a real project: set the name, a one or two
 * sentence description, the `url`, `status` when it is not simply live, and the stack.
 * Add or remove entries freely; the grid adapts.
 */
export const projects: Project[] = [
  {
    name: "MockData AI",
    description:
      "Describe a dataset or drop in a screenshot of your UI and get realistic CSV or JSON in seconds. Built for developers and QA who need sample data that looks real, with no account required.",
    url: "https://www.getmockdata.com/",
    image: "/projects/mockdata-hero.png",
    stack: ["React", "OpenAI", "Express"],
  },
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
  {
    name: "Mitzvah Mentor Mobile App",
    description:
      "Mitzvah Mentor is an AI-powered practice coach that helps students prepare for their bar or bat mitzvah with a personalized study plan, bite-sized lessons, and supportive tutoring between synagogue sessions.",
    url: "https://mitzvah-mentor.vercel.app/",
    status: "waitlist",
    image: "/projects/mitzvah-mentor.png",
    stack: ["Expo", "React Native", "Convex"],
  },
  {
    name: "Kru Mobile App: Daily Bed Making Habit Tracker",
    description:
      "Kru is a morning app built around one habit: making the bed. You take a live photo, Gemini checks that the bed is actually made, and the streak only moves on a pass.",
    url: "https://www.getkru.app/",
    status: "app-store-review",
    image: "/projects/kru.png",
    stack: ["Vision", "Gemini", "Expo", "React Native"],
  },
];
