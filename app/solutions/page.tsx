import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { PricingGrid } from "@/components/sections/solutions/PricingGrid";
import { FaqSection } from "@/components/sections/solutions/FaqSection";

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <PricingGrid />
      <FaqSection />
    </>
  );
}
