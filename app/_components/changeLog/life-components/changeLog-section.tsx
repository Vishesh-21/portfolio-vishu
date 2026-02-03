
import { MotionHeading } from "@/components/motion-heading";
import { ChangelogSection as SectionType } from "./updates";
import { ChangelogItem } from "./changeLog-item";

type Props = {
  section: SectionType;
  isLast: boolean;
};

export const ChangelogSection = ({ section, isLast }: Props) => {
  return (
    <div className="space-y-6">
      <MotionHeading as="h4">{section.year}</MotionHeading>

      {section.items.map((item, idx) => (
        <ChangelogItem key={idx} item={item} />
      ))}

      {!isLast && (
        <div className="bg-muted-foreground h-[1.3px] w-full rounded-full" />
      )}
    </div>
  );
};
