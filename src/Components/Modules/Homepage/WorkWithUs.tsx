import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import Title from "@/components/Elements/Title";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import Image from "next/image";

const SecCard = ({ text }: { text?: string }) => {
  return (
    <div className="rounded-xl w-full bg-white p-5 relative ">
      <h1 className="text-lg lg:text-xl font-bold max-w-[220px]">{text}</h1>

      <span className="bg-primary p-4 w-5 h-6 rounded-full grid place-content-center absolute top-4 right-4">
        <ArrowRight className="text-white -rotate-12" />
      </span>
    </div>
  );
};

export const WorkWithUs = () => {
  return (
    <div className="py-20 lg:py-32 bg-dark w-full relative overflow-hidden ">
      <Container>
        <div className="space-y-9 relative z-30 px-4 xl:px-0">
          <ScrollReveal hidden={{ y: -100 }} visible={{ y: 0 }}>
            <div className="space-y-5 xl:w-[500px] text-white ">
              <h3 className="uppercase text-zinc-300 text-sm lg:text-base font-medium">
                WHY WORK WITH US
              </h3>
              <Title>
                Why <span className="text-primary">Brands</span> Like Yours
                Strive To <span className="text-primary">Work With Us</span>
              </Title>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ y: -100 }} visible={{ y: 0 }} delay={0.6}>
            <div className="grid grid-cols md:grid-cols-2 gap-5 max-w-[700px]">
              <SecCard text={"Experienced Human Efforts. No A.I"} />
              <SecCard text={"Unmatched Creativity. Endless Innovation"} />
              <SecCard text={"Exponential Growth"} />
              <SecCard text={"Trust And Transparency"} />
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
