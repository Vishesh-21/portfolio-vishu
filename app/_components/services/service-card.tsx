//service card
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/mouse-glow";
import { AnimatedCard } from "@/components/animated-border";
import { ServicesData } from "./services-data";
import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { GlowBlow } from "@/components/glow-blow";

export function ServiceCard({
  title,
  Icon,
  description,
  index,
}: ServicesData & { index: number }) {
  return (
    <AnimatedCard
      className={`relative px-6 py-8 shadow-md md:py-14 ${
        index === 2 || index === 3 ? "md:col-span-3" : "col-span-2"
      } col-span-2`}
    >
      <Icon className="text-primary relative z-10 mb-4 h-6 w-6" />

      <Heading as="h5" className="mb-2">
        {title}
      </Heading>
      <SubHeading className="text-[0.9rem]">{description}</SubHeading>
    </AnimatedCard>
  );
}
