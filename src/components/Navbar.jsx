import React, { useState } from "react";
import Logo from "../aasets/M__1_-removebg-preview.png";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
