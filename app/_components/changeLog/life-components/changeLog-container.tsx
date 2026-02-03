"use client";

import { useState } from "react";
import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { SeeMoreButton } from "@/components/see-more-button";
import { ChangelogSection } from "./updates";
import { ChangelogList } from "./changeLog-list";

type Props = {
  title: string;
  subtitle?: string;
  data: ChangelogSection[];
  visibleCount?: number;
};

export const ChangelogContainer = ({
  title,
  subtitle,
  data,
  visibleCount = 3,
}: Props) => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, visibleCount);

  return (
    <Container>
      <MotionHeading as="h2">
        {title}{" "}
        {subtitle && <span className="text-muted-foreground">{subtitle}</span>}
      </MotionHeading>

      <ChangelogList data={visibleData} />

      {!showAll && (
        <div className="text-center">
          <SeeMoreButton
            onClick={() => setShowAll(true)}
            className="mt-14 mb-0"
          >
            See More
          </SeeMoreButton>
        </div>
      )}
    </Container>
  );
};
