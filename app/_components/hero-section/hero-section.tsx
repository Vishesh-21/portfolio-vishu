import { SubHeading } from "@/components/sub-heading";
import Container from "../container";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";
import { Badge, HeroImage } from "./hero-image";

export const HeroSection = () => {
  return (
    <Container className="mt-0 py-10 md:mt-0 md:py-20">
      <div className="flex h-full w-full flex-col-reverse justify-between md:flex-row">
        {/* about div  */}
        <div>
          <MotionSubHeading className="text-xl tracking-normal">
            Hello<span className="text-3xl">👋</span>, I'm
          </MotionSubHeading>
          <MotionHeading as="h2" className="tracking-tighter">
            Vishesh Verma
          </MotionHeading>
          {/* Badge */}
          <Badge />
          {/* about me  */}
          <AboutMe />
        </div>

        {/* image div  */}
        <HeroImage />
      </div>
    </Container>
  );
};

export function AboutMe() {
  return (
    <MotionSubHeading className="text-md tracking-normal md:w-lg font-normal">
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
    </MotionSubHeading>
  );
}

