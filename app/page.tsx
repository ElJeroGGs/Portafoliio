"use client";

import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  CertificationsSection,
  DevOpsSection,
  SocialLinksSection,
  ThemeToggle,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <DevOpsSection />
      <CertificationsSection />
      <SocialLinksSection />
      <Footer />
    </div>
  );
}
