import { GetInTouch } from "../components/Modules/Homepage/GetInTouch";
import { IndustrySection } from "../components/Modules/WorkPage/IndustrySection";
import { WorkHero } from "../components/Modules/WorkPage/WorkHero";
import ProjectSection from "../components/Modules/WorkSection/ProjectSection";
import PageWrapper from "./PageWrapper";

export default function WorkPage() {
  return (
    <PageWrapper title="Aleodev: Works & Projects">
      <WorkHero />

      <IndustrySection />

      <ProjectSection />

      <GetInTouch />
    </PageWrapper>
  );
}
