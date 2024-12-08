import { ButtonOutline } from "../../UI/Button/ButtonOutline";
import Image from "next/image";

const TestimonialCard = ({
  name,
  title,
  testimonial,
}: {
  logo: string;
  name: string;
  title: string;
  testimonial: string;
}) => {
  return (
    <div className="bg-[#F3F2F1] w-[350px] lg:w-[770px]  rounded-lg p-6 lg:p-9 h-auto">
      <div className="lg:flex  mb-4 lg:space-x-4">
        <Image
          width={120}
          height={120}
          src={"/images/logo1.png"}
          alt="Client Logo"
          className="h-8 mr-4 lg:w-36 x w-auto"
        />

        <div className="space-y-6 items-center mt-4">
          <div className="flex item-center ">
            <Image
              width={200}
              height={200}
              src={"/images/pro1.png"}
              alt="Client Logo"
              className="h-12 w-12 mr-4 lg:w-12 lg:h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold lg:text-xl">{name}</h3>
              <p className="text-gray-700">{title}</p>
            </div>
          </div>

          <p className="text-gray-700 lg:text-lg">{testimonial}</p>
          <ButtonOutline text="view project" link="/" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
