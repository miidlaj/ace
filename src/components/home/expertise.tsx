import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const Expertise = () => {
  return (
    <>
      <div className="h-screen md:mx-52 my-auto">
        <h1 className="text-[50px] py-20 text-center md:text-left">Our Expertise</h1>

        <div className="">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <span className="text-[30px]"> Digital Consulting Services </span>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-[16px] mt-5 font-poppins invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <hr className="h-[0.1px] bg-white/90 mt-5" />

          </div>
          <div
            className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
            tabIndex={2}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <span className="text-[30px]"> Application Development</span>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-[16px] mt-5 font-poppins invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <hr className="h-[0.1px] bg-white/90 mt-5" />

          </div>
          <div
            className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
            tabIndex={3}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <span className="text-[30px]">Digital Marketing Solutions</span>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="text-[16px] mt-5 font-poppins invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <hr className="h-[0.1px] bg-white/90 mt-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
