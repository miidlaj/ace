import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedButton from "../common/AnimatedButton";

const GetInTouch = () => {
  return (
    <>
      <div className="md:mx-28 lg:mx-40 xl:52 my-auto text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-20 md:mb-0">
          Let&apos;s Get In <br /> Touch
        </h1>

        <div className="flex-col md:flex-row flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-10 justify-center text-[20px] md:text-[30px] w-1/2">
            <div className="flex flex-col gap-5">
              <a
                href="mailto:info@aceassured.com"
                className="text-primary underline cursor-pointer"
                target="_blank"
              >
                info@aceassured.com
              </a>
              <a
                href="tel:917356140099"
                className="text-primary underline cursor-pointer"
                target="_blank"
              >
                +91 7356140099
              </a>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-[20px]">LOCATION</p>
              <p className="text-[18px]">
                No 4, Amman Nagar, Phase 3 ,<br /> Villankurichi, Coimbatore,
                Tamil <br /> Nadu India- 641035
              </p>
              <a
                href="tel:917356140099"
                className="text-primary flex justify-start gap-2 items-center cursor-pointer text-[14px]"
              >
                GET DIRECTION
                <Image
                  className="hidden dark:block"
                  height={10}
                  width={10}
                  alt=""
                  src="/white-logo.svg"
                />
                <Image
                  className="dark:hidden"
                  height={10}
                  width={10}
                  alt=""
                  src="/dark-logo.svg"
                />
              </a>
            </div>
          </div>
          <div className="w-1/2 p-3 text-left">
            <form
              action=""
              className="flex flex-col gap-5 text-[15px] md:text-[18px]"
            >
              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-primary bg-transparent py-2.5 px-0 text-primary focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  What&apos;s your full name?{" "}
                </label>
              </div>

              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-primary bg-transparent py-2.5 px-0 text-primary focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  What&apos;s your email address
                </label>
              </div>

              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-primary bg-transparent py-2.5 px-0 text-primary focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Your phone no
                </label>
              </div>

              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-primary bg-transparent py-2.5 px-0 text-primary focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Tell us about your project
                </label>
              </div>

              <AnimatedButton
                whileTap={{ scale: 0.85 }}
                type="button"
                className="inline-flex items-center justify-center px-4 font-medium py-3 text-sm my-10 w-32 leading-6 text-secondary bg-primary border border-transparent rounded-full hover:bg-primary/90 focus:outline-none transform transition-colors duration-300 ease-in-out"
              >
                SEND NOW
              </AnimatedButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
