import { ServiceHero } from "@/Components/Modules/ServicePage/ServiceHero";
import PageWrapper from "./PageWrapper";
import AllServicesSection from "@/Components/Modules/ServicePage/AllServicesSection";
import { WhyWorkWIthUs } from "@/Components/Modules/Homepage/WhyWorkWIthUs";
import { ServiceSample } from "@/Components/Modules/ServicePage/ServiceSample";
import { GetInTouch } from "@/Components/Modules/Homepage/GetInTouch";
import { OurPhilosophy } from "@/Components/Modules/ServicePage/OurPhilosophy";


export default function ServicesPage() {
  return (
    <PageWrapper
    >
      <ServiceHero />

      <AllServicesSection />

      <WhyWorkWIthUs />

      <ServiceSample />

      <OurPhilosophy />

      <GetInTouch />
    </PageWrapper>
  );
}
