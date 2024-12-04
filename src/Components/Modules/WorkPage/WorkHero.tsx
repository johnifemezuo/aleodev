import { Appear } from "@/Components/Animations/Appear";
import Reveal from "@/Components/Animations/Reveal";
import { Container } from "@/Components/Container/Container";
import Image from "next/image";

export const WorkHero = () => {
  return (
    <div className="bg-dark w-full lg:h-screen xl:h-[90vh] overflow-hidden">
      <Container>
        <div className="space-y-4 px-6  xl:px-0 relative z-20 py-40 md:py-44 lg:py-52 flex mx-auto lg:flex-row flex-col lg:space-x-20 items-center">
          <div>
            <Appear delay={0.5}>
              <Image
                src="staricon.svg"
                alt=""
                className="w-12 lg:w-[80px] top-0 mt-44 absolute lg:-right-20 hidden md:block"
                width={200}
                height={200}
              />
            </Appear>

            <Appear delay={0.5}>
              <Image
                src="dev.svg"
                alt=""
                className="w-[120px] lg:w-[180px] top-44 right-9 absolute lg:right-52 -mt-9 "
                width={200}
                height={200}
              />
            </Appear>

            <Reveal delay={0.6}>
              <h4 className="text-lg lg:text-xl text-white/70 pb-8">Our Work</h4>

              <div className=" relative space-y-5 lg:space-y-7 flex flex-col justify-center items-center">
                <h1 className=" syne-font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
                  <span className="text-primary">Award winning</span>{" "}
                  <span className="text-white">
                    Website design company in Kenya{" "}
                  </span>{" "}
                </h1>
              </div>
            </Reveal>
          </div>

          <div className=" w-full">
            <Image
              src="staricon.svg"
              alt=""
              className="w-[50px] bottom-16  lg:bottom-20 lg:-mt-12 absolute right-8 lg:right-54 "
              width={200}
              height={200}
            />

            <Appear>
              <Image
                src="lines.svg"
                alt=""
                className="w-[600px] hidden lg:block z-10 bottom-16 text-white/10 lg:bottom-20 lg:-mt-12 absolute right-8 lg:right-54 "
                width={200}
                height={200}
              />
            </Appear>
          </div>
        </div>
      </Container>

      <Reveal>
        <div className="lg:translate-y-20 xl:-mt-44  z-20    overflow-y-hidden relative">
          <div className="flex items-center px-2 space-x-4 w-[1200px] lg:w-full overflow-x-hidden">
            <Image
              src="/images/img1.png"
              alt=""
              className="w-[220px] lg:w-auto"
              width={350}
              height={350}
            />
            <Image
              src="/images/img2.png"
              alt=""
              className="w-[220px] lg:w-auto"
              width={350}
              height={350}
            />
            <Image
              src="/images/img3.png"
              alt=""
              className="w-[220px] lg:w-auto"
              width={350}
              height={350}
            />
            <Image
              src="/images/img4.png"
              alt=""
              className="w-[220px] lg:w-auto"
              width={350}
              height={350}
            />
            <Image
              src="/images/img1.png"
              alt=""
              className="w-[220px] lg:w-auto"
              width={350}
              height={350}
            />
          </div>
        </div>
      </Reveal>

      <Image
        src="heroblub-gren.svg"
        alt=""
        className="w-[500px] lg:mt-28 mx-auto absolute inset-y-0 right-44"
        width={300}
        height={300}
      />
      <Image
        src="heroFlow.svg"
        alt=""
        className="w-full absolute bottom-0 inset-x-0 z-0 "
        width={1000}
        height={700}
      />
    </div>
  );
};
