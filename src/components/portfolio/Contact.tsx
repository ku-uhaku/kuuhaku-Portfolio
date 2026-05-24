import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 border-t border-border/40 bg-noir grain">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs text-primary flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary" />
          04 — CONTACT
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-[10vw] font-bold leading-[0.9] tracking-tighter"
        >
          Let's make <br />
          <span className="italic text-primary">something</span> loud.
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              ["GitHub", "@ku-uhaku", "https://github.com/ku-uhaku"],
              ["Twitter", "@Kuuhaku_v0", "https://twitter.com/Kuuhaku_v0"],
              ["Web", "kuuhaku.me", "https://kuuhaku.me"],
            ].map(([label, handle, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-border py-6 hover:border-primary transition-colors"
              >
                <span className="font-display text-2xl md:text-3xl">{label}</span>
                <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">
                  {handle} ↗
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Open to freelance, collaborations, and weird ideas. Drop a message — I read
              every DM.
            </p>
            <div className="font-mono text-xs text-muted-foreground mt-12 space-y-1">
              <div>CASABLANCA · MOROCCO</div>
              <div>UTC+1 · AVAILABLE</div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} KU-UHAKU — ALL WRONGS RESERVED</div>
          <div>BUILT WITH OBSESSION IN CASABLANCA</div>
        </div>
      </div>
    </section>
  );
}