import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import Title from "../../Elements/Title";
import { CheckIcon } from "../../Icons/CheckIcon";
import { Globe, HeadphonesIcon, Paintbrush } from "lucide-react";

export default function AllServicesSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-44 xl:px-0 px-6">
      <Container>
        {/* Header */}

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal hidden={{ x: -100 }} delay={0.8} visible={{ x: 0 }}>
            <Title>
              We Offer a Suite of
              <span className="text-primary">Tech-Savvy</span> Solutions
            </Title>
          </ScrollReveal>

          <ScrollReveal hidden={{ x: 100 }} delay={0.8} visible={{ x: 0 }}>
            <p className="text-gray-600 text-lg">
              We take the time to understand your business needs and work with
              you to create a strategy and direction for the accomplishment of
              your commercial objectives.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal hidden={{ y: 100 }} delay={0.4} visible={{ y: 0 }}>
            {/* Website Design Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="h-12 w-12 bg-[#FFF5EA] rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-[#B88746]" />
              </div>
              <h3 className="text-2xl font-bold text-[#B88746] mb-6">
                Website Design & Developement
              </h3>
              <ul className="space-y-4">
                {[
                  "Web Design and developement",
                  "Web based Portal",
                  "E-commerce Solutions",
                  "Search Engine Optimization",
                  "Structure & Optimation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-[#B88746]" />
                    <span className="text-gray-700 lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ y: 100 }} delay={0.6} visible={{ y: 0 }}>
            {/* Creative Design Card */}
            <div className="bg-[#B88746] rounded-2xl p-8 shadow-sm text-white">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Paintbrush className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Creative Design</h3>
              <ul className="space-y-4">
                {[
                  "Logo & Identity Design",
                  "Corporate Branding",
                  "User Interface & Experience",
                  "Power point Presentations",
                  "Print Communication",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-white" />
                    <span className="lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ y: 100 }} delay={1} visible={{ y: 0 }}>
            {/* Support Services Card */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm text-white">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <HeadphonesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Support Services</h3>
              <ul className="space-y-4">
                {[
                  "Corporate Retainership",
                  "Software Maintainance",
                  "Basic ERP Solutions",
                  "Gadgets & Peripherals",
                  "General Contractors",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-white" />
                    <span className="lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
