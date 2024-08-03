import { Variants } from 'framer-motion';

export const sentence = (stagger = 0.15): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: stagger,
    },
  },
});

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
  },
};

export const letter: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
