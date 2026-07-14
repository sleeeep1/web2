import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HeroBackground } from "@/components/ui/HeroBackground";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-surface-subtle py-20">
      <HeroBackground />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-5 font-heading text-4xl font-semibold text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base text-ink-muted sm:text-lg">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
