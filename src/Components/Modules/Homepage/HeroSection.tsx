import { Container } from "@/Components/Container/Container";
import { Button } from "@/Components/UI/Button/Button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="bg-dark w-full h-screen lg:h-screen overflow-hidden">
      <Container>
        <div className="space-y-4 px-6 lg:px-0 relative z-20 py-40 md:py-44 lg:py-52 max-w-[810px] mx-auto flex flex-col justify-center items-center">
          <Image
            src="staricon.svg"
            alt=""
            className="w-12 lg:w-[80px] top-0 mt-44 absolute right-0 "
            width={200}
            height={200}
          />

          <Image
            src="mouse-gren.svg"
            alt=""
            className="w-[180px] top-44  absolute -right-52 "
            width={200}
            height={200}
          />

          <div className="flex items-center space-x-3">
            <span className="bg-white  rounded-full font-medium  px-3 py-2 text-black text-xs ">
              SASS
            </span>
            <span className="bg-white rounded-full font-medium   px-3 py-2 text-black text-xs uppercase">
              Fintech
            </span>
            <span className="bg-white rounded-full font-medium   px-3 py-2 text-black text-xs uppercase">
              Industries
            </span>
          </div>

          <div className="text-center relative space-y-8 lg:space-y-12 flex flex-col justify-center items-center">
            <Image
              src="textSpark.svg"
              alt=""
              className="w-52 hidden lg:block lg:w-[70px] top-0 mx-auto absolute -left-12 lg:-left-12 xl:left-0 "
              width={200}
              height={200}
            />
            <h1 className=" syne-font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="text-primary">Excellent</span>{" "}
              <span className="text-white">digital services that helps </span>{" "}
              <span className="text-primary">businesses  succeed</span>
            </h1>

            <p className="text-white text-base lg:text-xl">
              As one of the leading web design companies in Kenya, we have
              helped hundreds of businesses achieve success online. Find out
              what we can do for you.
            </p>

            <Image
              src="staricon.svg"
              alt=""
              className="w-[50px] bottom-0 -mt-44 absolute left-0 "
              width={200}
              height={200}
            />

            <Button>See more work</Button>

            <Image
              src="mouse-yel.svg"
              alt=""
              className="w-[120px] lg:bottom-12  absolute -bottom-28 md:-bottom-34 lg:-left-32 "
              width={200}
              height={200}
            />
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
