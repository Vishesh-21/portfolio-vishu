"use client";

import { GlowLine } from "@/components/glow-line";
import Image from "next/image";
import { motion } from "motion/react";
import { globalMotionVariants, globalViewPort } from "@/lib/animate-motion";

export function HeroImage() {
  return (
    <motion.div
      className="relative w-45 px-1 py-4 md:w-[80%] md:px-10 md:py-6"
      style={{ perspective: 1000 }} // critical for 3D depth
      variants={globalMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={globalViewPort}
    >
      <motion.div
        className="relative -top-2 -right-2 z-10 will-change-transform md:-right-4"
        initial={{
          scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        }}
        whileHover={{
          rotateX: 9,
          rotateY: -8,
          scale: 1.02,
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
          className="h-24 w-24 rounded-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] md:h-32 md:w-32"
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
