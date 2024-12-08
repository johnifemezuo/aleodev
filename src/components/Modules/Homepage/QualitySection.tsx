import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import Para from "../../Elements/Para";
import SubTitle from "../../Elements/SubTitle";
import Title from "../../Elements/Title";
import Image from "next/image";

export const QualitySection = () => {
  return (
    <div className="bg-white py-12 lg:py-28 px-4 lg:px-0 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2   lg:space-x-8">
          <ScrollReveal hidden={{ x: 100 }} visible={{ x: 0 }}>
            <div className="space-y-5 lg:space-y-7 ">
              <SubTitle>quality first approach</SubTitle>

              <Title>
                Get A Visually Stunning Website That
                <span className="text-primary">Converts Visitors </span> into
                Customers
              </Title>

              <Para>
                Aleodev remain the best at delivering web design and mobile app
                development services. We have helped a lot of local and
                international businesses to establish a stunning online
                presence, through our services
              </Para>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ x: -100 }} visible={{ x: 0 }}>
            <div className="relative w-full  mt-8 lg:mt-0">
              <Image
                width={800}
                height={700}
                src="/images/mock1.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};
