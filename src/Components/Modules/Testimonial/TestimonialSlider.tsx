// TestimonialSlider.js
import { ITestimonial } from "../../../../base/testimonial";
import TestimonialCard from "./TestimonialCard";
import { ArrowRight } from "@/Components/Icons/ArrowRight";

const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: ITestimonial[];
}) => {
  

  return (
    <div className="py-12 w-[2000px] overflow-auto">
      <div className="flex items-center ">
        {testimonials.map((testimonial: ITestimonial, index: number) => (
          <div key={index} className="px-4">
            <TestimonialCard
              logo={`https://via.placeholder.com/150x50?text=${testimonial.logo}`}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3 mt-12 w-[140px] lg:mx-auto  px-4 xl:px-0">
    <span className="rounded-full -rotate-180 w-12 h-12 grid place-content-center border border-primary">
      <ArrowRight className="text-primary" />
    </span>
      <span className="rounded-full w-12 h-12 grid place-content-center border border-primary">
      <ArrowRight className="text-primary" />
    </span>

      </div>
    </div>
  );
};

export default TestimonialSlider;
