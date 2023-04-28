import React from "react";
import { BsBuildingsFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#313131] to-[#222222]">
      {/* Container */}
      <div className="max-w-[1200px] w-full h-full flex justify-between items-center mx-auto py-8">
        <div className="flex items-center ml-6 text-[#efeded] hover:text-[#5395df] cursor-pointer">
          <BsBuildingsFill size={40} className="mr-2" />
          <span className="text-sm font-semibold">Wentworth</span>
        </div>

        <ul className="flex flex-col sm:flex-row text-[#efeded] ">
          <li className="py-1 md:py-6 text-xs sm:text-sm md:text-lg hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
            Home
          </li>
          <li className="py-1 md:py-6 text-xs sm:text-sm md:text-lg hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
            Hotels
          </li>
          <li className="py-1 md:py-6 text-xs sm:text-sm md:text-lg hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
            About Us
          </li>
          <li className="py-1 md:py-6 text-xs sm:text-sm md:text-lg hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
            Contact Us
          </li>
          <li className="py-1 md:py-6 text-xs sm:text-sm md:text-lg hover:text-[#5395df] mr-6 inline hover:border-b-2 border-[#5395df]">
            Account
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
