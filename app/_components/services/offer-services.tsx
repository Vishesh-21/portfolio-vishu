"use client";

import { servicesData } from "./services-data";
import { motion } from "motion/react";
import { ServiceCard } from "./service-card";
import { globalMotionVariants, globalViewPort } from "@/lib/animate-motion";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";

const OfferServices = () => {
  return (
    <>
      <motion.div
        className="grid w-full gap-2 sm:grid-cols-1 md:grid-cols-5"
        variants={globalMotionVariants}
        viewport={globalViewPort}
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
    <motion.div className="col-span-2 px-6 py-6 md:col-span-3 md:py-14">
      <MotionHeading as="h4" className="text-lg leading-7 font-medium">
        Need more info?
      </MotionHeading>
      <MotionHeading as="h4" className="text-primary mb-4 text-3xl font-medium">
        I got you
      </MotionHeading>
      <MotionSubHeading>
        Here are some of the services I offer. If you have any questions, feel
        free to reach out.
      </MotionSubHeading>
    </motion.div>
  );
}
