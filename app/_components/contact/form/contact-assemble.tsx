"use client";

import { socialData } from "./contact-type";
import { Form } from "./contact-form";
import { GlowLine } from "@/components/glow-line";
import { motion } from "motion/react";

export const ContactForm = () => {
  return (
    <motion.div
      className="border-px relative my-6 flex flex-col-reverse gap-10 overflow-hidden px-10 py-4 shadow-md md:flex-row md:gap-20 md:py-8"
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Social />
      <Form />

      {/* border accent */}
      <BorderAccent />
    </motion.div>
  );
};

function Social() {
  return (
    <div className="hidden w-fit flex-col gap-4 py-10 md:flex">
      {socialData.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-muted-foreground text-sm font-medium">
              {item.name}
            </h1>
            <h3 className="text-foreground text-sm font-medium">
              {item.value}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
}

function BorderAccent() {
  return (
    <>
      <GlowLine className="top-0 left-0 h-full w-[1.5px] bg-linear-to-b opacity-0 dark:opacity-100" />

      <GlowLine className="right-0 bottom-0 h-full w-[1.5px] bg-linear-to-b opacity-0 dark:opacity-100" />
    </>
  );
}
