import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#2b1b18] text-white h-[300px] flex flex-col items-center justify-center">
      <div className="space-x-8 text-lg">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT</a>
      </div>
      <hr className="w-full border-white my-8"/>
      <div className="text-xs ">
        &copy; COPYRIGHT {currentYear} | ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
