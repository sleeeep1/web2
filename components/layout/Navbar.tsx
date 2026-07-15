"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

const navRoutes = [
  { key: "products", href: "/products" },
  { key: "technical", href: "/technical" },
  { key: "features", href: "/features" },
  { key: "cases", href: "/cases" },
  { key: "news", href: "/news" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
          aria-label={t.meta.siteName}
        >
          <Logo size={32} />
          <span className="hidden font-heading text-base font-semibold text-ink sm:inline" aria-hidden="true">
            {t.meta.siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navRoutes.map((route) => (
            <Link
              key={route.key}
              href={route.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                pathname === route.href ? "text-brand-blue" : "text-ink"
              )}
            >
              {t.nav[route.key]}
            </Link>
          ))}
          <Link
            href="/solutions"
            className={clsx(
              "text-sm font-medium transition-colors hover:text-brand-orange-deep",
              pathname === "/solutions" ? "text-brand-orange-deep" : "text-ink"
            )}
          >
            {t.nav.solutions}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button href="/contact" size="md">
            {t.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navRoutes.map((route) => (
              <Link
                key={route.key}
                href={route.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === route.href
                    ? "bg-brand-blue/8 text-brand-blue"
                    : "text-ink"
                )}
              >
                {t.nav[route.key]}
              </Link>
            ))}
            <Link
              href="/solutions"
              onClick={() => setOpen(false)}
              className={clsx(
                "rounded-lg px-3 py-2.5 text-sm font-medium",
                pathname === "/solutions"
                  ? "bg-brand-orange/10 text-brand-orange-deep"
                  : "text-ink"
              )}
            >
              {t.nav.solutions}
            </Link>
            <div className="mt-3 flex items-center gap-3 px-3">
              <LanguageToggle />
              <Button href="/contact" size="md" className="flex-1">
                {t.nav.cta}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
