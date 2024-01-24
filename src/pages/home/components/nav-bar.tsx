import ThemeSwitcher from "@/components/navbar/theme-switcher";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black text-white max-w-screen h-full bg-primary">
      <nav className="flex justify-between items-center w-full">
        <div className="mx-52">
          <Image src="/ace-logo-1.svg" width={129} height={76} alt="logo" />
        </div>

        <div className="flex justify-end gap-10">
          <div className="leading-[150%] capitalize">Home</div>
          <div className="leading-[150%] capitalize">Services</div>
          <div className="leading-[150%] capitalize">Company</div>
          <div className="">
            <div className="flex justify-between gap-1 items-center">
              <span className="felx capitalize">Contact Us</span>
              <Image
                className=""
                height={10}
                width={10}
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
