export type Project = {
  name: string;
  description: string;
  /** Live URL. Leave undefined and the card shows "Coming soon" instead of a link. */
  url?: string;
  /** Optional screenshot in /public, e.g. "/projects/my-app.png" (16:10 works best). */
  image?: string;
  /** Tools and models used, shown as small badges. */
  stack: string[];
};

/**
 * Side projects shown on the home page.
 *
 * These three are SAMPLE entries. Replace each with a real project: set the
 * name, a one or two sentence description, the live `url`, and the stack.
 * Add or remove entries freely; the grid adapts.
 */
export const projects: Project[] = [
  {
    name: "Project one",
    description:
      "One or two sentences on what this does, who it is for, and what makes it interesting.",
    stack: ["Next.js", "Claude", "Supabase"],
  },
  {
    name: "Project two",
    description:
      "One or two sentences on what this does, who it is for, and what makes it interesting.",
    stack: ["Agents", "n8n", "Vercel"],
  },
  {
    name: "Project three",
    description:
      "One or two sentences on what this does, who it is for, and what makes it interesting.",
    stack: ["React Native", "Gemini"],
  },
];
