import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative md:mx-52 flex justify-start items-center h-screen">
        <div className="z-20 relative text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[100px] capitalize font-new-york-large flex items-center font-thin">
            Stay ahead with our exclusive Insights
          </h1>
          <h5 className="md:text-xl text-lg capitalize leading-[30px] font-poppins font-thin">
            Digital Solutions For Everyday Business
          </h5>
        </div>

        <Image
          className="absolute top-[100px] right-0 z-10 inner-shadow shadow-img hidden dark:block"
          alt="Banner"
          src="/banner-dark.png"
          width={620}
          height={445}
        />

<Image
          className="absolute top-[100px] right-0 z-10 inner-shadow shadow-img dark:hidden"
          alt="Banner"
          src="/banner-light.png"
          width={620}
          height={445}
        />
      </div>
    </>
  );
};

export default Banner;
