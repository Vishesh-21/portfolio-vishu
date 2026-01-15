import OfferServices from "./offer-services";
import { cn } from "@/lib/utils";
import { MotionHeading } from "@/components/motion-heading";

const ServicesPage = ({ className }: { className?: string }) => {
  return (
    <div className={cn("min-h-screen", className)}>
      <MotionHeading as="h2">Services</MotionHeading>
      <OfferServices />
    </div>
  );
};

export default ServicesPage;
