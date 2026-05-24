import { motion } from "motion/react";

export function SectionGlow() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="pointer-events-none absolute -left-24 top-1/4 h-[380px] w-[380px] rounded-full bg-primary/25 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-accent/15 blur-[90px]"
      />
    </>
  );
}
