import Container from "../container";
import OfferServices from "./offer-services";
import { MotionHeading } from "@/components/motion-heading";

const ServicesPage = () => {
  return (
    <Container>
      <MotionHeading as="h2" className="md:mb-5" >Services</MotionHeading>
      <OfferServices />
    </Container>
  );
};

export default ServicesPage;
