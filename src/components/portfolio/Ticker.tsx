import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const phrases = [
  "AVAILABLE FOR FREELANCE",
  "CASABLANCA · MOROCCO",
  "ZONE 01",
  "BUILT WITHOUT FRAMEWORKS",
  "GO · TS · C · PHP",
  "OPEN TO COLLABS",
];

export function Ticker() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);

  return (
    <div
      ref={ref}
      className="relative border-y border-border bg-background py-6 overflow-hidden"
    >
      <motion.div style={{ x }} className="flex gap-12 whitespace-nowrap font-mono text-sm">
        {Array.from({ length: 6 }).flatMap((_, r) =>
          phrases.map((p, i) => (
            <span key={`${r}-${i}`} className="flex items-center gap-12 text-muted-foreground">
              {p}
              <span className="text-primary text-lg">✦</span>
            </span>
          )),
        )}
      </motion.div>
    </div>
  );
}