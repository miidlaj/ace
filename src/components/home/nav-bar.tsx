import ThemeSwitcher from "@/components/navbar/theme-switcher";
import Image from "next/image";
import React from "react";
import SmallNavbar from "../navbar/small-navbar";

const NavBar = () => {
  return (
    <div className="text-primary w-full h-full bg-secondary">
      <nav className="flex justify-between md:gap-20 items-center w-full py-2">
        <div className="md:ml-10 lg:ml-20 xl:ml-32 2xl:ml-52 ml-5">
          <div className="hidden md:block">
            <Image
              className="hidden dark:block"
              src="/ace-logo-white.svg"
              width={110}
              height={64}
              alt="logo"
            />
            <Image
              className="dark:hidden"
              src="/ace-logo-green.svg"
              width={110}
              height={64}
              alt="logo"
            />
          </div>

          <div className="md:hidden">
            <Image
              className="hidden dark:block"
              src="/ace-logo-white.svg"
              width={80}
              height={47}
              alt="logo"
            />
            <Image
              className="dark:hidden"
              src="/ace-logo-green.svg"
              width={80}
              height={47}
              alt="logo"
            />
          </div>
        </div>

        <div className="justify-end md:mx-16 md:gap-5 lg:gap-10 xl:gap-14 2xl:gap-20 w-full text-[20px] flex">
          <div className="leading-[150%] hidden md:flex capitalize">Home</div>
          <div className="leading-[150%] hidden md:flex capitalize">
            Services
          </div>
          <div className="leading-[150%] hidden md:flex capitalize">
            Company
          </div>
          <div className="">
            <div className="hidden md:flex justify-between gap-2 items-center">
              <span className="felx leading-[150%] capitalize">Contact Us</span>
              <Image
                className="dark:block hidden"
                height={14}
                width={14}
                alt="Dark"
                src="/white-logo.svg"
              />

              <Image
                className="dark:hidden block "
                height={14}
                width={14}
                alt="Light"
                src="/dark-logo.svg"
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
