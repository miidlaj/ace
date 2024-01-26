"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const images = ["/dark-mode.png", "/light-mode.png"];
const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    if (theme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [theme]);

  return (
    <>
      <div className="flex flex-col relative">
        <div className="w-[80px] -m-1 ">
          <input
            type="checkbox"
            id="toggleSwitch"
            onChange={handleToggle}
            checked={isDarkMode}
            className="hidden"
          />
          <label htmlFor="toggleSwitch" className={`relative cursor-pointer`}>
            <div className="hidden md:block">
              <Image
                className={`absolute top-0 left-0 transform transition duration-300 ease-in-out ${
                  isDarkMode ? "opacity-100 " : "opacity-0 "
                }`}
                src={"/dark-mode.png"}
                alt={"Moon"}
                width={70}
                height={35}
              />

              <Image
                className={`absolute top-0 left-0 transform transition duration-300 ease-in-out ${
                  isDarkMode ? "opacity-0 " : "opacity-100"
                }`}
                src={"/light-mode.png"}
                alt={"Sun"}
                width={70}
                height={35}
              />
            </div>
            <div className="md:hidden">
              <Image
                className={`absolute top-2 left-0 transform transition duration-300 ease-in-out ${
                  isDarkMode ? "opacity-100 " : "opacity-0 "
                }`}
                src={"/dark-mode.png"}
                alt={"Moon"}
                width={59}
                height={29}
              />

              <Image
                className={`absolute top-2 left-0 transform transition duration-300 ease-in-out ${
                  isDarkMode ? "opacity-0 " : "opacity-100"
                }`}
                src={"/light-mode.png"}
                alt={"Sun"}
                width={59}
                height={29}
              />
            </div>
          </label>
        </div>

        <h1 className="absolute md:-bottom-7 -bottom-6 font-thin font-nightcore-demo text-sm md:text-base rotate-180">
          Hey{" " + " "} Batman
        </h1>
      </div>
    </>
  );
};

export default ThemeSwitcher;
