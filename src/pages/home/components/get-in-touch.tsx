import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <>
      <div className="mx-52 my-auto">
        <h1 className="text-[90px]">
          Let{"'"}s Get In <br /> Touch
        </h1>

        <div className="flex justify-between gap-5 items-start">
          <div className="flex flex-col gap-10 justify-center text-[30px] w-1/2">
            <div className="flex flex-col gap-5">
              <a
                href="mailto:info@aceassured.com"
                className="text-white underline cursor-pointer"
              >
                info@aceassured.com
              </a>
              <a
                href="tel:917356140099"
                className="text-white underline cursor-pointer"
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
                className="text-white cursor-pointer text-[14px]"
              >
                GET DIRECTION{" "}
                <Image
                  className=""
                  height={10}
                  width={10}
                  alt=""
                  src="/group-60173.svg"
                />
              </a>
            </div>
          </div>
          <div className="w-1/2 p-3">
            <form action="" className="flex flex-col gap-5 text-[18px]">
              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-white focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  What{"'"}s your full name?{" "}
                </label>
              </div>

              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-white focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  What{"'"}s your email address
                </label>
              </div>

              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-white focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  Your phone no
                </label>
              </div>

              <div className="relative z-0 w-full">
                <input
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-white focus:border-white focus:outline-none focus:ring-0"
                  placeholder=""
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                  Tell us about your project
                </label>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center px-4 font-medium py-3 text-sm my-10 w-32 leading-6 text-black bg-white border border-transparent rounded-full hover:bg-white/90 focus:outline-none transform transition-colors duration-300 ease-in-out"
              >
                SEND NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
