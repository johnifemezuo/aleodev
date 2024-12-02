import { GetInTouch } from "@/Components/Modules/Homepage/GetInTouch";
import ProjectSection from "@/Components/Modules/WorkSection/ProjectSection";
import PageWrapper from "./PageWrapper";
import { WorkHero } from "@/Components/Modules/WorkPage/WorkHero";
import { IndustrySection } from "@/Components/Modules/WorkPage/IndustrySection";

export default function WorkPage() {
  return (
    <PageWrapper>
      <WorkHero />

      <IndustrySection />

      <ProjectSection />

      <GetInTouch />
    </PageWrapper>
  );
}
