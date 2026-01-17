import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(" md:mt-24 mt-16", className)}>{children}</div>;
};

export default Container;
