import { ChangelogContainer } from "./life-components/changeLog-container";
import { lifeChangelog } from "./life-components/updates";

export const LifeUpdates = () => {
  return (
    <ChangelogContainer
      title="Personal"
      subtitle="ChangeLog"
      data={lifeChangelog}
      visibleCount={3}
    />
  );
};
