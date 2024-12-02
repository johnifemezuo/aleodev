import { GetInTouch } from "@/Components/Modules/Homepage/GetInTouch";
import { HeroSection } from "@/Components/Modules/Homepage/HeroSection";
import { HomeAbout } from "@/Components/Modules/Homepage/HomeAbout";
import { QualitySection } from "@/Components/Modules/Homepage/QualitySection";
import { TestimonialSection } from "@/Components/Modules/Homepage/TestimonialSection";
import { WhyWorkWIthUs } from "@/Components/Modules/Homepage/WhyWorkWIthUs";
import { WorkWithUs } from "@/Components/Modules/Homepage/WorkWithUs";
import ProjectSection from "@/Components/Modules/WorkSection/ProjectSection";
import PageWrapper from "./PageWrapper";

export default function Home() {
  return (
    <PageWrapper title="Aleodev: Web Agency for all your need">

      <main>
        <HeroSection />

        <HomeAbout />

        <QualitySection />

        <ProjectSection />

        <TestimonialSection />

        <WorkWithUs />

        <WhyWorkWIthUs />

        <GetInTouch />
      </main>
    </PageWrapper>
  )
}
