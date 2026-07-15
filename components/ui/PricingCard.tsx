import { Check } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";

export function PricingCard({
  name,
  audience,
  tagline,
  price,
  priceUnit,
  priceNote,
  badge,
  highlight,
  features,
  cta,
  ctaHref,
}: {
  name: string;
  audience: string;
  tagline: string;
  price: string;
  priceUnit: string;
  priceNote: string;
  badge: string;
  highlight: boolean;
  features: readonly string[];
  cta: string;
  ctaHref: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col rounded-2xl border p-8",
        highlight
          ? "border-brand-blue bg-white shadow-lg shadow-brand-blue/10 lg:-translate-y-2"
          : "border-black/5 bg-white"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-3 py-1 text-xs font-medium text-white">
          {badge}
        </span>
      )}
      <h3 className="font-heading text-lg font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{audience}</p>
      <p className="mt-3 text-sm text-ink-muted">{tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-3xl font-bold text-ink">{price}</span>
        {priceUnit && <span className="text-sm text-ink-muted">{priceUnit}</span>}
      </div>
      {priceNote && <p className="mt-1 text-xs text-ink-muted">{priceNote}</p>}

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink">
            <Check
              size={15}
              className={clsx("mt-0.5 flex-none", highlight ? "text-brand-blue" : "text-brand-orange")}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        variant={highlight ? "primary" : "secondary"}
        className="mt-8 w-full justify-center"
      >
        {cta}
      </Button>
    </div>
  );
}
