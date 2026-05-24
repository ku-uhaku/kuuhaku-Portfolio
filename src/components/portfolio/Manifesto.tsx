import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionGlow } from "./SectionGlow";
import { fadeUp } from "./motion";

const line =
  "Code is craft. Every pixel a decision. Every animation a sentence. I don't ship templates — I ship intent.";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const words = line.split(" ");

  return (
    <section ref={ref} className="section-shell section-shell-clip relative px-6 py-32 md:px-12 md:py-44">
      <SectionGlow />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 select-none font-display text-[40vw] font-bold leading-none text-primary/[0.07]"
      >
        ✦
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-10 flex items-center gap-3 font-mono text-xs text-primary">
          <span className="h-px w-8 bg-primary" />
          MANIFESTO
        </motion.div>
        <p className="flex flex-wrap gap-x-4 gap-y-3 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1.2 / words.length;
            const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1]);
            const y = useTransform(scrollYProgress, [start, end], [8, 0]);
            return (
              <motion.span key={i} style={{ opacity, y }} className="inline-block">
                {w}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
