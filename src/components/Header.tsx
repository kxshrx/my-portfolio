"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaFileAlt } from "react-icons/fa";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-sm shadow-lg border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[736px] mx-auto px-4 flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-base font-semibold text-gray-300 flex-shrink-0 hover:text-[#8f7a67] transition-colors duration-300"
        >
          Kishore Kumar J
        </Link>
        <nav className="flex-shrink-0">
          <ul className="flex gap-4 text-sm items-center">
            <li>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-[#8f7a67] transition-colors duration-300"
              >
                projects
              </Link>
            </li>
            <li>
              <a
                href="/work"
                className="text-gray-300 hover:text-[#8f7a67] transition-colors duration-300"
              >
                work
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kxshrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8f7a67] transition-colors duration-300 flex items-center gap-1"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
                {/* <span className="hidden sm:inline"></span> */}
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/13o8pZ7qW_o5A2IZ_uBOxCkyxRBEeH9ld/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8f7a67] transition-colors duration-300 flex items-center gap-1"
                aria-label="Download Resume"
              >
                <FaFileAlt className="w-4 h-4" />
                {/* <span className="hidden sm:inline"></span> */}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
