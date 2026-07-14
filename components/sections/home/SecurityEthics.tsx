"use client";

import { motion } from "framer-motion";
import { Fingerprint, Lock, KeyRound, FileCheck, Scale } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Fingerprint, Lock, KeyRound, FileCheck, Scale];

export function SecurityEthics() {
  const { t } = useTranslation();

  return (
    <section id="security" className="border-t-4 border-brand-blue bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow={t.security.eyebrow}
          title={t.security.title}
          description={t.security.description}
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.security.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-black/5 bg-surface-subtle p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
