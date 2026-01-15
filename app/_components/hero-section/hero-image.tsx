"use client";

import { GlowLine } from "@/components/glow-line";
import Image from "next/image";
import { motion } from "motion/react";

export function HeroImage() {
  return (
    <motion.div
      className="relative w-1/3 px-1 py-4 md:w-full md:px-10 md:py-6"
      style={{ perspective: 1000 }} // critical for 3D depth
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="relative -top-2 -right-2 z-10 will-change-transform"
        whileHover={{
          rotateX: 9,
          rotateY: -8,
          scale: 1.05,
          z: 40,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.6,
        }}
      >
        <Image
          src="/user.png"
          alt="Vishesh_Verma"
          width={200}
          height={200}
          priority
          className="h-24 w-24 rounded-full md:h-42 md:w-42"
        />
      </motion.div>

      <LineEffect />
    </motion.div>
  );
}

function LineEffect() {
  return (
    <>
      <GlowLine className="top-0 left-0 w-full bg-linear-to-r from-transparent via-red-500 to-transparent" />
      <GlowLine className="via-primary top-10 left-10 w-full bg-linear-to-r from-transparent to-transparent" />
      <GlowLine className="-top-10 right-20 h-full w-0.5 bg-linear-to-t from-transparent via-green-500 to-transparent" />
      <GlowLine className="top-0 right-10 h-full w-0.5 bg-linear-to-t from-transparent via-yellow-500 to-transparent" />
    </>
  );
}

//badge
export function Badge() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-border bg-background/60 text-muted-foreground relative mt-1 mb-4 inline-block rounded-full border px-4 py-1 text-sm font-semibold backdrop-blur-xl select-none md:mb-6"
    >
      Full-Stack Developer · <span className="text-primary">Next.js</span> ·
      AI-Aware
      <GlowLine className="via-muted-foreground/50 top-0 left-5 w-1/2 bg-linear-to-r from-transparent to-transparent" />
      <GlowLine className="via-muted-foreground/50 right-5 bottom-0 w-1/2 bg-linear-to-r from-transparent to-transparent" />
    </motion.span>
  );
}
