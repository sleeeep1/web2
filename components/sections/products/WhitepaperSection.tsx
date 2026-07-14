"use client";

import { FileText } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function WhitepaperSection() {
  const { t } = useTranslation();
  const pp = t.productsPage;

  return (
    <section className="bg-white py-20">
      <Container>
        {/* TODO: 替换为真实下载链接;是否需要注册/留资才能下载待项目团队确认 */}
        <Card className="mx-auto flex max-w-3xl flex-col items-center gap-5 p-10 text-center sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
            <FileText size={26} />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-ink">
              {pp.whitepaperTitle}
            </h3>
            <p className="mt-1.5 text-sm text-ink-muted">{pp.whitepaperDescription}</p>
          </div>
          <a
            href="#"
            className="inline-flex flex-none items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0060c2]"
          >
            {pp.whitepaperCta}
          </a>
        </Card>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-ink-muted sm:text-left">
          {t.common.placeholderNotice}
        </p>
      </Container>
    </section>
  );
}
