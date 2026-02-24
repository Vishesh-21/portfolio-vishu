"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SubHeading } from "../sub-heading";
import Container from "../container";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { globalMotionVariants, globalViewPort } from "@/lib/animate-motion";
import { Link } from "next-view-transitions";

const footerLinks = [
  {
    href: "https://github.com/Vishesh-21",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/vishesh-verma-35b31b279/",
    text: "LinkedIn",
  },
  {
    href: "https://twitter.com/Vishesh_Verma",
    text: "Twitter",
  },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <Container className="mt-0 md:mt-0">
      <footer
        className={cn("bg-background/60 relative backdrop-blur-xl", className)}
      >
        <motion.div
          variants={globalMotionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={globalViewPort}
          className="pb-8"
        >
          {/* Divider */}
          <div className="bg-border mb-8 h-px w-full" />

          {/* Bottom */}
          <BottomPart />
        </motion.div>
      </footer>
    </Container>
  );
}

function TopSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="text-muted-foreground relative mx-auto flex items-center rounded-full">
      {footerLinks.map((link, index) => (
        <li key={index}>
          <LinkItem
            {...link}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </li>
      ))}
    </ul>
  );
}

function LinkItem({
  href,
  text,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  href: string;
  text: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group hover:text-foreground relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all"
    >
      {hoveredIndex === index && (
        <motion.span
          layoutId="footer-pill"
          className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      )}

      <span className="relative z-10">{text}</span>
      <MoveUpRight className="relative z-10 h-4 w-4 translate-y-0 transition-all group-hover:-translate-y-1" />
    </Link>
  );
}

// function bottom part of footer
function BottomPart() {
  return (
    <>
      <div className="text-muted-foreground flex flex-col-reverse items-center justify-center gap-2 text-sm md:flex-row md:justify-between">
        <div className="flex flex-1 flex-col gap-3">
          <SubHeading className="tracking-normal">
            Built with Next.js · Tailwind · Motion
          </SubHeading>
        </div>
        <TopSection />
      </div>
      <FooterIntro />

      <SubHeading className="text-muted-foreground/30 mx-auto text-center text-xs tracking-[0.2rem] md:mx-0 uppercase">
        &copy; {new Date().getFullYear()} | Made by Vishesh Verma
      </SubHeading>
    </>
  );
}

function FooterIntro() {
  return (
    <div className="py-4 text-center select-none">
      <h1 className="text-muted-foreground/20 text-[6rem] leading-20 font-bold tracking-wider uppercase md:text-[15rem] md:leading-45">
        Vishu
      </h1>
    </div>
  );
}
