import { motion } from "motion/react";

const skills = [
  "Go", "TypeScript", "JavaScript", "PHP", "C", "Bash",
  "React", "Next.js", "TanStack", "Node", "WebSockets",
  "PostgreSQL", "MySQL", "MVC", "Laravel", "Tailwind",
  "Linux", "Git", "Docker", "REST", "Canvas",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 border-t border-border/40 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="font-mono text-xs text-primary flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-primary" />
          03 — TOOLBOX
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
          Stack of <span className="italic text-primary">choice</span>.
        </h2>
      </div>

      <div className="space-y-4">
        <Marquee items={skills} direction="left" />
        <Marquee items={[...skills].reverse()} direction="right" />
      </div>
    </section>
  );
}

function Marquee({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex gap-4 whitespace-nowrap"
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter px-6 text-muted-foreground hover:text-primary transition-colors"
          >
            {s} <span className="text-primary">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}