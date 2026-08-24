import Image from "next/image";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo-mark.png?v=5"
        alt=""
        width={48}
        height={40}
        className="h-9 w-auto object-contain sm:h-10"
        priority={priority}
      />
      <span className="text-[0.95rem] font-bold tracking-[0.04em] text-foreground sm:text-lg">
        ZLOOYEAR
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
