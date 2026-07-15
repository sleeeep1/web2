"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-blue py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white">
            {t.contactCta.eyebrow}
          </span>
          <h2 className="mt-5 font-heading text-3xl font-semibold text-white sm:text-4xl">
            {t.contactCta.title}
          </h2>
          <p className="mt-4 text-base text-white">{t.contactCta.description}</p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-orange-deep px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#9a4415]"
          >
            {t.contactCta.cta}
          </Link>

          <div className="mt-6 flex flex-col items-center gap-1 text-sm text-white sm:flex-row sm:justify-center sm:gap-6">
            <span>{t.contactCta.emailPlaceholder}</span>
            <span>{t.contactCta.phonePlaceholder}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
