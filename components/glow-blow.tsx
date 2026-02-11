"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const GlowBlow = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn(
        "absolute -right-32 -bottom-32 h-54 w-54 rounded-full bg-cyan-500/30 blur-3xl",
        className,
      )}
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  );
};

