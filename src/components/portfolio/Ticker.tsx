import { motion } from "motion/react";

const phrases = [
  "AVAILABLE FOR FREELANCE",
  "RABAT · MOROCCO",
  "ZONE 01",
  "BUILT WITHOUT FRAMEWORKS",
  "GO · TS · C · PHP",
  "OPEN TO COLLABS",
];

export function Ticker() {
  const items = Array.from({ length: 4 }).flatMap(() => phrases);

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-background/80 py-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        className="flex w-max gap-12 whitespace-nowrap px-6 font-mono text-sm"
      >
        {[...items, ...items].map((p, i) => (
          <span key={i} className="flex items-center gap-12 text-muted-foreground">
            {p}
            <span className="text-lg text-primary">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
