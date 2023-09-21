import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#2b1b18] text-white h-[300px] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="space-x-4 sm:space-x-8 text-sm sm:text-lg w-full text-center">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="/contact">CONTACT</a>
      </div>
      <hr className="w-full border-white my-8" />
      <div className="text-xs sm:text-sm">
        &copy; COPYRIGHT {currentYear} | ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
