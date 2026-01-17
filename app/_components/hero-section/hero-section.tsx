import Container from "../container";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";
import { HeroImage } from "./hero-image";

export const HeroSection = () => {
  return (
    <Container className="mt-0 py-10 md:mt-0 md:py-16">
      <div className="flex h-full w-full flex-col-reverse justify-between md:flex-row">
        <div >
          {/* intro  */}
          <Intro />
          {/* about me  */}
          <AboutMe />
        </div>

        {/* image div  */}
        <HeroImage />
      </div>
    </Container>
  );
};

// intro
const Intro = () => (
  <div>
    <MotionSubHeading className="md:mb-1 text-lg tracking-normal">
      Hello<span className="text-3xl">👋</span>, I'm
    </MotionSubHeading>
    <MotionHeading as="h2" className="tracking-tighter">
      Vishesh Verma
    </MotionHeading>
    <MotionHeading as="h5" className="mb-4 font-normal">
      Full-Stack Developer ·{" "}
      <span className="text-muted-foreground">Next.js</span> ·{" "}
      <span className="text-primary">AI-Aware</span>
    </MotionHeading>
  </div>
);

export function AboutMe() {
  return (
    <MotionSubHeading className="text-md text-muted-foreground/70 relative rounded-sm border border-slate-600/50 p-4 font-normal text-justify tracking-normal shadow-sm md:w-lg bg-background/60 overflow-hidden">
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
