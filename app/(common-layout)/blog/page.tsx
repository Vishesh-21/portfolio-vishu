"use client";
import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import Image from "next/image";
import { motion } from "motion/react";

const BlogPage = () => {
  return (
    <Container>
      <MotionHeading as="h2">
        Dev <span className="text-muted-foreground">Notes</span>
      </MotionHeading>
      <MotionSubHeading className="mt-2">
        Thoughts and learnings on writing about my journey as a full stack
        developer—covering UI, backend services, databases, and performance.
      </MotionSubHeading>
      <UnderConstruction />
    </Container>
  );
};

export default BlogPage;

function UnderConstruction() {
  return (
    <div className="relative mt-24 tracking-tighter py-10 flex flex-col items-center justify-center">
      <h1 className="relative text-7xl font-bold">
        <span className="text-primary absolute -top-8 -left-10 text-4xl">
          Under
        </span>
        Construction
      </h1>
      <p className="text-muted-foreground ml-64">
        This page is under construction
      </p>

      <div className="via-primary/50 absolute inset-0 -z-10 bg-linear-to-r from-transparent to-transparent"></div>
    </div>
  );
}
