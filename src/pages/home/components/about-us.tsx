import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="h-screen mx-52 flex justify-between items-center gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-[80px]">About Us</h1>

          <p className="text-[16px] font-poppins">
            At Ace Assured, we&apos;re passionate about helping small and
            medium-sized businesses succeed in today&apos;s digital age. With
            years of experience in the industry, our team of experts has the
            skills and expertise to help you achieve your business goals.
          </p>
        </div>
        <div className="relative">
          <div className="relative z-20 h-[339px] w-[337px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black rounded-lg font-poppins flex flex-col justify-center items-center">
            <h1 className="text-[90px] font-thin">1.5K</h1>
            <p className="text-[20px] text-center">
              Projects completed <br /> throughout our history <br /> across
              various domains.
            </p>
          </div>
          <div className="z-10 h-[339px] w-[337px] bg-white -rotate-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] absolute top-0 text-black rounded-lg font-poppins flex flex-col justify-center items-center" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
