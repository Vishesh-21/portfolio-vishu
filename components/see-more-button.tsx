import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SeeMoreButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void; // ✅ optional
};

export const SeeMoreButton = ({
  className,
  children,
  onClick,
}: SeeMoreButtonProps) => {
  return (
    <Button
      variant={"ghost"}
      onClick={onClick}
      className={cn(
        "dark:hover:bg-background group hover:bg-background text-muted-foreground relative mx-auto mt-4 w-28 cursor-pointer overflow-hidden transition-all duration-300",
        className,
      )}
    >
      {children}
      <ChevronDown className="absolute right-0 h-5 w-5 -translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
      <ChevronDown className="absolute right-0 h-5 w-5 translate-y-0 transition-all duration-500 group-hover:translate-y-6 group-hover:opacity-0" />
    </Button>
  );
};
