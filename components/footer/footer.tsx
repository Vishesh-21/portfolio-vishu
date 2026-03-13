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

      <SubHeading className="text-muted-foreground/30 mx-auto text-center text-xs tracking-[0.1rem] uppercase md:mx-0">
        &copy; {new Date().getFullYear()} | Logic first, code follows.
      </SubHeading>
    </>
  );
}

function FooterIntro() {
  const name = "Vishesh";
  const characters = name.split("");

  return (
    <div className="py-4 text-center  select-none overflow-hidden">
      <h1 className="text-muted-foreground/20 flex justify-center text-[5rem] leading-15 font-bold md:tracking-tight tracking-tighter uppercase md:text-[12rem] md:leading-35">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block cursor-pointer"
            /* Initial state: Zero rotation and muted color.
               This is where the character returns on mouse leave.
            */
            initial={{ rotate: 0, color: "rgb(var(--muted-foreground) / 0.2)" }}
            animate={{ rotate: 0, color: "rgb(var(--muted-foreground) / 0.2)" }}
            /* The 'bottom' origin creates the needle/pendulum anchor point */
            style={{ transformOrigin: "bottom" }}
            
            whileHover={{
              /* Clock-like swing: Backwards (-20deg) then Forwards (20deg) */
              rotate: [0, -10, 10, 0],
              /* Change to primary color during the hover state */
              color: "var(--primary)",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
