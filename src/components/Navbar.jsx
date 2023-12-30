import logo from "../assets/Logo.svg";
import React, { useState } from "react";
import geo from "../assets/GEO.png";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About Us", path: "about us" },
  ];

  return (
    <>
      <nav className="px-8 py-3 items-center border-b border-gray-200 max-w-screen-2xl mx-auto bg-white sticky top-0 right-0 left-0">
        <div className="flex mx-auto items-center justify-between">
          <a href="/" className="flex items-center text-2xl space-x-3">
            <img
              src={logo}
              alt=""
              srcset=""
              className="w-10 inline-block items-center"
            />{" "}
            <div className="lg:hidden md:hidden items-center text-center text-2xl text-primary font-semibold">
              GETchmeva
            </div>
          </a>

          <ul className="flex space-x-7 text-1.5xl sm:hidden md:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="block text-1xl nav-link transition-all"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>

          <a className="px-2 py-3 sm:hidden md:flex custom-rounded border border-gray-200 cursor-pointer">
            <img src={geo} alt="" className="w-6" />
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-tartiary text-3xl">
              {isMenuOpen ? <FaTimes /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`leftNav bg-primary space-y-4 px-4 pt-36 pb-10 md:hidden ${
          isMenuOpen ? "active" : ""
        }`}
      >
        <ul
          className={`burgerNav text-2.5xl w-full h-full flex flex-col pr-4 `}
        >
          {navItems.map((item) => (
            <li key={item.path} className="mb-4">
              <a href={item.path} className=" text-1xl block transition-all">
                {item.link}
              </a>
            </li>
          ))}
          <div className="w-100% h-0.5 bg-white"></div>
          <li className="flex items-center cursor-pointer">
            <img src={geo} alt="" className="w-7 mr-2" />
            <span>Georgia</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
