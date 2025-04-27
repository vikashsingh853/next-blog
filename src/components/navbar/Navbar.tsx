"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggler from "../darkmodetoggler/DarkModeToggler";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavLinks {
  title: string;
  id: number;
  url: string;
}

const links: NavLinks[] = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    id: 2,
  },
  {
    title: "Blog",
    url: "/blog",
    id: 3,
  },
  {
    title: "Contact",
    url: "/contact",
    id: 4,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    id: 5,
  },
  {
    title: "About",
    url: "/about",
    id: 6,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 bg-white dark:bg-gray-900 opacity-90 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            My Blog
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.url
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            ))}
            {/* <DarkModeToggler /> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* <DarkModeToggler /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.url
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
