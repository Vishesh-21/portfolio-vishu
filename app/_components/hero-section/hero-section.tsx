import Container from "../../../components/container";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";
import { HeroImage } from "./hero-image";
import GitHubStats from "./github-stats";

export const HeroSection = () => {
  return (
    <Container className="pt-24 mt-0 relative md:mt-0 md:py-16">
      <div className="flex h-full w-full flex-col-reverse justify-between md:flex-row">
        <div className="md:mt-0 mt-4">
          {/* intro  */}
          <Intro />
          {/* about me  */}
          <AboutMe />
        </div>

        {/* image div  */}
        <HeroImage />
      </div>

      <GitHubStats />
    </Container>
  );
};

// intro
const Intro = () => (
  <div>
    <MotionSubHeading className="text-lg tracking-normal md:mb-1">
      Hello<span className="text-3xl">👋</span>, I'm
    </MotionSubHeading>
    <MotionHeading as="h2" className="tracking-tighter">
      Vishesh Verma
    </MotionHeading>
    <MotionHeading as="h5" className="mb-4 font-normal text-muted-foreground text-shadow-none">
      Full-Stack Developer & AI Enthusiast
    </MotionHeading>
  </div>
);

export function AboutMe() {
  return (
    <MotionSubHeading className="">
      <AboutContent />
    </MotionSubHeading>
  );
}

export const AboutContent = () => (
  <>
    I’m a full-stack developer specializing in modern web technologies like{" "}
    <span className="bg-slate-500 px-2 py-1 text-white">Next.js, React</span>{" "}
    and <span className="bg-slate-500 px-2 py-1 text-white">Node.js</span>. I
    focus on building{" "}
    <span className="text-primary font-semibold">performant</span>,{" "}
    <span className="text-primary font-semibold">scalable</span> applications
    with clean UI, solid architecture, and a{" "}
    <span className="text-primary font-semibold">
      strong attention to detail
    </span>
    .
  </>
);
