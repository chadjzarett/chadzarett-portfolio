"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

const projectStatusLabel = {
  live: "Live",
  "private-beta": "Private beta",
  waitlist: "Waitlist Sign Ups",
  "app-store-review": "Apple Submission Review",
  "coming-soon": "Coming soon",
} as const;

function ProjectCard({ project }: { project: Project }) {
  const status = project.status ?? (project.url ? "live" : "coming-soon");

  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 85vw"
            className="object-cover object-top transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-medium text-muted-foreground/40"
          >
            {project.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-2">
        <h3 className="max-w-full min-w-0 basis-[max-content] font-semibold tracking-tight underline-offset-4 group-hover:underline">
          {project.name}
        </h3>
        <Badge
          variant="outline"
          className={status === "coming-soon" ? "shrink-0 text-muted-foreground" : "shrink-0"}
        >
          {status !== "coming-soon" && (
            <span
              aria-hidden
              className={`size-1.5 rounded-full ${status === "live" ? "bg-success" : status === "waitlist" ? "bg-sky-500" : "bg-amber-500"}`}
            />
          )}
          {projectStatusLabel[status]}
        </Badge>
      </div>
      <p className="mt-2 px-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 px-2 pb-2 pt-3">
        {project.stack.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </>
  );

  const className = [
    "group flex h-full w-full flex-1 flex-col rounded-2xl border border-foreground/15 bg-card p-2",
    "outline-none transition-[border-color,box-shadow] duration-200",
    "hover:border-foreground/40 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]",
    "focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "dark:hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.8)]",
  ].join(" ");

  return project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 24);
    setCanNext(max > 24 && el.scrollLeft < max - 24);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [update, projects.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const styles = getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const amount = (card?.offsetWidth ?? el.clientWidth) + gap;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * amount, behavior: reduce ? "auto" : "smooth" });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
  };

  const overflow = canPrev || canNext;

  return (
    <div
      className="relative outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      role="region"
      aria-roledescription="carousel"
      aria-label="AI Lab projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {overflow && (
        <div className="mb-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous projects"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next projects"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <div
        ref={scroller}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div
            key={project.name}
            data-project-card
            className="flex w-[85%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
