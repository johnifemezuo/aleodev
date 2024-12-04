import { ScrollReveal } from "@/Components/Animations/ScrollReveal";
import { Container } from "@/Components/Container/Container";
import Para from "@/Components/Elements/Para";
import SubTitle from "@/Components/Elements/SubTitle";
import Title from "@/Components/Elements/Title";

export const IndustrySection = () => {
  return (
    <div className="py-12 lg:pt-32 px-4 xl:px-0">
      <Container>
        <div className="grid grid-col lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <SubTitle>INDUSTRIES WE`VE SERVED</SubTitle>
            <Title>We are fueled by our clients’  success.</Title>
          </div>

          <ScrollReveal hidden={{ x: 100 }} visible={{ x: 0 }}>
            <div className="grid grid-cols-2  gap-4">
              <Para>Finance</Para>
              <Para>Oil & Gas</Para>
              <Para>Logistics</Para>
              <Para>E-Commerce</Para>
              <Para>Hospitality</Para>
              <Para>Healthcare</Para>
              <Para>Technology</Para>
              <Para>Legal</Para>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};
