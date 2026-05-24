import { motion, useScroll, useTransform } from "motion/react";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-background/40 border-b border-border/40"
      >
        <a href="#top" className="font-display text-xl font-bold tracking-tighter">
          無<span className="text-primary">.</span>haku
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono">
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="relative group">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/ku-uhaku"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs px-4 py-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          GITHUB ↗
        </a>
      </motion.header>
    </>
  );
}