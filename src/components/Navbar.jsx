'use client'
import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <nav className="bg-[#010101] text-white py-2 w-full shadow-2xl relative">
      <div className="mx-auto px-4 flex flex-wrap items-center justify-between w-full">
        <Link href="/">
          <div className="text-xl lg:text-3xl font-bold cursor-pointer flex-shrink-0 lg:ml-4">
            Shelly Shoval
          </div>
        </Link>
        <div className="lg:hidden">
          <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div
          className={`fixed top-0 right-0 overflow-y-auto w-64 h-[100vh] bg-[#010101] text-white transform transition-transform ${
            isOpen ? "translate-x-0 h-[100%]" : "translate-x-full"
          } lg:hidden flex items-center justify-center`}
        >
          <button onClick={toggleMenu} className="absolute top-2 right-2 text-white text-3xl">
            <Hamburger  isOpen={isOpen} toggleMenu={toggleMenu}/>
          </button>
          <ul className="flex flex-col space-y-3 mr-[40px]">
            <li>
              <Link href="/#Aboutme">
                <span
                  onClick={() => {
                   
                    setIsOpen(false);
                  }}
                  className="cursor-pointer hover:text-gray-300 text-xl"
                >
                  About Me
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/contact`}>
                <span
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-gray-300 text-xl"
                >
                  Contact me
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="hidden lg:flex lg:space-x-6 lg:justify-end">
          <li>
            <Link href="/#Aboutme">
              <span
                onClick={() => {
                  // Whatever you want to happen on click
                }}
                className="cursor-pointer hover:text-gray-300 text-xl"
              >
                About Me
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/contact`}>
              <span className="cursor-pointer hover:text-gray-300 text-xl">
                Contact me
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
