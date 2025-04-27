"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/lib/context/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { mode } = useContext(ThemeContext);

  return (
    <footer className={`border-t transition-colors duration-200 ${
      mode === "dark" 
        ? "bg-gray-900 border-gray-800" 
        : "bg-white border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-lg font-semibold mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}>
              About Blog
            </h3>
            <p className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              A modern blog platform where you can share your thoughts, ideas, and experiences with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className={`transition-colors ${
                    mode === "dark" 
                      ? "text-gray-400 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={`transition-colors ${
                    mode === "dark" 
                      ? "text-gray-400 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-colors ${
                    mode === "dark" 
                      ? "text-gray-400 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-colors ${
                    mode === "dark" 
                      ? "text-gray-400 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  mode === "dark" 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  mode === "dark" 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  mode === "dark" 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@blog.com"
                className={`transition-colors ${
                  mode === "dark" 
                    ? "text-gray-400 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t ${
          mode === "dark" ? "border-gray-800" : "border-gray-200"
        }`}>
          <p className={`text-center ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            © {currentYear} Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// images for exernal domain use that domain into next config file to use that image
