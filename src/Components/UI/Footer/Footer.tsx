import { Container } from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import { EmailIcon } from "@/components/Icons/EmailIcon";
import { PhoneIcon } from "@/components/Icons/PhoneIcon";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6 w-[400px]">
            <Link href="/" className="text-3xl font-bold">
              <Image
                src="/images/logo-white.png"
                alt=""
                width={200}
                height={200}
                className=""
              />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed">
              Aleodev is a Lagos-based website design agency serving clients
              within and outside of Africa. After 13 years and over 450
              projects, we are proud of our reputation for excellence, client
              service and success.
            </p>
            <button className="space-x-4 py-2 px-3 flex justify-items-center items-center rounded-full justify-center bg-transparent border hover:bg-primary/40 text-white">
              <span className="pl-2 text-lg">Get In touch with ush</span>
              <span className="rounded-full w-9 h-9 place-content-center grid bg-transparent border ">
                <ArrowRight className="text-white " />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/branding"
                    className="text-gray-300 hover:text-primary"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-design"
                    className="text-gray-300 hover:text-primary"
                  >
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo"
                    className="text-gray-300 hover:text-primary"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ecommerce"
                    className="text-gray-300 hover:text-primary"
                  >
                    E-Commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work"
                    className="text-gray-300 hover:text-primary"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-primary"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-primary"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+2347042443344"
                    className="text-gray-300 hover:text-primary"
                  >
                    +234 70 424 4344
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <EmailIcon />
                  </span>
                  <a
                    href="mailto:admin@aleodev.agency"
                    className="text-gray-300 hover:text-primary"
                  >
                    admin@aleodev.agency
                  </a>
                </li>
              </ul>
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <p className="text-sm text-gray-400">
            © Copyright 2024 ALEODEV. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
