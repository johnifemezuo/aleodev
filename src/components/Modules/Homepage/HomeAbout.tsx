import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import SubTitle from "../../Elements/SubTitle";
import Title from "../../Elements/Title";
import ServiceCard from "../../UI/Cards/ServicesCard";
import Image from "next/image";

export const HomeAbout = () => {
  return (
    <div className="px-4 lg:px-0">
      <Container>
        <div className=" py-8 lg:py-32 ">
          <div className="lg:flex mx-auto items-center lg:space-x-12 border-y py-12 lg:py- border-dark">
            <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
              <div className="space-y-5">
                <SubTitle>OUR CLIENT</SubTitle>
                <h2 className="text-2xl font-bold mb-6 ">
                  Trusted by the world&apos;s fastest-growing companies:
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal hidden={{ y: 100 }} delay={0.5} visible={{ y: 0 }}>
              <div className="flex py-4 overflow-hidden justify-center items-center space-x-4 lg:space-x-11">
                <Image
                  width={200}
                  height={200}
                  src="/images/b1.png"
                  alt="Client Logo"
                  className="mx-auto w-[100px] lg:w-28"
                />
                <Image
                  width={200}
                  height={200}
                  src="/images/b2.png"
                  alt="Client Logo"
                  className="mx-auto w-[100px] lg:w-28"
                />
                <Image
                  width={200}
                  height={200}
                  src="/images/b3.png"
                  alt="Client Logo"
                  className="mx-auto w-[100px] lg:w-28"
                />
                <Image
                  width={200}
                  height={200}
                  src="/images/b4.png"
                  alt="Client Logo"
                  className="mx-auto w-[100px] lg:w-28"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:flex py-12 lg:py-32 lg:space-x-20 items-center space-y-5 lg:space-y-0">
            <ScrollReveal hidden={{ y: -100 }} delay={0.5} visible={{ y: 0 }}>
              <div className="space-y-5">
                <SubTitle>Who we are</SubTitle>
                <Title>
                  We build <span className="text-primary">excellent</span>{" "}
                  <span className="text-primary">digital</span> services that
                  help businesses succeed.
                </Title>
              </div>
            </ScrollReveal>

            <ScrollReveal hidden={{ y: 100 }} delay={0.8} visible={{ y: 0 }}>
              <p className="text-base lg:text-xl">
                As one of the leading web design companies in Kenya, we have
                helped hundreds of businesses achieve success online. Find out
                what we can do for you.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal hidden={{ y: 100 }} delay={0.8} visible={{ y: 0 }}>
            <div className="lg:grid-cols-2 grid gap-6 lg:grid-12">
              <ServiceCard
                title="Beautiful websites that get results"
                description="As one of the leading web design companies in Kenya, we have helped hundreds of businesses achieve success online. Find out what we can do for you."
                imageSrc="/images/ser-2.png"
                buttonText="Website Design Services"
              />

              <ServiceCard
                title="Branding that attracts the right people"
                description="As one of the leading web design companies in Kenya, we have helped hundreds of businesses achieve success online. Find out what we can do for you."
                imageSrc="/images/ser-1.png"
                buttonText="Website Design Services"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};
