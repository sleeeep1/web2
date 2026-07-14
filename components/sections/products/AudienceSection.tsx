"use client";

import { motion } from "framer-motion";
import { School, Landmark, Building2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const icons = [School, Landmark, Building2];

export function AudienceSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center font-heading text-2xl font-semibold text-ink sm:text-3xl">
          {t.productsPage.audienceTitle}
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {t.productsPage.audiences.map((audience, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{audience.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
