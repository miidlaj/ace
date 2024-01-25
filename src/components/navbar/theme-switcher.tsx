"use client";

import Image from "next/image";
import React from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
       <div
       className="w-[80px] -m-1"
       >
         <input
           type="checkbox"
           id="toggleSwitch"
           onChange={handleToggle}
           checked={isDarkMode}
           className="hidden"

         />
         <label
           htmlFor="toggleSwitch"
           className={`relative cursor-pointer`}
         >
           <Image
             className={`absolute top-0 left-0 transform transition duration-500 ease-in-out ${
               isDarkMode ? "opacity-100" : "opacity-0"
             }`}
             src={"/dark-mode.png"}
             alt={"Moon"}
             width={70}
             height={35}
           />
 
           <Image
             className={`absolute top-0 left-0 transform transition duration-500 ease-in-out ${
               isDarkMode ? "opacity-0" : "opacity-100"
             }`}
             src={"/light-mode.png"}
             alt={"Sun"}
             width={70}
             height={35}
           />
         </label>
       </div>

     
    </>
  );
};

export default ThemeSwitcher;
