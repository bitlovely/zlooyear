import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-medium text-accent">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Go home</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
