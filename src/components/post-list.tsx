import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate, type Post } from "@/lib/writing";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ol className="divide-y border-y">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/writing/${post.slug}`}
            className="group grid gap-2 py-6 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 md:grid-cols-[11rem_1fr] md:gap-8"
          >
            <time dateTime={post.date} className="pt-0.5 font-mono text-sm text-muted-foreground">
              {formatDate(post.date)}
            </time>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 className="font-semibold tracking-tight underline-offset-4 group-hover:underline">
                  {post.title}
                </h3>
                {post.draft && <Badge variant="secondary">Draft</Badge>}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                {post.readingMinutes} min read
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
