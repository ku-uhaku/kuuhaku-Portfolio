import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

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
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 grain bg-noir">
      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full" style={{ perspective: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-8 font-mono text-xs text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          AVAILABLE FOR WORK — CASABLANCA, MA
        </motion.div>

        <motion.h1
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="font-display font-bold leading-[0.85] tracking-tighter text-[18vw] md:text-[14vw] lg:text-[12vw]"
        >
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            KU<span className="text-primary text-glow">—</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block italic text-muted-foreground"
          >
            uhaku.
          </motion.span>
        </motion.h1>

        <div className="mt-12 grid md:grid-cols-3 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 text-lg md:text-xl max-w-xl text-muted-foreground leading-relaxed"
          >
            Creative full-stack developer at{" "}
            <span className="text-foreground font-medium">Zone 01 Morocco</span>. I craft
            interfaces that blur the line between code, motion, and emotion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="font-mono text-xs text-muted-foreground space-y-1 md:text-right"
          >
            <div>31 PUBLIC REPOS</div>
            <div>GO · TS · PHP · C</div>
            <div className="text-primary">SCROLL ↓</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}