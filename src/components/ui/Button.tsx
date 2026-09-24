import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  size?: "default" | "sm" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm focus-visible:ring-accent/40",
  secondary:
    "border border-border bg-muted/40 text-foreground hover:bg-muted hover:border-border-strong focus-visible:ring-foreground/20",
  ghost:
    "text-foreground hover:bg-muted focus-visible:ring-foreground/20",
  onDark:
    "border border-border bg-transparent text-foreground hover:bg-muted hover:border-border-strong focus-visible:ring-accent/40",
};

const sizes = {
  default: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
