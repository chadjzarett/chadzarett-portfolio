import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Posts are Markdown files in content/writing. The file name is the URL slug:
 * content/writing/my-post.md is served at /writing/my-post.
 *
 * Front matter:
 *   title: string        (required)
 *   description: string  (required, shown in the list and in link previews)
 *   date: YYYY-MM-DD     (required)
 *   tags: [..]           (optional)
 *   draft: true          (optional; drafts show in `npm run dev` only, never on the live site)
 */
const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
  content: string;
};

const showDrafts = process.env.NODE_ENV !== "production";

function toIsoDate(value: unknown, slug: string): string {
  // YAML turns an unquoted 2026-11-14 into a Date; a quoted one stays a string.
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(`content/writing/${slug}.md needs a "date" like 2026-11-14 in its front matter.`);
  }
  return date.toISOString().slice(0, 10);
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(WRITING_DIR, fileName), "utf8"));

  if (!data.title || !data.description) {
    throw new Error(`content/writing/${fileName} needs a "title" and "description" in its front matter.`);
  }

  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: toIsoDate(data.date, slug),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

/** Published posts, newest first. Drafts are included only in development. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(WRITING_DIR)) return [];

  return fs
    .readdirSync(WRITING_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
