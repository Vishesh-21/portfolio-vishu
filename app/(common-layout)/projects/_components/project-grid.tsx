"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
// @ts-ignore
import { ProjectData } from "./constant";
import { ProjectCard } from "./project-card";
import { Link } from "next-view-transitions";

export function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pathName = usePathname();
  const isHome = pathName === "/";

  const visibleProjects = isHome ? projects.slice(0, 4) : projects;
  return (
    <div className="mt-8 grid md:grid-cols-2">
      {visibleProjects.map((project, index) => (
        <div
          className="relative p-2"
          key={`project-${project.title}-${index}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ProjectCard key={project.title} {...project} />
          {hoveredIndex === index && (
            <motion.span
              layoutId="project-pill"
              className="absolute inset-0 -z-10 rounded-sm bg-neutral-100/50 dark:bg-neutral-800/50"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}
        </div>
      ))}

      {!isHome && (
        <div className="text-muted-foreground flex flex-col items-center justify-center gap-6 md:p-10 p-0 md:mt-0 mt-6">
          <Image
            src="/github.png"
            alt="github"
            width={200}
            height={200}
            className="h-24 w-24 md:block hidden"
          />
          <Link
            href={"https://github.com/Vishesh-21"}
            target="_blank"
            className="hover:text-foreground group relative flex items-center gap-1"
          >
            Github{" "}
            <ArrowUpRight className="rotate-45 transition-all duration-200 group-hover:rotate-0 h-4 w-4" />
            <span className="absolute inset-0 top-7 hidden h-px bg-linear-to-r from-transparent via-primary to-transparent dark:inline"></span>
          </Link>
        </div>
      )}
    </div>
  );
}
