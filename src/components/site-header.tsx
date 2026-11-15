"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

// Home page sections. The leading slash lets the same links work from /writing.
const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#ai", label: "AI & agents" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
];

const navLinkClass = (active = false) =>
  [
    "relative pb-0.5 text-sm text-muted-foreground transition-colors",
    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:opacity-0 after:scale-x-[0.2]",
    "after:transition-[transform,opacity] after:duration-[160ms] after:ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:after:transition-none",
    "[@media(hover:hover)_and_(pointer:fine)]:hover:text-foreground [@media(hover:hover)_and_(pointer:fine)]:hover:after:scale-x-100! [@media(hover:hover)_and_(pointer:fine)]:hover:after:opacity-100",
    active ? "text-foreground after:scale-x-100! after:opacity-100" : "",
  ].join(" ");

export function SiteHeader({ showWriting = false }: { showWriting?: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const onWriting = usePathname().startsWith("/writing");

  // Smooth-scroll in-page anchor links from a click handler rather than CSS
  // `scroll-behavior: smooth`, so direct links and redirects (/ai -> /#ai)
  // still jump straight to their section. The URL hash is left unchanged.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = (event.target as Element | null)
        ?.closest?.('a[href^="#"], a[href^="/#"]')
        ?.getAttribute("href");
      if (!href) return;
      // "/#section" only scrolls in place on the home page; elsewhere it navigates there.
      if (href.startsWith("/") && window.location.pathname !== "/") return;
      const target = document.getElementById(href.slice(href.indexOf("#") + 1));
      if (!target) return;
      event.preventDefault();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const ids = [...links.map((link) => link.href.slice(link.href.indexOf("#") + 1)), "writing"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    let frame = 0;
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= line) current = element.id;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-6 px-4 sm:px-6">
        <a href="/#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="flex size-7 items-center justify-center rounded-md bg-primary text-[0.7rem] font-semibold tracking-tight text-primary-foreground"
          >
            CZ
          </span>
          <span className="text-sm font-semibold tracking-tight">Chad Zarett</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass(activeSection === link.href.slice(link.href.indexOf("#") + 1))}
            >
              {link.label}
            </a>
          ))}
          {showWriting && (
            <Link
              href="/writing"
              aria-current={onWriting || activeSection === "writing" ? "page" : undefined}
              className={navLinkClass(onWriting || activeSection === "writing")}
            >
              Writing
            </Link>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/#contact">Get in touch</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t md:hidden">
          <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-2 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {showWriting && (
              <Link
                href="/writing"
                onClick={() => setOpen(false)}
                aria-current={onWriting ? "page" : undefined}
                className={`rounded-md px-2 py-2.5 text-sm transition-colors hover:bg-accent hover:text-foreground ${
                  onWriting ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Writing
              </Link>
            )}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
