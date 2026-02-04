import type { Variants } from "motion/react";

export const globalMotionVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], 
    },
  },
};

export const globalViewPort = {
  once: true,
  amount: 0.6,
};
