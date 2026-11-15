import type { Metadata } from "next";
import { PostList } from "@/components/post-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllPosts } from "@/lib/writing";

const description =
  "Practical guidance and honest takes on the AI industry: where to start, how to build an agent, and what I'm learning as I build.";

export const metadata: Metadata = {
  title: "Writing | Chad Zarett",
  description,
  openGraph: {
    type: "website",
    url: "https://chadzarett.com/writing",
    title: "Writing | Chad Zarett",
    description,
    siteName: "Chad Zarett",
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader showWriting />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Writing</h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="rounded-xl border border-dashed px-5 py-10 text-center text-sm text-muted-foreground">
            First posts are on the way.
          </p>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
