import { motion } from "motion/react";
import { fadeUp } from "./motion";

type SectionLabelProps = {
  index: string;
  title?: React.ReactNode;
  className?: string;
};

export function SectionLabel({ index, title, className = "" }: SectionLabelProps) {
  return (
    <motion.div {...fadeUp} className={className}>
      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-primary">
        <span className="h-px w-8 bg-primary" />
        {index}
      </div>
      {title ? (
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      ) : null}
    </motion.div>
  );
}
