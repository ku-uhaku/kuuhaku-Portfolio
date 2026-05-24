import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "00" },
  { id: "about", label: "01" },
  { id: "work", label: "02" },
  { id: "skills", label: "03" },
  { id: "contact", label: "04" },
];

export function SideIndex() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let cur = "top";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
      <div className="relative h-40 w-px overflow-hidden bg-border/80">
        <motion.div
          style={{ scaleY: progress, transformOrigin: "top" }}
          className="absolute inset-0 bg-primary shadow-glow"
        />
      </div>
      <ul className="flex flex-col gap-3 font-mono text-[10px]">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group relative flex items-center gap-2"
            >
              <motion.span
                animate={{
                  scale: active === s.id ? 1 : 0,
                  opacity: active === s.id ? 1 : 0,
                }}
                className="h-1 w-1 rounded-full bg-primary"
              />
              <span
                className={`transition-colors ${
                  active === s.id ? "text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
