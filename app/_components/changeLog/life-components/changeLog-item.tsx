"use client";

import { Hash } from "lucide-react";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { ChangelogEntry } from "./updates";
import { motion } from "motion/react";
import { globalMotionVariants } from "@/lib/animate-motion";

type Props = {
  item: ChangelogEntry;
};

export const ChangelogItem = ({ item }: Props) => {
  return (
    <div className="flex gap-2">
      <motion.span
        variants={globalMotionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hash className="text-primary fill-primary mt-0.5 h-5 w-5 shrink-0" />
      </motion.span>
      <div className="space-y-2">
        <MotionHeading
          as="h6"
          className="text-foreground/95 text-md font-semibold text-shadow-none"
        >
          {item.title}
        </MotionHeading>
        <MotionSubHeading className="text-muted-foreground text-[0.97rem] text-shadow-none">
          {item.description}
        </MotionSubHeading>
      </div>
    </div>
  );
};
