"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { PricingCard } from "@/components/ui/PricingCard";

export function PricingGrid() {
  const { pricing } = useTranslation();

  return (
    <section className="bg-surface-subtle py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:items-start">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard
                name={plan.name}
                audience={plan.audience}
                tagline={plan.tagline}
                price={plan.price}
                priceUnit={plan.priceUnit}
                priceNote={plan.priceNote}
                badge={plan.badge}
                highlight={plan.highlight}
                features={plan.features}
                cta={plan.cta}
                ctaHref="/contact"
              />
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-muted">
          {pricing.disclaimer}
        </p>
      </Container>
    </section>
  );
}
