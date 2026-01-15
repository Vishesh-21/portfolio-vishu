"use client";

import { cn } from "@/lib/utils";
import { ServicesData, servicesData } from "./services-data";
import { motion, useMotionValue, useSpring } from "motion/react";
import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { GlowLine } from "@/components/glow-line";

const OfferServices = () => {
  return (
    <>
      <motion.div
        className="grid w-full gap-2 sm:grid-cols-1 md:grid-cols-5"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <ServicesIntro />
        {servicesData.map((service, index) => (
          <ServiceCard key={`service-${index}`} {...service} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default OfferServices;

//ServicesIntro card
function ServicesIntro() {
  return (
    <motion.div
      className="col-span-2 px-6 md:py-14 py-6 md:col-span-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {[
        <Heading as="h4" className="leading-7 font-medium">
          Need more info?
        </Heading>,
        <Heading as="h4" className="text-primary mb-4 text-3xl font-medium">
          I got you
        </Heading>,
        <SubHeading>
          Here are some of the services I offer. If you have any questions, feel
          free to reach out.
        </SubHeading>,
      ].map((content, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              y: 24,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {content}
        </motion.div>
      ))}
    </motion.div>
  );
}

//service card
function ServiceCard({
  title,
  Icon,
  description,
  index,
}: ServicesData & { index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the movement
  const x = useSpring(mouseX, { stiffness: 120, damping: 35 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 35 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.8, filter: "blur(8px)" }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.2,
          delay: index * 0.13,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`bg-background/60 relative w-full overflow-hidden rounded-xl border border-slate-600/50 p-14 px-6 shadow-lg dark:shadow-sm ${
        index === 2 || index === 3 ? "md:col-span-3" : "col-span-2"
      } col-span-2`}
    >
      <Icon className="text-primary relative z-10 mb-4 h-6 w-6" />

      <Heading as="h5" className="mb-2">
        {title}
      </Heading>
      <SubHeading>{description}</SubHeading>

      {/* Glow lines */}
      <GlowLine className="top-10 left-0 h-1/2 w-px bg-linear-to-b" />
      <GlowLine className="right-10 bottom-0" />

      {/* Hover background (FOLLOW MOUSE) */}
      <HoverBackGround x={x} y={y} />
    </motion.div>
  );
}



function HoverBackGround({
  x,
  y,
  className,
}: {
  x: any;
  y: any;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0, scale: 0.8 }}
      whileHover={{ opacity: 0.3, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      style={{
        x,
        y,
      }}
      className={cn(
        "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tl from-orange-600/70 to-green-500/70 blur-3xl dark:from-blue-300 dark:via-orange-200/50 dark:to-green-300",
        className,
      )}
    />
  );
}
