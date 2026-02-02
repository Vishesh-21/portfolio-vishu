"use client";
import Container from "@/components/container";
import { ChangelogItem, lifeChangelog } from "./updates";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { useState } from "react";
import { SeeMoreButton } from "@/components/see-more-button";
import { Hash } from "lucide-react";

const visible_years = 3;

export const LifeUpdates = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll
    ? lifeChangelog
    : lifeChangelog.slice(0, visible_years);

  return (
    <Container>
      <MotionHeading as="h2">
        Personal <span className="text-muted-foreground">ChangeLog</span>
      </MotionHeading>
      <List lifeChangelog={visibleData} />

      <div className="text-center">
        {!showAll && (
          <SeeMoreButton
            onClick={() => setShowAll(true)}
            className="mt-14 mb-0"
          >
            See More
          </SeeMoreButton>
        )}
      </div>
    </Container>
  );
};

function List({ lifeChangelog }: { lifeChangelog: ChangelogItem[] }) {
  return (
    <div className="mt-8 space-y-6">
      {lifeChangelog.map((section, i) => (
        <div key={section.year} className="space-y-6">
          <MotionHeading as="h4">{section.year}</MotionHeading>
          {section.items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <Hash className="text-primary fill-primary mt-0.5 h-5 w-5 shrink-0" />
              <div className="space-y-2">
                <MotionHeading
                  as="h6"
                  className="text-foreground/95 text-md font-semibold text-shadow-none"
                >
                  {item.title}
                </MotionHeading>
                <MotionSubHeading className="text-muted-foreground text-[0.97rem]">
                  {item.description}
                </MotionSubHeading>
              </div>
            </div>
          ))}
          {i !== lifeChangelog.length - 1 && (
            <div className="bg-muted-foreground h-[0.7px] w-full rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
}
