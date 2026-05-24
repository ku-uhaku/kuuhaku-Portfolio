import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { SectionGlow } from "./SectionGlow";
import { EASE_OUT, VIEWPORT } from "./motion";

const projects = [
  {
    name: "lem-in",
    tag: "Algorithm",
    lang: "Go",
    desc: "Ant farm pathfinding. Move N ants from start to end through a colony graph in the fewest moves.",
    accent: "from-primary/40 to-transparent",
  },
  {
    name: "real-time-forum",
    tag: "Full-stack",
    lang: "Go · JS · WS",
    desc: "Single-page forum with WebSocket-powered live chat, posts, and presence.",
    accent: "from-accent/40 to-transparent",
  },
  {
    name: "ATMSystem",
    tag: "Systems",
    lang: "C",
    desc: "Low-level ATM simulator in C — accounts, sessions, and persistent state on disk.",
    accent: "from-primary/30 to-transparent",
  },
  {
    name: "make-your-game",
    tag: "Game Engine",
    lang: "JS · Canvas",
    desc: "Framework-less browser game running at a steady 60 FPS with a custom render loop.",
    accent: "from-accent/30 to-transparent",
  },
  {
    name: "groupie-tracker2",
    tag: "API",
    lang: "Go",
    desc: "Music API explorer with rich filtering, geolocation maps, and animated UI.",
    accent: "from-primary/40 to-transparent",
  },
  {
    name: "POS",
    tag: "Web App",
    lang: "PHP · MVC",
    desc: "Point-of-sale system with inventory, sales reports, and role-based access.",
    accent: "from-accent/40 to-transparent",
  },
  {
    name: "coffee-shop",
    tag: "Frontend",
    lang: "JavaScript",
    desc: "Boutique coffee storefront — interactive menu, cart, and tactile micro-animations.",
    accent: "from-primary/30 to-transparent",
  },
  {
    name: "crossword",
    tag: "Puzzle",
    lang: "Web",
    desc: "Procedurally generated crossword puzzles playable in the browser.",
    accent: "from-accent/30 to-transparent",
  },
];

const TRACK_GAP_PX = 24;

function measureTrack(track: HTMLDivElement) {
  const children = Array.from(track.children) as HTMLElement[];
  let contentWidth = 0;
  children.forEach((child, i) => {
    contentWidth += child.getBoundingClientRect().width;
    if (i < children.length - 1) contentWidth += TRACK_GAP_PX;
  });
  contentWidth = Math.max(contentWidth, track.scrollWidth);
  return Math.max(0, contentWidth - window.innerWidth);
}

export function ProjectsHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxScrollMV = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform([scrollYProgress, maxScrollMV], ([progress, max]) => {
    return -(progress as number) * (max as number);
  });

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const distance = measureTrack(track);
      setMaxScroll(distance);
      maxScrollMV.set(distance);
    };

    update();
    requestAnimationFrame(update);

    const ro = new ResizeObserver(update);
    ro.observe(track);
    for (const child of track.children) {
      ro.observe(child);
    }
    window.addEventListener("resize", update);
    document.fonts?.ready.then(update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [maxScrollMV]);

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        height: maxScroll > 0 ? `calc(100vh + ${maxScroll}px)` : "200vh",
      }}
      className="section-shell relative"
    >
      <SectionGlow />
      <div className="sticky top-0 z-10 flex h-screen flex-col bg-background/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex shrink-0 items-end justify-between px-6 pb-6 pt-28 md:px-12"
        >
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-xs text-primary">
              <span className="h-px w-8 bg-primary" />
              02 — SELECTED WORK
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Things I've <span className="italic text-primary">shipped</span>.
            </h2>
          </div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden font-mono text-xs text-muted-foreground md:block"
          >
            SCROLL ↓ → CARDS →
          </motion.div>
        </motion.div>

        <div className="min-h-0 flex-1 overflow-x-clip overflow-y-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full w-max items-center gap-6 px-6 will-change-transform md:px-12"
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
            <div className="flex h-full w-[min(400px,80vw)] shrink-0 items-center justify-center">
              <a
                href="https://github.com/ku-uhaku?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="font-display text-3xl font-bold transition-colors hover:text-primary"
              >
                See all 31 →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.a
      href={`https://github.com/ku-uhaku/${project.name}`}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative h-[52vh] w-[85vw] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-elegant md:h-[min(520px,58vh)] md:w-[520px]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
      <div className="absolute inset-0 grain" />

      <div className="relative flex h-full flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className="font-mono text-xs text-muted-foreground">
            0{index + 1} / 08
          </div>
          <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase backdrop-blur">
            {project.tag}
          </span>
        </div>

        <div className="pointer-events-none absolute -bottom-8 -right-4 font-display text-[20vw] font-bold leading-none opacity-[0.08] md:text-[10vw]">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative space-y-4">
          <h3 className="font-display text-4xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-5xl">
            {project.name}
          </h3>
          <p className="max-w-sm leading-relaxed text-muted-foreground">{project.desc}</p>
          <div className="flex items-center justify-between border-t border-border/40 pt-4">
            <span className="font-mono text-xs text-muted-foreground">{project.lang}</span>
            <span className="font-mono text-xs transition-transform group-hover:translate-x-1">
              VIEW →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
