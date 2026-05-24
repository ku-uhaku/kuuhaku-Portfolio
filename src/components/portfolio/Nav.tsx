import { motion, useScroll, useTransform } from "motion/react";
import { CvPreview } from "./CvPreview";

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const headerBg = useTransform(scrollY, [0, 120], [
    "oklch(0.08 0.005 270 / 0.55)",
    "oklch(0.08 0.005 270 / 0.92)",
  ]);
  const borderColor = useTransform(scrollY, [0, 120], [
    "oklch(0.22 0.01 270 / 0.35)",
    "oklch(0.22 0.01 270 / 0.75)",
  ]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-primary"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ backgroundColor: headerBg, borderColor }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b px-6 py-4 backdrop-blur-xl md:px-12 md:py-5"
      >
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tighter transition-opacity hover:opacity-80"
        >
          無<span className="text-primary">.</span>haku
        </a>
        <nav className="hidden items-center gap-8 font-mono text-sm md:flex">
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="group relative">
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                {label}
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <CvPreview variant="nav" />
          <motion.a
            href="https://github.com/ku-uhaku"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full border border-border px-4 py-2 font-mono text-xs transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            GITHUB ↗
          </motion.a>
        </div>
      </motion.header>
    </>
  );
}
