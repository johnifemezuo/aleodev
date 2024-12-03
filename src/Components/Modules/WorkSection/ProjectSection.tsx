import { Container } from "@/Components/Container/Container";
import SubTitle from "@/Components/Elements/SubTitle";
import Title from "@/Components/Elements/Title";
import { ProjectCard } from "@/Components/Modules/WorkSection/ProjectCard";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="py-20 lg:py-44 px-4 lg:px-0 relative">
      <h1 className="lg:text-[150px] text-7xl mx-auto lg:w-auto w-[450px] xl:text-[220px] inset-x-0 z-0 absolute top-20  font-semibold text-[#E4E4E4] text-center">OUR WORK</h1>
      <Container>
        <div className="space-y-6 lg:space-y-20 relative">
          <div className="text-center lg:w-[600px]  mx-auto space-y-4 lg:space-y-5">
            <SubTitle>selected works</SubTitle>
            <Title>
              Seeing our clients <span className="text-primary">win </span>is
              what gets us excited.
            </Title>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            <ProjectCard
              title="Revolutionizing Online Notarization Services with Secure, Remote Access and Digital Solutions."
              link="/"
              image="/images/ser-1.png"
            />
            <ProjectCard
              title="Revolutionizing Online Notarization Services with Secure, Remote Access and Digital Solutions."
              link="/"
              image="/images/ser-2.png"
            />
            <ProjectCard
              title="Revolutionizing Online Notarization Services with Secure, Remote Access and Digital Solutions."
              link="/"
              image="/images/ser-2.png"
            />
             <ProjectCard
              title="Revolutionizing Online Notarization Services with Secure, Remote Access and Digital Solutions."
              link="/"
              image="/images/ser-1.png"
            />
          </div>

          <div className="w-full text-center">
          <Link href="/works" className="text-base lg:text-xl underline transition hover:text-primary mt-12">See more of our work</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectSection;
