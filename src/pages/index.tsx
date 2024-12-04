import { GetInTouch } from "@/components/Modules/Homepage/GetInTouch";
import { HeroSection } from "@/components/Modules/Homepage/HeroSection";
import { HomeAbout } from "@/components/Modules/Homepage/HomeAbout";
import { QualitySection } from "@/components/Modules/Homepage/QualitySection";
import { WhyWorkWIthUs } from "@/components/Modules/Homepage/WhyWorkWIthUs";
import { WorkWithUs } from "@/components/Modules/Homepage/WorkWithUs";
import ProjectSection from "@/components/Modules/WorkSection/ProjectSection";
import PageWrapper from "./PageWrapper";

export default function Home() {
  return (
    <PageWrapper title="Aleodev: Web Agency for all your need">
      <main>
        <HeroSection />

        <HomeAbout />

        <QualitySection />

        <ProjectSection />

        {/* <TestimonialSection /> */}

        <WorkWithUs />

        <WhyWorkWIthUs />

        <GetInTouch />
      </main>
    </PageWrapper>
  );
}
