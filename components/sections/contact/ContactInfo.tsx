"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";

export function ContactInfo() {
  const { t } = useTranslation();
  const cp = t.contactPage;

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="font-heading text-base font-semibold text-ink">{cp.contactInfoTitle}</h3>
        <div className="mt-4 space-y-3 text-sm text-ink-muted">
          <div className="flex items-center gap-2">
            <Mail size={16} className="flex-none text-brand-blue" />
            <span>
              {cp.emailLabel}:{cp.emailValue}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="flex-none text-brand-blue" />
            <span>
              {cp.phoneLabel}:{cp.phoneValue}
            </span>
          </div>
        </div>
      </Card>

      <Card className="border-brand-orange/20 bg-brand-orange/5">
        <p className="text-sm text-ink-muted">{cp.noPricingNote}</p>
        <Link
          href="/solutions"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-orange"
        >
          {cp.noPricingCta} →
        </Link>
      </Card>
    </div>
  );
}
