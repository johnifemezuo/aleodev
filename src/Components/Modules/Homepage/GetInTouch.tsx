import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";
import Link from "next/link";

export const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="w-full bg-primary py-12 lg:py-32 px-4 xl:px-0"
    >
      <Container>
        <div className="relative mb-9">
          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-semibold text-white ">
            Get in touch with us
          </h1>
          <Image
            src="lineCut.svg"
            alt=""
            className="absolute -bottom-5 left-0"
            width={300}
            height={300}
          />
        </div>

        <div className="container w-full bg-white  grid   lg:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] lg:h-full w-full overflow-hidden h-[200px] overfowh">
            <Image
              alt="Customer service representative with headset"
              className="object-cover h-full"
              height={600}
              width={800}
              src="/images/customer-care.png"
              priority
            />
          </div>

          <ScrollReveal hidden={{ y: -100 }} visible={{ y: 0 }}>
            <div className="space-y-6 px-4 py-6  lg:p-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  LIMITED TIME OFFER
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-4xl">
                  Get a FREE Strategy Session
                </h2>
                <p className="text-lg text-muted-foreground">
                  We will understand your business and goals, review your
                  existing activity, and share strategies and tips to help you
                  get better results – all for FREE.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button>Send us an email</Button>
                <Button className="bg-black">Book 30 Minutes</Button>
              </div>
              <p className="text-base text-muted-foreground">
                Got a brief or RFP? Send it to
                <Link
                  href="mailto:sales@aloedev.com"
                  className="font-medium text-amber-700 hover:underline"
                >
                  sales@aloedev.com
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
