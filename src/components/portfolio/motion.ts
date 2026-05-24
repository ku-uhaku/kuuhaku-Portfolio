export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT = { once: true, margin: "-80px" as const };

export const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.8, ease: EASE_OUT },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT,
  transition: { duration: 0.7, ease: EASE_OUT },
};
