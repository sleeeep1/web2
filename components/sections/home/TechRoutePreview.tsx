"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Compass, Activity, TrendingUp, Brain, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlowNode } from "@/components/ui/FlowNode";
import { Badge } from "@/components/ui/Badge";

const nodeIcons = [Compass, Activity, TrendingUp, Brain, Sparkles];

export function TechRoutePreview() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const nodes = t.techRoute.nodes;

  return (
    <section className="bg-surface-subtle py-24">
      <Container>
        <SectionHeading
          eyebrow={t.techRoute.eyebrow}
          title={t.techRoute.title}
          description={t.techRoute.description}
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {nodes.map((node, index) => {
            const Icon = nodeIcons[index];
            return (
              <div key={node.id} className="relative flex items-center gap-4 lg:block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1"
                >
                  <FlowNode
                    index={index + 1}
                    icon={<Icon size={18} />}
                    accent={index % 2 === 0 ? "orange" : "blue"}
                    title={node.title}
                    short={node.short}
                  />
                </motion.div>
                {index < nodes.length - 1 && (
                  <ArrowRight
                    className="hidden flex-none text-brand-blue/30 lg:absolute lg:right-[-18px] lg:top-1/2 lg:block lg:-translate-y-1/2"
                    size={16}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-6xl">
          <div className="absolute inset-x-0 top-1/2 h-px bg-brand-blue/20" />
          <div className="relative mx-auto w-fit rounded-full border border-brand-blue/20 bg-white px-4 py-1.5 text-xs font-medium text-brand-blue">
            ↺ {t.techRoute.feedbackLabel}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-muted">
          {t.techRoute.governanceNote}
        </p>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-orange-deep"
          >
            {expanded ? t.techRoute.collapseLabel : t.techRoute.expandLabel}
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-6 rounded-2xl border border-black/5 bg-white p-8 text-left">
                  {nodes.map((node, index) => (
                    <div key={node.id}>
                      <h4 className="font-heading text-sm font-semibold text-brand-blue">
                        {index + 1}. {node.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {node.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
            {t.techRoute.tagCloudLabel}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {t.techRoute.tags.map((tag) => (
              <Badge key={tag} tone="neutral">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-muted">{t.techRoute.academicSupport}</p>
        </div>
      </Container>
    </section>
  );
}
