import fs from "node:fs";
import path from "node:path";
import {
  ArrowRight,
  Bot,
  ClipboardList,
  Download,
  Mail,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { PostList } from "@/components/post-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProjectCarousel } from "@/components/project-carousel";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/writing";

const EMAIL = "chadzarett@gmail.com";
const LINKEDIN = "https://linkedin.com/in/chadzarett/";

/** Drop the PDF at public/chad-zarett-resume.pdf and the download button appears. */
const RESUME_PATH = "/chad-zarett-resume.pdf";

const stats = [
  { value: "20+", label: "Years building products" },
  { value: "Millions", label: "Of users reached" },
  { value: "CTV · Mobile · Web", label: "Platforms shipped" },
];

const aiPractice = [
  {
    icon: Bot,
    iconClass: "bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300",
    title: "Agents and automation",
    body: "I design agents and multi-step workflows that take real work off people's plates, built with Claude Code, n8n, Make, and Zapier.",
  },
  {
    icon: Rocket,
    iconClass: "bg-orange-100 text-orange-500 dark:bg-orange-500/20 dark:text-orange-300",
    title: "Idea to live product",
    body: "I take ideas from first prompt to deployed app with Cursor, Claude Code, and Codex, running on Supabase, Clerk, and Vercel.",
  },
  {
    icon: ClipboardList,
    iconClass: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300",
    title: "AI in the product process",
    body: "Models and agents are part of my daily work on specs, research, and prototypes, with human judgment on every decision.",
  },
];

const toolkit = [
  { label: "Models", items: ["Claude", "ChatGPT", "Gemini", "Grok"] },
  { label: "Agentic coding", items: ["Claude Code", "Cursor", "Codex", "GitHub Copilot", "Grok Bot", "Microsoft CoPilot"] },
  { label: "Prototyping", items: ["v0", "Lovable", "Bolt", "Google AI Studio", "Figma Make"] },
  { label: "Automation", items: ["n8n", "Make", "Zapier"] },
  { label: "Infrastructure", items: ["Supabase", "Convex", "Clerk", "Vercel", "GitHub"] },
  { label: "Analytics", items: ["PostHog"] },
];

const experience = [
  {
    period: "2023 – Present",
    title: "Director of Product, Xumo Consumer App Team",
    company: "Comcast",
    description:
      "Lead product strategy for the Xumo Play apps and website. Own the full product lifecycle from ideation to launch, working across engineering, design, and marketing.",
    current: true,
  },
  {
    period: "2017 – 2022",
    title: "Sr. Product Manager, Video and Connected Living",
    company: "Comcast",
    description:
      "Led product strategy and development for X1 and Flex video devices, and for the Xfinity app in connected living, focused on user experience, device activation, and onboarding.",
  },
  {
    period: "2012 – 2016",
    title: "Sr. Manager, Customer Experience and Deployment",
    company: "Comcast",
    description:
      "Managed customer experience initiatives and deployment strategy across Comcast national COEs and regional call centers, supporting the X1 and Xfinity Stream flagship products.",
  },
];

const skills = [
  {
    label: "Product leadership",
    icon: Users,
    iconClass: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300",
    items: [
      "Product strategy",
      "Roadmapping",
      "Product development",
      "UX design",
      "Agile delivery",
      "Team leadership",
      "Cross-functional collaboration",
      "Data-driven decisions",
      "Go-to-market",
      "AI adoption",
      "AI product strategy",
      "Evaluating AI use cases",
    ],
  },
  {
    label: "Tools",
    icon: Wrench,
    iconClass: "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300",
    items: [
      "Figma",
      "Miro",
      "Jira",
      "Linear",
      "Confluence",
      "Notion",
      "Tableau",
      "Looker",
      "Google Analytics",
      "PostHog",
      "SQL",
      "Excel",
      "Periscope Data",
    ],
  },
];

function Section({
  id,
  title,
  description,
  action,
  children,
}: {
  id: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-14 border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
            <p className="mt-3 text-pretty text-muted-foreground">{description}</p>
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const hasResume = fs.existsSync(path.join(process.cwd(), "public", RESUME_PATH));
  const posts = getAllPosts();

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader showWriting={posts.length > 0} />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-28">
          <Badge variant="outline" className="h-7 px-3 font-normal uppercase text-muted-foreground">
            Product management &amp; Builder · Philadelphia
          </Badge>

          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
            Product leader who builds with AI.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;m Chad Zarett. For more than 20 years I&apos;ve shipped products used by
            millions of people across connected TV, mobile, and web. Today I also design and
            build AI products and agents hands-on.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                Get in touch
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">See what I&apos;ve built</a>
            </Button>
            {hasResume && (
              <Button asChild size="lg" variant="ghost">
                <a href={RESUME_PATH} download>
                  <Download />
                  Download resume
                </a>
              </Button>
            )}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-y-6 border-t pt-8 sm:grid-cols-3 sm:gap-x-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="font-mono text-xl font-medium tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* AI Lab */}
        <Section
          id="projects"
          title="AI Lab"
          description="Things I've designed and built on my own time. Some are live products, and some are still being developed."
        >
          <ProjectCarousel projects={projects} />
        </Section>

        {/* AI and agents */}
        <Section
          id="ai"
          title="Building with AI and agents"
          description="I build with the same tools I make product decisions about. Working hands-on with models and agents is how I judge what is worth building, what it will take, and what can ship."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {aiPractice.map(({ icon: Icon, iconClass, title, body }) => (
              <Card key={title} className="gap-4 shadow-none">
                <CardHeader className="gap-4">
                  <span
                    aria-hidden
                    className={`flex size-9 items-center justify-center rounded-md ${iconClass}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{body}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 rounded-xl border">
            <h3 className="border-b px-5 py-3 text-sm font-medium">Toolkit</h3>
            <dl className="divide-y">
              {toolkit.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-2 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-6"
                >
                  <dt className="w-36 shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          title="Experience"
          description="Product management and software development for consumer products, from connected devices and apps to a streaming service on every major screen."
          action={
            <Button asChild className="shrink-0">
              <a href={RESUME_PATH} download>
                <Download />
                Download resume
              </a>
            </Button>
          }
        >
          <ol className="divide-y border-y">
            {experience.map((role) => (
              <li key={role.period} className="grid gap-2 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
                <p className="pt-0.5 font-mono text-sm text-muted-foreground">{role.period}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="font-semibold tracking-tight">{role.title}</h3>
                    {role.current && (
                      <Badge className="rounded-full border-transparent bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{role.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid gap-2 pt-6 md:grid-cols-[11rem_1fr] md:gap-8">
            <p className="pt-0.5 font-mono text-sm text-muted-foreground">Education</p>
            <div>
              <h3 className="font-semibold tracking-tight">
                B.S., Business Administration in Marketing
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">University of Pittsburgh</p>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          title="Skills"
          description="The product craft behind the builds."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <Card key={group.label} className="gap-4 shadow-none">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex size-9 items-center justify-center rounded-md ${group.iconClass}`}
                    >
                      <group.icon className="size-4" />
                    </span>
                    <CardTitle>{group.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="font-normal">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Writing: only shown once there is at least one published post */}
        {posts.length > 0 && (
          <Section
            id="writing"
            title="Writing"
            description="Practical guidance and honest takes on the AI industry, from where to start to how to build an agent."
          >
            <PostList posts={posts.slice(0, 2)} />
            <Button asChild variant="outline" className="mt-8">
              <Link href="/writing">
                All writing
                <ArrowRight />
              </Link>
            </Button>
          </Section>
        )}

        {/* Contact */}
        <Section
          id="contact"
          title="Get in touch"
          description="There are two things I'm most useful for. Pick the one that fits, or just say hello."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="justify-between shadow-none">
              <CardHeader>
                <CardTitle>Product leadership</CardTitle>
                <CardDescription className="leading-relaxed">
                  Looking for a product leader who has shipped consumer products at scale and
                  understands AI from the inside? I&apos;m happy to talk.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href={`mailto:${EMAIL}?subject=Product%20leadership`}>
                    <Mail />
                    Email me about a role
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="justify-between shadow-none">
              <CardHeader>
                <CardTitle>AI for your business</CardTitle>
                <CardDescription className="leading-relaxed">
                  Want to put AI or agents to work in your business? I can help you find the
                  right use case, then design and build it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href={`mailto:${EMAIL}?subject=AI%20project`}>
                    <Mail />
                    Email me about a project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden>
                  <path
                    fill="#0A66C2"
                    d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                  <path
                    fill="#fff"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z"
                  />
                </svg>
                linkedin.com/in/chadzarett
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
