import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-border-strong hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className,
      )}
    >
      <span className="text-sm font-medium text-accent">{service.number}</span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
        {service.description}
      </p>
      <ul className="mt-6 flex-1 space-y-2">
        {service.capabilities.slice(0, 4).map((cap) => (
          <li
            key={cap}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {cap}
          </li>
        ))}
      </ul>
      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
