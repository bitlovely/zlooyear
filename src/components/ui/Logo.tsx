import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="text-[0.95rem] font-bold tracking-[0.04em] text-foreground sm:text-lg">
        ZLOOYEAR
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
