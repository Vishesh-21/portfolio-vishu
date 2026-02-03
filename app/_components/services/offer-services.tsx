"use client";

import { servicesData } from "./services-data";
import { motion } from "motion/react";
import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { ServiceCard } from "./service-card";

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
      className="col-span-2 px-6 py-6 md:col-span-3 md:py-14"
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


