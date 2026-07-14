import { Hero } from "@/components/sections/home/Hero";
import { ComparisonSection } from "@/components/sections/home/ComparisonSection";
import { TechRoutePreview } from "@/components/sections/home/TechRoutePreview";
import { FeaturesPreview } from "@/components/sections/home/FeaturesPreview";
import { CasesPreview } from "@/components/sections/home/CasesPreview";
import { SecurityEthics } from "@/components/sections/home/SecurityEthics";
import { NewsPreview } from "@/components/sections/home/NewsPreview";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { ContactCta } from "@/components/sections/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ComparisonSection />
      <TechRoutePreview />
      <FeaturesPreview />
      <CasesPreview />
      <SecurityEthics />
      <NewsPreview />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
