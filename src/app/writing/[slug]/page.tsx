import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatDate, getAllPosts, getPost } from "@/lib/writing";

type Props = { params: Promise<{ slug: string }> };

// Only the posts that exist at build time are served; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Chad Zarett`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://chadzarett.com/writing/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Chad Zarett"],
      siteName: "Chad Zarett",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { "@type": "Person", name: "Chad Zarett", url: "https://chadzarett.com" },
        mainEntityOfPage: `https://chadzarett.com/writing/${post.slug}`,
      },
      ...(post.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader showWriting />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 md:py-20">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All writing
          </Link>

          <header className="mt-8 border-b pb-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.draft && <Badge variant="secondary">Draft, not visible on the live site</Badge>}
            </div>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl md:leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose mt-8">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            {post.faq.length > 0 && (
              <>
                <h2>{post.faqHeading}</h2>
                {post.faq.map((item) => (
                  <div key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          <footer className="mt-12 border-t pt-8 text-sm text-muted-foreground">
            <p>
              Want help putting this to work in your business?{" "}
              <Link
                href="/#contact"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Get in touch
              </Link>
              .
            </p>
          </footer>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
