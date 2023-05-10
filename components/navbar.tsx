import React from "react";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-20 w-full h-20 p-3 bg-transparent sm:px-5 group-hover:bg-white">
      <div className="container grid items-center h-full grid-cols-2">
        <div className="flex items-center h-full">
          <div className="w-1/6 h-full mr-5 bg-center bg-no-repeat bg-contain bg-dart-logo" />
          <div className="self-center text-xl font-bold select-none lg:text-2xl text-oxfordBlue whitespace-nowrap">
            Dengue Advanced Readiness Tools
          </div>
        </div>
        <div className="items-center justify-center hidden w-full md:flex md:w-auto">
          <div className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <div>
              <a href="/" className="navbar-text-current">
                Home
              </a>
            </div>
            <div>
              <a href="/" className="navbar-text">
                Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
