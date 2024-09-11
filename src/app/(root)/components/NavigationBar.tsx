"use client";
import React, { useState, useEffect } from "react";

const NavigationBar: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setIsNavbarVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* For Desktop */}
      <nav
        className={`fixed hidden md:block bg-white top-0 z-50 w-full transition-opacity duration-300 ${
          isNavbarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-20 py-5">
          <div className="font-bold text-3xl">RealEstate</div>
          <ul className="hidden md:flex justify-end space-x-7 font-sans">
            <li>
              <a href="#" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                Explore Properties
              </a>
            </li>
            <li>
              <a href="#" className="">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                More
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* For Mobile */}
      <nav className="fixed block md:hidden bg-white top-0 z-50 w-full transition-opacity duration-300">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="font-bold text-3xl font-caladea">RealEstate</div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <div>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 font-sans">
            <li>
              <a href="#" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                Explore Properties
              </a>
            </li>
            <li>
              <a href="#" className="">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="">
                More
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
