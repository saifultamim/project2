"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = ({ courses }: any) => {
  const [color, setChangeColor] = useState("");






  const handleColorChange = (name: string) => {
    setChangeColor(name);
    //console.log('hello world')
  };

  return (
    <div className="hidden lg:flex space-x-8 lg:space-x-2 uws:space-x-8 items-center text-[16px] uws:text-[28px]">
      {/* ABOUT US Dropdown */}
      <div className="relative flex lg:mr-4">
        <button
          className={` flex items-center hover:text-gray-200 text-lg uws:text-[28px]`}
        >
          <Link
            href="#"
            className={`jaro ${
              color == "aboutus" ? "text-red-600" : "text-white"
            }`}
            onClick={() => {
            
              handleColorChange("aboutus");
            }}
          >
          Live Class
          </Link>
        
        </button>
    
      </div>

     
      <Link
        href="#"
        className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${
          color == "studentinfo" ? "text-red-600" : "text-white"
        }`}
        onClick={() => {
          handleColorChange("studentinfo");
        }}
      >
      Student Info
      </Link>

      <Link
        href="#"
        className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${
          color == "successStory" ? "text-red-600" : "text-white"
        }`}
        onClick={() => {
          handleColorChange("successStory");
        }}
      >
       Courses
      </Link>
      <Link
        href="#"
        className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${
          color == "contact" ? "text-red-600" : "text-white"
        }`}
        onClick={() => {

          handleColorChange("contact");
        }}
      >
       Notification
      </Link>
        <Link
          href="#"
          className="bg-[#ED1C24] px-4 py-2 rounded text-white hover:bg-red-600 text-[18px] uws:text-[28px]"
        >
          Mentor Log Out
        </Link>
    
    </div>
  );
};

export default Menu;