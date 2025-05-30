"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://twitter.com/kxshrx",
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/kxhrx",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/kxshrx/",
      color: "hover:text-[#0077B5]",
    },
  ];

  return (
    <footer className="mt-auto w-full">
      {/* Contact Section - Same width as About/Projects */}
      <div className="max-w-3xl mx-auto px-4">
        <section id="contact" className="py-8">
          <div className="text-center">
            <div className="space-y-1.5 mb-4">
              {/* Heading */}
              <h2 className="text-2xl font-semibold text-white">
                Let's Connect!
              </h2>
              {/* Gradient divider - updated to caramel */}
              <div className="flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#8f7a67] to-transparent rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Reduced width for the description */}
            <div className="max-w-md mx-auto">
              <p className="text-sm text-gray-300 mb-4">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out if you'd like to discuss a project or just
                want to connect!
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              {/* Email Button - updated to caramel */}
              <a
                href="mailto:kishore2k26@gmail.com"
                className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#8f7a67] hover:text-white bg-[#8f7a67]/10 hover:bg-[#8f7a67] rounded-full transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4 transition-transform group-hover:scale-110" />
                kishore2k26@gmail.com
              </a>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to top button - updated to caramel */}
      <div className="flex justify-center mb-4">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#8f7a67]/20 hover:bg-[#8f7a67]/40 text-[#8f7a67] transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Footer content - same width as About/Projects */}
      <div className="max-w-3xl mx-auto px-4 py-3">
        <p className="text-center text-xs text-gray-400">
          Kishore Kumar J
        </p>
      </div>
    </footer>
  );
};

export default Footer;
