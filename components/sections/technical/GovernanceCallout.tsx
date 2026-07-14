"use client";

import Link from "next/link";
import { Fingerprint, Lock, KeyRound, FileCheck, Scale, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

const icons = [Fingerprint, Lock, KeyRound, FileCheck, Scale];

export function GovernanceCallout() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-black/5 bg-surface-subtle py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm text-ink-muted">
            {t.technicalPage.governanceIntro}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {t.security.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item.id} className="flex flex-col items-center text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
                    <Icon size={18} />
                  </span>
                  <p className="mt-2 text-xs font-medium text-ink">{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/#security"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-orange"
            >
              {t.technicalPage.governanceCta}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
