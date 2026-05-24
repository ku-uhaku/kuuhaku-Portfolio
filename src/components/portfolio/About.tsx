import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "31", label: "Repositories" },
  { value: "8+", label: "Languages" },
  { value: "∞", label: "Coffee cups" },
  { value: "01", label: "Zone" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 md:px-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 font-mono text-xs text-primary"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            01 — ABOUT
          </div>
        </motion.div>

        <div className="md:col-span-8 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            I build <span className="italic text-primary">strange,</span> precise{" "}
            <span className="italic">things</span> for the web — from low-level C systems
            to real-time multiplayer forums.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            Based in Morocco, learning by shipping. My GitHub is a sketchbook — games,
            shells, ATMs, crosswords, point-of-sale systems. Every repo a chance to learn
            a new way of thinking about code.
          </motion.p>

          <motion.div style={{ y }} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-border pl-4"
              >
                <div className="font-display text-5xl font-bold text-primary">{s.value}</div>
                <div className="font-mono text-xs text-muted-foreground mt-2 uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}