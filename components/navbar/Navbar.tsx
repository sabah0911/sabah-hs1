"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/tintool-png.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SurpriseMe from "../modal/SurpiseMe";


function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between items-center top-0 px-16 py-6 z-50 bg-gray-50 fixed font-poppins">
      {/* Logo */}
      <Link href="/">
        <div>
          <Image src={logo} alt="Tintool Logo" width={100} height={100} />
        </div>
      </Link>

      {/* Center Links */}
      <div className="flex gap-4">
        <Link
          href="/"
          className={`font-poppins hover:opacity-90 ${
            pathname === "/" ? "text-purple-600 font-semibold" : "text-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`font-poppins hover:opacity-90 ${
            pathname === "/about"
              ? "text-purple-600 font-semibold"
              : "text-gray-700"
          }`}
        >
          About
        </Link>
        <Link
          href="/study-material"
          className={`font-poppins hover:opacity-90 ${
            pathname === "/study-material"
              ? "text-purple-600 font-semibold"
              : "text-gray-700"
          }`}
        >
          Study-Material
        </Link>
        <Link
          href="/blogs"
          className={`font-poppins hover:opacity-90 ${
            pathname === "/blogs"
              ? "text-purple-600 font-semibold"
              : "text-gray-700"
          }`}
        >
          Blogs
        </Link>
        <Link
          href="/magic"
          className={`font-poppins hover:opacity-90 ${
            pathname === "/magic"
              ? "text-purple-600 font-semibold"
              : "text-gray-700"
          }`}
        >
          Magic
        </Link>
      </div>

      {/* Surprise Me Button */}
      <div>
        <SurpriseMe />
      </div>
    </div>
  );
}

export default Navbar;