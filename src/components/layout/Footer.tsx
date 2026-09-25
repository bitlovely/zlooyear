import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`${SITE.name} home`}
            >
              <Image
                src="/brand/logo-footer.png?v=4"
                alt={SITE.name}
                width={160}
                height={154}
                className="h-auto w-[7.5rem] object-contain sm:w-[9rem]"
              />
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 block text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {SITE.email}
            </a>
          </div>

          <div className="flex items-center gap-2" aria-label="Social links">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; 2026 {SITE.name}
        </p>
      </Container>
    </footer>
  );
}
