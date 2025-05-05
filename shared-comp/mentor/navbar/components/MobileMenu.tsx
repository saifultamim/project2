"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ courses }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [color, setChangeColor] = useState("");
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const coursesRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Dropdown toggle handlers
  const toggleAboutUsDropdown = () => {
    setIsAboutUsOpen((prev) => !prev);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen((prev) => !prev);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Close the mobile menu if click is outside the navbar
    }

    if (
      aboutUsRef.current &&
      !aboutUsRef.current.contains(event.target as Node)
    ) {
      setIsAboutUsOpen(false);
    }

    if (
      coursesRef.current &&
      !coursesRef.current.contains(event.target as Node)
    ) {
      setIsCoursesOpen(false);
    }
  };

  const closeDropdowns = () => {
    setIsAboutUsOpen(false);
    setIsCoursesOpen(false);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorChange = (name: string) => {
    setChangeColor(name);
    //console.log('hello world')
  };
  return (
    <>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full xs:bg-black sm:bg-black md:bg-black text-white flex flex-col items-start py-4 lg:hidden ">
          {/* ABOUT US */}
          <div className="relative w-full px-4" >
            <div className="flex">
              <button className="w-full text-left hover:bg-gray-700 px-2 py-2 flex justify-between">
                <Link
                  href="#"
                  className={`${
                    color == "aboutus" ? "text-red-600" : "text-white"
                  }`}
                  onClick={() => {
                    handleColorChange("aboutus");
                  }}
                >
               Live ClaSs
                </Link>
              </button>
             
            </div>
           
          </div>

         

         
          <Link
            href="#"
            className={`text-lg hover:bg-gray-700 px-6 py-2 ${
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
            className={`text-lg hover:bg-gray-700 px-6 py-2 ${
              color == "career" ? "text-red-600" : "text-white"
            }`}
            onClick={() => {
              handleColorChange("career");
            }}
          >
          Notification
          </Link>
        
            <Link
              href="/login"
              className="bg-[#ED1C24] px-4 py-2 rounded text-white hover:bg-red-600 text-[18px] 
              uws:text-[28px] ml-6"
            >
              Student Log In
            </Link>
      
        </div>
      )}
    </>
  );
};

export default MobileMenu;