import React from "react";

const ThemeSwitcher = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block bg-white w-14 h-8 rounded-full" />
            <div className="dot absolute left-1 top-1 bg-black w-6 h-6 rounded-full transition" />
          </div>
        </label>
      </div>
    </>
  );
};

export default ThemeSwitcher;
