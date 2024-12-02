import { Container } from "@/Components/Container/Container";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full z-50 fixed px-3 md:px-0">
      <Container>
        <nav className=" w-full  mx-auto px-4 shadow-xl bg-white md:py-2 mt-4 rounded-full  ">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 ml-5">
              <Image
                width={200}
                height={200}
                src="/images/aleodev-logo.png"
                className="w-[140px] lg:w-40"
                alt="Aleodev Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/services" className="text-zinc-500 lg:text-lg hover:text-primary transition-all">
                Services
              </Link>
              <Link href="/about" className="text-zinc-500 lg:text-lg hover:text-primary transition-all">
                About us
              </Link>
              <Link href="/work" className="text-zinc-500 lg:text-lg hover:text-primary transition-all">
                Our Work
              </Link>
              <Link href="#contact" className="text-zinc-500 lg:text-lg hover:text-primary transition-all">
                Contact us
              </Link>
            </div>

            {/* Hire Us Button */}
            <div className="hidden md:block">
              <Button>Hire us</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-md p-2  hover:bg-amber-700"
            >
              <Menu className="h-8 w-8 text-dark" />
              <span className="sr-only text-red-700">Toggle menu</span>
            </button>
          </div>

          {/* Mobile Navigation */}
        </nav>
          <div
            className={` 
            "absolute left-0 mt-2 right-0 top-0 z-50 rounded-xl bg-white p-4 shadow-lg transition-transform duration-200 ease-in-out md:hidden",
            ${isOpen ? "block" : "hidden"}
        `}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="text-dark text-xl py-3 hover:text-amber-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-dark text-xl py-3 hover:text-amber-200"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/work"
                className="text-dark text-xl py-3 hover:text-amber-200"
                onClick={() => setIsOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="#contact"
                className="text-dark text-xl py-3 hover:text-amber-200"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
              <Button>Hire us</Button>
            </div>
          </div>
      </Container>
    </div>
  );
}
