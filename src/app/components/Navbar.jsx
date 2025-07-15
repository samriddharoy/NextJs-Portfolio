"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-[#121212] py-5 px-8 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-200"
        >
          Logo
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h16.5"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="text-white hidden md:block md:w-auto" id="navbar">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200 font-medium">
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu - overlays HeroSection */}
      {navbarOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212]/90 z-50">
          <MenuOverlay links={navLinks} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
