"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,border-color] duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/75 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container as="nav" aria-label="Main navigation">
          <div className="flex h-14 items-center justify-between sm:h-16">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label={`${SITE.name} home`}
            >
              <Logo priority />
            </Link>

            {/* Desktop — quiet inline links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link, i) => (
                <span key={link.href} className="flex items-center gap-1">
                  {i > 0 && (
                    <span
                      className="mx-2 text-border-strong select-none"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="px-1 text-[0.8125rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
              <span
                className="mx-3 text-border-strong select-none"
                aria-hidden="true"
              >
                ·
              </span>
              <Link
                href="/contact"
                className="px-1 text-[0.8125rem] font-medium tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                Contact
              </Link>
            </div>

            {/* Mobile — single Menu control */}
            <button
              type="button"
              className="md:hidden text-[0.8125rem] font-medium tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </Container>
      </header>

      {/* Full-screen menu — modern, sparse */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background transition-opacity duration-300 md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <Container className="flex h-14 items-center justify-between sm:h-16">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label={`${SITE.name} home`}
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </Link>
          <button
            type="button"
            className="text-[0.8125rem] font-medium tracking-wide text-foreground"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </Container>

        <nav className="flex flex-col gap-1 px-6 pt-10 sm:px-8">
          {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map(
            (link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </>
  );
}
