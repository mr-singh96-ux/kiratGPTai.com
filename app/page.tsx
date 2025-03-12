"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const handleDropdownToggle = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Function to close the dropdown after an option is selected
  const handleOptionSelect = () => {
    setDropdownVisible(false);
  };

  // Function to close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement && !event.target.closest(".dropdown")) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen relative text-white font-sans">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 animate-gradient-bg"></div>

      {/* Overlay to dull the background */}
      <div className="absolute inset-0 bg-black opacity-50 z-[1]" />

      {/* Main Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 sm:px-12 sm:py-16 space-y-6">
        <h1 className="text-6xl sm:text-7xl font-bold leading-tight text-yellow-400 animate__animated animate__fadeIn animate__delay-1s mt-40">
          Unlock Your Creative Potential with AI
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
          Dive into a world of AI-powered content generation. From marketing copy to creative writing, we’ve got you covered.
        </p>

        {/* Get Started Button with Dropdown */}
        <div className="relative inline-block animate__animated animate__fadeIn animate__delay-3s dropdown">
          <button
            onClick={handleDropdownToggle}
            className="bg-gradient-to-r from-teal-400 to-blue-600 text-white py-5 px-12 rounded-full text-3xl font-semibold shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            Get Started
          </button>
          {isDropdownVisible && (
            <div className="absolute mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-2xl p-4 transform scale-95 transition-all duration-300">
              <Link href="/sign-in">
                <button
                  onClick={handleOptionSelect}
                  className="px-6 py-3 text-sm text-blue-600 hover:bg-blue-50 rounded w-full text-left"
                >
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button
                  onClick={handleOptionSelect}
                  className="px-6 py-3 mt-2 text-sm text-blue-600 hover:bg-blue-50 rounded w-full text-left"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-center text-gray-400">
        <p>© {new Date().getFullYear()} KiratGPT AI. All rights reserved.</p>
      </footer>

      {/* CSS for Dynamic Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-bg {
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
