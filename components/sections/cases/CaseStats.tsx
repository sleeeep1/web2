"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function CaseStats() {
  const { t } = useTranslation();
  const cp = t.casesPage;

  return (
    <section className="bg-white py-20">
      <Container>
        {/* TODO: 替换为真实数据,数据来源需项目团队确认 */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
              {cp.statsTitle}
            </h2>
            <Badge tone="neutral">{cp.statsBadge}</Badge>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {cp.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-black/5 bg-surface-subtle p-6"
              >
                <p className="font-heading text-2xl font-bold text-brand-orange">{stat.value}</p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
