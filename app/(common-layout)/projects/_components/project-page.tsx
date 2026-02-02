import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ProjectsGrid } from "./project-grid";
import { projectsData } from "./constant";
import { SeeMoreButton } from "@/components/see-more-button";

export const Projects = () => {
  return (
    <Container className="md:mt-8">
      <PageHeading />
      <ProjectsGrid projects={projectsData} />
      <MoreButton />
    </Container>
  );
};

function PageHeading() {
  return (
    <>
      <MotionHeading as="h2">
        Thing I <span className="text-muted-foreground">Built</span>
      </MotionHeading>
      <MotionSubHeading className="mt-2">
        Projects created to understand core concepts, solve problems, and gain
        hands-on development experience.
      </MotionSubHeading>
    </>
  );
}

function MoreButton() {
  return (
    <div className="text-center">
      <Link href="/projects" aria-label="See all projects">
        <SeeMoreButton>See More</SeeMoreButton>
      </Link>
    </div>
  );
}
