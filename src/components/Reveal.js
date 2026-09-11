// Fade-up on scroll. Spread onto any motion element: <motion.div {...reveal()} />
// or a react-bootstrap component: <Col as={motion.div} {...reveal(0.2)} />
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

// For icon grids: parent staggers its children in.
export const staggerParent = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.1 },
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.05 } } },
};

export const staggerChild = {
  variants: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
  },
};

// The preloader covers the first 1.2s, so delay the first-load hero animation until it lifts.
export const heroDelay = () => (performance.now() < 1500 ? 1.1 : 0);
