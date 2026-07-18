"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/business";
import CallButton from "@/components/CallButton";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const getNavLinkClassName = (active) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition after:absolute after:left-[15%] after:right-[15%] after:bottom-1 after:h-[2px] after:rounded-full after:bg-primary after:transition-all after:duration-200 ${
      active
        ? "text-primary after:opacity-100"
        : "text-body hover:bg-muted hover:text-foreground after:opacity-0 hover:after:opacity-70"
    }`;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link href="/" className="min-w-0 shrink">
          <Image
            src="/logo.png"
            alt="Sri Kamatchi Electronics & Furnitures"
            width={260}
            height={72}
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={getNavLinkClassName(active)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton
            label="Call"
            className="hidden sm:inline-flex"
          />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition hover:bg-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface animate-fade-in lg:hidden"
        >
          <nav
            className="container mx-auto flex flex-col gap-1 px-4 py-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 sm:hidden">
              <CallButton className="w-full" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
