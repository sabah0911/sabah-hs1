import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="border-t px-5 py-8 font-poppins text-gray-700 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Section*/}
        <div className="text-center md:text-left space-y-3">
          <Link href="/">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-montserrat">
              Tintool
            </h2>
          </Link>
          <p className="text-sm text-gray-600 max-w-xs">
            Crafting perfect color schemes for designers & developers
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Right Section:*/}
        <div className="text-center md:text-right">
          {/* Navigation Links*/}
          <nav className="flex flex-col md:flex-row gap-4 justify-end text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/study-material"
              className="hover:text-purple-600 transition-colors"
            >
              Study Material
            </Link>
            <Link
              href="/blogs"
              className="hover:text-purple-600 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/magic"
              className="hover:text-purple-600 transition-colors"
            >
              Magic
            </Link>
          </nav>

          <div className="text-sm mt-4 text-gray-500">
            © 2024 Tintool. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
