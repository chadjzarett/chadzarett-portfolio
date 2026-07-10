"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarRange, Globe2, Users } from "lucide-react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useCountUp(target: number, enabled: boolean, durationMs = 1400) {
  const [n, setN] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!enabled) return;
    if (reduced) {
      setN(target);
      return;
    }
    let start: number | null = null;
    let frame = 0;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setN(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target, durationMs, reduced]);

  return reduced && enabled ? target : n;
}

export function HeroStatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const years = useCountUp(20, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0.4 }}
      className="pt-10 md:pt-12"
    >
      <div className="glass-stats-bar grid w-full max-w-xl grid-cols-3 gap-3 sm:flex sm:max-w-none sm:items-stretch sm:justify-between sm:gap-0 md:max-w-2xl">
        <motion.div
          className="flex flex-col items-center gap-2 text-center sm:min-w-[5.5rem] sm:flex-row sm:items-center sm:gap-3 sm:text-left"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0, duration: 0.45, delay: 0.05 }}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
            aria-hidden
          >
            <CalendarRange className="h-4 w-4" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-xl font-bold tabular-nums tracking-tight text-foreground sm:text-2xl">
              {years}
              <span className="text-lg font-bold">+</span>
            </p>
            <p className="text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
              Years Exp
            </p>
          </div>
        </motion.div>

        <div
          className="hidden h-auto w-px shrink-0 bg-border/60 sm:block self-center sm:h-10"
          aria-hidden
        />

        <motion.div
          className="flex flex-col items-center gap-2 text-center sm:min-w-[5.5rem] sm:flex-row sm:items-center sm:gap-3 sm:text-left"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0, duration: 0.45, delay: 0.12 }}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
            aria-hidden
          >
            <Users className="h-4 w-4" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Millions</p>
            <p className="text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
              Users Reached
            </p>
          </div>
        </motion.div>

        <div
          className="hidden h-auto w-px shrink-0 bg-border/60 sm:block self-center sm:h-10"
          aria-hidden
        />

        <motion.div
          className="flex flex-col items-center gap-2 text-center sm:min-w-[5.5rem] sm:flex-row sm:items-center sm:gap-3 sm:text-left"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0, duration: 0.45, delay: 0.19 }}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
            aria-hidden
          >
            <Globe2 className="h-4 w-4" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Global</p>
            <p className="text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
              Market Reach
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
