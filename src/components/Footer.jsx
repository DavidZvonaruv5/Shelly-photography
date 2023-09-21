import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#2b1b18] text-white h-[300px] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="space-x-4 sm:space-x-8 text-sm sm:text-lg w-full text-center">
        <a href="#home" className="hover:text-gray-300">
          HOME
        </a>
        <a href="#about" className="hover:text-gray-300">
          ABOUT
        </a>
        <a href="#services" className="hover:text-gray-300">
          SERVICES
        </a>
        <a href="/contact" className="hover:text-gray-300">
          CONTACT
        </a>
      </div>
      <hr className="w-full border-white my-8" />
      <div className="flex flex-col">
        <div className="hover:text-gray-300">Call me +972546706224</div>
        <div className="mb-4">
          <a
            href="https://www.instagram.com/shelly1237"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center hover:text-gray-300"
          >
            Visit my instagram page <FaInstagram className="text-md ml-2" />
          </a>
        </div>
      </div>
      <div className="text-xs sm:text-sm hover:text-gray-300">
        &copy; COPYRIGHT {currentYear} | ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
