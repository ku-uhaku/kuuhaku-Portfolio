import { motion } from "motion/react";
import { useState } from "react";
import { SectionGlow } from "./SectionGlow";
import { SectionLabel } from "./SectionLabel";

const skills = [
  "Go",
  "TypeScript",
  "JavaScript",
  "PHP",
  "C",
  "Bash",
  "React",
  "Next.js",
  "TanStack",
  "Node",
  "WebSockets",
  "PostgreSQL",
  "MySQL",
  "MVC",
  "Laravel",
  "Tailwind",
  "Linux",
  "Git",
  "Docker",
  "REST",
  "Canvas",
];

export function Skills() {
  return (
    <section id="skills" className="section-shell section-shell-clip relative py-28 md:py-36">
      <SectionGlow />
      <div className="relative mx-auto mb-14 max-w-7xl px-6 md:mb-16 md:px-12">
        <SectionLabel
          index="03 — TOOLBOX"
          title={
            <>
              Stack of <span className="italic text-primary">choice</span>.
            </>
          }
        />
      </div>

      <div className="space-y-5">
        <Marquee items={skills} direction="left" />
        <Marquee items={[...skills].reverse()} direction="right" />
      </div>
    </section>
  );
}

function Marquee({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        animate={
          paused ? undefined : { x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }
        }
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        className="flex w-max gap-4 whitespace-nowrap"
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="cursor-default px-4 font-display text-5xl font-bold tracking-tighter text-muted-foreground/80 transition-colors hover:text-primary md:text-7xl"
          >
            {s} <span className="text-primary/80">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
