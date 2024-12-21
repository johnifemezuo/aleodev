import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import SubTitle from "../../Elements/SubTitle";
import Title from "../../Elements/Title";
import { ProjectCard } from "../../Modules/WorkSection/ProjectCard";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="py-20 lg:py-44 px-4 lg:px-0 relative">
      <ScrollReveal hidden={{ x: -300 }} duration={2} visible={{ x: 0 }}>
        <h1 className="lg:text-[150px] text-7xl mx-auto lg:w-auto w-[250px] xl:text-[220px] z-0   font-semibold text-[#E4E4E4] text-center">
          OUR WORK
        </h1>
      </ScrollReveal>

      <Container>
        <div className="space-y-6 lg:space-y-20 relative">
          <ScrollReveal hidden={{ y: -100 }} visible={{ x: 0 }}>
            <div className="text-center lg:w-[600px]  mx-auto space-y-4 lg:space-y-5">
              <SubTitle>selected works</SubTitle>
              <Title>
                Seeing our clients <span className="text-primary">win </span>is
                what gets us excited.
              </Title>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 lg:mt-20">
              <ProjectCard
                title="Farmsmart : New Generation Ai Powered system"
                link="/"
                image="/images/fmt.png"
              />
              <ProjectCard
                title="Revolutionizing Online Notarization Services with Secure, ."
                link="/"
                image="/images/ser-2.png"
              />
           
            </div>
          </ScrollReveal>

          <div className="w-full text-center">
            <Link
              href="/work"
              className="text-base lg:text-xl underline transition hover:text-primary mt-12"
            >
              See more of our work
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectSection;
