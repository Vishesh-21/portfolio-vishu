"use client";

import Heading from "@/components/heading";
import { server, tools, UI } from "./skills-data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Skills = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {/* frontend development tools  */}
      <StackTitle title="Frontend Development" />

      {/* backend development tools  */}
      <StackTitle title="Server & Database" />

      {/* other tools and technologies  */}
      <StackTitle title="Dev Tools & Cloud" />
    </div>
  );
};

//line component
function DashLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-muted-foreground/70 h-px w-full border border-dashed",
        className,
      )}
    ></div>
  );
}

// Skill section title with fade-in
function StackTitle({ title }: { title: string }) {
  return (
    <motion.div
      className="my-2 flex items-center justify-between gap-4 md:my-6"
      initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <DashLine />
      <span className="text-muted-foreground/70 relative text-xs font-medium tracking-tight whitespace-nowrap uppercase select-none">
        {title}

        <span className="via-primary absolute inset-0 top-5 hidden h-px bg-linear-to-r from-transparent to-transparent dark:inline"></span>
      </span>
      <DashLine />
    </motion.div>
  );
}
