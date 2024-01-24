import React, { useState } from "react";
import Logo from "../aasets/M__1_-removebg-preview.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGit } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleBarClick = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <div className=" fixed w-full h-20 flex justify-between items-center px-4  bg-[#0a193f] text-gray-300">
      <div>
        <img width={130} src={Logo} alt="logo" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleBarClick} className="md:hidden z-10">
        {!mobileNav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !mobileNav
            ? "hidden"
            : "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-[#0a193f] space-y-6 text-4xl"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* social icons */}
      <div className="fixed hidden md:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-16 flex justify-between items-center -ml-[100px] hover:-ml-3 duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center -ml-[100px] hover:-ml-3 duration-300 bg-gray-900">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center -ml-[100px] hover:-ml-3 duration-300 bg-teal-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center -ml-[100px] hover:-ml-3 duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
