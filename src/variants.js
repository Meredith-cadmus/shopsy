export const Variants = {
  start: { opacity: 0, scale: 0.5 },
  animation: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

export const textVariants = {
  start: { opacity: 0, y: 50 },
  animation: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const staggerVariants = {
  start: { opacity: 0 },
  animation: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
};

export const childVariants = {
  start: { opacity: 0, y: 100 },
  animation: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const heroVariants = {
  start: { scale: 1.5 },
  animation: { scale: 1, transition: { duration: 1 } },
};
