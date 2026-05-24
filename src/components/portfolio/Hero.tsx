import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { CvPreview } from "./CvPreview";
import { EASE_OUT } from "./motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center bg-noir px-6 grain md:px-12"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]"
      />
      <div className="absolute inset-0 grid-noise opacity-[0.35]" />

      <div className="relative mx-auto w-full max-w-7xl" style={{ perspective: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: EASE_OUT }}
          className="mb-8 flex items-center gap-3 font-mono text-xs text-muted-foreground"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-glow" />
          AVAILABLE FOR WORK — RABAT, MA
        </motion.div>

        <motion.h1
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="font-display text-[18vw] font-bold leading-[0.85] tracking-tighter md:text-[14vw] lg:text-[12vw]"
        >
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE_OUT }}
            className="block"
          >
            KU<span className="text-glow text-primary">—</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE_OUT }}
            className="block italic text-muted-foreground"
          >
            uhaku.
          </motion.span>
        </motion.h1>

        <div className="mt-12 grid items-end gap-8 md:grid-cols-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, ease: EASE_OUT }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-2 md:text-xl"
          >
            Creative full-stack developer at{" "}
            <span className="font-medium text-foreground">Zone 01 Morocco</span>. I architect
            robust backends and fluid frontends — clean code, smooth motion, human emotion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="space-y-3 font-mono text-xs text-muted-foreground md:text-right"
          >
            <div>
              +52 REPOS{" "}
              <a
                href="https://github.com/ku-uhaku"
                target="_blank"
                rel="noreferrer"
                className="text-primary transition-colors hover:underline"
              >
                GitHub
              </a>
            </div>
            <div>KU-UHAKU</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, ease: EASE_OUT }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <CvPreview variant="hero" />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Get in touch ↓
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block h-8 w-px bg-gradient-to-b from-primary to-transparent"
        />
      </motion.a>
    </section>
  );
}
