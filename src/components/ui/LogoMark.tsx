import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function LogoMark({ className, size = 32, priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      width={size}
      height={size}
      className={cn("h-8 w-8 object-contain", className)}
      priority={priority}
    />
  );
}
