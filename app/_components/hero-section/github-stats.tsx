import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { getPublicRepoCount } from "@/lib/github";
import { CornerRightUpIcon } from "lucide-react";
import Link from "next/link";

const experience = "+1"

export default async function GitHubStats() {
  const repoCount = await getPublicRepoCount();

  return (
    <section className="px-4 md:mt-22 mt-6">
      <div className="flex items-center gap-10">
        {/* Years of experience  */}
        <div>
          <MotionHeading as="h1" className="tracking-tighter">
            {experience}
          </MotionHeading>
          <MotionSubHeading className="text-sm tracking-normal md:mb-1">
            Years of Experience
          </MotionSubHeading>
        </div>

        {/* Repositories  */}
        <div>
          <MotionHeading as="h1" className="tracking-tighter">
            {repoCount}+
          </MotionHeading>
          <MotionSubHeading className="text-sm tracking-normal md:mb-1">
            Public Repositories
          </MotionSubHeading>
        </div>

        <div>
          <MotionSubHeading className="hover:text-foreground font-semibold transition-all duration-3ll">
            <Link href={"https://github.com/Vishesh-21"} target="blank" >
              Check More Projects <CornerRightUpIcon className="inline"/>
            </Link>
          </MotionSubHeading>
        </div>
      </div>
    </section>
  );
}
