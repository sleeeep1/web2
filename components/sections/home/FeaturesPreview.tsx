"use client";

import { motion } from "framer-motion";
import { Target, Activity, Hexagon, Brain, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/Button";

// TODO: 替换为真实产品录屏视频,朱琪负责制作;当前每张卡片图标为轻量动效插画占位
const featureIcons = [Target, Activity, Hexagon, Brain, Sparkles];

export function FeaturesPreview() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          description={t.features.description}
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <FeatureCard
                  index={index + 1}
                  icon={<Icon size={24} />}
                  title={item.title}
                  description={item.description}
                  accent={index % 2 === 0 ? "blue" : "orange"}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/features" variant="secondary">
            {t.features.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
