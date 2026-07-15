import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: zh.legalPlaceholder.termsTitle,
};

export default function TermsPage() {
  return <LegalPlaceholder titleKey="termsTitle" />;
}
