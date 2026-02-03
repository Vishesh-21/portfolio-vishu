//service card
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/mouse-glow";
import { AnimatedCard } from "@/components/animated-border";
import { ServicesData } from "./services-data";
import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";

export function ServiceCard({
  title,
  Icon,
  description,
  index,
}: ServicesData & { index: number }) {
  const { x, y, handleMouseMove } = useMouseGlow();

  return (
    <AnimatedCard
      onMouseMove={handleMouseMove}
      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.2,
          delay: index * 0.05,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className={`md:py-14 py-8 px-6 shadow-md ${
        index === 2 || index === 3 ? "md:col-span-3" : "col-span-2"
      } col-span-2`}
    >
      <Icon className="text-primary relative z-10 mb-4 h-6 w-6" />

      <Heading as="h5" className="mb-2">
        {title}
      </Heading>
      <SubHeading className="text-[0.9rem]">{description}</SubHeading>

      <MouseGlow x={x} y={y} />
    </AnimatedCard>
  );
}