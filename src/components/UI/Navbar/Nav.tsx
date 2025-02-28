import { Container } from "../../Container/Container";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../Button/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div id="top" className=" w-full z-50 fixed px-3 md:px-0">
      <Container>
        <nav className=" w-full  mx-auto px-2 shadow-xl bg-white md:py- mt-4 rounded-full  ">
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
              <Link
                href="/services"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "/services" ? "text-primary" : "text-zinc-500"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "/about" ? "text-primary" : "text-zinc-500"
                }`}
              >
                About us
              </Link>
              <Link
                href="/work"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "/work" ? "text-primary" : "text-zinc-500"
                }`}
              >
                Our Work
              </Link>
              <Link
                href="#contact"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "#contact" ? "text-primary" : "text-zinc-500"
                }`}
              >
                Contact us
              </Link>
            </div>

            {/* Hire Us Button */}
            <div className="hidden md:block">
              <Button>Hire us</Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden pr-2"
            >
              <Menu className="h-8 w-8 text-dark" />
              <span className="sr-only text-red-700">Toggle menu</span>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
        </nav>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="box"
              exit={{ opacity: 0, scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div
                className={` 
            "absolute left-0 mt-2 right-0 top-0 z-50 rounded-xl bg-white p-8 shadow-lg transition-transform duration-200 ease-in-out md:hidden",
            ${isOpen ? "block" : "hidden"}
        `}
              >
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/services"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "/services"
                        ? "text-primary"
                        : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "/about" ? "text-primary" : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href="/work"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "/work" ? "text-primary" : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Our Work
                  </Link>
                  <Link
                    href="#contact"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "#contact" ? "text-primary" : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact us
                  </Link>
                  <Button>Hire us</Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </div>
  );
}
