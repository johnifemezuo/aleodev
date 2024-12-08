import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import Title from "../../Elements/Title";
import Image from "next/image";

const SecCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image: string;
}) => {
  return (
    <div className="rounded-xl lg:flex lg:space-x-4 bg-white p-5 relative w-full ">
      <div className="bg-[#EFD9BF]  w-34 px-2 h-16 rounded-full inline-block place-content-center ">
        <Image
          width={120}
          height={120}
          src={image}
          alt={title}
          className="text-primary w-[45px] h-[45px]"
        />
      </div>

      <div className="space-y-3 w-full">
        <h1 className="text-lg lg:text-xl font-bold max-w-[220px]">{title}</h1>

        <p className="text-sm lg:text-base text-dark">{description}</p>
      </div>
    </div>
  );
};

export const OurPhilosophy = () => {
  return (
    <div className="py-20 lg:py-32 bg-dark w-full relative overflow-hidden ">
      <Container>
        <div className="space-y-9 relative z-30 px-4 xl:px-0">
          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
            <div className="space-y-5  text-white xl:w-[700px]">
              <h3 className="uppercase text-zinc-300 text-sm lg:text-base font-medium">
                OUR PHILOSOPHY
              </h3>
              <Title>We creatively change the way people see things</Title>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ y: 100 }} delay={0.6} visible={{ y: 0 }}>
            <div className="grid lg:gap-6 grid-cols md:grid-cols-2 xl:grid-cols-3 gap-5 ">
              <SecCard
                image="painIcon.svg"
                description="Researching, brainstorming and conceptualizing on how best to bring ideas and visions to life."
                title={"CREATE"}
              />
              <SecCard
                image="painIcon.svg"
                description="Tapping into the collective aptitude of our creative team in the actual visual execution of projects."
                title={"DESIGN"}
              />
              <SecCard
                image="painIcon.svg"
                description="Making the necessary additions and improvisations to surpass expectations on what is, and what can be."
                title={"DEVELOP"}
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>

      <div className="gradient-round absolute  right-0 inset-y-0 z-10 w-[900px] h-full    "></div>
      <Image
        src="/images/wff.png"
        alt=""
        width={800}
        height={800}
        className="absolute right-0 inset-y-0 z-0 w-[900px] h-full"
      />
    </div>
  );
};
