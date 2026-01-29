import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Container className="text-muted-foreground flex flex-col items-center justify-center px-6 py-14 md:px-0 md:py-0">
      <h1 className="text-9xl font-bold tracking-tighter">404</h1>
      <h2 className="font-md text-2xl leading-0">Page Not Found</h2>
      <p className="mt-8 text-center text-sm">
        The page you are looking for does not exist or other error occurred.
      </p>
      <p className="text-center text-sm">
        <Link href="/" className="text-primary">
          Go Back
        </Link>
        , or head over for{" "}
        <Link href={"/projects"} className="text-primary">
          Projects
        </Link>{" "}
        to choose a new direction.
      </p>
    </Container>
  );
};

export default PageNotFound;
