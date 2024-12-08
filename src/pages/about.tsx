import { AboutHero } from "../components/Modules/AboutPage/AboutHero";
import { AboutSection } from "../components/Modules/AboutPage/AboutSection";
import HowWeStarted from "../components/Modules/AboutPage/HowWeStarted";
import TeamSection from "../components/Modules/AboutPage/MeetTheTeam";
import { GetInTouch } from "../components/Modules/Homepage/GetInTouch";
import { TestimonialSection } from "../components/Modules/Homepage/TestimonialSection";
import PageWrapper from "./PageWrapper";

export default function AboutUs() {
  return (
    <PageWrapper title="Aleodev: About Aleodev">
      <AboutHero />

      <AboutSection />

      <TeamSection />

      <HowWeStarted />

      <TestimonialSection />

      <GetInTouch />
    </PageWrapper>
  );
}
