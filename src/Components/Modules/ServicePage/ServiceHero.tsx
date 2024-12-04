import { Appear } from "@/Components/Animations/Appear";
import Reveal from "@/Components/Animations/Reveal";
import { Container } from "@/Components/Container/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export const ServiceHero = () => {
  return (
    <div className="bg-dark w-full h-screen lg:h-screen xl:h-[90vh] overflow-hidden">
      <Container>
        <div className="space-y-4 px-6  xl:px-0 relative z-20 py-40 md:py-44 lg:py-52 flex mx-auto lg:flex-row flex-col lg:space-x-20 items-center">
          <div>
            <Appear delay={0.2}>
              <Image
                src="staricon.svg"
                alt=""
                className="w-12 lg:w-[80px] top-0 mt-44 absolute lg:-right-20 "
                width={200}
                height={200}
              />
            </Appear>

            <Appear delay={0.5}>
              <Image
                src="mouse-gren.svg"
                alt=""
                className="w-[120px] lg:w-[180px] top-44 right-9 absolute lg:right-52 -mt-9 "
                width={200}
                height={200}
              />
            </Appear>

            <Reveal delay={0.2}>
              <h4 className="text-lg lg:text-xl text-white/70">
                Web design & Branding
              </h4>
            </Reveal>

            <div className=" relative space-y-8 lg:space-y-12 flex flex-col justify-center items-center">
            
              <Reveal delay={0.6}>
                <h1 className=" syne-font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
                  <span className="text-primary">Award winning</span>{" "}
                  <span className="text-white">
                    Website design company in Kenya{" "}
                  </span>{" "}
                </h1>
              </Reveal>

              <Reveal delay={1}>
                <p className="text-white text-base lg:text-xl">
                  As one of the leading web design companies in Kenya, we have
                  helped hundreds of businesses achieve success online. Find out
                  what we can do for you.
                </p>
              </Reveal>
            </div>
          </div>

          <div className=" w-full">
            <Appear delay={0.2}>
              <Image
                src="staricon.svg"
                alt=""
                className="w-[50px] bottom-16  lg:bottom-20 lg:-mt-12 absolute right-8 lg:right-54 "
                width={200}
                height={200}
              />
            </Appear>

            <Appear delay={0.2}>
              <Image
                src="mouse-yel.svg"
                alt=""
                className="w-[120px] lg:bottom-12   absolute bottom-12 -mt-12 md:-bottom-12 lg:-right-12 "
                width={200}
                height={200}
              />
            </Appear>

            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
            >
              <Image
                src="/images/service-hero.png"
                alt=""
                className="w-"
                width={550}
                height={550}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      <Image
        src="heroblub.svg"
        alt=""
        className="w-[500px] lg:mt-28 mx-auto absolute inset-y-0 inset-x-0"
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
