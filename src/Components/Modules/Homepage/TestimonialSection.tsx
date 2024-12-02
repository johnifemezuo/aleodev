import { Container } from "@/Components/Container/Container";
import { ITestimonial } from "../../../../base/testimonial";
import TestimonialSlider from "../Testimonial/TestimonialSlider";
import SubTitle from "@/Components/Elements/SubTitle";
import Title from "@/Components/Elements/Title";

export const TestimonialSection = () => {
  const testimonials: ITestimonial[] = [
    {
      name: "John Deo",
      testimonial: "As Sales Director of Finlab Nigeria, I've seen firsthand the transformative impact our new e-commerce platform has had on our business. Tanta Innovative truly understood the unique complexities of selling scientific equipment online.",
      logo: "/images/logo1.png",
      title: "Director Sales and Marketing",
    },
    {
      name: "John Deo",
      testimonial: "As Sales Director of Finlab Nigeria, I've seen firsthand the transformative impact our new e-commerce platform has had on our business. Tanta Innovative truly understood the unique complexities of selling scientific equipment online.",
      logo: "/images/logo1.png",
      title: "Director Sales and Marketing",
    },
    {
        name: "John Deo",
        testimonial: "As Sales Director of Finlab Nigeria, I've seen firsthand the transformative impact our new e-commerce platform has had on our business. Tanta Innovative truly understood the unique complexities of selling scientific equipment online.",
        logo: "/images/logo1.png",
        title: "Director Sales and Marketing",
      },
  ];

  return (
    <div className="w-full bg-white py-12 lg:py-32 overflow-hidden">
      <Container>
        <div>
           <div className="text-center space-y-3">
           <SubTitle>testimonials</SubTitle>
           <Title>What Our <span className="text-primary">Clients</span> Say</Title>
           </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Container>
    </div>
  );
};
