import Image from "next/image";

export const AboutHero = () => {
  return (
    <div className="bg-dark w-full h-screen lg:h-screen overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-4 px-6 lg:px-0 relative z-20 py-40 md:py-44 lg:py-52 max-w-[850px] mx-auto flex flex-col justify-center items-center">
          <h4 className="text-base lg:text-lg text-white">About Us</h4>

          <div className="text-center relative space-y-8 lg:space-y-12 flex flex-col justify-center items-center">
            <h1 className=" syne-font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="text-primary">Excellent</span>
              <span className="text-white">A result-driven,</span>
              <span className="text-primary">fun-loving</span>
              <span className="text-white">digital agency</span>
            </h1> 

            <p className="text-white text-base lg:text-xl">
              As one of the leading web design companies in Kenya, we have
              helped hundreds of businesses achieve success online. Find out
              what we can do for you.
            </p>
          </div>
        </div>
      </div>

      <Image
        src="heroblub-gren.svg"
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
