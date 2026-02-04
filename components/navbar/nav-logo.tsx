"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { globalMotionVariants, globalViewPort } from "@/lib/animate-motion";

//nav logo component
export const NavLogo = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={globalMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={globalViewPort}
    >
      <Link href="/">
        {theme && (
          <Image
            src={`/logo-${theme !== "dark" ? "light" : "dark"}.png`}
            alt="logo"
            width={50}
            height={50}
            className="h-10 w-10 rounded-full md:h-12 md:w-12"
            priority
          />
        )}
      </Link>
    </motion.div>
  );
};
