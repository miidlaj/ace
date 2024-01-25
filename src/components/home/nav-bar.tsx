import ThemeSwitcher from "@/components/navbar/theme-switcher";
import Image from "next/image";
import React from "react";
import SmallNavbar from "../navbar/small-navbar";

const NavBar = () => {
  return (
    <div className="bg-black text-white w-full h-full bg-primary">
      <nav className="flex justify-between md:gap-20 items-center w-full py-2">
        <div className="md:ml-52 ml-5">
          <Image src="/ace-logo-1.svg" width={110} height={64} alt="logo" />
        </div>

        <div className="justify-start md:mx-16 md:gap-20 text-[20px] flex">
          <div className="leading-[150%] hidden md:flex capitalize">Home</div>
          <div className="leading-[150%] hidden md:flex capitalize">Services</div>
          <div className="leading-[150%] hidden md:flex capitalize">Company</div>
          <div className="">
            <div className="hidden md:flex justify-between gap-2 items-center">
              <span className="felx leading-[150%] capitalize">Contact Us</span>
              <Image
                className=""
                height={14}
                width={14}
                alt=""
                src="/group-60173.svg"
              />
            </div>
          </div>

          <ThemeSwitcher />
          <div className="md:hidden">
            <SmallNavbar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
