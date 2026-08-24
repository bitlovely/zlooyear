import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function LogoMark({ className, size = 40, priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/brand/logo-mark.png?v=5"
      alt=""
      width={size}
      height={Math.round(size * 0.82)}
      className={cn("h-10 w-auto object-contain", className)}
      priority={priority}
    />
  );
}
