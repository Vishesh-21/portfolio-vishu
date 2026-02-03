"use client";

import { experience, ExperienceData } from "./experience-data";
import { Dot, Plane } from "lucide-react";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";
import { motion } from "motion/react";

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
      <motion.span
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Plane className="text-primary fill-primary mt-1 h-5 w-5 shrink-0" />
      </motion.span>

      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <MotionHeading as="h5">{role}</MotionHeading>
            <MotionHeading
              as="h6"
              className="text-muted-foreground mt-2 text-[1rem] font-medium text-shadow-none"
            >
              {company}
            </MotionHeading>
          </div>
          <MotionSubHeading className="mt-1 text-sm italic">
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
