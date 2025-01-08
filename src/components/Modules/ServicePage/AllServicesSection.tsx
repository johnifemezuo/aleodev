import { BookCopy, BookOpenCheck, CloudDownload, Globe, Hospital, MonitorCog, PanelsTopLeft, Settings2, SquareMousePointer, WalletCards } from "lucide-react";
import { ScrollReveal } from "../../Animations/ScrollReveal";
import { Container } from "../../Container/Container";
import Title from "../../Elements/Title";
import ServiceCd from "./ServiceCd";

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
          <ServiceCd
            icon={<PanelsTopLeft className="h-6 w-6 text-[#B88746]" />}
            title="Custome Website"
            description="We specialize in creating tailor-made software solutions that meet the unique needs of businesses. Whether it's a mobile app, a desktop application, or a complex enterprise system, we work closely with clients to design and develop solutions that enhance efficiency and productivity."
          />

          <ServiceCd
            icon={<Globe className="h-6 w-6 text-[#B88746]" />}
            title="Mobile App Development
            "
            description="Aleodev LTD develops user-friendly and robust mobile applications for both Android and iOS platforms. Our team uses the latest frameworks such as Flutter to create seamless, feature-rich apps that offer a smooth user experience and cater to your business goals.
            "
          />

          <ServiceCd
            icon={<SquareMousePointer className="h-6 w-6 text-[#B88746]" />}
            title="Web Development
"
            description="We build scalable and secure websites and web applications that are designed to meet the specific needs of our clients. From e-commerce platforms to content management systems (CMS), we focus on responsive designs, fast performance, and optimal user engagement.
"
          />
          <ServiceCd
            icon={<BookCopy className="h-6 w-6 text-[#B88746]" />}
            title="Fintech Solutions
"
            description="Aleodev LTD specializes in the development of financial technology solutions that help businesses in the fintech sector improve their digital payment systems, mobile wallets, online banking, and transaction processing platforms. We also provide integrations with payment gateways like MPESA, PayPal, and others.
"
          />
          <ServiceCd
            icon={<BookOpenCheck className="h-6 w-6 text-[#B88746]" />}
            title=" Edutech Solutions

"
            description="We provide innovative technology solutions for the education sector, ranging from e-learning platforms, virtual classrooms, and learning management systems (LMS) to custom-built apps that enhance the learning experience for students and educators.
.
"
          />
          <ServiceCd
            icon={<Hospital className="h-6 w-6 text-[#B88746]" />}
            title="Healthcare Software Solutions

"
            description="Aleodev LTD creates software applications for the healthcare industry that improve patient care, streamline medical records management, and enhance operational efficiency. Our solutions include telemedicine apps, appointment scheduling systems, and patient management software.

"
          />
          <ServiceCd
            icon={<MonitorCog className="h-6 w-6 text-[#B88746]" />}
            title="System Integrations

"
            description="We offer system integration services that help businesses connect their various software systems, applications, and hardware into a seamless, unified operation. Our team ensures that data flows smoothly across all systems to improve productivity and streamline processes.

"
          />
          <ServiceCd
            icon={<CloudDownload className="h-6 w-6 text-[#B88746]" />}
            title="Cloud Solutions


"
            description="We design and deploy cloud-based solutions that provide businesses with scalable, secure, and efficient cloud environments. Whether it's migrating existing systems to the cloud or developing new cloud-native applications, we ensure that our solutions meet the highest standards of performance and security.


"
          />
          <ServiceCd
            icon={<WalletCards className="h-6 w-6 text-[#B88746]" />}
            title="Consulting Services
"
            description="Aleodev LTD offers expert IT consulting services to businesses looking to improve their technological infrastructure. We provide strategic advice on software selection, system architecture, digital transformation, and adopting new technologies to drive business growth.
"
          />
          <ServiceCd
            icon={<Settings2 className="h-6 w-6 text-[#B88746]" />}
            title="Maintenance and Support
"
            description="We offer ongoing maintenance and support services to ensure that your software and systems continue to operate efficiently. From troubleshooting and bug fixing to updating software features and security patches, we provide reliable support to keep your systems running smoothly.
"
          />
        </div>
      </Container>
    </section>
  );
}
