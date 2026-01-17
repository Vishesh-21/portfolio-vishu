import React from "react";
import { experience, ExperienceData } from "./experience-data";
import { CircleCheck, Fan } from "lucide-react";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";

export const ExperienceInSights = () => {
  return (
    <div className="flex flex-col gap-2">
      {experience.map((item, index) => {
        return <ExperienceCard key={index} {...item} />;
      })}
    </div>
  );
};

function ExperienceCard({
  role,
  company,
  period,
  description,
}: ExperienceData) {
  return (
    <div className="mt-4">
      <MotionHeading as="h5" className="flex items-center gap-2">
        <CircleCheck className="h-5 w-5" />
        {role}
      </MotionHeading>
      <div className="ml-4 mt-2">
        <MotionHeading
          as="h6"
          className="text-muted-foreground text-shadow-none"
        >
          {company}
        </MotionHeading>
        <MotionSubHeading>{period}</MotionSubHeading>
        <div className="ml-2 mt-2">
          {description.map((item, index) => {
            return (
              <MotionSubHeading className="flex flex-row items-center gap-1">
                <Fan className="text-background fill-primary h-4 w-4" />
                {item}
              </MotionSubHeading>
            );
          })}
        </div>
      </div>
    </div>
  );
}
