"use client";

import { useState } from "react";
import { ProjectData } from "./constant";
import { ProjectCard } from "./project-card";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pathName = usePathname();
  const isHome = pathName === "/";

  const visibleProjects = isHome ? projects.slice(0, 4) : projects;
  return (
    <div className="mt-8 grid md:grid-cols-2">
      {visibleProjects.map((project, index) => (
        <div
          className="relative p-4"
          key={`project-${project.title}-${index}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ProjectCard key={project.title} {...project} />
          {hoveredIndex === index && (
            <motion.span
              layoutId="project-pill"
              className="absolute inset-0 -z-10 rounded-md bg-neutral-100/50 dark:bg-neutral-800/50"
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
        <div className="text-muted-foreground flex items-center justify-center p-10">
          <Link
            href={"https://github.com/Vishesh-21"}
            target="_blank"
            className=""
          >
            <Button variant={"ghost"} className="cursor-pointer">
              <Github className="mr-1" />
              <span>View More on GitHub</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
