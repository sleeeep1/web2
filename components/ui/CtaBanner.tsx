import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-brand-blue py-16">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
          {description && <p className="text-white/80">{description}</p>}
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#e6672a]"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
