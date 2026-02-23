"use client";

import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  CertificationsSection,
  DevOpsSection,
  SocialLinksSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div>
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
