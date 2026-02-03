import { ChangelogSection } from "./changeLog-section";
import { ChangelogSection as SectionType } from "./updates";

type Props = {
  data: SectionType[];
};

export const ChangelogList = ({ data }: Props) => {
  return (
    <div className="mt-8 space-y-6">
      {data.map((section, index) => (
        <ChangelogSection
          key={section.year}
          section={section}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};
