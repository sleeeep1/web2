"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ComparisonCard } from "@/components/ui/ComparisonCard";

export function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow={t.comparison.eyebrow}
          title={t.comparison.title}
          description={t.comparison.description}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <ComparisonCard
              title={t.comparison.traditionalTitle}
              items={t.comparison.traditionalItems}
              tone="muted"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <ComparisonCard
              title={t.comparison.breakthroughTitle}
              items={t.comparison.breakthroughItems}
              tone="brand"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
