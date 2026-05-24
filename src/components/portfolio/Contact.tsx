import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { CvPreview } from "./CvPreview";
import { SectionGlow } from "./SectionGlow";
import { EASE_OUT, fadeUp, VIEWPORT } from "./motion";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Project", message: "" });
  const [sending, setSending] = useState(false);

  const sendMessage = async (formEl: HTMLFormElement) => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Fill in all fields, please.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      toast.error("Form is not configured. Add VITE_WEB3FORMS_KEY to .env and restart dev.");
      return;
    }

    setSending(true);
    try {
      const formData = new FormData(formEl);
      formData.set("access_key", accessKey);
      formData.set("subject", `[Portfolio] ${form.subject}`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!data.success) {
        throw new Error(data.message ?? "Send failed");
      }

      toast.success("Message sent — I'll get back to you soon ✦");
      setForm({ name: "", email: "", subject: "Project", message: "" });
    } catch (err) {
      console.error(err);
      const msg = err instanceof Error ? err.message : "Could not send";
      toast.error(`${msg}. Try mohamedbarrahx@gmail.com`);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void sendMessage(e.currentTarget);
  };

  return (
    <section id="contact" className="section-shell section-shell-clip relative bg-noir px-6 py-28 grain md:px-12 md:py-36">
      <SectionGlow />
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mb-8 flex items-center gap-3 font-mono text-xs text-primary">
          <span className="h-px w-8 bg-primary" />
          04 — CONTACT
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="font-display text-6xl font-bold leading-[0.9] tracking-tighter md:text-[10vw]"
        >
          Let's make <br />
          <span className="italic text-primary">something</span> loud.
        </motion.h2>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="md:col-span-3"
          >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative space-y-6 rounded-2xl border border-border/80 bg-card/50 p-8 shadow-elegant backdrop-blur-md"
          >
            <input type="hidden" name="botcheck" value="" />
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="01 / NAME">
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-primary"
                />
              </Field>
              <Field label="02 / EMAIL">
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-primary"
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
                    className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all ${
                      form.subject === s
                        ? "border-primary bg-primary text-primary-foreground shadow-glow"
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
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me what you're building…"
                className="w-full resize-none border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-primary"
              />
            </Field>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full cursor-pointer items-center justify-between gap-6 rounded-full bg-primary px-8 py-4 font-mono text-sm uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
            >
              <span>{sending ? "Sending…" : "Send transmission"}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="space-y-6 md:col-span-2"
          >
            {[
              ["GitHub", "@ku-uhaku", "https://github.com/ku-uhaku"],
              ["Twitter", "@Kuuhaku_v0", "https://twitter.com/Kuuhaku_v0"],
              ["Web", "kuuhaku.me", "https://kuuhaku.me"],
            ].map(([label, handle, href], i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.15 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between border-b border-border/80 py-6 transition-colors hover:border-primary"
              >
                <span className="font-display text-xl md:text-2xl">{label}</span>
                <span className="font-mono text-xs transition-transform group-hover:translate-x-2">
                  {handle} ↗
                </span>
              </motion.a>
            ))}

            <CvPreview variant="contact" />

            <div className="space-y-1 pt-4 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                RABAT · MOROCCO · UTC+1
              </div>
              <div>STATUS — TAKING NEW PROJECTS</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-8 font-mono text-xs text-muted-foreground md:mt-32"
        >
          <div>© {new Date().getFullYear()} KU-UHAKU — ALL WRONGS RESERVED</div>
          <div>BUILT WITH OBSESSION IN RABAT</div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
