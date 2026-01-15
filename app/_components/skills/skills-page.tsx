import { MotionHeading } from "@/components/motion-heading";
import Container from "../container";
import { Skills } from "./skills-component";
import { MotionSubHeading } from "@/components/motion-sub-heading";

export const SkillsPage = () => {
  return (
    <Container>
      <SkillSectionHeading />
      <Skills className="mt-8" />
    </Container>
  );
};

function SkillSectionHeading() {
  return (
    <>
      <div className="flex gap-2">
        <MotionHeading as="h2">Core</MotionHeading>
        <MotionHeading as="h2" className="text-muted-foreground">
          Competencies
        </MotionHeading>
      </div>
      <MotionSubHeading className="text-muted-foreground/70 mt-4 md:w-2xl">
        A snapshot of my technical strengths, covering frontend development,
        backend fundamentals, tooling, and modern development workflows.
      </MotionSubHeading>
    </>
  );
}
