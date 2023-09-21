"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-2 w-full z-50 custom-navbar">
      <div className="mx-auto px-4 flex flex-wrap items-center justify-between w-full">
        <Link href="/">
          <div
            id="home"
            className="text-xl lg:text-3xl font-bold cursor-pointer flex-shrink-0 lg:ml-4"
          >
            Shelly Shoval
          </div>
        </Link>
        <div className="lg:hidden">
          <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div
          className={`fixed top-0 right-0 overflow-y-auto z-50 w-48 h-[ ] bg-[#010101] text-white transform transition-transform ${
            isOpen ? "translate-x-0 h-[100%]" : "translate-x-full"
          } lg:hidden flex items-center justify-center`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-2 right-2 text-white text-3xl"
          >
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          </button>

          <ul className="flex flex-col space-y-4 mr-[40px]">
            <li>
              <Link href="/#about">
                <span
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer hover:text-gray-300 text-xl"
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-gray-300 text-xl"
                >
                  Contact me
                </span>
              </Link>
            </li>
            <li>
              <a
                href="tel:1234567890"
                className="cursor-pointer flex hover:text-gray-300 text-xl"
              >
                <FaPhoneAlt className="mr-2" /> Call Me
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shelly1237"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-300 text-xl"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        <ul className="hidden lg:flex lg:space-x-6 lg:justify-end">
          <li>
            <a
              href="https://www.instagram.com/shelly1237"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300 text-xl"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </li>
          <li>
            <Link href="/#about">
              <span
                onClick={() => {}}
                className="cursor-pointer hover:text-gray-300 text-xl"
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
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
