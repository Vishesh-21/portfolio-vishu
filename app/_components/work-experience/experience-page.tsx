import React from "react";
import Container from "../container";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { ExperienceInSights } from "./experence-insight";

export const ExperiencePage = () => {
  return (
    <Container>
      <MotionHeading as="h2">
        Track <span className="text-muted-foreground">Record</span>
      </MotionHeading>
      <MotionSubHeading>
        Hands-on with tech, delivering real-world impact at every internship and
        project.
      </MotionSubHeading>

      <ExperienceInSights />
    </Container>
  );
};
