import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Project", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Fill in all fields, please.");
      return;
    }
    setSending(true);
    const body = encodeURIComponent(
      `From: ${form.name} <${form.email}>\nSubject: ${form.subject}\n\n${form.message}`,
    );
    window.location.href = `mailto:hello@kuuhaku.me?subject=${encodeURIComponent(
      "[Portfolio] " + form.subject,
    )}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Mail client opened — see you on the other side ✦");
      setForm({ name: "", email: "", subject: "Project", message: "" });
    }, 700);
  };

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

        <div className="mt-16 grid md:grid-cols-5 gap-10">
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6 border border-border rounded-2xl p-8 bg-card/60 backdrop-blur shadow-elegant"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="01 / NAME">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-lg transition-colors"
                />
              </Field>
              <Field label="02 / EMAIL">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-lg transition-colors"
                />
              </Field>
            </div>
            <Field label="03 / I'M REACHING OUT ABOUT">
              <div className="flex flex-wrap gap-2 pt-2">
                {["Project", "Freelance", "Collab", "Just saying hi"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm({ ...form, subject: s })}
                    className={`px-4 py-1.5 rounded-full border text-xs font-mono transition-all ${
                      form.subject === s
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="04 / MESSAGE">
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me what you're building…"
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-lg resize-none transition-colors"
              />
            </Field>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full md:w-auto inline-flex items-center justify-between gap-6 px-8 py-4 rounded-full bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider shadow-glow disabled:opacity-50"
            >
              <span>{sending ? "Sending…" : "Send transmission"}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </form>

          <div className="md:col-span-2 space-y-6">
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
                <span className="font-display text-xl md:text-2xl">{label}</span>
                <span className="font-mono text-xs group-hover:translate-x-2 transition-transform">
                  {handle} ↗
                </span>
              </a>
            ))}
            <div className="font-mono text-xs text-muted-foreground pt-6 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                CASABLANCA · MOROCCO · UTC+1
              </div>
              <div>STATUS — TAKING NEW PROJECTS</div>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}