import { AboutHero } from "@/Components/Modules/AboutPage/AboutHero";
import PageWrapper from "./PageWrapper";
import { AboutSection } from "@/Components/Modules/AboutPage/AboutSection";
import TeamSection from "@/Components/Modules/AboutPage/MeetTheTeam";
import HowWeStarted from "@/Components/Modules/AboutPage/HowWeStarted";
import { TestimonialSection } from "@/Components/Modules/Homepage/TestimonialSection";
import { GetInTouch } from "@/Components/Modules/Homepage/GetInTouch";



export default function AboutUs() {
  return (
    <PageWrapper>
      
    <AboutHero />

    <AboutSection />

    <TeamSection />

    <HowWeStarted />

    <TestimonialSection />

    <GetInTouch />

    </PageWrapper>

  );
}
