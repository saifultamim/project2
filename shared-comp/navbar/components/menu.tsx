"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = ({ courses }: any) => {
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
    <div className="hidden lg:flex space-x-8 lg:space-x-2 uws:space-x-8 items-center text-[16px] uws:text-[28px]">
      {/* ABOUT US Dropdown */}
      <div className="relative flex lg:mr-4" ref={aboutUsRef}>
        <button
          className={` flex items-center hover:text-gray-200 text-lg uws:text-[28px]`}
        >
          <Link
            href="/about-us"
            className={`jaro ${
              color == "aboutus" ? "text-red-600" : "text-white"
            }`}
            onClick={() => {
              closeDropdowns();
              handleColorChange("aboutus");
            }}
          >
            ABOUT US
          </Link>
          <Image
            alt="sort_down"
            src="/images/home/sort_down.png"
            width={19}
            height={19}
            className="ml-2 uws:w-8"
            onClick={toggleAboutUsDropdown}
          />
        </button>
        {/* </button> */}
        {isAboutUsOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg py-2 w-40">
            <Link
              href="/mentors"
              className={`  block px-4 py-2 hover:bg-gray-200 ${
                color == "overview" ? "text-red-600" : "text-black"
              }`}
              onClick={() => {
                closeDropdowns();
                handleColorChange("overview");
              }}
            >
              Our Mentors
            </Link>
            <Link
              href="/photo-gallery"
              className={`  block px-4 py-2 hover:bg-gray-200 ${
                color == "ourMission" ? "text-red-600" : "text-black"
              }`}
              onClick={() => {
                closeDropdowns();
                handleColorChange("ourMission");
              }}
            >
              Photo gallery
            </Link>
          </div>
        )}
      </div>

      {/* COURSES Dropdown */}
      <div className="relative" ref={coursesRef}>
        <button className="flex items-center hover:text-gray-300 text-lg uws:text-[28px]">
          <Link
            href="/courses"
            className={`${color == "courses" ? "text-red-600" : "text-white"}`}
            onClick={() => {
              closeDropdowns();
              handleColorChange("courses");
            }}
          >
            COURSES
          </Link>
          <Image
            alt="sort_down"
            src="/images/home/sort_down.png"
            width={20}
            height={20}
            className="ml-2 uws:w-8"
            onClick={toggleCoursesDropdown}
          />
        </button>
        {isCoursesOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg py-2 w-40">
            <div>
              {courses && courses.length > 0 ? (
                courses.map((course: any,idx:any) => (
                  <Link
                    key={idx}
                    href={`/course/${course?.id}`}
                    className={`  block px-4 py-2 hover:bg-gray-200 ${
                      color == course.xdesc ? "text-red-600" : "text-black"
                    }`}
                    onClick={() => {
                      closeDropdowns();
                      handleColorChange(course.xdesc);
                    }}
                  >
                    {course?.xdesc}
                  {/* {idx} */}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No courses available
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Link
        href="/success-story"
        className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${
          color == "successStory" ? "text-red-600" : "text-white"
        }`}
        onClick={() => {
          closeDropdowns();
          handleColorChange("successStory");
        }}
      >
        SUCCESS STORY
      </Link>
      <Link
        href="/contact"
        className={`text-lg hover:bg-gray-700 px-6 py-2 uws:text-[28px] ${
          color == "contact" ? "text-red-600" : "text-white"
        }`}
        onClick={() => {
          closeDropdowns();
          handleColorChange("contact");
        }}
      >
       CONTACT
      </Link>
        {/* <Link
          href="/login"
          className="bg-[#ED1C24] px-4 py-2 rounded text-white hover:bg-red-600 text-[18px] uws:text-[28px]"
        >
          Log In
        </Link> */}
    
    </div>
  );
};

export default Menu;