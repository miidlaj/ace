import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

const Expertise = () => {
  return (
    <>
      <div className="h-screen md:mx-52 my-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[100px] font-new-york-large py-20 text-center md:text-left">
          Our Expertise
        </h1>

        <div className="">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-secondary p-5 text-primary"
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <span className="text-[25px] md:text-[30px]">
                {" "}
                Digital Consulting Services{" "}
              </span>

              <FaChevronDown
                color="white"
                size={20}
                className="transition-all dark:block hidden duration-500 group-focus:-rotate-180"
              />

              <FaChevronDown
                color="black"
                size={20}
                className="transition-all dark:hidden duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-[16px] mt-5 font-poppins invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <hr className="h-[0.1px] bg-primary/90 mt-5" />
          </div>
          <div
            className="group flex flex-col gap-2 rounded-lg bg-secondary p-5 text-primary"
            tabIndex={2}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <span className="text-[25px] md:text-[30px]">
                {" "}
                Application Development
              </span>

              <FaChevronDown
                color="white"
                size={20}
                className="transition-all dark:block hidden duration-500 group-focus:-rotate-180"
              />

              <FaChevronDown
                color="black"
                size={20}
                className="transition-all dark:hidden duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-[16px] mt-5 font-poppins invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <hr className="h-[0.1px] bg-primary/90 mt-5" />
          </div>
          <div
            className="group flex flex-col gap-2 rounded-lg bg-secondary p-5 text-primary"
            tabIndex={3}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <span className="text-[25px] md:text-[30px]">
                Digital Marketing Solutions
              </span>

              <FaChevronDown
                color="white"
                size={20}
                className="transition-all dark:block hidden duration-500 group-focus:-rotate-180"
              />

              <FaChevronDown
                color="black"
                size={20}
                className="transition-all dark:hidden duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-[16px] mt-5 font-poppins invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <hr className="h-[0.1px] bg-priamry/90 mt-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
