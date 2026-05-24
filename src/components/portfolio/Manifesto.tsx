import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
    <section
      ref={ref}
      className="relative py-40 px-6 md:px-12 border-t border-border/40 overflow-hidden"
    >
      {/* huge rotating star mark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 top-1/2 -translate-y-1/2 font-display text-[40vw] font-bold leading-none text-primary/[0.07] pointer-events-none select-none"
      >
        ✦
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="font-mono text-xs text-primary flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary" />
          MANIFESTO
        </div>
        <p className="font-display text-3xl md:text-6xl font-bold tracking-tight leading-[1.1] flex flex-wrap gap-x-4 gap-y-2">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1.2 / words.length;
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            return (
              <motion.span key={i} style={{ opacity }}>
                {w}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}