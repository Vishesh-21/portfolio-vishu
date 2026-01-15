"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

//nav logo component
export const NavLogo = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
