"use client";
import { motion } from "motion/react";
import { SubHeading } from "./sub-heading";
import { globalMotionVariants, globalViewPort } from "@/lib/animate-motion";

export const MotionSubHeading = ({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={globalMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={globalViewPort}
    >
      <SubHeading className={className}>{children}</SubHeading>
    </motion.div>
  );
};
