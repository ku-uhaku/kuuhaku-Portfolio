import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "31", label: "Repositories" },
  { value: "8+", label: "Languages" },
  { value: "∞", label: "Coffee cups" },
  { value: "01", label: "Zone" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const labelY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = imageRef.current?.getBoundingClientRect();
      if (!r) return;
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="about"
      ref={ref}
      className="section-shell section-shell-clip relative py-28 md:py-36"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="pointer-events-none absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          style={{ y: labelY }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs text-primary"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            01 — ABOUT
          </div>
        </motion.div>

        <div className="relative mt-10 min-h-[min(88vh,720px)] md:mt-14 md:min-h-[560px]">
          <motion.div
            ref={imageRef}
            style={{ y: imageY, rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[100%] max-w-none md:right-[-5%] md:w-[65%]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/50 shadow-elegant">
              <img
                src="/protfolio.jpeg"
                alt="Ku-uhaku"
                className="h-full w-full object-cover object-[center_20%] saturate-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-soft-light" />
              <div className="grain absolute inset-0 opacity-60" />
            </div>
          </motion.div>

          <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-center py-8 md:py-12">
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[14ch] font-display text-[11vw] font-bold leading-[0.92] tracking-tight md:max-w-[12ch] md:text-6xl lg:text-7xl"
            >
              I build{" "}
              <span className="italic text-primary">strange,</span>
              <br />
              precise <span className="italic text-muted-foreground">things</span>
              <br />
              <span className="text-[0.55em] font-normal not-italic text-muted-foreground/90 md:text-[0.5em]">
                for the web.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-md border-l-2 border-primary/60 pl-5 text-base leading-relaxed text-muted-foreground md:mt-10 md:max-w-lg md:text-lg"
            >
              Based in Morocco, learning by shipping. My GitHub is a sketchbook — games,
              shells, ATMs, crosswords, point-of-sale systems. Every repo a chance to learn
              a new way of thinking about code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:mt-10"
            >
              {["Zone 01", "Rabat", "Full-stack"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/80 bg-background/50 px-3 py-1.5 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border/40 pt-12 md:mt-20 md:grid-cols-4 md:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border-l border-border pl-4 transition-colors hover:border-primary/50"
            >
              <div className="font-display text-4xl font-bold text-primary transition-transform group-hover:translate-x-0.5 md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
