import Image from "next/image";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/brand/logo-mark.png?v=11"
        alt=""
        width={28}
        height={33}
        className="h-7 w-auto object-contain"
        priority={priority}
      />
      <span className="text-[0.8125rem] font-semibold tracking-[0.12em] text-foreground uppercase">
        Zlooyear
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
