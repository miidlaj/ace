import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative mx-52 flex justify-start items-center h-screen">
        <div className="z-20 relative">
          <h1 className=" text-[100px] capitalize font-new-york-large flex items-center font-thin">
            Stay ahead with our exclusive Insights
          </h1>
          <h5 className="text-[20px] capitalize leading-[30px] font-poppins font-thin">
            Digital Solutions For Everyday Business
          </h5>
        </div>

        <Image
          className="absolute top-[100px] right-0 z-10"
          alt="Banner"
          src="/rectangle-15852@2x.png"
          width={620}
          height={445}
        />

        
      </div>
    </>
  );
};

export default Banner;
