import type { Metadata } from "next";
import zh from "@/content/zh.json";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: zh.nav.contact,
  description: zh.contactPage.heroDescription,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
