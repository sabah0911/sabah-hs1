"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/tintool-png.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SurpriseMe from "../modal/SurpiseMe";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/study-material", label: "Study-Material" },
    { href: "/blogs", label: "Blogs" },
    { href: "/magic", label: "Magic" },
  ];

  return (
    <nav className="md:hidden fixed w-full bg-white top-0 z-50 font-poppins">
      {/* Main Mobile Nav */}
      <div className="flex justify-between items-center px-4 py-4">
        <Link href="/">
          <Image src={logo} alt="Tintool Logo" width={80} height={80} />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700 p-2 z-60"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes className="relative z-60" /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
          {/* Close Button inside Overlay */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-700 p-2"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl ${
                pathname === link.href
                  ? "text-purple-600 font-semibold"
                  : "text-gray-700"
              } hover:opacity-90 transition-colors`}
            >
              {link.label}
            </Link>
          ))}

          {/* Surprise Me Button */}
          <div>
            <SurpriseMe />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
