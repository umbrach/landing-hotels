import React, { useState } from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-gradient-to-r from-[#313131] to-[#222222]  text-[#efeded] z-10 shadow-sm">
      <div className="flex items-center ml-6 hover:text-[#5395df] cursor-pointer">
        <BsBuildingsFill size={40} className="mr-2" />
        <span className="text-sm font-semibold">Wentworth</span>
      </div>

      {/* menu */}
      <ul className="hidden md:flex ">
        <li className="py-6 text-xl hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
          Home
        </li>
        <li className="py-6 text-xl hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
          Hotels
        </li>
        <li className="py-6 text-xl hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
          About Us
        </li>
        <li className="py-6 text-xl hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
          Contact Us
        </li>
        <li className="py-6 text-xl hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
          Account
        </li>
      </ul>

      {/* burger */}
      <div onClick={handleClick} className="md:hidden z-10 mr-6">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mob menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#313131] to-[#222222] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#efeded]">
          Home
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#efeded]">
          Hotels
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#efeded]">
          About Us
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#efeded]">
          Contact Us
        </li>
        <li className="py-6 text-2xl inline hover:border-b-2 border-[#efeded]">
          Account
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
