"use client";

import Heading from "@/components/heading";
import { globalMotionVariants, globalViewPort } from "@/lib/animate-motion";
import { delay } from "motion";
import { motion } from "motion/react";

export const MotionHeading = ({
  children,
  className,
  as = "h1",
}: {
  children: string | React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return (
    <motion.div
      variants={globalMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={globalViewPort}
    >
      <Heading as={as} className={className}>
        {children}
      </Heading>
    </motion.div>
  );
};
