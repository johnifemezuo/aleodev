import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import Para from "../../Elements/Para";
import SubTitle from "../../Elements/SubTitle";
import Title from "../../Elements/Title";
import Image from "next/image";

export const ServiceSample = () => {
  return (
    <div className="bg-[#f3f2f1] py-12 lg:py-28 px-4 xl:px-0">
      <Container>
        <div className="grid  lg:gap-12 md:flex justify-between items-center space-y-5">
          <ScrollReveal hidden={{ x: 100 }} delay={0.6} visible={{ x: 0 }}>
            <div className="space-y-4 lg:w-[700px] lg:space-y-6">
              <SubTitle>PROJECTS</SubTitle>
              <Title>
                {" "}
                <span className="text-primary">We are proud </span> of our work.
                Check them out.
              </Title>
              <Para>
                Aleodev remain the best at delivering web design and mobile app
                development services. We have helped a lot of local and
                international businesses to establish a stunning online
                presence, through our services
              </Para>
            </div>
          </ScrollReveal>

          <div className="relative  w-full">
            <ScrollReveal hidden={{ y: 100 }} delay={0.6} visible={{ y: 0 }}>
              <Image
                alt=""
                src="/images/service-sample.png"
                width={800}
                height={600}
                className="w-full h-[300px] object-cover lg:w-full  mx-auto "
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
};
