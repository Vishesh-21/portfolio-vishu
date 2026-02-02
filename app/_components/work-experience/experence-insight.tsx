import React from "react";
import { experience, ExperienceData } from "./experience-data";
import { CircleCheck, Dot, Fan, Plane } from "lucide-react";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";

export const ExperienceInSights = () => {
  return (
    <div className="mt-1 flex flex-col gap-2">
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
    <div className="mt-4 flex gap-2">
      <Plane className="text-primary fill-primary mt-1 h-5 w-5 shrink-0" />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between md:flex-row flex-col">
          <div>
            <MotionHeading as="h5">{role}</MotionHeading>
            <MotionHeading
              as="h6"
              className="text-muted-foreground mt-2 text-[1rem] font-medium text-shadow-none"
            >
              {company}
            </MotionHeading>
          </div>
          <MotionSubHeading className="text-sm italic mt-1">
            {period}
          </MotionSubHeading>
        </div>
        <div>
          {description.map((item, index) => {
            return (
              <MotionSubHeading key={index} className="w-full">
                <Dot className="text-muted-foreground fill-primary inline h-8 w-8" />
                {item}
              </MotionSubHeading>
            );
          })}
        </div>
      </div>
    </div>
  );
}
