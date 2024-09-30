"use client";

import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar1Defaults } from "../../../Data/Data";

// DEFINE ANIMATION VARIANTS
const topLineVariants = {
  open: { rotate: 45, y: 6 },
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, y: -6 },
  closed: { rotate: 0, y: 0 },
};

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: any[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar1 = (props: Navbar1Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar1Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <nav className="flex w-full items-center border-b border-border-primary bg-black lg:min-h-18 lg:px-[5%] fixed z-10">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="w-[40%]"/>
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden "
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? ["open"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? ["open"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>

        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.url}
              className="block py-3 text-md lg:px-4 lg:py-2 lg:text-base"
            >
              {navLink.title}
            </a>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((button, index) => (
              <Button key={index} {...button} className="w-full">
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
