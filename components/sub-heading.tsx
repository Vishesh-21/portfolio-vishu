import { cn } from "@/lib/utils";

//sub heading
export function SubHeading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm tracking-wide select-none",
        className,
      )}
    >
      {children}
    </p>
  );
}