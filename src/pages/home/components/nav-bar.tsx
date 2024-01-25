import ThemeSwitcher from "@/components/navbar/theme-switcher";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black text-white max-w-screen h-full bg-primary">
      <nav className="flex justify-between gap-20 items-center w-full py-2">
        <div className="ml-52">
          <Image src="/ace-logo-1.svg" width={110} height={64} alt="logo" />
        </div>

        <div className="flex justify-start mx-16 gap-20 text-[20px]">
          <div className="leading-[150%] capitalize">Home</div>
          <div className="leading-[150%] capitalize">Services</div>
          <div className="leading-[150%] capitalize">Company</div>
          <div className="">
            <div className="flex justify-between gap-2 items-center">
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
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
