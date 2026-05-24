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
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
      <div className="relative h-40 w-px bg-border overflow-hidden">
        <motion.div
          style={{ scaleY: progress, transformOrigin: "top" }}
          className="absolute inset-0 bg-primary"
        />
      </div>
      <ul className="flex flex-col gap-3 font-mono text-[10px]">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block transition-colors ${
                active === s.id ? "text-primary" : "text-muted-foreground/50"
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}