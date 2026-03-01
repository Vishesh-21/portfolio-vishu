import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { CornerRightUpIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import AnimatedCounter from "./animate-counter";
import { getPublicRepoCount } from "@/lib/github";

export default async function GitHubStats() {
  const repoCount = await getPublicRepoCount();
  const experience = 1;

  return (
    <section className="mt-18 px-4 md:mt-20">
      <div className="flex items-center gap-10">
        {/* Years of experience  */}
        <div>
          <MotionHeading as="h1" className="tracking-tighter">
            +<AnimatedCounter value={experience} duration={100}/>
          </MotionHeading>
          <MotionSubHeading className="text-sm tracking-normal md:mb-1">
            Years of Experience
          </MotionSubHeading>
        </div>

        {/* Repositories  */}
        <div>
          <MotionHeading as="h1" className="tracking-tighter">
            <AnimatedCounter value={repoCount} />+
          </MotionHeading>
          <MotionSubHeading className="text-sm tracking-normal md:mb-1">
            Public Repositories
          </MotionSubHeading>
        </div>

        <div>
          <MotionSubHeading className="hover:text-foreground font-normal transition-all duration-300">
            <Link href={"https://github.com/Vishesh-21"} target="blank">
              Check Projects <CornerRightUpIcon className="inline" />
            </Link>
          </MotionSubHeading>
        </div>
      </div>
    </section>
  );
}
