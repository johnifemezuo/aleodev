import { GetInTouch } from "../components/Modules/Homepage/GetInTouch";
import { WhyWorkWIthUs } from "../components/Modules/Homepage/WhyWorkWIthUs";
import AllServicesSection from "../components/Modules/ServicePage/AllServicesSection";
import { OurPhilosophy } from "../components/Modules/ServicePage/OurPhilosophy";
import { ServiceHero } from "../components/Modules/ServicePage/ServiceHero";
import { ServiceSample } from "../components/Modules/ServicePage/ServiceSample";
import PageWrapper from "./PageWrapper";

export default function ServicesPage() {
  return (
    <PageWrapper title="Aleodev: Our Services">
      <ServiceHero />

      <AllServicesSection />

      <WhyWorkWIthUs />

      <ServiceSample />

      <OurPhilosophy />

      <GetInTouch />
    </PageWrapper>
  );
}
