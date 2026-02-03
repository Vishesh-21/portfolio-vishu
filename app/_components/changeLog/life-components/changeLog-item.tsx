"use client";

import { Hash } from "lucide-react";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { ChangelogEntry } from "./updates";
import { motion } from "motion/react";

type Props = {
  item: ChangelogEntry;
};

export const ChangelogItem = ({ item }: Props) => {
  return (
    <div className="flex gap-2">
      <motion.span
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hash className="text-primary fill-primary mt-0.5 h-5 w-5 shrink-0" />
      </motion.span>
      <div className="space-y-2">
        <MotionHeading
          as="h6"
          className="text-foreground/95 text-md font-semibold"
        >
          {item.title}
        </MotionHeading>
        <MotionSubHeading className="text-muted-foreground text-[0.97rem]">
          {item.description}
        </MotionSubHeading>
      </div>
    </div>
  );
};
