import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionBackdropProps = {
  src: string;
  alt?: string;
  /** Soft light wash so copy stays readable on light theme */
  intensity?: "soft" | "strong";
  className?: string;
  priority?: boolean;
};

export function SectionBackdrop({
  src,
  alt = "",
  intensity = "soft",
  className,
  priority = false,
}: SectionBackdropProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className={cn(
          "absolute inset-0",
          intensity === "strong"
            ? "bg-background/88"
            : "bg-background/78",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/55" />
    </div>
  );
}

type SectionPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Edge-to-edge photo column for split layouts */
export function SectionPhoto({
  src,
  alt,
  className,
  priority = false,
}: SectionPhotoProps) {
  return (
    <div
      className={cn(
        "relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:min-h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(min-width: 1024px) 46vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/40 lg:to-transparent" />
    </div>
  );
}
