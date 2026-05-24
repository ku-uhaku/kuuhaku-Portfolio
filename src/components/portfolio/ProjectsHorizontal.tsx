import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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

export function ProjectsHorizontal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-82%"]);

  return (
    <section id="work" ref={ref} className="relative h-[500vh] border-t border-border/40">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="px-6 md:px-12 pt-28 pb-6 flex items-end justify-between">
          <div>
            <div className="font-mono text-xs text-primary flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-primary" />
              02 — SELECTED WORK
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Things I've <span className="italic text-primary">shipped</span>.
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground hidden md:block">
            SCROLL → HORIZONTAL
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-6 md:px-12 flex-1 items-center">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
          <div className="flex-shrink-0 w-[400px] flex items-center justify-center">
            <a
              href="https://github.com/ku-uhaku?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="font-display text-3xl font-bold hover:text-primary transition-colors"
            >
              See all 31 →
            </a>
          </div>
        </motion.div>
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
      className="group relative flex-shrink-0 w-[85vw] md:w-[520px] h-[60vh] md:h-[520px] rounded-2xl border border-border bg-card overflow-hidden shadow-elegant"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
      <div className="absolute inset-0 grain" />

      <div className="relative h-full flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className="font-mono text-xs text-muted-foreground">
            0{index + 1} / 08
          </div>
          <span className="font-mono text-[10px] uppercase px-3 py-1 border border-border rounded-full bg-background/60 backdrop-blur">
            {project.tag}
          </span>
        </div>

        <div className="font-display text-[20vw] md:text-[10vw] font-bold leading-none opacity-[0.08] absolute -bottom-8 -right-4 pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="space-y-4 relative">
          <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-muted-foreground max-w-sm leading-relaxed">{project.desc}</p>
          <div className="flex items-center justify-between pt-4 border-t border-border/40">
            <span className="font-mono text-xs text-muted-foreground">{project.lang}</span>
            <span className="font-mono text-xs group-hover:translate-x-1 transition-transform">
              VIEW →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}