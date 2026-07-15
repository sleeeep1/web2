"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

export function SecurityReaffirm() {
  const { t } = useTranslation();
  const ap = t.aboutPage;

  return (
    <section className="bg-surface-subtle py-20">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-brand-blue/20 bg-white p-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <ShieldCheck size={22} />
          </span>
          <h2 className="font-heading text-xl font-semibold text-ink">{ap.securityTitle}</h2>
          <p className="text-sm leading-relaxed text-ink-muted">{ap.securityText}</p>
          <Link
            href="/#security"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-orange"
          >
            {ap.securityCta}
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
