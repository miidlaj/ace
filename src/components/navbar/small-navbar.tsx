"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function SmallNavbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky top-0 inset-x-0 p-2 z-30">
      <nav className="container mx-auto">
        <motion.div
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-2 bg-transparent relative z-30"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 10,
              },
            }}
            className="w-10 bg-primary h-[2px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-10 bg-primary h-[2px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -10,
              },
            }}
            className="w-10 bg-primary h-[2px] block"
          ></motion.span>
        </motion.div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-secondary p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6"
                >
                  <li>
                    <a href="#" className="text-[40px] font-thin text-primary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[40px] font-thin text-primary">
                      Services
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-[40px] font-thin text-primary">
                      Company
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-[40px] font-thin text-primary">
                      Contact Us
                    </a>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-primary/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  <div className="justify-between gap-10 pt-10 hidden dark:flex">
                    <li>
                      <FaFacebookF size={25} color="white" />
                    </li>
                    <li>
                      <FaInstagram size={25} color="white" />
                    </li>
                    <li>
                      <FaXTwitter size={25} color="white" />
                    </li>
                  </div>

                  <div className="flex justify-between gap-10 pt-10 dark:hidden">
                    <li>
                      <FaFacebookF size={25} color="black" />
                    </li>
                    <li>
                      <FaInstagram size={25} color="black" />
                    </li>
                    <li>
                      <FaXTwitter size={25} color="black" />
                    </li>
                  </div>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
